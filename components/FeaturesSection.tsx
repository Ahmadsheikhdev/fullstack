import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, ShieldCheck, Rocket, Users } from "lucide-react";

const features = [
  {
    icon: <Code className="w-10 h-10 text-primary" />,
    title: "Developer-Focused",
    description: "By devs, for devs. Practical, high-quality content.",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-primary" />,
    title: "Secure & Trusted",
    description: "Your data and payments are always safe.",
  },
  {
    icon: <Rocket className="w-10 h-10 text-primary" />,
    title: "Launch Your Course",
    description: "Publish and monetize your expertise easily.",
  },
  {
    icon: <Users className="w-10 h-10 text-primary" />,
    title: "Community Driven",
    description: "Join a network of passionate learners & teachers.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="w-full py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose ahmadsheikhdev?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Built with developers in mind, designed for success.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <Card
              key={idx}
              className="h-full flex flex-col items-center text-center transition-all duration-500 hover:bg-muted/50 hover:shadow-xl hover:scale-105 cursor-pointer border-0 shadow-lg bg-gradient-to-br from-background to-muted/30 animate-fade-in-up"
              style={{ animationDelay: `${0.1 * (idx + 1)}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex justify-center mb-4 p-3 bg-primary/10 rounded-full">{feature.icon}</div>
                <CardTitle className="text-center w-full text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-base leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 