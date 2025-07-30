import { Button } from "@/components/ui/button";

export default function CallToAction() {
  return (
    <section className="w-full py-16 flex flex-col items-center bg-muted">
      <div className="max-w-xl mx-auto px-4 text-center">
        <h3 className="text-2xl md:text-3xl font-semibold mb-4">Ready to level up?</h3>
        <p className="text-muted-foreground mb-8">
          Explore top programming courses or share your own.
        </p>
        <Button asChild size="lg">
          <a href="/courses">Explore Courses</a>
        </Button>
      </div>
    </section>
  );
} 