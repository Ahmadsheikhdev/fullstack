import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="w-full py-20 flex flex-col items-center bg-gradient-to-br from-muted/50 via-background to-muted/30">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="mb-8">
          <div className="flex justify-center mb-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-500 fill-current" />
              ))}
            </div>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to level up?</h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Explore top programming courses or share your own expertise with the community.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button asChild size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl">
            <a href="/courses" className="flex items-center gap-2">
              Explore Courses
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
            <a href="#contact">Get Started</a>
          </Button>
        </div>
      </div>
    </section>
  );
} 