import { motion } from 'framer-motion';
import { NetworkCanvas } from '../ui/NetworkCanvas';

export function Hero({ onBookCall }: { onBookCall: () => void }) {

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.035 }
    }
  };

  const charVariants = {
    hidden: { opacity: 0, display: 'none' },
    visible: { opacity: 1, display: 'inline' }
  };

  const line1 = "Your Business";
  const line2 = "Runs on Manual Work.";
  const highlight = "That's Costing You.";

  return (
    <section className="relative min-h-screen flex items-center px-gutter pt-20 overflow-hidden">
      <div className="max-w-container-max mx-auto w-full grid md:grid-cols-12 gap-12 items-center">
        
        {/* Left Content */}
        <div className="md:col-span-7 z-10">
          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="font-display-xl text-display-xl-mobile md:text-display-xl text-on-surface mb-8"
            style={{ lineHeight: 1.0, letterSpacing: "-0.02em" }}
          >
            {/* Line 1 — white */}
            <span style={{ display: "block" }}>
              {line1.split("").map((char, i) => (
                <motion.span key={`l1-${i}`} variants={charVariants}>{char}</motion.span>
              ))}
            </span>

            {/* Line 2 — white */}
            <span style={{ display: "block" }}>
              {line2.split("").map((char, i) => (
                <motion.span key={`l2-${i}`} variants={charVariants}>{char}</motion.span>
              ))}
            </span>

            {/* Line 3 — gradient highlight */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.6 }}
              className="animate-gradient-text"
              style={{ display: "block" }}
            >
              {highlight}
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.5, ease: "easeOut" }}
            className="font-body-lg text-body-lg text-on-surface-variant mb-12 max-w-xl"
          >
            WeShipZ engineers custom AI systems that replace repetitive human tasks — lead follow-up, customer replies, internal ops — so your team focuses on growth, not grunt work.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.8, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-6 items-start sm:items-center"
          >
            <button
              onClick={onBookCall}
              className="animated-border-btn w-[240px] h-[64px] active:scale-95 transition-transform"
            >
              <div className="animated-border-btn-inner text-white font-headline-md text-[18px]">
                Book a Free Audit &rarr;
              </div>
            </button>
            <a
              href="#services"
              className="px-10 py-5 border border-white/10 hover:bg-white/5 text-on-surface rounded-lg font-headline-md text-[18px] transition-all"
            >
              See What We Build
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 3.2 }}
            className="mt-12 flex items-center gap-4 text-on-surface-variant/40 font-label-mono text-label-mono"
          >
            <span className="material-symbols-outlined text-[16px]">verified_user</span>
            <span>RETAINER-BASED. CUSTOM-BUILT. ENGINEERED FOR SCALE.</span>
          </motion.div>
        </div>

        {/* Right Visual */}
        <div className="md:col-span-5 relative flex justify-center items-center h-full min-h-[500px]">
          <div className="absolute inset-0 radial-glow z-0"></div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="relative z-10 w-full h-full flex items-center justify-center"
          >
            <NetworkCanvas />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
