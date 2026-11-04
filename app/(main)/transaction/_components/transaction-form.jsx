"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarIcon, Loader2, ArrowDownRight, ArrowUpRight, Repeat, Check } from "lucide-react";
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
import { useLanguage, CURRENCY_CONFIG } from "@/components/language-provider";

export function AddTransactionForm({
  accounts,
  categories,
  editMode = false,
  initialData = null,
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const editId = searchParams.get("edit");
  const { formatAmount, currency } = useLanguage();
  const currencySymbol = CURRENCY_CONFIG[currency]?.symbol || "₹";

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
            description: initialData.description || "",
            accountId: initialData.accountId,
            category: initialData.category,
            date: new Date(initialData.date),
            isRecurring: initialData.isRecurring || false,
            ...(initialData.recurringInterval && {
              recurringInterval: initialData.recurringInterval,
            }),
          }
        : {
            type: "EXPENSE",
            amount: "",
            description: "",
            accountId: accounts.find((ac) => ac.isDefault)?.id || accounts[0]?.id,
            date: new Date(),
            isRecurring: false,
          },
  });

  const [isLoading, setIsLoading] = useState(false);
  const [calendarOpen, setCalendarOpen] = useState(false);

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
      toast.error(error.message || "Failed to save transaction");
    } finally {
      setIsLoading(false);
    }
  };

  const type = watch("type");
  const category = watch("category");
  const accountId = watch("accountId");
  const isRecurring = watch("isRecurring");
  const date = watch("date");

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="rounded-3xl border border-border/70 bg-card/85 backdrop-blur-md p-6 sm:p-8 shadow-xl">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Segmented Type Selection */}
          <div className="grid grid-cols-2 gap-2 p-1.5 rounded-2xl bg-muted/60 border border-border/40">
            <button
              type="button"
              className={cn(
                "py-3 text-sm font-semibold rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer",
                type === "EXPENSE"
                  ? "bg-rose-600 text-white shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
              onClick={() => {
                setValue("type", "EXPENSE");
                setValue("category", "");
              }}
            >
              <ArrowDownRight className="w-4 h-4" />
              <span>Expense</span>
            </button>
            <button
              type="button"
              className={cn(
                "py-3 text-sm font-semibold rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer",
                type === "INCOME"
                  ? "bg-emerald-600 text-white shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
              onClick={() => {
                setValue("type", "INCOME");
                setValue("category", "");
              }}
            >
              <ArrowUpRight className="w-4 h-4" />
              <span>Income</span>
            </button>
          </div>

          {/* Amount and Account */}
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-foreground">
                Amount
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-3 text-sm font-semibold text-muted-foreground">
                  {currencySymbol}
                </span>
                <Input
                  type="number"
                  step="0.01"
                  placeholder="0.00"
                  {...register("amount")}
                  className="pl-8 h-12 rounded-xl border-input font-mono text-base font-semibold"
                />
              </div>
              {errors.amount && (
                <p className="text-xs text-rose-500 font-medium">{errors.amount.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-foreground">
                Account
              </label>
              <Select
                value={accountId}
                onValueChange={(value) => setValue("accountId", value)}
              >
                <SelectTrigger className="h-12 rounded-xl border-input text-sm">
                  <SelectValue placeholder="Select account" />
                </SelectTrigger>
                <SelectContent className="max-h-72">
                  {accounts.map((account) => (
                    <SelectItem key={account.id} value={account.id} className="cursor-pointer">
                      {account.name} ({formatAmount(account.balance)})
                    </SelectItem>
                  ))}
                  <CreateAccountDrawer>
                    <Button
                      variant="ghost"
                      className="relative flex w-full cursor-pointer select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none hover:bg-accent text-primary"
                    >
                      + Create New Account
                    </Button>
                  </CreateAccountDrawer>
                </SelectContent>
              </Select>
              {errors.accountId && (
                <p className="text-xs text-rose-500 font-medium">{errors.accountId.message}</p>
              )}
            </div>
          </div>

          {/* Category and Date */}
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-foreground">
                Category
              </label>
              <Select
                value={category || ""}
                onValueChange={(value) => setValue("category", value)}
              >
                <SelectTrigger className="h-12 rounded-xl border-input text-sm">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent className="max-h-72">
                  {defaultCategories
                    .filter((cat) => cat.type === type)
                    .map((cat) => (
                      <SelectItem
                        key={cat.id}
                        value={cat.id}
                        className="cursor-pointer flex items-center gap-2"
                      >
                        <div className="flex items-center gap-2">
                          <span
                            className="w-2.5 h-2.5 rounded-full shrink-0"
                            style={{ backgroundColor: cat.color }}
                          />
                          <span>{cat.name}</span>
                        </div>
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
              {errors.category && (
                <p className="text-xs text-rose-500 font-medium">{errors.category.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-foreground">
                Date
              </label>
              <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
                <PopoverTrigger asChild>
                  <Button
                    type="button"
                    variant="outline"
                    className={cn(
                      "w-full h-12 pl-3.5 text-left font-normal rounded-xl border-input flex justify-between items-center text-sm",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <span>{date ? format(date, "PPP") : "Pick a date"}</span>
                    <CalendarIcon className="h-4 w-4 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-popover border shadow-xl z-50 rounded-2xl" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    captionLayout="dropdown-buttons"
                    fromYear={1970}
                    toYear={2040}
                    onSelect={(selectedDate) => {
                      if (selectedDate) {
                        setValue("date", selectedDate);
                        setCalendarOpen(false);
                      }
                    }}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              {errors.date && (
                <p className="text-xs text-rose-500 font-medium">{errors.date.message}</p>
              )}
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-foreground">
              Description / Notes <span className="text-muted-foreground lowercase font-normal">(optional)</span>
            </label>
            <Input
              placeholder="e.g. Monthly grocery run, client invoice, Netflix"
              {...register("description")}
              className="h-12 rounded-xl border-input text-sm"
            />
            {errors.description && (
              <p className="text-xs text-rose-500 font-medium">{errors.description.message}</p>
            )}
          </div>

          {/* Recurring Schedule Card */}
          <div className="rounded-2xl border border-border/70 bg-muted/30 p-5 space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <Repeat className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  <label className="text-sm font-semibold text-foreground cursor-pointer">
                    Recurring Transaction
                  </label>
                </div>
                <p className="text-xs text-muted-foreground">
                  Flag as an automated repeating commitment or subscription
                </p>
              </div>
              <Switch
                checked={isRecurring}
                onCheckedChange={(checked) => setValue("isRecurring", checked)}
              />
            </div>

            {isRecurring && (
              <div className="pt-2 space-y-2 border-t border-border/40">
                <label className="text-xs font-semibold uppercase tracking-wider text-foreground">
                  Recurring Interval
                </label>
                <Select
                  onValueChange={(value) => setValue("recurringInterval", value)}
                  defaultValue={getValues("recurringInterval") || "MONTHLY"}
                >
                  <SelectTrigger className="h-11 rounded-xl border-input text-sm">
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
                  <p className="text-xs text-rose-500 font-medium">
                    {errors.recurringInterval.message}
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <Button
              type="button"
              variant="outline"
              className="w-full h-12 rounded-xl text-sm font-semibold"
              onClick={() => router.back()}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className={cn(
                "w-full h-12 rounded-xl text-sm font-semibold shadow-md transition-all",
                type === "EXPENSE"
                  ? "bg-rose-600 hover:bg-rose-700 text-white"
                  : "bg-emerald-600 hover:bg-emerald-700 text-white"
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
                "Save Transaction"
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
