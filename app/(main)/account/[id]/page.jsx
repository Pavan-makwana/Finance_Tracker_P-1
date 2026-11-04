import React from "react";
import { getAccountWithTransactions } from "@/actions/accounts";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { TransactionTable } from "../_components/transaction-table";
import { BarLoader } from "react-spinners";
import AccountChart from "../_components/account-chart";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Plus, Landmark, Wallet } from "lucide-react";

const formatCurrency = (amount) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
};

export const dynamic = "force-dynamic";

const AccountPage = async ({ params }) => {
  const resolvedParams = await params;
  const accountData = await getAccountWithTransactions(resolvedParams.id);

  if (!accountData) {
    notFound();
  }

  const { transactions, _count, pagination, ...account } = accountData;

  return (
    <div className="space-y-8 pb-12">
      {/* Breadcrumb Back Button */}
      <div>
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
          <span>Back to Dashboard</span>
        </Link>
      </div>

      {/* Account Profile Header Card */}
      <div className="p-6 sm:p-8 rounded-3xl border border-border/70 bg-card/80 backdrop-blur-sm shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-start sm:items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
            {account.type === "SAVINGS" ? (
              <Landmark className="w-7 h-7" />
            ) : (
              <Wallet className="w-7 h-7" />
            )}
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2.5 flex-wrap">
              <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-foreground capitalize">
                {account.name}
              </h1>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-muted font-mono font-medium text-muted-foreground">
                {account.type}
              </span>
              {account.isDefault && (
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300 font-semibold">
                  Default
                </span>
              )}
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground">
              {_count?.transactions ?? 0} {(_count?.transactions === 1) ? "Transaction" : "Transactions"} recorded to date
            </p>
          </div>
        </div>

        {/* Balance & Action */}
        <div className="flex items-center justify-between md:justify-end gap-6 pt-4 md:pt-0 border-t md:border-t-0 border-border/50">
          <div className="md:text-right">
            <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
              Current Balance
            </p>
            <div className="text-2xl sm:text-3xl font-black font-mono tracking-tight text-foreground mt-0.5">
              {formatCurrency(account.balance)}
            </div>
          </div>

          <Link href="/transaction/create">
            <Button size="sm" className="gap-1.5 h-10 px-4 shadow-sm bg-primary text-primary-foreground font-semibold">
              <Plus className="w-4 h-4" />
              <span className="hidden sm:inline">Add Transaction</span>
            </Button>
          </Link>
        </div>
      </div>

      {/* Chart Section */}
      <Suspense
        fallback={
          <BarLoader className="mt-4" width={"100%"} color="#2563eb" />
        }
      >
        <AccountChart transactions={transactions} />
      </Suspense>

      {/* Transaction Table Section */}
      <Suspense
        fallback={
          <BarLoader className="mt-4" width={"100%"} color="#2563eb" />
        }
      >
        <TransactionTable transactions={transactions} />
      </Suspense>
    </div>
  );
};

export default AccountPage;
