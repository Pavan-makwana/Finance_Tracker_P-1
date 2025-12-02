import Header from "@/components/header";
import { checkUser } from "@/lib/checkuser";
import { redirect } from "next/navigation";

export default async function MainLayout({ children }) {
  const user = await checkUser();

  if (!user) {
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
