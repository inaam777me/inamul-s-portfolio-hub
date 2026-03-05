import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Rocket } from "lucide-react";

const experiences = [
  {
    icon: Briefcase,
    role: "Technical Support & Software Lab Assistant / Graphic Designer",
    company: "ESOFT Metro Campus (Pvt) Ltd – Sri Lanka",
    period: "Dec 2025 – Present",
    points: [
      "Provide technical support for computer laboratories used for software engineering training.",
      "Install and configure programming tools and development environments.",
      "Assist students with debugging programming issues and configuring development software.",
      "Troubleshoot hardware, operating systems, and software issues across lab systems.",
      "Design promotional graphics and digital materials for academic programs and events.",
    ],
  },
  {
    icon: Rocket,
    role: "Founder / Full Stack Developer – ORIOEX",
    company: "Startup Web Application Project",
    period: "Ongoing",
    points: [
      "Developing a responsive full stack platform using React, Laravel, Vue.js and TypeScript.",
      "Designing modern user interfaces and scalable backend architecture.",
      "Managing source code and version control using Git and GitHub.",
    ],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="section-padding" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-primary font-display text-sm tracking-widest uppercase mb-3">Experience</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold">
            Work <span className="text-gradient">journey</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="relative md:pl-14"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-1 hidden md:flex w-10 h-10 items-center justify-center rounded-full bg-gradient-gold shadow-gold">
                  <exp.icon size={18} className="text-primary-foreground" />
                </div>

                <div className="glass rounded-lg p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
                    <h3 className="font-display font-semibold text-lg">{exp.role}</h3>
                    <span className="text-xs text-primary font-medium bg-primary/10 px-3 py-1 rounded-full w-fit">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">{exp.company}</p>
                  <ul className="space-y-2">
                    {exp.points.map((point, j) => (
                      <li key={j} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-primary mt-1.5 shrink-0">•</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
