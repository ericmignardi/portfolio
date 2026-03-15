import { motion } from "motion/react";
import { ArrowDownRight, Github } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-40 pb-20 md:pt-56 md:pb-32 bg-brand-bg flex flex-col justify-center min-h-[90vh] overflow-hidden selection:bg-brand-ink selection:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 border-b border-brand-ink/10 pb-16">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-4 mb-8"
            >
              <span className="w-8 h-[1px] bg-brand-ink/30 block" />
              <span className="text-brand-accent font-mono text-xs font-semibold tracking-widest uppercase">
                EM—2026
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.1,
              }}
              className="text-7xl md:text-8xl lg:text-[8rem] font-heading font-semibold text-brand-ink tracking-tighter leading-[0.85] uppercase"
            >
              Software <br />
              <span className="text-brand-ink/40">Developer.</span>
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="md:max-w-xs flex flex-col gap-6"
          >
            <p className="text-lg md:text-xl text-brand-ink/70 leading-relaxed font-medium">
              I specialize in React, Node.js, and TypeScript, building robust
              digital experiences that drive measurable value.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.a
                whileHover={{ x: 5 }}
                href="#projects"
                className="group flex items-center gap-3 text-brand-ink font-semibold tracking-wide uppercase text-sm"
              >
                Selected Work
                <span className="w-8 h-8 rounded-full border border-brand-ink/20 flex items-center justify-center group-hover:bg-brand-ink group-hover:text-white transition-colors">
                  <ArrowDownRight size={16} />
                </span>
              </motion.a>
              <motion.a
                whileHover={{ x: 5 }}
                href="https://github.com/ericmignardi"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-brand-ink/60 hover:text-brand-ink font-semibold tracking-wide uppercase text-sm transition-colors"
              >
                GitHub
                <span className="w-8 h-8 rounded-full border border-brand-ink/20 flex items-center justify-center group-hover:border-brand-ink transition-colors">
                  <Github size={16} />
                </span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative vertical line matching editorial index */}
      <div className="absolute left-4 sm:left-6 lg:left-8 top-0 bottom-0 w-[1px] bg-brand-ink/5 pointer-events-none hidden md:block" />
    </section>
  );
}
