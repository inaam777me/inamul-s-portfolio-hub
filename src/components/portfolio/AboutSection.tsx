import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary font-display text-sm tracking-widest uppercase mb-3">About Me</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">
            Crafting digital{" "}
            <span className="text-gradient">experiences</span>
          </h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed text-base md:text-lg">
            <p>
              Results-driven Full Stack Developer with hands-on experience building responsive web applications using modern technologies including React, Laravel, JavaScript, TypeScript, PHP, and Python.
            </p>
            <p>
              Experienced in developing full-stack applications, managing Git-based workflows, and maintaining code repositories on GitHub. Currently working in a technical software lab environment at ESOFT Metro Campus while developing scalable web solutions through personal projects and the ORIOEX startup initiative.
            </p>
            <p>
              Passionate about building user-focused applications and continuously improving software development practices.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
