import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Star, Users, TrendingUp } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="w-full py-24 flex flex-col items-center text-center bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#ff512f] animate-gradient-x relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-y-6 translate-y-12"></div>
      
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        {/* 3D Cylindrical Drop Animation */}
        <div className="mb-6 perspective-1000">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-drop-3d transform-style-preserve-3d">
              <span className="inline-block text-black drop-shadow-2xl">Build.</span>
            </h1>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-drop-3d-delay-1 transform-style-preserve-3d">
              <span className="inline-block text-blue-300 drop-shadow-2xl">Learn.</span>
            </h1>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-drop-3d-delay-2 transform-style-preserve-3d">
              <span className="inline-block text-black drop-shadow-2xl">Launch.</span>
            </h1>
          </div>
        </div>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <span className="font-semibold text-white">ahmadsheikhdev</span> is where devs buy & sell quality programming courses.
        </p>
        
        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
          <Button asChild size="lg" className="text-lg px-8 py-6 bg-white text-gray-900 hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
            <a href="#features" className="flex items-center gap-2">
              Why Choose Us?
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 border-white/30 text-black hover:bg-white/10 transition-all duration-300 hover:scale-105">
            <a href="/courses" className="flex items-center gap-2">
              <Play className="w-5 h-5" />
              Explore Courses
            </a>
          </Button>
        </div>

        {/* Enhanced Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '1.4s' }}>
          <div className="text-center group">
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 mb-4 group-hover:bg-white/20 transition-all duration-300">
              <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-3xl font-bold text-white">50+</div>
              <div className="text-sm text-white/80">Expert Courses</div>
            </div>
          </div>
          <div className="text-center group">
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 mb-4 group-hover:bg-white/20 transition-all duration-300">
              <Users className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-3xl font-bold text-white">10k+</div>
              <div className="text-sm text-white/80">Happy Students</div>
            </div>
          </div>
          <div className="text-center group">
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 mb-4 group-hover:bg-white/20 transition-all duration-300">
              <Star className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-3xl font-bold text-white">4.8★</div>
              <div className="text-sm text-white/80">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 