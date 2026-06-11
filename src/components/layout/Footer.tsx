export function Footer() {
  return (
    <footer className="relative w-full overflow-hidden border-t border-outline-variant/10 bg-background-elevated">
      <div className="font-display-xl text-[20vw] font-bold opacity-5 absolute -bottom-10 -left-10 select-none pointer-events-none">WESHIPZ</div>
      <div className="flex flex-col md:flex-row justify-between items-end px-gutter py-section-padding gap-8 relative z-10">
        <div className="flex flex-col gap-6 w-full md:w-auto">
          <div className="font-label-mono text-label-mono text-on-surface mb-8">
            © 2026 WESHIPZ. ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-8">
            <a className="font-label-mono text-label-mono uppercase text-on-surface-variant hover:text-electric-blue transition-colors" href="#">Privacy Policy</a>
            <a className="font-label-mono text-label-mono uppercase text-on-surface-variant hover:text-electric-blue transition-colors" href="#">Terms of Service</a>
          </div>
        </div>
        <div className="flex flex-col gap-6 w-full md:w-auto md:items-end">
          <div className="flex gap-8">
            <a className="font-label-mono text-label-mono uppercase text-on-surface-variant hover:text-electric-blue transition-colors" href="#">LinkedIn</a>
            <a className="font-label-mono text-label-mono uppercase text-on-surface-variant hover:text-electric-blue transition-colors" href="#">Twitter</a>
          </div>
          <p className="font-body-md text-on-surface-variant text-right">Engineering growth through intelligent automation.</p>
        </div>
      </div>
    </footer>
  );
}
