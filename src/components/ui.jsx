import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5, delay },
});

export const Section = ({ id, index, title, children }) => (
  <section id={id} className="scroll-mt-24 py-14 sm:py-20">
    <motion.div {...fadeUp()} className="mb-10">
      <p className="font-mono text-sm text-emerald-400">
        {index} <span className="text-neutral-600">/</span> {id}
      </p>
      <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
    </motion.div>
    {children}
  </section>
);

export const Card = ({ className = "", delay = 0, children }) => (
  <motion.div
    {...fadeUp(delay)}
    className={`rounded-2xl border border-white/10 bg-neutral-900/50 transition-colors duration-300 hover:border-emerald-400/30 ${className}`}
  >
    {children}
  </motion.div>
);

export const Tag = ({ icon: Icon, children }) => (
  <span className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-xs text-neutral-300">
    {Icon && <Icon className="text-sm text-emerald-400" aria-hidden="true" />}
    {children}
  </span>
);

export const Label = ({ children }) => (
  <p className="font-mono text-xs uppercase tracking-widest text-neutral-500">{children}</p>
);
