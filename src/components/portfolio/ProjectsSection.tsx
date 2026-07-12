import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, ShoppingCart, QrCode, Calculator, ShoppingBag } from "lucide-react";

const projects = [
  {
    icon: ShoppingCart,
    title: "ORIOEX — POS & Inventory System",
    description:
      "Full-stack POS and Inventory Management system built for a retail/wholesale client. Features barcode scanning, thermal receipt printing, cheque payment tracking, staff role management, automated backups, and audit logging. Packaged as a Windows desktop app via Electron.",
    tech: ["React", "TypeScript", "NestJS", "MySQL", "Prisma", "Electron"],
    link: null,
  },
  {
    icon: QrCode,
    title: "MrFoodie — QR-Based Restaurant Ordering System",
    description:
      "Flask web app for restaurant table ordering via QR code. Customers scan to browse the menu, order, and track live preparation status; kitchen staff receive real-time order notifications. Includes server-side price validation and CSRF protection.",
    tech: ["Python", "Flask", "MySQL", "html5-qrcode"],
    link: "https://github.com/inaam777me/pyhton",
  },
  {
    icon: Calculator,
    title: "Payroll & HR Management System",
    description:
      "Desktop payroll and HR management application. Handles employee records, department management, attendance tracking, leave requests, holiday calendars, and automated salary/deduction calculations (overtime, tax, no-pay adjustments) with role-based admin access.",
    tech: ["C#", ".NET Framework 4.7.2", "Windows Forms", "SQL Server"],
    link: "https://github.com/inaam777me/MySalaryApp",
  },
  {
    icon: ShoppingBag,
    title: "Fashion Store — Flutter E-Commerce App",
    description:
      "Cross-platform mobile e-commerce app with product browsing, category filters, a persistent shopping cart, checkout flow, and a 6-stage order tracking system with timeline visualization. Built as academic coursework.",
    tech: ["Flutter", "Dart", "Provider", "Firebase"],
    link: "https://github.com/inaam777me/fashion_store_app",
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
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title} on GitHub`}
                    className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                  >
                    <ExternalLink size={18} />
                  </a>
                )}
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
