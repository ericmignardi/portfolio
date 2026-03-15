import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { AnimatePresence, motion } from "motion/react";

/**
 * Eric Mignardi — Google-style UI Build by Antigravity
 * -------------------------------------------------
 * UX Decisions:
 * - Google-like minimalism: High contrast against ample whitespace draws focus to copy
 * - Heavy rounding (3xl) & Pill buttons: modern SaaS aesthetic, approachable but authoritative
 * - Functional motion: fast easing, no slow/bouncy elements, creates a snappy platform feel
 * - Typographic scale: stark headings using Outfit/Inter to ensure readability
 * - Local Trust Badge: Ontario-specific social proof builds credibility
 */
function App() {
  return (
    <div className="w-full min-h-screen text-brand-ink selection:bg-brand-accent selection:text-white pb-0 overflow-x-hidden relative">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key="main"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="bg-brand-bg flex-grow"
        >
          <Hero />
          <Projects />
          <Skills />
          <Contact />
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
