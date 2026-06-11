import { motion } from 'framer-motion';

export function Pricing({ onBookCall }: { onBookCall: () => void }) {
  return (
    <section className="py-section-padding px-gutter max-w-container-max mx-auto" id="pricing">
      <div className="mb-24 text-center">
        <span className="font-label-mono text-label-mono text-electric-blue block mb-4">05 — PRICING</span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-headline-lg text-headline-lg-mobile md:text-headline-lg"
        >
          Invest in an asset, not a cost.
        </motion.h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Tier 1 */}
        <div className="p-12 bg-background-elevated border border-white/5 rounded-xl hover:border-electric-blue hover:-translate-y-4 hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.2)] transition-all duration-300 flex flex-col cursor-pointer">
          <h3 className="font-headline-md text-headline-md mb-2">Starter</h3>
          <p className="text-on-surface-variant mb-8">One core automation to solve your biggest pain point.</p>
          <div className="text-4xl font-headline-md mb-8">$2,500<span className="text-lg font-body-md text-on-surface-variant">/setup</span></div>
          <ul className="space-y-4 mb-12 flex-grow">
            <li className="flex items-center gap-3 text-on-surface-variant">
              <span className="material-symbols-outlined text-electric-blue text-sm">check_circle</span>
              <span>Lead Capture Automation</span>
            </li>
            <li className="flex items-center gap-3 text-on-surface-variant">
              <span className="material-symbols-outlined text-electric-blue text-sm">check_circle</span>
              <span>CRM Integration</span>
            </li>
            <li className="flex items-center gap-3 text-on-surface-variant">
              <span className="material-symbols-outlined text-electric-blue text-sm">check_circle</span>
              <span>2 Weeks Support</span>
            </li>
          </ul>
          <button onClick={onBookCall} className="w-full py-4 border border-white/10 rounded hover:bg-white/5 transition-all">Get Started</button>
        </div>
        {/* Tier 2 */}
        <div className="p-12 bg-background-elevated border border-white/5 rounded-xl hover:border-electric-blue hover:-translate-y-4 hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.2)] transition-all duration-300 relative flex flex-col cursor-pointer">
          <div className="absolute top-0 right-12 -translate-y-1/2 bg-electric-blue text-white font-label-mono text-[10px] px-4 py-1.5 rounded-full tracking-widest">MOST POPULAR</div>
          <h3 className="font-headline-md text-headline-md mb-2">Growth</h3>
          <p className="text-on-surface-variant mb-8">Full operational automation for scaling agencies.</p>
          <div className="text-4xl font-headline-md mb-8">$6,000<span className="text-lg font-body-md text-on-surface-variant">/setup</span></div>
          <ul className="space-y-4 mb-12 flex-grow">
            <li className="flex items-center gap-3 text-on-surface">
              <span className="material-symbols-outlined text-electric-blue text-sm">check_circle</span>
              <span>Full AI Support Agent</span>
            </li>
            <li className="flex items-center gap-3 text-on-surface">
              <span className="material-symbols-outlined text-electric-blue text-sm">check_circle</span>
              <span>Custom Dashboards</span>
            </li>
            <li className="flex items-center gap-3 text-on-surface">
              <span className="material-symbols-outlined text-electric-blue text-sm">check_circle</span>
              <span>Unlimited Workflows</span>
            </li>
            <li className="flex items-center gap-3 text-on-surface">
              <span className="material-symbols-outlined text-electric-blue text-sm">check_circle</span>
              <span>1 Month High-Touch Support</span>
            </li>
          </ul>
          <button onClick={onBookCall} className="w-full py-4 bg-electric-blue text-white rounded hover:brightness-110 transition-all">Book Now</button>
        </div>
        {/* Tier 3 */}
        <div className="p-12 bg-background-elevated border border-white/5 rounded-xl hover:border-electric-blue hover:-translate-y-4 hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.2)] transition-all duration-300 flex flex-col cursor-pointer">
          <h3 className="font-headline-md text-headline-md mb-2">Scale</h3>
          <p className="text-on-surface-variant mb-8">Custom AI ecosystem for established enterprises.</p>
          <div className="text-4xl font-headline-md mb-8">Custom<span className="text-lg font-body-md text-on-surface-variant"> Quote</span></div>
          <ul className="space-y-4 mb-12 flex-grow">
            <li className="flex items-center gap-3 text-on-surface-variant">
              <span className="material-symbols-outlined text-electric-blue text-sm">check_circle</span>
              <span>Proprietary LLM Fine-tuning</span>
            </li>
            <li className="flex items-center gap-3 text-on-surface-variant">
              <span className="material-symbols-outlined text-electric-blue text-sm">check_circle</span>
              <span>Legacy System Integration</span>
            </li>
            <li className="flex items-center gap-3 text-on-surface-variant">
              <span className="material-symbols-outlined text-electric-blue text-sm">check_circle</span>
              <span>Dedicated Automation Lead</span>
            </li>
          </ul>
          <button onClick={onBookCall} className="w-full py-4 border border-white/10 rounded hover:bg-white/5 transition-all">Contact Sales</button>
        </div>
      </div>
    </section>
  );
}
