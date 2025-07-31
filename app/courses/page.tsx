import type { Metadata } from "next";
import CourseHero from "@/components/courses/CourseHero";
import CourseFilters from "@/components/courses/CourseFilters";
import CourseGrid from "@/components/courses/CourseGrid";

export const metadata: Metadata = {
  title: "Courses - ahmadsheikhdev",
  description: "Browse our collection of premium programming courses taught by industry experts.",
  keywords: ["programming courses", "coding tutorials", "web development", "react", "node.js", "python"],
};

// Mock data - in the future, this will come from Prisma
const mockCourses = [
  {
    id: "1",
    title: "React Mastery: From Basics to Advanced",
    description: "Master React with hooks, context, and modern patterns. Build real-world applications from scratch.",
    instructor: {
      name: "Sarah Johnson",
    },
    price: 89.99,
    duration: "12 hours",
    level: "Intermediate",
    category: "Frontend",
    rating: 4.8,
    enrolledStudents: 1247,
    image: "/api/placeholder/400/250",
  },
  {
    id: "2",
    title: "Node.js Backend Mastery",
    description: "Build scalable backend APIs with Node.js, Express, and MongoDB. Learn authentication and deployment.",
    instructor: {
      name: "Mike Rodriguez",
    },
    price: 79.99,
    duration: "15 hours",
    level: "Advanced",
    category: "Backend",
    rating: 4.9,
    enrolledStudents: 892,
    image: "/api/placeholder/400/250",
  },
  {
    id: "3",
    title: "Python for Data Science",
    description: "Learn Python fundamentals and data analysis with pandas, numpy, and matplotlib.",
    instructor: {
      name: "Dr. Emily Watson",
    },
    price: 99.99,
    duration: "18 hours",
    level: "Beginner",
    category: "Data Science",
    rating: 4.7,
    enrolledStudents: 2156,
    image: "/api/placeholder/400/250",
  },
  {
    id: "4",
    title: "Full-Stack JavaScript",
    description: "Build complete web applications with JavaScript, React, Node.js, and PostgreSQL.",
    instructor: {
      name: "Alex Thompson",
    },
    price: 129.99,
    duration: "20 hours",
    level: "Intermediate",
    category: "Full-Stack",
    rating: 4.6,
    enrolledStudents: 743,
    image: "/api/placeholder/400/250",
  },
  {
    id: "5",
    title: "AWS Cloud Architecture",
    description: "Design and deploy scalable cloud architectures using AWS services and best practices.",
    instructor: {
      name: "David Kim",
    },
    price: 149.99,
    duration: "16 hours",
    level: "Advanced",
    category: "DevOps",
    rating: 4.9,
    enrolledStudents: 567,
    image: "/api/placeholder/400/250",
  },
  {
    id: "6",
    title: "Mobile App Development with React Native",
    description: "Create cross-platform mobile apps with React Native and modern development tools.",
    instructor: {
      name: "Lisa Park",
    },
    price: 109.99,
    duration: "14 hours",
    level: "Intermediate",
    category: "Mobile",
    rating: 4.5,
    enrolledStudents: 934,
    image: "/api/placeholder/400/250",
  },
];

export default async function CoursesPage() {
  // In the future, this will be a Prisma query
  const courses = mockCourses;
  const selectedFilters: string[] = []; // This will be managed by state in a client component

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
            <CourseGrid 
              courses={courses} 
              selectedFilters={selectedFilters}
              onClearFilters={() => {}} // This will be implemented in a client component
            />
          </div>
        </div>
      </div>
    </div>
  );
} 