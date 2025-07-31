import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, ShieldCheck, Rocket, Users, Sparkles } from "lucide-react";

const features = [
  {
    icon: <Code className="w-10 h-10 text-primary" />,
    title: "Developer-Focused",
    description: "By devs, for devs. Practical, high-quality content.",
    color: "from-blue-500/10 to-blue-600/10",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-primary" />,
    title: "Secure & Trusted",
    description: "Your data and payments are always safe.",
    color: "from-green-500/10 to-green-600/10",
  },
  {
    icon: <Rocket className="w-10 h-10 text-primary" />,
    title: "Launch Your Course",
    description: "Publish and monetize your expertise easily.",
    color: "from-purple-500/10 to-purple-600/10",
  },
  {
    icon: <Users className="w-10 h-10 text-primary" />,
    title: "Community Driven",
    description: "Join a network of passionate learners & teachers.",
    color: "from-orange-500/10 to-orange-600/10",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="w-full py-24 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary">Why Choose Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose ahmadsheikhdev?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Built with developers in mind, designed for success. Join thousands of learners who trust our platform.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <Card
              key={idx}
              className="group overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-105 cursor-pointer border-0 shadow-lg bg-gradient-to-br from-background to-muted/30 relative"
            >
              {/* Hover overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <CardHeader className="pb-6 relative">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                    {feature.icon}
                  </div>
                </div>
                <CardTitle className="text-center w-full text-xl font-bold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0 relative">
                <p className="text-muted-foreground text-base leading-relaxed text-center">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 