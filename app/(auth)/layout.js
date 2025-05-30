//app/(auth)/layout.js
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function AuthLayout({ children }) {
  const { userId } = await auth();

  if (userId) {
    redirect("/dashboard");
  }

  return (
    <div className="h-screen flex items-center justify-center">
      {children}
    </div>
  );
}
