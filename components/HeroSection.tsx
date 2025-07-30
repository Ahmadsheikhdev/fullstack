import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full py-20 flex flex-col items-center text-center bg-gradient-to-b from-background to-muted">
      <div className="max-w-2xl mx-auto px-4">
        <div className="flex justify-center mb-6">
          <Image src="/globe.svg" alt="ahmadsheikhdev logo" width={64} height={64} />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
          Build. Learn. Launch.
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8">
          Welcome to <span className="font-semibold">ahmadsheikhdev</span> — the developer-first platform to buy and sell high-quality programming courses. Level up your skills, or share your expertise with the world.
        </p>
        <Button asChild size="lg">
          <a href="#features">Why Choose Us?</a>
        </Button>
      </div>
    </section>
  );
} 