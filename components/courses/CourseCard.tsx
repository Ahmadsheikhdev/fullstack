import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Users, Clock, Play, BookOpen } from "lucide-react";

interface Course {
  id: string;
  title: string;
  instructor: string;
  price: number;
  rating: number;
  students: number;
  image: string;
  category: string;
  level: string;
  duration: string;
  description: string;
}

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <Card className="group overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-[1.03] border-0 shadow-lg bg-gradient-to-br from-background to-muted/20 relative">
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <CardHeader className="p-0 relative">
        <div className="relative overflow-hidden">
          <Image
            src={course.image}
            alt={course.title}
            width={400}
            height={250}
            className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-700"
          />
          {/* Category and Level Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            <Badge variant="secondary" className="bg-background/95 backdrop-blur border-0 shadow-lg">
              {course.category}
            </Badge>
          </div>
          <div className="absolute top-4 right-4">
            <Badge variant="secondary" className="bg-background/95 backdrop-blur border-0 shadow-lg">
              {course.level}
            </Badge>
          </div>
          
          {/* Hover overlay on image */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500" />
          
          {/* Play button overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-white/90 backdrop-blur rounded-full p-4 shadow-lg">
              <Play className="w-6 h-6 text-primary fill-primary" />
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-6 relative">
        <div className="space-y-4">
          {/* Title and Rating */}
          <div>
            <h3 className="font-bold text-xl mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300 leading-tight">
              {course.title}
            </h3>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-1 bg-yellow-100 dark:bg-yellow-900/20 px-2 py-1 rounded-full">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold text-yellow-700 dark:text-yellow-300">{course.rating}</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                <span className="font-medium">{course.students.toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
            {course.description}
          </p>

          {/* Instructor and Duration */}
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                <BookOpen className="w-3 h-3 text-primary" />
              </div>
              <span className="font-medium text-foreground">by {course.instructor}</span>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span className="font-medium">{course.duration}</span>
            </div>
          </div>

          {/* Price and CTA */}
          <div className="flex items-center justify-between pt-4 border-t border-border/50">
            <div className="text-3xl font-bold text-primary">
              ${course.price}
            </div>
            <Button asChild size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-2 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg">
              <Link href={`/courses/${course.id}`} className="flex items-center gap-2">
                <Play className="w-4 h-4" />
                View Course
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 