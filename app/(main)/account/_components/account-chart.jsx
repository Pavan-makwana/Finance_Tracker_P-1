//app/(main)/account/_components/account-chart.jsx
"use client";
import { endOfDay, startOfDay, subDays, format } from "date-fns";
import { useMemo, useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowDownRight, ArrowUpRight, TrendingUp, TrendingDown } from "lucide-react";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { cn } from "@/lib/utils";

const DATE_RANGES = {
  "7D": { label: "7 Days", days: 7 },
  "1M": { label: "1 Month", days: 30 },
  "3M": { label: "3 Months", days: 90 },
  "6M": { label: "6 Months", days: 180 },
  "1Y": { label: "1 Year", days: 365 },
  ALL: { label: "All Time", days: null },
};

const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
};

const AccountChart = ({ transactions, isLoading }) => {
  const [dateRange, setDateRange] = useState("1M");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    // Initial check
    checkMobile();
    
    // Add event listener
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const chartConfig = useMemo(() => ({
    margin: { 
      top: 20, 
      right: isMobile ? 10 : 20, 
      left: isMobile ? 10 : 20, 
      bottom: dateRange === "ALL" ? 60 : 20 
    },
    barSize: isMobile ? 15 : dateRange === "ALL" ? 10 : 20,
    fontSize: isMobile ? 10 : 12,
    axisWidth: isMobile ? 60 : 80,
    tooltipFontSize: isMobile ? "12px" : "14px",
    xAxisHeight: dateRange === "ALL" ? 60 : 40,
    xAxisAngle: dateRange === "ALL" ? -45 : 0,
    xAxisVerticalShift: dateRange === "ALL" ? 30 : 10,
  }), [isMobile, dateRange]);

  const filteredData = useMemo(() => {
    const range = DATE_RANGES[dateRange];
    if (!range) return [];
    
    const now = new Date();
    const startDate = range.days
      ? startOfDay(subDays(now, range.days))
      : new Date(0); // For "All Time", use Unix epoch start

    const filtered = transactions.filter((t) => {
      const transactionDate = new Date(t.date);
      return transactionDate >= startDate && transactionDate <= endOfDay(now);
    });

    const grouped = filtered.reduce((acc, t) => {
      const date = format(new Date(t.date), dateRange === "ALL" ? "MMM yyyy" : "MMM dd");
      if (!acc[date]) {
        acc[date] = {
          date,
          income: 0,
          expense: 0,
        };
      }
      if (t.type === "INCOME") {
        acc[date].income += t.amount;
      } else {
        acc[date].expense += t.amount;
      }
      return acc;
    }, {});
    
    return Object.values(grouped).sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );
  }, [transactions, dateRange]);

  const totals = useMemo(() => {
    return filteredData.reduce(
      (acc, day) => ({
        income: acc.income + day.income,
        expense: acc.expense + day.expense,
      }),
      { income: 0, expense: 0 }
    );
  }, [filteredData]);

  const netAmount = totals.income - totals.expense;
  const isPositive = netAmount >= 0;

  if (isLoading) {
    return (
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-7">
          <Skeleton className="h-6 w-[200px]" />
          <Skeleton className="h-10 w-[140px]" />
        </CardHeader>
        <CardContent>
          <div className="flex justify-around mb-6">
            <Skeleton className="h-16 w-[120px]" />
            <Skeleton className="h-16 w-[120px]" />
            <Skeleton className="h-16 w-[120px]" />
          </div>
          <Skeleton className="h-[300px] w-full" />
        </CardContent>
      </Card>
    );
  }

  if (filteredData.length === 0) {
    return (
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-7">
          <CardTitle className="text-base font-normal">
            Transaction Overview
          </CardTitle>
          <Select defaultValue={dateRange} onValueChange={setDateRange}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Select range" />
            </SelectTrigger>
            <SelectContent>
              {Object.entries(DATE_RANGES).map(([key, { label }]) => (
                <SelectItem key={key} value={key}>
                  {label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center h-[300px] text-muted-foreground">
            <p className="text-lg">No transactions found</p>
            <p className="text-sm">Try selecting a different time range</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="hover:shadow-lg transition-shadow duration-200">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-7">
        <CardTitle className="text-base font-normal">
          Transaction Overview
        </CardTitle>
        <Select defaultValue={dateRange} onValueChange={setDateRange}>
          <SelectTrigger className="w-[140px]">
            <SelectValue placeholder="Select range" />
          </SelectTrigger>
          <SelectContent>
            {Object.entries(DATE_RANGES).map(([key, { label }]) => (
              <SelectItem key={key} value={key}>
                {label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className={cn(
            "p-4 rounded-lg",
            "bg-green-50 border border-green-100"
          )}>
            <div className="flex items-center gap-2">
              <ArrowUpRight className="h-4 w-4 text-green-500" />
              <span className="text-sm font-medium text-green-700">Total Income</span>
            </div>
            <div className="mt-2 text-2xl font-semibold text-green-700">
              {formatCurrency(totals.income)}
            </div>
          </div>
          
          <div className={cn(
            "p-4 rounded-lg",
            "bg-red-50 border border-red-100"
          )}>
            <div className="flex items-center gap-2">
              <ArrowDownRight className="h-4 w-4 text-red-500" />
              <span className="text-sm font-medium text-red-700">Total Expenses</span>
            </div>
            <div className="mt-2 text-2xl font-semibold text-red-700">
              {formatCurrency(totals.expense)}
            </div>
          </div>

          <div className={cn(
            "p-4 rounded-lg",
            netAmount >= 0 ? "bg-green-50 border border-green-100" : "bg-red-50 border border-red-100"
          )}>
            <div className="flex items-center gap-2">
              {isPositive ? (
                <TrendingUp className="h-4 w-4 text-green-500" />
              ) : (
                <TrendingDown className="h-4 w-4 text-red-500" />
              )}
              <span className={cn(
                "text-sm font-medium",
                isPositive ? "text-green-700" : "text-red-700"
              )}>Net Balance</span>
            </div>
            <div className={cn(
              "mt-2 text-2xl font-semibold",
              isPositive ? "text-green-700" : "text-red-700"
            )}>
              {formatCurrency(Math.abs(netAmount))}
            </div>
          </div>
        </div>

        <div className="h-[300px] mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={filteredData}
              margin={chartConfig.margin}
              barSize={chartConfig.barSize}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="date"
                height={chartConfig.xAxisHeight}
                tick={{
                  fontSize: chartConfig.fontSize,
                  angle: chartConfig.xAxisAngle,
                  textAnchor: dateRange === "ALL" ? "end" : "middle",
                  dy: chartConfig.xAxisVerticalShift
                }}
              />
              <YAxis
                width={chartConfig.axisWidth}
                tick={{ fontSize: chartConfig.fontSize }}
                tickFormatter={(value) => `₹${value.toLocaleString('en-IN')}`}
              />
              <Tooltip
                formatter={(value) => [`₹${value.toLocaleString('en-IN')}`, '']}
                contentStyle={{ fontSize: chartConfig.tooltipFontSize }}
                cursor={{ fill: 'rgba(0, 0, 0, 0.1)' }}
              />
              <Legend />
              <Bar
                dataKey="income"
                name="Income"
                fill="#00A651"
                radius={[4, 4, 0, 0]}
              />
              <Bar
                dataKey="expense"
                name="Expense"
                fill="#ef4444"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default AccountChart;
