import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-6xl font-bold text-blue-600 mb-2">404</h1>
      <h2 className="text-3xl font-semibold mb-4">Page not found</h2>
      <p className="text-gray-600 mb-8">Oops!😶‍🌫️ The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
      <Link href="/">
            <Button className="bg-black hover:bg-gray-800 text-white">
          Return to Home
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
