import { getUserAccounts, getDashboardData } from "@/actions/dashboard";
import { getCurrentBudget } from "@/actions/budget";
import { AccountCard } from "./_components/account-card";
import { CreateAccountDrawer } from "@/components/create-account-drawer";
import { DashboardOverview } from "./_components/transaction-overview";
import { FinancialHealthCard } from "@/components/dashboard/financial-health-card";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, PenBox, Wallet, Sparkles } from "lucide-react";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const [accountsResponse, transactionsResponse] = await Promise.all([
    getUserAccounts(),
    getDashboardData(),
  ]);

  // Ensure accounts and transactions are arrays
  const accounts = accountsResponse?.success ? accountsResponse.accounts : [];
  const transactions =
    transactionsResponse?.success ? transactionsResponse.transactions : [];

  // Get default account or first account if no default
  const defaultAccount =
    accounts?.find((account) => account.isDefault) || accounts[0];

  // Get monthly budget data
  let budgetData = null;
  try {
    budgetData = await getCurrentBudget(defaultAccount?.id);
  } catch (error) {
    console.error("Error loading budget on dashboard:", error);
  }

  // Calculate totals for health score
  const totalNetWorth = accounts.reduce(
    (sum, acc) => sum + (parseFloat(acc.balance) || 0),
    0
  );

  let monthlyIncome = 0;
  let monthlyExpenses = 0;
  transactions.forEach((tx) => {
    const amount = parseFloat(tx.amount) || 0;
    if (tx.type === "INCOME") monthlyIncome += amount;
    else if (tx.type === "EXPENSE") monthlyExpenses += amount;
  });

  return (
    <div className="space-y-10 pb-12">
      {/* Dashboard Top Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-border/50">
        <div>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight gradient-title">
            Financial Dashboard
          </h1>
          <p className="text-sm text-muted-foreground mt-0.5">
            Real-time wealth tracking, health pulse, and multi-account overview.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <CreateAccountDrawer>
            <Button variant="outline" size="sm" className="h-9 gap-1.5 shadow-xs">
              <Wallet className="w-4 h-4 text-primary" />
              <span className="hidden sm:inline">Add Account</span>
            </Button>
          </CreateAccountDrawer>

          <Link href="/transaction/create">
            <Button size="sm" className="h-9 gap-1.5 shadow-xs bg-primary text-primary-foreground hover:bg-primary/90 font-medium">
              <PenBox className="w-4 h-4" />
              <span>Add Transaction</span>
            </Button>
          </Link>
        </div>
      </div>

      {/* SECTION 1: Key Financial Metrics (5 Overview Cards) */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold tracking-tight text-foreground flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-primary" /> Financial Overview
          </h2>
        </div>
        <DashboardOverview
          accounts={accounts}
          transactions={transactions}
          budget={budgetData?.budget}
          currentExpenses={budgetData?.currentExpenses || 0}
        />
      </section>

      {/* SECTION 2: Financial Health Score & Fast Logging Shortcuts */}
      <section>
        <FinancialHealthCard
          totalNetWorth={totalNetWorth}
          monthlyIncome={monthlyIncome}
          monthlyExpenses={monthlyExpenses}
          budgetAmount={budgetData?.budget?.amount || 0}
        />
      </section>

      {/* SECTION 3: Your Accounts Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold tracking-tight text-foreground flex items-center gap-2">
              <Wallet className="w-4 h-4 text-primary" /> Your Accounts
              <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground font-mono font-normal">
                {accounts.length}
              </span>
            </h2>
            <p className="text-xs text-muted-foreground mt-0.5">
              Select any account to inspect itemized transactions, trends, and statements.
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <CreateAccountDrawer>
            <Card className="hover:shadow-md transition-all cursor-pointer border-dashed border-2 hover:border-primary/50 group bg-card/50">
              <CardContent className="flex flex-col items-center justify-center text-muted-foreground h-full min-h-[190px] pt-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Plus className="h-6 w-6" />
                </div>
                <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                  Add New Account
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Savings, Current, or Cash wallet
                </p>
              </CardContent>
            </Card>
          </CreateAccountDrawer>
          {accounts.length > 0 &&
            accounts.map((account) => (
              <AccountCard key={account.id} account={account} />
            ))}
        </div>
      </section>
    </div>
  );
}
