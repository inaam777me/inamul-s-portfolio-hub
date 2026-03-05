import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, ShoppingCart, Globe, Bus, Calculator } from "lucide-react";

const projects = [
  {
    icon: ShoppingCart,
    title: "KKY – Inventory & POS Management System",
    description:
      "Full stack Inventory and POS system with product management, inventory tracking, and sales processing.",
    tech: ["PHP", "JavaScript", "HTML", "CSS"],
  },
  {
    icon: Globe,
    title: "ORIOEX Web Platform",
    description:
      "Modern responsive web application focused on scalable architecture and modern UI/UX.",
    tech: ["React", "Laravel", "Vue.js", "TypeScript"],
  },
  {
    icon: Bus,
    title: "Bus Booking System",
    description:
      "Java console application for managing bus reservations including seat booking and schedule management.",
    tech: ["Java"],
  },
  {
    icon: Calculator,
    title: "MySalaryApp",
    description:
      "Desktop application to calculate salary, deductions and net income.",
    tech: ["C#", ".NET Framework"],
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-primary font-display text-sm tracking-widest uppercase mb-3">Projects</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold">
            Featured <span className="text-gradient">work</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-lg p-6 hover:border-primary/30 hover:shadow-gold transition-all duration-500 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <project.icon className="text-primary" size={24} />
                </div>
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-full border border-border text-muted-foreground"
                  >
                    {t}
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

export default ProjectsSection;
