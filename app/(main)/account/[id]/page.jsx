//app/(main)/account/[id]/page.jsx
// 'use server'
import React from "react";
import { getAccountWithTransactions } from "@/actions/accounts";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { Suspense } from "react";
import { TransactionTable } from "../_components/transaction-table";
import { cn } from "@/lib/utils";
// import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { BarLoader } from "react-spinners";
import AccountChart from "../_components/account-chart";

const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount);
};

const AccountPage = async ({ params, searchParams }) => {

  const accountData = await getAccountWithTransactions(params.id);

  // Handle not found or error
  if (!accountData) {
    notFound();
  }

  const { transactions, _count, pagination, ...account } = accountData;

  // console.log("transactions", transactions);

  return (
    <div className="space-y-8 px-5 ">
      <div className="flex gap-4 items-end justify-between">
        <div>
          <h1 className="text-5xl font-bold sm:text-6xl tracking-tight gradient-title capitalize">
            {account.name}
          </h1>
          <p className="text-sm text-muted-foreground">
            {account.type
              ? account.type.charAt(0).toUpperCase() + account.type.slice(1)
              : "Unknown Type"}
          </p>
        </div>
        <div className="text-right pb-2">
          <div className="text-xl sm:text-2xl gradient-title font-bold">
            {formatCurrency(account.balance)}
          </div>
          <p className="text-sm text-muted-foreground">
            {_count?.transactions ?? 0} Transactions
          </p>
        </div>
      </div>

      {/* {Chart Section} */}
      <Suspense
        fallback={
          <BarLoader className="mt-4 " width={"100%"} color="#9333EA" />
        }
      >
        <AccountChart transactions={transactions} />
      </Suspense>
      
      {/* {Transaction Table Section} */}

      <Suspense
        fallback={
          <BarLoader className="mt-4 " width={"100%"} color="#9333EA" />
        }
      >
        <TransactionTable 
          transactions={transactions} 
          // pagination={pagination}
          // currentPage={page}
        />
      </Suspense>
    </div>
  );
};

export default AccountPage;
