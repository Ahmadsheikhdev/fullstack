import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, ShieldCheck, Rocket, Users } from "lucide-react";

const features = [
  {
    icon: <Code className="w-8 h-8 text-primary" />,
    title: "Developer-Focused",
    description: "Built by and for developers. No fluff, just practical, high-quality content to help you grow your skills and career.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    title: "Secure & Trusted",
    description: "Your data and payments are protected with industry-standard security. Learn and teach with confidence.",
  },
  {
    icon: <Rocket className="w-8 h-8 text-primary" />,
    title: "Launch Your Course",
    description: "Easily publish and monetize your expertise. Our platform handles the tech, so you can focus on teaching.",
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: "Community Driven",
    description: "Join a growing network of passionate learners and instructors. Collaborate, share, and succeed together.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="w-full py-16 bg-background">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Why Choose ahmadsheikhdev?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <Card key={idx} className="h-full flex flex-col items-center text-center">
              <CardHeader>
                <div className="flex justify-center mb-2">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 