import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="section-padding" ref={ref}>
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-display text-sm tracking-widest uppercase mb-4">Contact</p>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">
            Let's <span className="text-gradient">connect</span>
          </h2>
          <p className="text-muted-foreground mb-14 text-xl">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-14">
            <a
              href="mailto:inamul.official22@gmail.com"
              className="flex items-center gap-4 glass rounded-lg px-8 py-5 hover:border-primary/40 transition-all duration-300 w-full sm:w-auto"
            >
              <Mail className="text-primary" size={24} />
              <span className="text-base">inamul.official22@gmail.com</span>
            </a>
            <a
              href="https://www.linkedin.com/in/inaam1/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 glass rounded-lg px-8 py-5 hover:border-primary/40 transition-all duration-300 w-full sm:w-auto"
            >
              <Linkedin className="text-primary" size={24} />
              <span className="text-base">LinkedIn</span>
            </a>
            <a
              href="https://github.com/inaam777me"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 glass rounded-lg px-8 py-5 hover:border-primary/40 transition-all duration-300 w-full sm:w-auto"
            >
              <Github className="text-primary" size={24} />
              <span className="text-base">GitHub</span>
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
            <MapPin size={16} className="text-primary" />
            Batticaloa District, Sri Lanka
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
