import { Search, TrendingUp, Users, Star, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CourseHero() {
  return (
    <section className="w-full py-20 bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#ff512f] animate-gradient-x relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-y-6 translate-y-12"></div>
      
      {/* Back Navigation Button */}
      <div className="absolute top-6 left-6 z-20 animate-fade-in-up">
        <Button asChild variant="outline" size="sm" className="bg-background/20 backdrop-blur border-white/20 text-white hover:bg-white/20 hover:text-white transition-all duration-300 shadow-lg">
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </Button>
      </div>
      
      <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white animate-fade-in-up">
          Explore Programming Courses
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Learn from expert developers and advance your skills with our curated collection of high-quality courses.
        </p>
        
        {/* Enhanced Search Bar */}
        <div className="max-w-2xl mx-auto mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5 group-focus-within:text-primary transition-colors duration-300" />
            <input
              type="text"
              placeholder="Search for courses, technologies, or instructors..."
              className="w-full pl-12 pr-4 py-5 bg-background/95 backdrop-blur border border-border/50 rounded-2xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-lg shadow-lg"
            />
            <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-primary hover:bg-primary/90 transition-all duration-300">
              Search
            </Button>
          </div>
        </div>
        
        {/* Enhanced Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="text-center group">
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 mb-4 group-hover:bg-white/20 transition-all duration-300">
              <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-3xl font-bold text-white">50+</div>
              <div className="text-sm text-white/80">Courses Available</div>
            </div>
          </div>
          <div className="text-center group">
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 mb-4 group-hover:bg-white/20 transition-all duration-300">
              <Users className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-3xl font-bold text-white">10k+</div>
              <div className="text-sm text-white/80">Students Enrolled</div>
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
 