import Header from "@/components/header";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";

export default async function MainLayout({ children }) {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-6 mt-16">
        {children}
      </main>
    </div>
  );
}
