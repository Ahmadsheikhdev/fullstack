import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Play, Users } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="w-full py-24 flex flex-col items-center bg-gradient-to-br from-muted/50 via-background to-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent transform -skew-y-6 translate-y-12"></div>
      
      <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
        <div className="mb-12 animate-fade-in-up">
          {/* Enhanced Rating Display */}
          <div className="flex justify-center mb-6">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-500 fill-current" />
              ))}
            </div>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 mb-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span className="text-sm font-medium">10,000+ Students</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5" />
              <span className="text-sm font-medium">4.8/5 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Play className="w-5 h-5" />
              <span className="text-sm font-medium">50+ Courses</span>
            </div>
          </div>
          
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Ready to level up?</h3>
          <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
            Explore top programming courses or share your own expertise with the community. Start your learning journey today.
          </p>
        </div>
        
        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <Button asChild size="lg" className="text-lg px-10 py-6 bg-primary hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
            <a href="/courses" className="flex items-center gap-3">
              <Play className="w-6 h-6" />
              Explore Courses
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-lg px-10 py-6 border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105">
            <a href="#contact" className="flex items-center gap-2">
              Get Started
            </a>
          </Button>
        </div>
        
        {/* Additional Trust Elements */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <p className="text-sm text-muted-foreground mb-4">Trusted by developers from</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-60">
            <div className="text-sm font-medium">Google</div>
            <div className="text-sm font-medium">Microsoft</div>
            <div className="text-sm font-medium">Apple</div>
            <div className="text-sm font-medium">Netflix</div>
            <div className="text-sm font-medium">Spotify</div>
          </div>
        </div>
      </div>
    </section>
  );
} 