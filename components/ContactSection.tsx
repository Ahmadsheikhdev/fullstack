import { Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="w-full py-20 bg-gradient-to-br from-[#2c5364]/80 via-[#ff512f]/80 to-[#0f2027]/80 text-background flex justify-center">
      <div className="max-w-3xl mx-auto px-4 flex flex-col items-center">
        <div className="mb-6 flex flex-col items-center">
          <div className="bg-white/10 rounded-full p-6 shadow-xl mb-4 flex items-center justify-center">
            <Mail className="w-14 h-14 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Contact</h2>
          <p className="text-lg text-muted-foreground mb-4">Have a question or want to connect? Send us a message!</p>
        </div>
        <form className="grid gap-4 max-w-md w-full mx-auto backdrop-blur bg-background/70 rounded-2xl shadow-lg p-8">
          <input type="text" name="name" placeholder="Your Name" className="px-4 py-2 rounded border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
          <input type="email" name="email" placeholder="Your Email" className="px-4 py-2 rounded border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
          <textarea name="message" placeholder="Your Message" rows={4} className="px-4 py-2 rounded border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
          <button type="submit" className="bg-primary text-primary-foreground font-semibold py-2 rounded hover:bg-primary/90 transition">Send</button>
        </form>
      </div>
    </section>
  );
} 