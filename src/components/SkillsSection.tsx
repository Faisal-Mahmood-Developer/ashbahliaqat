import {
  Stethoscope,
  ClipboardList,
  FileText,
  Monitor,
  MessageSquare,
  GraduationCap,
  Users,
  Heart,
} from "lucide-react";

const skills = [
  {
    icon: Stethoscope,
    name: "Clinical Assessment",
    description: "Patient evaluation and rehabilitation planning",
    category: "Clinical",
  },
  {
    icon: ClipboardList,
    name: "Patient Care",
    description: "Comprehensive care and follow-up management",
    category: "Clinical",
  },
  {
    icon: FileText,
    name: "Medical Documentation",
    description: "Accurate case notes and record keeping",
    category: "Administrative",
  },
  {
    icon: Monitor,
    name: "MS Office Suite",
    description: "Word, Excel, and PowerPoint proficiency",
    category: "Technical",
  },
  {
    icon: MessageSquare,
    name: "Communication",
    description: "Strong English verbal and written skills",
    category: "Soft Skills",
  },
  {
    icon: GraduationCap,
    name: "Teaching",
    description: "Academic support and training abilities",
    category: "Professional",
  },
  {
    icon: Users,
    name: "Teamwork",
    description: "Effective interdisciplinary collaboration",
    category: "Soft Skills",
  },
  {
    icon: Heart,
    name: "Empathy",
    description: "Compassionate care under pressure",
    category: "Soft Skills",
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-3">
            Skills
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Professional Competencies
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A diverse skill set combining clinical expertise with strong interpersonal abilities
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group relative bg-card rounded-xl p-5 shadow-soft border border-border/50 card-hover overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300" />

              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <skill.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground bg-secondary px-2 py-1 rounded-md">
                    {skill.category}
                  </span>
                </div>

                <h3 className="font-semibold text-foreground mb-1.5">
                  {skill.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
