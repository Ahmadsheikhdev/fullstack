import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="w-full bg-background/95 backdrop-blur-md border-b border-border/50 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-3 group">
          <Image src="/ahmadsheikhdev.png" alt="ahmadsheikhdev logo" width={40} height={40} className="rounded-xl shadow-md group-hover:shadow-lg transition-shadow duration-300" />
          <span className="font-bold text-xl tracking-tight text-foreground hidden sm:inline group-hover:text-primary transition-colors duration-300">ahmadsheikhdev</span>
        </Link>
        <div className="flex gap-1">
          <Button asChild variant="ghost" className="text-base font-medium hover:bg-primary/10 hover:text-primary transition-all duration-300">
            <Link href="/">Home</Link>
          </Button>
          <Button asChild variant="ghost" className="text-base font-medium hover:bg-primary/10 hover:text-primary transition-all duration-300">
            <Link href="#about">About Us</Link>
          </Button>
          <Button asChild variant="ghost" className="text-base font-medium hover:bg-primary/10 hover:text-primary transition-all duration-300">
            <Link href="#contact">Contact</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
} 