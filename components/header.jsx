import {
  SignedIn,
  SignedOut,
  UserButton,
  SignInButton,
  SignUpButton,
} from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, PenBox } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { checkUser } from "@/lib/checkuser";

const Header = async () => {
  const user = await checkUser();
  
  return (
    <div className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b ">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center ">
        <Link href="/">
          <Image
            src={"/Logos.png"}
            alt="logo"
            width={200}
            height={60}
            className="h-12 w-auto object-contain rounded-full"
            priority
          />
        </Link>

        <div className="flex items-center space-x-4">
          <SignedIn>
            <Link href={"/dashboard"} className="text-gray-600 hover:text-blue-600 flex items-center gap-2 ">
              <Button variant="outline">
                <LayoutDashboard size={18} />
                <span className="hidden md:inline">dashboard</span>
              </Button>
            </Link>
            
            <Link href="/transaction/create">
              <Button>
                <PenBox size={18} />
                <span className="hidden md:inline">Add transaction</span>
              </Button>
            </Link>
          </SignedIn>
          
          <SignedOut>
            <SignInButton mode="modal">
              <Button variant="outline">Login</Button>
            </SignInButton>
            <SignUpButton mode="modal">
              <Button>Sign Up</Button>
            </SignUpButton>
          </SignedOut>
          
          <SignedIn>
            <UserButton 
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  avatarBox: "h-10 w-10",
                },
              }} 
            />
          </SignedIn>
        </div>
      </nav>
    </div>
  );
};

export default Header;
