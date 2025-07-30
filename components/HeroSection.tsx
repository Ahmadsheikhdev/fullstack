import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full py-20 flex flex-col items-center text-center bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#ff512f] animate-gradient-x">
      <div className="max-w-2xl mx-auto px-4">
        {/* Logo removed from hero section, now in navbar */}
        <h1 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight">
          Build. Learn. Launch.
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-7">
          <span className="font-semibold">ahmadsheikhdev</span> is where devs buy & sell quality programming courses.
        </p>
        <Button asChild size="lg">
          <a href="#features">Why Choose Us?</a>
        </Button>
      </div>
    </section>
  );
} 