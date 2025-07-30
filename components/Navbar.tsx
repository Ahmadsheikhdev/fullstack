import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="w-full bg-background/80 backdrop-blur border-b border-border sticky top-0 z-30">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/ahmadsheikhdev.png" alt="ahmadsheikhdev logo" width={44} height={44} className="rounded-xl shadow" />
          <span className="font-bold text-xl tracking-tight text-foreground hidden sm:inline">ahmadsheikhdev</span>
        </Link>
        <div className="flex gap-2">
          <Button asChild variant="ghost" className="text-base font-medium">
            <Link href="/">Home</Link>
          </Button>
          <Button asChild variant="ghost" className="text-base font-medium">
            <Link href="#about">About Us</Link>
          </Button>
          <Button asChild variant="ghost" className="text-base font-medium">
            <Link href="#contact">Contact</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
} 