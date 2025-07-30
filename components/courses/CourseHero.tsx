import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CourseHero() {
  return (
    <section className="w-full py-16 bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#ff512f] animate-gradient-x">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          Explore Programming Courses
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Learn from expert developers and advance your skills with our curated collection of high-quality courses.
        </p>
        
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <input
              type="text"
              placeholder="Search for courses, technologies, or instructors..."
              className="w-full pl-12 pr-4 py-4 bg-background/90 backdrop-blur border border-border/50 rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
            />
          </div>
        </div>
        
        {/* Quick Stats */}
        <div className="flex flex-wrap justify-center gap-8 text-white/80">
          <div className="text-center">
            <div className="text-2xl font-bold">50+</div>
            <div className="text-sm">Courses Available</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">10k+</div>
            <div className="text-sm">Students Enrolled</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">4.8★</div>
            <div className="text-sm">Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
} 
 