'use client';

import Link from "next/link";
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
    <Link href={`/account/${account.id}`} className="block group">
      <Card className="p-6 hover:shadow-md transition-all cursor-pointer h-full flex flex-col justify-between group-hover:border-primary/50">
        <div>
          <div className="flex justify-between items-start">
            <div className="space-y-1">
              <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">{account.name}</h3>
              <p className="text-sm text-gray-500 capitalize">{account.type.toLowerCase()} Account</p>
            </div>
            <div onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}>
              <Switch
                checked={isDefault}
                onCheckedChange={handleDefaultChange}
                disabled={isUpdating || isDefault}
                aria-label="Toggle default account"
              />
            </div>
          </div>

          <div className="mt-4">
            <div className="flex items-center gap-2">
              <p className="text-2xl font-bold">{formatCurrency(account.balance)}</p>
              {account.isDefault && (
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded font-medium">Default</span>
              )}
            </div>
          </div>
        </div>

        <div className="mt-6 pt-3 border-t flex justify-between items-center text-xs text-muted-foreground group-hover:text-primary transition-colors">
          <span>View Account & Statements</span>
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </Card>
    </Link>
  );
}
