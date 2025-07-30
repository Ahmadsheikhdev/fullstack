import { Code, Users, Award, Globe } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-24 bg-gradient-to-br from-[#ff512f]/80 via-[#2c5364]/80 to-[#0f2027]/80 text-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-y-6 translate-y-12"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">About Us</h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                <span className="font-semibold text-white">ahmadsheikhdev</span> is built by developers, for developers. Our mission is to empower coders to learn, teach, and grow—together. We believe in practical, high-quality content and a supportive community.
              </p>
            </div>
            
            {/* Key Points */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="bg-white/10 p-2 rounded-lg">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Community First</h3>
                  <p className="text-sm text-muted-foreground">Join thousands of developers learning and growing together.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-white/10 p-2 rounded-lg">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Quality Content</h3>
                  <p className="text-sm text-muted-foreground">Curated courses from industry experts and practitioners.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-white/10 p-2 rounded-lg">
                  <Globe className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Global Reach</h3>
                  <p className="text-sm text-muted-foreground">Accessible to developers worldwide, anytime, anywhere.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-white/10 p-2 rounded-lg">
                  <Code className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Practical Learning</h3>
                  <p className="text-sm text-muted-foreground">Real-world projects and hands-on experience.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Visual Element */}
          <div className="flex justify-center lg:justify-end animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur rounded-3xl p-12 shadow-2xl">
                <Code className="w-32 h-32 text-primary" />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-primary/20 backdrop-blur rounded-full p-4 animate-pulse">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-primary/20 backdrop-blur rounded-full p-4 animate-pulse" style={{ animationDelay: '1s' }}>
                <Award className="w-8 h-8 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 