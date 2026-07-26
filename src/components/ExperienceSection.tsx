import { Briefcase, Building2, Calendar, CheckCircle2 } from "lucide-react";

const experiences = [
  {
    title: "House Officer",
    organization: "Benazir Bhutto Hospital, Rawalpindi",
    period: "July 2025 – July 2026",
    type: "Clinical Training",
    description:
      "Comprehensive clinical rotations gaining hands-on experience in various medical departments.",
    responsibilities: [
      "Conducting patient assessments and developing rehabilitation plans",
      "Collaborating with interdisciplinary healthcare teams",
      "Maintaining accurate medical documentation and case notes",
      "Providing patient education and follow-up care",
    ],
    rotations: ["Medicine", "Surgery", "Pediatrics", "Gynecology"],
  },
  {
    title: "Physical Therapy Internee",
    organization: "DHQ Hospital, Lodhran",
    period: "June 2024 – August 2024", // Update with actual dates
    type: "Clinical Internship",
    description:
      "Completed a clinical internship, gaining practical experience in patient assessment, rehabilitation, and multidisciplinary healthcare settings.",
    responsibilities: [
      "Assisted senior physical therapists in patient assessment and treatment planning",
      "Performed exercise therapy and electrotherapy under supervision",
      "Maintained patient records and treatment documentation",
      "Educated patients on home exercise programs and rehabilitation techniques",
      "Collaborated with healthcare professionals to deliver quality patient care",
    ],
    rotations: [
      "Orthopedics",
      "Neurology",
      "Medicine",
      "Surgery",
      "Outpatient Department (OPD)",
    ],
  },
  {
    title: "Teaching & Administrative Roles",
    organization: "Freelance / Internship",
    period: "2020 – 2024",
    type: "Professional Development",
    description:
      "Developed administrative and teaching skills through various roles.",
    responsibilities: [
      "Providing academic support and tutoring",
      "Managing documentation and reporting",
      "Coordinating administrative tasks",
      "Supporting educational programs",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding bg-card">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-3">
            Experience
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            Clinical & Professional Journey
          </h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.title}
              className="bg-background rounded-2xl p-6 sm:p-8 shadow-soft border border-border/50 card-hover"
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0 shadow-card">
                  <Briefcase className="w-7 h-7 text-primary-foreground" />
                </div>

                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-display text-xl font-semibold text-foreground">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 text-muted-foreground mt-1">
                        <Building2 size={16} />
                        <span className="text-sm">{exp.organization}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-medium text-primary">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4">
                    {exp.type}
                  </span>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {exp.rotations && (
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-foreground mb-2">
                        Clinical Rotations:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.rotations.map((rotation) => (
                          <span
                            key={rotation}
                            className="px-3 py-1.5 text-xs font-medium bg-secondary text-secondary-foreground rounded-lg"
                          >
                            {rotation}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3">
                      Key Responsibilities:
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {exp.responsibilities.map((resp) => (
                        <li
                          key={resp}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
