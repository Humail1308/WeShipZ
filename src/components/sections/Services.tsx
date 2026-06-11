import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  {
    id: "01",
    icon: "smart_toy",
    title: "AI Customer Support",
    description: "24/7 intelligent agents that resolve tickets, handle refunds, and schedule calls directly in your CRM without human intervention."
  },
  {
    id: "02",
    icon: "hub",
    title: "Lead Scoring",
    description: "Automatically filter out tire-kickers and prioritize high-value prospects instantly using LLM analysis."
  },
  {
    id: "03",
    icon: "database",
    title: "Data Engines",
    description: "Centralize scattered data into a single source of truth that predicts churn before it happens."
  },
  {
    id: "04",
    icon: "rocket_launch",
    title: "Custom Internal Tools",
    description: "Bespoke dashboards and automations that connect your existing tech stack (Slack, HubSpot, Stripe) into a cohesive machine."
  }
];

export function Services() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0
    })
  };

  return (
    <section className="py-section-padding px-gutter max-w-container-max mx-auto" id="services">
      <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="font-label-mono text-label-mono text-electric-blue block mb-4">01 — WHAT WE BUILD</span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg max-w-3xl">We don't just 'use' AI. We engineer proprietary workflows.</h2>
        </motion.div>
        <div className="flex gap-4">
          <button onClick={handlePrev} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <button onClick={handleNext} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </div>
      
      <div className="relative overflow-hidden w-full max-w-4xl mx-auto min-h-[400px]">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <div className="group relative p-12 bg-background-elevated border border-white/5 rounded-xl overflow-hidden hover-lift h-full flex flex-col justify-center">
              <span className="absolute -right-4 -bottom-4 font-display-xl text-[180px] text-white/[0.03] select-none pointer-events-none group-hover:text-electric-blue/5 transition-colors">
                {services[currentIndex].id}
              </span>
              <span className="material-symbols-outlined text-electric-blue text-5xl mb-8">{services[currentIndex].icon}</span>
              <h3 className="font-headline-md text-headline-md mb-6">{services[currentIndex].title}</h3>
              <p className="font-body-lg text-on-surface-variant max-w-2xl">{services[currentIndex].description}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      
      <div className="flex justify-center gap-2 mt-8">
        {services.map((_, idx) => (
          <button 
            key={idx} 
            onClick={() => {
              setDirection(idx > currentIndex ? 1 : -1);
              setCurrentIndex(idx);
            }}
            className={`w-2 h-2 rounded-full transition-colors ${idx === currentIndex ? 'bg-electric-blue w-6' : 'bg-white/20'}`} 
          />
        ))}
      </div>
    </section>
  );
}
