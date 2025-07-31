import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Navbar() {
  return (
    <nav className="w-full bg-background/95 backdrop-blur-md border-b border-border/50 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-3 group">
          <Image src="/ahmadsheikhdev.png" alt="ahmadsheikhdev logo" width={100} height={1000} className="rounded-xl shadow-md group-hover:shadow-lg transition-shadow duration-300" />
          <span className="font-bold text-xl tracking-tight text-foreground hidden sm:inline group-hover:text-primary transition-colors duration-300">ahmadsheikhdev</span>
        </Link>
        
        <div className="flex items-center gap-4">
          <div className="hidden md:flex gap-1">
            <Button asChild variant="ghost" className="text-base font-medium hover:bg-primary/10 hover:text-primary transition-all duration-300">
              <Link href="/">Home</Link>
            </Button>
            <Button asChild variant="ghost" className="text-base font-medium hover:bg-primary/10 hover:text-primary transition-all duration-300">
              <Link href="/courses">Courses</Link>
            </Button>
            <Button asChild variant="ghost" className="text-base font-medium hover:bg-primary/10 hover:text-primary transition-all duration-300">
              <Link href="#about">About Us</Link>
            </Button>
            <Button asChild variant="ghost" className="text-base font-medium hover:bg-primary/10 hover:text-primary transition-all duration-300">
              <Link href="#contact">Contact</Link>
            </Button>
            <SignedIn>
              <Button asChild variant="ghost" className="text-base font-medium hover:bg-primary/10 hover:text-primary transition-all duration-300">
                <Link href="/dashboard">Dashboard</Link>
              </Button>
            </SignedIn>
          </div>
          
          <div className="flex items-center gap-2">
            <SignedOut>
              <div className="hidden sm:flex items-center gap-2">
                <SignInButton mode="modal">
                  <Button variant="ghost" size="sm" className="text-base font-medium hover:bg-primary/10 hover:text-primary transition-all duration-300">
                    Sign In
                  </Button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <Button size="sm" className="text-base font-medium">
                    Sign Up
                  </Button>
                </SignUpButton>
              </div>
            </SignedOut>
            <SignedIn>
              <UserButton 
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    avatarBox: "w-8 h-8",
                  },
                }}
              />
            </SignedIn>
          </div>
        </div>
      </div>
    </nav>
  );
} 