'use client';

import { Card } from "@/components/ui/card";
import { ArrowDownRight, ArrowUpRight, Plus } from 'lucide-react';
import { useRouter } from "next/navigation";
import { updateDefaultAccount } from '@/actions/accounts';
import { toast } from 'sonner';
import { useState } from 'react';
import { Switch } from "@/components/ui/switch";

// Format currency in Indian Rupees
const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount);
};

export function AccountCard({ account, isAddCard }) {
  const [isUpdating, setIsUpdating] = useState(false);
  const [isDefault, setIsDefault] = useState(account?.isDefault || false);
  const router = useRouter();

  const handleDefaultChange = async () => {
    if (account.isDefault) {
      toast.warning("You need at least one account as default");
      return;
    }
    try {
      setIsUpdating(true);
      const result = await updateDefaultAccount(account.id);
      if (result.success) {
        setIsDefault(true);
        toast.success("Default account updated successfully");
        router.refresh();
      } else {
        toast.error(result.error || "Failed to update default account");
      }
    } catch (error) {
      console.error('Error updating default account:', error);
      toast.error("Failed to update default account");
    } finally {
      setIsUpdating(false);
    }
  };

  // Add card design
  if (isAddCard) {
    return (
      <Card className="p-4 hover:shadow-lg hover:border-blue-400 transition-all cursor-pointer flex flex-col items-center justify-center min-h-[200px] border-dashed">
        <Plus className="h-8 w-8 mb-2 text-gray-400 group-hover:text-blue-500" />
        <p className="text-sm text-gray-500 group-hover:text-blue-600">Add New Account</p>
      </Card>
    );
  }

  // Regular account card
  return (
    <Card
      onClick={() => router.push(`/account/${account.id}`)}
      className="p-6 hover:shadow-md transition-shadow cursor-pointer"
    >
      <div className="flex justify-between items-start">
        <div className="space-y-1">
          <h3 className="text-lg font-semibold">{account.name}</h3>
          <p className="text-sm text-gray-500 capitalize">{account.type.toLowerCase()} Account</p>
        </div>
        <div onClick={(e) => e.stopPropagation()}>
          <Switch
            checked={isDefault}
            onCheckedChange={handleDefaultChange}
            disabled={isUpdating || isDefault}
            aria-label="Toggle default account"
          />
        </div>
      </div>

      <div className="mt-2">
        <div className="flex items-center gap-2">
          <p className="text-2xl font-bold">{formatCurrency(account.balance)}</p>
          {account.isDefault && (
            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Default</span>
          )}
        </div>
      </div>

      <div className="mt-4 flex justify-between px-2">
        <div className="flex items-center text-green-600 text-sm">
          <ArrowUpRight className="w-4 h-4 mr-1" />
          <span>Income</span>
        </div>
        <div className="flex items-center text-red-600 text-sm">
          <ArrowDownRight className="w-4 h-4 mr-1" />
          <span>Expense</span>
        </div>
      </div>
    </Card>
  );
}
