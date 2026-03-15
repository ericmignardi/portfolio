import { Github, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brand-bg text-brand-ink relative z-10 overflow-hidden pt-24 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between md:items-end gap-12 border-b border-brand-ink/10 pb-16">
          <div className="flex flex-col gap-6">
            <span className="text-xs font-mono font-semibold tracking-widest text-brand-ink/40 uppercase">
              Based in Ontario, Canada
            </span>
            <div className="flex gap-4">
              <a
                href="https://github.com/ericmignardi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-brand-ink/20 flex items-center justify-center hover:bg-brand-ink hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={16} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-brand-ink/20 flex items-center justify-center hover:bg-brand-ink hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-2 md:text-right">
            <span className="text-xs font-mono font-semibold tracking-widest text-brand-ink/40 uppercase">
              Current Status
            </span>
            <span className="text-lg font-medium">
              Available for new opportunities
            </span>
          </div>
        </div>

        {/* Massive Logotype at Bottom */}
        <div className="pt-12 pb-4 text-center overflow-hidden">
          <h2 className="text-[12vw] leading-none font-heading font-black tracking-tighter text-brand-ink">
            ERIC MIGNARDI
          </h2>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-brand-ink/40 uppercase tracking-widest pt-8">
          <p>&copy; {new Date().getFullYear()} All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-brand-ink transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-brand-ink transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
