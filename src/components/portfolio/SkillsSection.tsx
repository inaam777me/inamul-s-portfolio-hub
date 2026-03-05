import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Globe, Database, Wrench, Palette, Users } from "lucide-react";

const skillCategories = [
  {
    icon: Code,
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Java", "C#", "PHP"],
  },
  {
    icon: Globe,
    title: "Web Development",
    skills: ["HTML5", "CSS3", "Responsive Design", "Frontend", "Backend"],
  },
  {
    icon: Database,
    title: "Frameworks & DB",
    skills: ["React.js", "Laravel", "Vue.js", ".NET", "MySQL"],
  },
  {
    icon: Wrench,
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Linux CLI"],
  },
  {
    icon: Palette,
    title: "Design",
    skills: ["Photoshop", "Canva", "Social Media Design"],
  },
  {
    icon: Users,
    title: "Soft Skills",
    skills: ["Public Speaking", "Team Collaboration", "Event Coordination"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-primary font-display text-sm tracking-widest uppercase mb-3">Skills</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold">
            Technical <span className="text-gradient">toolkit</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-lg p-6 hover:border-primary/30 transition-all duration-300 group"
            >
              <cat.icon className="text-primary mb-4" size={28} />
              <h3 className="font-display font-semibold text-lg mb-3">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
