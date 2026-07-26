import { MapPin, Phone, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-primary/30 rounded-full animate-float" />
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-accent/20 rounded-full animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container-narrow mx-auto px-4 sm:px-6 pt-20 pb-16">
        <div className="text-center max-w-3xl mx-auto">
          {/* Location badge */}
          <div className="fade-in-up inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full shadow-soft text-sm text-muted-foreground mb-8">
            <MapPin size={16} className="text-primary" />
            <span>Lahore, Pakistan</span>
          </div>

          {/* Main heading */}
          <h1 className="fade-in-up fade-in-up-delay-1 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
            Ashbah Liaqat
          </h1>

          <p className="fade-in-up fade-in-up-delay-2 text-xl sm:text-2xl font-medium gradient-text mb-6">
            Aspiring Physical Therapist
          </p>

          <p className="fade-in-up fade-in-up-delay-3 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
            Dedicated to patient care, rehabilitation, and evidence-based clinical practice. 
            Committed to making a meaningful difference in people's lives through compassionate healthcare.
          </p>

          {/* CTA Buttons */}
          <div className="fade-in-up fade-in-up-delay-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="lg" asChild>
              <a href="tel:03077678392">
                <Phone size={18} />
                Call Me
              </a>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <a href="mailto:ashbahliaqat52@gmail.com">
                <Mail size={18} />
                Send Email
              </a>
            </Button>
            <Button variant="outline" size="lg">
              <Download size={18} />
              Download CV
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-pulse-soft">
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary/50 rounded-full animate-float" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
