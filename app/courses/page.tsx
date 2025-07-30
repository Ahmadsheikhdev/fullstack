import { Metadata } from "next";
import CourseHero from "@/components/courses/CourseHero";
import CourseGrid from "@/components/courses/CourseGrid";
import CourseFilters from "@/components/courses/CourseFilters";

export const metadata: Metadata = {
  title: "Browse Courses | ahmadsheikhdev",
  description: "Explore high-quality programming courses from expert developers. Learn the latest technologies and advance your career.",
  keywords: ["programming courses", "coding tutorials", "developer education", "web development", "software engineering"],
};

// Mock data - will be replaced with Prisma query
const mockCourses = [
  {
    id: "1",
    title: "Complete React Developer Course",
    instructor: "Sarah Chen",
    price: 89.99,
    rating: 4.8,
    students: 1247,
    image: "/api/placeholder/400/250",
    category: "Frontend",
    level: "Intermediate",
    duration: "12 hours",
    description: "Master React with hooks, context, and modern patterns. Build real-world applications from scratch.",
  },
  {
    id: "2",
    title: "Node.js Backend Mastery",
    instructor: "Mike Rodriguez",
    price: 79.99,
    rating: 4.9,
    students: 892,
    image: "/api/placeholder/400/250",
    category: "Backend",
    level: "Advanced",
    duration: "15 hours",
    description: "Build scalable backend APIs with Node.js, Express, and MongoDB. Learn authentication and deployment.",
  },
  {
    id: "3",
    title: "Python for Data Science",
    instructor: "Dr. Emily Watson",
    price: 99.99,
    rating: 4.7,
    students: 2156,
    image: "/api/placeholder/400/250",
    category: "Data Science",
    level: "Beginner",
    duration: "18 hours",
    description: "Learn Python fundamentals and data analysis with pandas, numpy, and matplotlib.",
  },
  {
    id: "4",
    title: "Full-Stack JavaScript",
    instructor: "Alex Thompson",
    price: 129.99,
    rating: 4.6,
    students: 743,
    image: "/api/placeholder/400/250",
    category: "Full-Stack",
    level: "Intermediate",
    duration: "20 hours",
    description: "Build complete web applications with JavaScript, React, Node.js, and PostgreSQL.",
  },
  {
    id: "5",
    title: "AWS Cloud Architecture",
    instructor: "David Kim",
    price: 149.99,
    rating: 4.9,
    students: 567,
    image: "/api/placeholder/400/250",
    category: "DevOps",
    level: "Advanced",
    duration: "16 hours",
    description: "Design and deploy scalable cloud architectures using AWS services and best practices.",
  },
  {
    id: "6",
    title: "Mobile App Development with React Native",
    instructor: "Lisa Park",
    price: 109.99,
    rating: 4.5,
    students: 934,
    image: "/api/placeholder/400/250",
    category: "Mobile",
    level: "Intermediate",
    duration: "14 hours",
    description: "Create cross-platform mobile apps with React Native and modern development tools.",
  },
];

export default async function CoursesPage() {
  // In the future, this will be a Prisma query
  const courses = mockCourses;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <CourseHero />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <CourseFilters />
            </div>
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-3">
            <CourseGrid courses={courses} />
          </div>
        </div>
      </div>
    </div>
  );
} 