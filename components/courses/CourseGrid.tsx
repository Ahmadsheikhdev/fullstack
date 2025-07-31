import CourseCard from "./CourseCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, BookOpen, Filter } from "lucide-react";
import Link from "next/link";

interface Course {
  id: string;
  title: string;
  description: string;
  instructor: {
    name: string;
  };
  price: number;
  duration: string;
  level: string;
  category: string;
  rating: number;
  enrolledStudents: number;
  image: string;
}

interface CourseGridProps {
  courses: Course[];
  selectedFilters: string[];
  onClearFilters: () => void;
}

export default function CourseGrid({ courses, selectedFilters, onClearFilters }: CourseGridProps) {
  return (
    <div className="space-y-6">
      {/* Results Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button asChild variant="ghost" size="sm">
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>
          <div>
            <h2 className="text-2xl font-bold text-foreground">
              {courses.length} Course{courses.length !== 1 ? 's' : ''} Found
            </h2>
            {selectedFilters.length > 0 && (
              <p className="text-sm text-muted-foreground">
                Filtered by: {selectedFilters.join(', ')}
              </p>
            )}
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <select className="px-3 py-2 border border-border rounded-lg bg-background text-foreground">
            <option value="relevance">Sort by Relevance</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
            <option value="newest">Newest</option>
          </select>
        </div>
      </div>

      {/* Active Filters Display */}
      {selectedFilters.length > 0 && (
        <div className="flex items-center gap-2 p-4 bg-muted/50 rounded-lg">
          <Filter className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">Active filters:</span>
          <div className="flex flex-wrap gap-2">
            {selectedFilters.map((filter) => (
              <Badge key={filter} variant="secondary" className="text-xs">
                {filter}
              </Badge>
            ))}
          </div>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onClearFilters}
            className="text-xs text-muted-foreground hover:text-foreground"
          >
            Clear All
          </Button>
        </div>
      )}

      {/* Course Grid */}
      {courses.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <div 
                key={course.id} 
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CourseCard course={course} />
              </div>
            ))}
          </div>
          
          {/* Load More Button */}
          <div className="text-center pt-8">
            <Button variant="outline" size="lg" className="px-8">
              Load More Courses
            </Button>
          </div>
        </>
      ) : (
        /* Empty State */
        <div className="text-center py-16">
          <div className="w-24 h-24 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-6">
            <BookOpen className="w-12 h-12 text-muted-foreground" />
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-4">No courses found</h3>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            {selectedFilters.length > 0 
              ? "Try adjusting your filters or browse all available courses."
              : "We&apos;re working on adding more courses. Check back soon!"
            }
          </p>
          <div className="flex gap-4 justify-center">
            {selectedFilters.length > 0 && (
              <Button onClick={onClearFilters} variant="outline">
                Clear Filters
              </Button>
            )}
            <Button asChild>
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
} 