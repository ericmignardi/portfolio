import { motion } from "motion/react";
import { ArrowRight, Send, Loader2 } from "lucide-react";
import { useState } from "react";

/*
 * DESIGN DIRECTION SUMMARY
 * Aesthetic: Editorial Minimalist / Architectural Brutalism
 * DFII: 13 (High impact, structural, stripped-back)
 * Key Inspiration: Print magazine subscription cards, high-end minimal fashion.
 * Differentiation Callout: Abandons standard "floating card" forms for an inline, extremely stark layout. Inputs are stripped to bottom-borders only.
 */

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    // Add your Web3Forms access key below or in an .env file
    const accessKey =
      import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE";
    formData.append("access_key", accessKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
        (e.target as HTMLFormElement).reset();
      } else {
        console.error("Form submission failed:", data);
        alert("Something went wrong. Please try again or email directly.");
      }
    } catch (error) {
      console.error("Form error:", error);
      alert("Something went wrong. Please try again or email directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-32 bg-brand-surface relative z-10 selection:bg-brand-ink selection:text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-24 items-start pt-16 border-t border-brand-ink/10">
          {/* Left: Huge Stark Title */}
          <div className="lg:w-1/3 pt-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="text-5xl lg:text-7xl font-heading font-semibold tracking-tighter text-brand-ink mb-8 leading-[0.9]">
                Let's <br /> Talk.
              </h2>
              <div className="flex flex-col gap-2">
                <a
                  href="mailto:ericmignardi@gmail.com"
                  className="text-xl font-medium text-brand-ink hover:text-brand-accent transition-colors block"
                >
                  mignardi.e@gmail.com
                </a>
                <p className="text-xl font-medium text-brand-ink/40">
                  Ontario, Canada
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right: Architectural Naked Form */}
          <div className="lg:w-2/3 w-full">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-20 flex justify-center"
              >
                <div className="flex items-center gap-4 text-brand-ink">
                  <span className="w-12 h-12 rounded-full border border-brand-ink flex items-center justify-center">
                    <Send size={20} />
                  </span>
                  <span className="text-3xl font-heading font-semibold tracking-tight">
                    Message Sent.
                  </span>
                </div>
              </motion.div>
            ) : (
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.1,
                }}
                onSubmit={handleSubmit}
                className="flex flex-col gap-12"
              >
                <div className="flex flex-col border-b border-brand-ink/20 focus-within:border-brand-ink transition-colors pb-4 group">
                  <label
                    htmlFor="name"
                    className="text-xs font-mono font-semibold tracking-widest text-brand-ink/40 uppercase mb-2 group-focus-within:text-brand-ink transition-colors"
                  >
                    01. Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-transparent text-2xl md:text-3xl lg:text-4xl text-brand-ink placeholder:text-brand-ink/10 focus:outline-none placeholder:font-light"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="flex flex-col border-b border-brand-ink/20 focus-within:border-brand-ink transition-colors pb-4 group">
                  <label
                    htmlFor="email"
                    className="text-xs font-mono font-semibold tracking-widest text-brand-ink/40 uppercase mb-2 group-focus-within:text-brand-ink transition-colors"
                  >
                    02. Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-transparent text-2xl md:text-3xl lg:text-4xl text-brand-ink placeholder:text-brand-ink/10 focus:outline-none placeholder:font-light"
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="flex flex-col border-b border-brand-ink/20 focus-within:border-brand-ink transition-colors pb-4 group">
                  <label
                    htmlFor="message"
                    className="text-xs font-mono font-semibold tracking-widest text-brand-ink/40 uppercase mb-2 group-focus-within:text-brand-ink transition-colors"
                  >
                    03. Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={1}
                    className="w-full bg-transparent text-2xl md:text-3xl lg:text-4xl text-brand-ink placeholder:text-brand-ink/10 focus:outline-none placeholder:font-light resize-none min-h-[40px] md:min-h-[50px]"
                    placeholder="Tell me about your project"
                    onInput={(e) => {
                      const target = e.target as HTMLTextAreaElement;
                      target.style.height = "auto";
                      target.style.height = `${target.scrollHeight}px`;
                    }}
                  />
                </div>

                <div className="flex justify-end pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group flex items-center gap-4 text-brand-ink font-semibold tracking-wide uppercase text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Inquiry"}
                    <span className="w-12 h-12 rounded-full border border-brand-ink flex items-center justify-center group-hover:bg-brand-ink group-hover:text-white transition-colors">
                      {isSubmitting ? (
                        <Loader2 className="animate-spin" size={18} />
                      ) : (
                        <ArrowRight size={18} />
                      )}
                    </span>
                  </button>
                </div>
              </motion.form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
