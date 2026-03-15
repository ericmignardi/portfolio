import { motion, type Variants } from "motion/react";

/*
 * DESIGN DIRECTION SUMMARY
 * Aesthetic: Editorial Minimalist / Architectural Index
 * DFII: 14 (High impact, high feasibility, perfect context fit)
 * Key Inspiration: High-end editorial print, museum exhibition catalogs.
 * Differentiation Callout: This avoids generic UI by abandoning the standard "grid of cards" or "bento box" for an asymmetric, heavily typographic table-of-contents structure with extreme contrast in font scale.
 */

const SKILL_CATEGORIES = [
  {
    num: "01",
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Java", "HTML5", "CSS3"],
  },
  {
    num: "02",
    title: "Frontend",
    skills: ["React.js", "Next.js", "Tailwind CSS", "Motion", "Tailwind v4"],
  },
  {
    num: "03",
    title: "Backend",
    skills: ["Node.js", "Express.js", "Spring Boot", "REST APIs"],
  },
  {
    num: "04",
    title: "Databases",
    skills: ["PostgreSQL", "Prisma", "MongoDB", "Mongoose"],
  },
  {
    num: "05",
    title: "Tools & DevOps",
    skills: ["Git", "GitHub", "Docker", "Jest", "JUnit", "Vite"],
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
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }, // Snappy, intentional easing
  },
};

export function Skills() {
  return (
    <section
      id="skills"
      className="py-32 bg-brand-bg relative z-10 selection:bg-brand-ink selection:text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          {/* Left: Sticky Massive Title */}
          <div className="lg:w-1/3 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <p className="text-brand-accent font-semibold tracking-widest uppercase text-xs mb-6">
                Technical Arsenal
              </p>
              <h2 className="text-6xl lg:text-7xl font-heading font-semibold tracking-tighter text-brand-ink leading-[0.9]">
                Core <br /> Stack.
              </h2>
              <p className="mt-8 text-lg text-brand-ink/60 leading-relaxed max-w-sm">
                An index of the technologies and paradigms I leverage to
                construct robust digital infrastructure.
              </p>
            </motion.div>
          </div>

          {/* Right: Editorial Index List */}
          <div className="lg:w-2/3 w-full">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col border-t border-brand-ink/10"
            >
              {SKILL_CATEGORIES.map((category) => (
                <motion.div
                  variants={rowVariants}
                  key={category.title}
                  className="group flex flex-col sm:flex-row sm:items-baseline border-b border-brand-ink/10 py-8 lg:py-12 hover:bg-brand-surface/60 transition-colors lg:px-6 -mx-4 px-4 sm:mx-0 sm:px-0"
                >
                  <div className="sm:w-1/3 mb-4 sm:mb-0 flex gap-4 items-baseline">
                    <span className="text-sm font-mono font-medium text-brand-ink/30 group-hover:text-brand-accent transition-colors">
                      {category.num}
                    </span>
                    <h3 className="text-2xl font-heading font-semibold text-brand-ink">
                      {category.title}
                    </h3>
                  </div>

                  <div className="sm:w-2/3 flex flex-wrap gap-x-6 gap-y-3">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-lg text-brand-ink/70 group-hover:text-brand-ink transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
