import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="w-full py-24 flex flex-col items-center text-center bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#ff512f] animate-gradient-x relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-y-6 translate-y-12"></div>
      
      <div className="max-w-3xl mx-auto px-4 relative z-10">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight animate-fade-in-up">
          Build. Learn. Launch.
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <span className="font-semibold text-white">ahmadsheikhdev</span> is where devs buy & sell quality programming courses.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-in-from-bottom" style={{ animationDelay: '0.4s' }}>
          <Button asChild size="lg" className="text-lg px-8 py-6 bg-white text-gray-900 hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl">
            <a href="#features" className="flex items-center gap-2">
              Why Choose Us?
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 border-white/30 text-white hover:bg-white/10 transition-all duration-300">
            <a href="/courses">Explore Courses</a>
          </Button>
        </div>
      </div>
    </section>
  );
} 