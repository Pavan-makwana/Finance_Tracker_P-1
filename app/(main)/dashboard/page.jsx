import { Suspense } from "react";
import { getUserAccounts } from "@/actions/dashboard";
import { getDashboardData } from "@/actions/dashboard";
import { getCurrentBudget } from "@/actions/budget";
import { AccountCard } from "./_components/account-card";
import { CreateAccountDrawer } from "@/components/create-account-drawer";
import { BudgetProgress } from "./_components/budget-progress";
import { Card, CardContent } from "@/components/ui/card";
import { Plus } from "lucide-react";
// import { DashboardOverview } from "./_components/transaction-overview";

export default async function DashboardPage() {
  const [accountsResponse, transactions] = await Promise.all([
    getUserAccounts(),
    getDashboardData(),
  ]);

  // Ensure accounts is always an array
  const accounts = accountsResponse?.success ? accountsResponse.accounts : [];
  
  // Get default account or first account if no default
  const defaultAccount = accounts?.find(account => account.isDefault) || accounts[0];

  // Get budget for default account
  let budgetData = null;
  if (defaultAccount?.id) {
    budgetData = await getCurrentBudget(defaultAccount.id);
  }

  return (
    <div className="space-y-8">
      {/* Budget Progress */}
      <BudgetProgress
        initialBudget={budgetData?.budget}
        currentExpenses={budgetData?.currentExpenses || 0}
        accountBalance={defaultAccount?.balance || 0}
      />

      {/* Dashboard Overview */}
      {/* <DashboardOverview
        accounts={accounts}
        transactions={transactions || []}
      /> */}

      {/* Accounts Grid */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Your Accounts</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <CreateAccountDrawer>
            <Card className="hover:shadow-md transition-shadow cursor-pointer border-dashed">
              <CardContent className="flex flex-col items-center justify-center text-muted-foreground h-full min-h-[200px] pt-6">
                <Plus className="h-10 w-10 mb-2" />
                <p className="text-sm font-medium">Add New Account</p>
              </CardContent>
            </Card>
          </CreateAccountDrawer>
          {accounts.length > 0 &&
            accounts?.map((account) => (
              <AccountCard key={account.id} account={account} />
            ))}
        </div>
      </div>
    </div>
  );
}
