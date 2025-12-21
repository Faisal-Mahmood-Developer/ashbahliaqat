import { GraduationCap, BookOpen, Award } from "lucide-react";

const education = [
  {
    icon: GraduationCap,
    degree: "Doctor of Physical Therapy (DPT)",
    institution: "IIUB Bahawalpur",
    period: "2020 – 2025",
    description:
      "Comprehensive training in physical therapy including anatomy, physiology, rehabilitation techniques, and clinical practices.",
    highlights: [
      "Anatomy & Physiology",
      "Rehabilitation Techniques",
      "Clinical Practices",
      "Therapeutic Exercises",
    ],
  },
  {
    icon: BookOpen,
    degree: "Intermediate (Pre-Medical)",
    institution: "Multan Board",
    period: "2020",
    description:
      "Pre-medical studies with focus on biology, chemistry, and physics fundamentals.",
    highlights: ["Biology", "Chemistry", "Physics"],
  },
  {
    icon: Award,
    degree: "Matriculation (Science)",
    institution: "Multan Board",
    period: "2018",
    description: "Science-focused secondary education with strong academic foundation.",
    highlights: ["Science", "Mathematics", "English"],
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-3">
            Education
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            Academic Background
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-border sm:-translate-x-0.5 hidden sm:block" />

          <div className="space-y-8 sm:space-y-12">
            {education.map((item, index) => (
              <div
                key={item.degree}
                className={`relative flex flex-col sm:flex-row gap-4 sm:gap-8 ${
                  index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 sm:left-1/2 w-4 h-4 bg-primary rounded-full shadow-glow -translate-x-1/2 hidden sm:block" />

                {/* Content card */}
                <div
                  className={`flex-1 ${
                    index % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:pl-12"
                  }`}
                >
                  <div className="bg-card rounded-xl p-6 shadow-soft border border-border/50 card-hover">
                    <div
                      className={`flex items-center gap-3 mb-3 ${
                        index % 2 === 0 ? "sm:justify-end" : ""
                      }`}
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-sm font-medium text-primary">
                        {item.period}
                      </span>
                    </div>

                    <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                      {item.degree}
                    </h3>
                    <p className="text-sm font-medium text-muted-foreground mb-3">
                      {item.institution}
                    </p>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    <div
                      className={`flex flex-wrap gap-2 ${
                        index % 2 === 0 ? "sm:justify-end" : ""
                      }`}
                    >
                      {item.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden sm:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
