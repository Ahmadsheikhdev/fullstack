import { Code } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-20 bg-gradient-to-br from-[#ff512f]/80 via-[#2c5364]/80 to-[#0f2027]/80 text-background flex justify-center">
      <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="backdrop-blur bg-background/70 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Us</h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-2">
            <span className="font-semibold">ahmadsheikhdev</span> is built by developers, for developers. Our mission is to empower coders to learn, teach, and grow—together. We believe in practical, high-quality content and a supportive community.
          </p>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="bg-white/10 rounded-full p-8 shadow-xl flex items-center justify-center">
            <Code className="w-24 h-24 text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
} 