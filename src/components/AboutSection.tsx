import { Heart, Users, TrendingUp, Stethoscope } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Compassionate Care",
    description: "Patient-centered approach with empathy and understanding",
  },
  {
    icon: Stethoscope,
    title: "Clinical Excellence",
    description: "Evidence-based rehabilitation techniques and assessment",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Effective interdisciplinary coordination for optimal outcomes",
  },
  {
    icon: TrendingUp,
    title: "Continuous Growth",
    description: "Committed to professional development and learning",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-card">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-3">
            About Me
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Passionate About Healing
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Currently completing my house job at{" "}
            <span className="text-foreground font-medium">
              Benazir Bhutto Hospital, Rawalpindi
            </span>
            , I am deeply passionate about patient care, rehabilitation, and teamwork. 
            My focus is on providing compassionate, evidence-based healthcare that truly 
            makes a difference in patients' lives.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 bg-background rounded-xl shadow-soft card-hover border border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
