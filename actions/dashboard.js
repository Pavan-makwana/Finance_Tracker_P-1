//actions/dashboard.js
"use server"
import { auth } from "@clerk/nextjs/server"
import { db } from "../app/lib/db"

import { accountSchema } from "../app/lib/schema"
import { revalidatePath } from "next/cache"

const serializeTransaction = (obj) => {
    if (!obj) return null;
    
    const serialized = { ...obj };
    if (obj.balance) {
        serialized.balance = Number(obj.balance);
    }
    if (obj.amount) {
        serialized.amount = Number(obj.amount);
    }
    return serialized;
}

export async function createAccount(data) {
    try {
        const { userId } = await auth();
        if (!userId) {
            return { error: "Unauthorized" };
        }
        const user = await db.user.findUnique({
            where: {
                clerkUserId: userId,
            },
        });
        if (!user) {
            return { error: "User not found" };
        }

        // Convert amount to float before saving
        const balanceFloat = parseFloat(data.balance);
        if (isNaN(balanceFloat)) {
            return { error: "Invalid amount" };
        }

        const existingAccounts = await db.account.findMany({
            where: {
                userId: user.id,
            },
        });

        //if this account should be default, unset other default accounts
        const shouldBeDefault = existingAccounts.length === 0 ? true : data.isDefault;
        if (shouldBeDefault) {
            await db.account.updateMany({
                where: {
                    userId: user.id,
                    isDefault: true,
                },
                data: {
                    isDefault: false,
                },
            });
        }
        const account = await db.account.create({
            data: {
                ...data,
                balance: balanceFloat,
                userId: user.id,
                isDefault: shouldBeDefault,
            },
        });
        const serializedAccount = serializeTransaction(account);
        revalidatePath("/dashboard");
        return { success: true, account: serializedAccount };
    } catch (error) {
       throw new Error(error.message);
    }
}

export async function getUserAccounts() {
    try {
        const { userId } = await auth();
        if (!userId) {
            return { success: false, error: "Unauthorized" };
        }
    
        const user = await db.user.findUnique({
            where: { clerkUserId: userId },
        });
    
        if (!user) {
            return { success: false, error: "User not found" };
        }
    
        const accounts = await db.account.findMany({
            where: { userId: user.id },
            orderBy: { createdAt: "desc" },
        });

        if (!accounts) {
            return { success: true, accounts: [] };
        }

        const serializedAccounts = accounts
            .map(serializeTransaction)
            .filter(account => account !== null);

        return { 
            success: true, 
            accounts: serializedAccounts 
        };
    } catch (error) {
        console.error('Database error in getUserAccounts:', error);
        return { 
            success: false, 
            error: "Failed to fetch accounts. Please try again later." 
        };
    }
}

export async function getDashboardData() {
    try {
        const { userId } = await auth();
        if (!userId) {
            return { error: "Unauthorized" };
        }
    
        const user = await db.user.findUnique({
            where: { clerkUserId: userId },
        });
    
        if (!user) {
            return { error: "User not found" };
        }
    
        // Get recent transactions (last 30 days)
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    
        const transactions = await db.transaction.findMany({
            where: {
                userId: user.id,
                date: {
                    gte: thirtyDaysAgo,
                },
            },
            orderBy: {
                date: 'desc',
            },
            take: 50, // Limit to 50 recent transactions
        });
    
        if (!transactions) {
            return { success: true, transactions: [] };
        }
    
        const serializedTransactions = transactions
            .map(serializeTransaction)
            .filter(transaction => transaction !== null);
    
        return { 
            success: true, 
            transactions: serializedTransactions 
        };
    } catch (error) {
        console.error('Database error in getDashboardData:', error);
        return { 
            success: false, 
            error: "Failed to fetch transactions. Please try again later." 
        };
    }
}
  
