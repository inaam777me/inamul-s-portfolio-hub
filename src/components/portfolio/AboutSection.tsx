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
          <p className="text-primary font-display text-sm tracking-widest uppercase mb-4">About Me</p>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-10">
            Crafting digital{" "}
            <span className="text-gradient">experiences</span>
          </h2>
          <div className="space-y-7 text-muted-foreground leading-relaxed text-lg md:text-xl">
            <p>
              Software developer passionate about building intelligent, practical web applications and automation solutions. Strong expertise in Python, JavaScript, React, and backend frameworks like Laravel and NestJS.
            </p>
            <p>
              My work increasingly focuses on the intersection of AI and automation — building AI-powered workflows using tools like n8n and the Google Gemini API, and business process automations that solve real-world problems efficiently.
            </p>
            <p>
              Currently developing ORIOEX, a startup building modern web-based software solutions for businesses, while deepening my skills in FastAPI, AI agents, Retrieval-Augmented Generation (RAG), Docker, and cloud deployment.
            </p>
            <p>
              Open to opportunities as an AI Automation Engineer, Backend Developer, or Full-Stack Software Engineer.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
