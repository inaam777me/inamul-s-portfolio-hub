import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    icon: GraduationCap,
    degree: "Bachelor of Applied Information Technology (Computing)",
    school: "ICST University Park",
    period: "2024 – 2027",
  },
  {
    icon: Award,
    degree: "Higher National Diploma (HND) in Software Engineering – BEng",
    school: "ESOFT Metro Campus",
    period: "2023 – 2025",
  },
];

const activities = [
  {
    title: "Event Coordinator – Tech Forces IT Club",
    org: "ICST University Park",
    description: "Organized technology workshops, hackathons and innovation programs for students.",
  },
  {
    title: "Program Coordinator – Global Entrepreneurship Week (GEW)",
    org: "ICST University Park",
    description:
      "Presented entrepreneurship ideas, coordinated events, recruited new members. Contributed to the university achieving 1st place recognition.",
  },
];

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" className="section-padding" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-primary font-display text-sm tracking-widest uppercase mb-4">Education</p>
          <h2 className="text-4xl md:text-6xl font-display font-bold">
            Academic <span className="text-gradient">background</span>
          </h2>
        </motion.div>

        <div className="space-y-6 mb-16">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass rounded-lg p-6 flex gap-4 items-start"
            >
              <div className="p-3 rounded-lg bg-primary/10 shrink-0">
                <edu.icon className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg">{edu.degree}</h3>
                <p className="text-muted-foreground text-sm">{edu.school}</p>
                <span className="text-xs text-primary font-medium">{edu.period}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Leadership */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="font-display font-bold text-xl mb-6">
            Leadership & <span className="text-gradient">Activities</span>
          </h3>
          <div className="space-y-4">
            {activities.map((act, i) => (
              <div key={i} className="glass rounded-lg p-5">
                <h4 className="font-display font-semibold mb-1">{act.title}</h4>
                <p className="text-primary text-xs font-medium mb-2">{act.org}</p>
                <p className="text-muted-foreground text-sm">{act.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
