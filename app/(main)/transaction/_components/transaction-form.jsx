"use client"

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarIcon, Loader2 } from "lucide-react";
import { format } from "date-fns";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { defaultCategories } from "@/data/categories";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { CreateAccountDrawer } from "@/components/create-account-drawer";
import { cn } from "@/lib/utils";
import { createTransaction, updateTransaction } from "@/actions/transaction";
import { transactionSchema } from "@/app/lib/schema";

export function AddTransactionForm({
  accounts,
  categories,
  editMode = false,
  initialData = null,
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const editId = searchParams.get("edit");

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    getValues,
    reset,
  } = useForm({
    resolver: zodResolver(transactionSchema),
    defaultValues:
      editMode && initialData
        ? {
            type: initialData.type,
            amount: initialData.amount.toString(),
            description: initialData.description,
            accountId: initialData.accountId,
            category: initialData.category,
            date: new Date(initialData.date),
            isRecurring: initialData.isRecurring,
            ...(initialData.recurringInterval && {
              recurringInterval: initialData.recurringInterval,
            }),
          }
        : {
            type: "EXPENSE",
            amount: "",
            description: "",
            accountId: accounts.find((ac) => ac.isDefault)?.id,
            date: new Date(),
            isRecurring: false,
          },
  });

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const formData = {
        ...data,
        amount: parseFloat(data.amount),
      };

      const result = editMode
        ? await updateTransaction(editId, formData)
        : await createTransaction(formData);

      if (result.success) {
        toast.success(
          editMode
            ? "Transaction updated successfully"
            : "Transaction created successfully"
        );
        reset();
        router.push(`/account/${result.data.accountId}`);
      }
    } catch (error) {
      toast.error(error.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  const type = watch("type");
  const isRecurring = watch("isRecurring");
  const date = watch("date");

  return (
    <div className="w-full max-w-2xl mx-auto p-4 md:p-6">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Type Selection */}
        <div className="grid grid-cols-2 gap-3">
          <Button
            type="button"
            variant={type === "EXPENSE" ? "default" : "outline"}
            className={cn(
              "w-full py-6 text-base font-normal rounded-lg transition-all",
              type === "EXPENSE" ? "bg-[#ef4444] hover:bg-[#dc2626] text-white" : "bg-transparent"
            )}
            onClick={() => setValue("type", "EXPENSE")}
          >
            Expense
          </Button>
          <Button
            type="button"
            variant={type === "INCOME" ? "default" : "outline"}
            className={cn(
              "w-full py-6 text-base font-normal rounded-lg transition-all",
              type === "INCOME" ? "bg-[#00A651] hover:bg-[#009548] text-white" : "bg-transparent"
            )}
            onClick={() => setValue("type", "INCOME")}
          >
            Income
          </Button>
        </div>

        {/* Amount and Account */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Amount</label>
            <div className="relative">
              <span className="absolute left-3 top-2.5 text-gray-500">₹</span>
              <Input
                type="number"
                step="0.01"
                placeholder="0.00"
                {...register("amount")}
                className="pl-8 h-11 rounded-lg border-gray-200"
              />
            </div>
            {errors.amount && (
              <p className="text-sm text-red-500">{errors.amount.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Account</label>
            <Select
              onValueChange={(value) => setValue("accountId", value)}
              defaultValue={getValues("accountId")}
            >
              <SelectTrigger className="h-11 rounded-lg border-gray-200">
                <SelectValue placeholder="Select account" />
              </SelectTrigger>
              <SelectContent>
                {accounts.map((account) => (
                  <SelectItem key={account.id} value={account.id}>
                    <div className="flex justify-between items-center w-full">
                      <span>{account.name}</span>
                      <span className="text-gray-500">
                        ₹{parseFloat(account.balance).toFixed(2)}
                      </span>
                    </div>
                  </SelectItem>
                ))}
                <CreateAccountDrawer>
                  <Button
                    variant="ghost"
                    className="relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none hover:bg-accent hover:text-accent-foreground"
                  >
                    Create Account
                  </Button>
                </CreateAccountDrawer>
              </SelectContent>
            </Select>
            {errors.accountId && (
              <p className="text-sm text-red-500">{errors.accountId.message}</p>
            )}
          </div>
        </div>

        {/* Category and Date */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Category</label>
            <Select
              onValueChange={(value) => setValue("category", value)}
              defaultValue={getValues("category")}
            >
              <SelectTrigger className="h-11 rounded-lg border-gray-200">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {defaultCategories
                  .filter(cat => cat.type === type)
                  .map((category) => (
                    <SelectItem 
                      key={category.id} 
                      value={category.id}
                      className="flex items-center gap-2"
                    >
                      <div 
                        className="w-2 h-2 rounded-full" 
                        style={{ backgroundColor: category.color }}
                      />
                      {category.name}
                    </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.category && (
              <p className="text-sm text-red-500">{errors.category.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Date</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full h-11 pl-3 text-left font-normal rounded-lg border-gray-200",
                    !date && "text-gray-500"
                  )}
                >
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={(date) => setValue("date", date)}
                  disabled={(date) =>
                    date > new Date() || date < new Date("1900-01-01")
                  }
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            {errors.date && (
              <p className="text-sm text-red-500">{errors.date.message}</p>
            )}
          </div>
        </div>

        {/* Description */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Description</label>
          <Input
            placeholder="Enter description"
            {...register("description")}
            className="h-11 rounded-lg border-gray-200"
          />
          {errors.description && (
            <p className="text-sm text-red-500">{errors.description.message}</p>
          )}
        </div>

        {/* Recurring Transaction */}
        <div className="rounded-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <label className="text-base font-medium text-gray-900">Recurring Transaction</label>
              <div className="text-sm text-gray-500">
                Set up a recurring schedule for this transaction
              </div>
            </div>
            <Switch
              checked={isRecurring}
              onCheckedChange={(checked) => setValue("isRecurring", checked)}
            />
          </div>

          {isRecurring && (
            <div className="mt-4 space-y-2">
              <label className="text-sm font-medium text-gray-700">Recurring Interval</label>
              <Select
                onValueChange={(value) => setValue("recurringInterval", value)}
                defaultValue={getValues("recurringInterval")}
              >
                <SelectTrigger className="h-11 rounded-lg border-gray-200">
                  <SelectValue placeholder="Select interval" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="DAILY">Daily</SelectItem>
                  <SelectItem value="WEEKLY">Weekly</SelectItem>
                  <SelectItem value="MONTHLY">Monthly</SelectItem>
                  <SelectItem value="YEARLY">Yearly</SelectItem>
                </SelectContent>
              </Select>
              {errors.recurringInterval && (
                <p className="text-sm text-red-500">
                  {errors.recurringInterval.message}
                </p>
              )}
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="grid grid-cols-2 gap-3">
          <Button
            type="button"
            variant="outline"
            className="w-full h-11 rounded-lg border-gray-200 text-gray-700"
            onClick={() => router.back()}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            className={cn(
              "w-full h-11 rounded-lg",
              type === "EXPENSE" 
                ? "bg-[#ef4444] hover:bg-[#dc2626] text-white" 
                : "bg-[#00A651] hover:bg-[#009548] text-white"
            )}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {editMode ? "Updating..." : "Creating..."}
              </>
            ) : editMode ? (
              "Update Transaction"
            ) : (
              "Create Transaction"
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
