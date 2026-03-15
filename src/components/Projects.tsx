import { motion, type Variants } from "motion/react";
import { ArrowUpRight } from "lucide-react";

/*
 * DESIGN DIRECTION SUMMARY
 * Aesthetic: Editorial Minimalist / Architectural Index
 * DFII: 14 (High impact, high feasibility, perfect context fit)
 * Key Inspiration: High-end editorial print, museum exhibition catalogs.
 * Differentiation Callout: Abandons the standard "bento box" for a dramatic, full-width asymmetric table of contents. Emphasizes stark typography and negative space.
 */

const PROJECTS = [
  {
    num: "01",
    title: "Tono",
    description:
      "Premium business web presence featuring a high-contrast minimalist aesthetic and lightning-fast functional animations.",
    tech: ["React", "Tailwind CSS", "Motion", "Vite"],
    link: "https://github.com/ericmignardi/tono",
  },
  {
    num: "02",
    title: "Fanimal",
    description:
      "E-commerce platform built with Spring Boot, Spring Security, React 19, and Stripe integration.",
    tech: ["Java", "Spring Boot", "React", "PostgreSQL", "Stripe"],
    link: "https://fanimal-fui5.onrender.com",
  },
  {
    num: "03",
    title: "DropZone",
    description:
      "High-performance file sharing platform with real-time UI states, secure links, and drag-and-drop mechanics.",
    tech: ["React", "Node.js", "Express", "MongoDB", "AWS S3"],
    link: "https://github.com/ericmignardi/dropzone",
  },
  {
    num: "04",
    title: "FinTrack",
    description:
      "Full-stack finance tracker with real-time charting, persistent data, and secure authentication.",
    tech: ["React", "PostgreSQL", "Prisma", "Node.js", "Express"],
    link: "https://fintrack-pro-kxh2.onrender.com",
  },
  {
    num: "05",
    title: "Forever",
    description:
      "A full-stack e-commerce solution featuring secure payments, product management, and user authentication.",
    tech: ["React", "MongoDB", "Express", "Tailwind", "Stripe"],
    link: "https://ecommerce-app-1-bbbk.onrender.com",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const rowVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Projects() {
  return (
    <section
      id="projects"
      className="py-32 bg-brand-surface relative z-10 selection:bg-brand-ink selection:text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-24 flex items-baseline justify-between border-b border-brand-ink/10 pb-8"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-semibold tracking-tighter text-brand-ink">
            Selected Work
          </h2>
          <span className="text-brand-ink/40 font-mono text-sm uppercase tracking-widest hidden sm:block">
            2023—2026
          </span>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col"
        >
          {PROJECTS.map((project) => (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={rowVariants}
              key={project.title}
              className="group flex flex-col md:flex-row md:items-center justify-between border-b border-brand-ink/10 py-12 lg:py-16 hover:bg-brand-bg transition-colors lg:px-8 -mx-4 px-4 sm:mx-0 sm:px-0 relative"
            >
              <div className="flex items-start md:items-center gap-6 md:gap-12 md:w-1/2">
                <span className="text-sm font-mono font-medium text-brand-ink/30 group-hover:text-brand-accent transition-colors pt-2 md:pt-0">
                  {project.num}
                </span>
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-brand-ink tracking-tighter group-hover:tracking-tight transition-all duration-500">
                  {project.title}
                </h3>
              </div>

              <div className="md:w-1/2 flex flex-col md:flex-row md:items-center justify-between gap-6 pt-6 md:pt-0">
                <div className="max-w-xs">
                  <p className="text-brand-ink/60 text-sm md:text-base leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono text-brand-ink/50 uppercase tracking-wider"
                      >
                        [{tech}]
                      </span>
                    ))}
                  </div>
                </div>

                <div className="hidden lg:flex w-14 h-14 rounded-full border border-brand-ink/10 items-center justify-center group-hover:bg-brand-ink group-hover:text-white transition-all transform group-hover:scale-110 group-hover:-rotate-12">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
