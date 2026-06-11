import { motion } from 'framer-motion';

export function HowItWorks() {
  const steps = [
    {
      id: "01",
      title: "Free Audit Call",
      description: "We map out your current bottlenecks and find exactly where AI can replace 10+ hours of weekly manual work."
    },
    {
      id: "02",
      title: "The Build Phase",
      description: "We ship your custom automation architecture in 2-4 weeks. No generic templates, just pure engineering."
    },
    {
      id: "03",
      title: "Manage & Optimize",
      description: "We don't just hand over the keys. We monitor, refine, and upgrade your systems as your business evolves."
    }
  ];

  return (
    <section className="py-section-padding bg-background-surface" id="how-it-works">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="mb-20">
          <span className="font-label-mono text-label-mono text-electric-blue block mb-4">02 — HOW IT WORKS</span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg">From manual chaos to <br />hands-free growth.</h2>
        </div>
        <div className="space-y-12 md:space-y-24 relative">
          {/* Center Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/5 -translate-x-1/2 hidden md:block"></div>
          
          {steps.map((step, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
                className="relative grid md:grid-cols-2 gap-8 md:gap-12 items-center bg-background-elevated md:bg-transparent p-8 md:p-0 rounded-2xl border border-white/5 md:border-none"
              >
                {isLeft ? (
                  <>
                    <div className="md:text-right">
                      <span className="font-display-xl text-7xl md:text-9xl text-white/[0.05] block mb-2">{step.id}</span>
                      <h3 className="font-headline-md text-3xl md:text-5xl mb-4 text-white">{step.title}</h3>
                      <p className="font-body-lg text-on-surface-variant max-w-md md:ml-auto">{step.description}</p>
                    </div>
                    <div className="hidden md:block"></div>
                  </>
                ) : (
                  <>
                    <div className="hidden md:block"></div>
                    <div>
                      <span className="font-display-xl text-7xl md:text-9xl text-white/[0.05] block mb-2">{step.id}</span>
                      <h3 className="font-headline-md text-3xl md:text-5xl mb-4 text-white">{step.title}</h3>
                      <p className="font-body-lg text-on-surface-variant max-w-md">{step.description}</p>
                    </div>
                  </>
                )}
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-electric-blue hidden md:block shadow-[0_0_15px_#3B82F6]"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
