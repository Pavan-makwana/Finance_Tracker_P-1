# Personal Finance Tracker

A comprehensive personal finance management application built with Next.js, designed to help you track your income, expenses, budgets, and accounts in one place.

## Features

-   **User Authentication**: Secure sign-up and login using [Clerk](https://clerk.com/).
-   **Dashboard**: Visual overview of your financial health with charts and summaries.
-   **Account Management**: Manage multiple accounts (Checking, Savings, etc.).
-   **Transaction Tracking**: Record income and expenses with categories and receipts.
-   **Budgeting**: Set and monitor budgets to stay on track.
-   **Recurring Transactions**: Handle subscriptions and regular payments automatically.
-   **Responsive Design**: Works seamlessly on desktop and mobile devices.

## Tech Stack

-   **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
-   **Language**: TypeScript / JavaScript
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Database**: PostgreSQL (via [Prisma ORM](https://www.prisma.io/))
-   **Authentication**: [Clerk](https://clerk.com/)
-   **Forms**: React Hook Form + Zod
-   **UI Components**: Radix UI, Lucide React, Sonner
-   **Charts**: Recharts
-   **Background Jobs**: Inngest

## Getting Started

Follow these steps to set up the project locally.

### Prerequisites

-   Node.js (v18 or later)
-   npm, yarn, pnpm, or bun
-   PostgreSQL database (local or cloud, e.g., Neon, Supabase)
-   Clerk account for authentication

### Installation

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd personal_finance
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Environment Variables:**

    Create a `.env` file in the root directory and add the following variables:

    ```env
    # Database
    DATABASE_URL="postgresql://..."
    DIRECT_URL="postgresql://..."

    # Clerk Auth
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
    CLERK_SECRET_KEY=sk_test_...
    NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
    ```

4.  **Database Setup:**

    Run Prisma migrations to set up your database schema:

    ```bash
    npx prisma migrate dev
    ```

5.  **Run the Application:**

    Start the development server:

    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

-   `app/`: Next.js App Router pages and layouts.
-   `components/`: Reusable UI components.
-   `lib/`: Utility functions and configurations.
-   `prisma/`: Database schema and migrations.
-   `actions/`: Server actions for data mutations.
-   `hooks/`: Custom React hooks.
-   `public/`: Static assets.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
