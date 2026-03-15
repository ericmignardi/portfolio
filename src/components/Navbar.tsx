import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useScrollDirection } from "../hooks/useScrollDirection";

const LINKS = [
  { label: "Selected Work", href: "#projects" },
  { label: "Arsenal", href: "#skills" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const scrollDirection = useScrollDirection();

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out ${
        scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"
      } bg-brand-bg/90 backdrop-blur-md border-b border-brand-ink/10`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a
            href="#"
            className="font-heading font-bold text-xl tracking-tight text-brand-ink uppercase"
          >
            E. Mignardi<span className="text-brand-accent">.</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-mono font-semibold tracking-widest uppercase text-brand-ink/50 hover:text-brand-ink transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="text-xs font-mono font-semibold tracking-widest uppercase text-brand-ink border-b-2 border-brand-ink hover:text-brand-accent hover:border-brand-accent pb-1 transition-all"
            >
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-brand-ink/70"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden bg-brand-bg border-t border-brand-ink/10"
          >
            <nav className="flex flex-col p-8 gap-8">
              {LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-heading font-medium tracking-tighter text-brand-ink/80 hover:text-brand-ink transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="text-3xl font-heading font-medium tracking-tighter text-brand-ink hover:text-brand-accent transition-colors"
              >
                Contact
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
