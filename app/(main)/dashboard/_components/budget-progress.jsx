"use client";

import { useState, useEffect } from "react";
import { Pencil, Check, X, AlertTriangle, AlertCircle, CheckCircle2 } from "lucide-react";
import useFetch from "@/hooks/use-fetch";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { updateBudget } from "@/actions/budget";

export function BudgetProgress({ initialBudget, currentExpenses = 0 }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newBudget, setNewBudget] = useState(
    initialBudget?.amount?.toString() || ""
  );
  const router = useRouter();

  const {
    loading: isLoading,
    fn: updateBudgetFn,
    data: updatedBudget,
    error,
  } = useFetch(updateBudget);

  const budgetAmount = initialBudget?.amount || 0;
  const percentUsed = budgetAmount > 0
    ? (currentExpenses / budgetAmount) * 100
    : 0;

  const handleUpdateBudget = async () => {
    const amount = parseFloat(newBudget);

    if (isNaN(amount) || amount <= 0) {
      toast.error("Please enter a valid positive amount");
      return;
    }

    await updateBudgetFn(amount);
  };

  const handleCancel = () => {
    setNewBudget(initialBudget?.amount?.toString() || "");
    setIsEditing(false);
  };

  useEffect(() => {
    if (updatedBudget?.success) {
      setIsEditing(false);
      toast.success("Monthly budget updated successfully");
      router.refresh();
    }
  }, [updatedBudget, router]);

  useEffect(() => {
    if (error) {
      toast.error(error.message || "Failed to update budget");
    }
  }, [error]);

  const getStatusBadge = () => {
    if (!initialBudget) return null;
    if (percentUsed >= 100) {
      return (
        <Badge variant="destructive" className="gap-1 bg-red-100 text-red-700 hover:bg-red-200 border-red-200">
          <AlertCircle className="w-3.5 h-3.5" />
          Budget Exceeded
        </Badge>
      );
    }
    if (percentUsed >= 80) {
      return (
        <Badge className="gap-1 bg-amber-100 text-amber-800 hover:bg-amber-200 border-amber-200">
          <AlertTriangle className="w-3.5 h-3.5" />
          Nearing Limit ({percentUsed.toFixed(0)}%)
        </Badge>
      );
    }
    return (
      <Badge className="gap-1 bg-emerald-100 text-emerald-800 hover:bg-emerald-200 border-emerald-200">
        <CheckCircle2 className="w-3.5 h-3.5" />
        On Track
      </Badge>
    );
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="flex-1">
          <div className="flex items-center justify-between pr-2">
            <CardTitle className="text-base font-semibold">
              Monthly Budget & Expenses
            </CardTitle>
            {getStatusBadge()}
          </div>
          <div className="flex items-center gap-2 mt-2">
            {isEditing ? (
              <div className="flex items-center gap-2">
                <div className="relative">
                  <span className="absolute left-2.5 top-2 text-sm text-gray-500">₹</span>
                  <Input
                    type="number"
                    value={newBudget}
                    onChange={(e) => setNewBudget(e.target.value)}
                    className="w-36 pl-6 h-9"
                    placeholder="e.g. 25000"
                    autoFocus
                    disabled={isLoading}
                  />
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleUpdateBudget}
                  disabled={isLoading}
                  className="h-9 px-3"
                >
                  <Check className="h-4 w-4 text-green-600" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleCancel}
                  disabled={isLoading}
                  className="h-9 px-3"
                >
                  <X className="h-4 w-4 text-red-500" />
                </Button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <CardDescription className="text-sm">
                  {initialBudget
                    ? `₹${currentExpenses.toLocaleString('en-IN', { minimumFractionDigits: 2 })} spent of ₹${budgetAmount.toLocaleString('en-IN', { minimumFractionDigits: 2 })} limit this month`
                    : "No monthly budget limit set yet"}
                </CardDescription>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsEditing(true)}
                  className="h-7 w-7 text-muted-foreground hover:text-foreground"
                  title="Edit monthly budget"
                >
                  <Pencil className="h-3.5 w-3.5" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {initialBudget ? (
          <div className="space-y-2 pt-2">
            <Progress
              value={Math.min(percentUsed, 100)}
              className="h-2.5"
              extraStyles={
                percentUsed >= 100
                  ? "bg-red-500"
                  : percentUsed >= 80
                    ? "bg-amber-500"
                    : "bg-emerald-500"
              }
            />
            <div className="flex justify-between text-xs text-muted-foreground pt-1">
              <span>This Month: ₹{currentExpenses.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
              <span>{percentUsed.toFixed(1)}% used</span>
            </div>
          </div>
        ) : (
          <div className="text-xs text-muted-foreground pt-1">
            Tip: Click the pencil icon above to set a target monthly limit and track your progress.
          </div>
        )}
      </CardContent>
    </Card>
  );
}