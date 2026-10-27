export default function BackgroundElements() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden bg-[#020202]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_115%,rgba(16,185,129,0.18),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_78%_-10%,rgba(255,255,255,0.08),transparent_42%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.6),transparent_45%)]" />

      <div
        className="absolute inset-0 text-white opacity-[0.055]"
        style={{
          backgroundImage:
            "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "linear-gradient(to bottom, black, transparent 85%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black, transparent 85%)",
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.05] mix-blend-soft-light"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
          backgroundSize: "180px 180px",
        }}
      />

      <div className="absolute left-1/2 top-1/2 h-[52vmax] w-[52vmax] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.045]" />
      <div className="absolute left-1/2 top-1/2 h-[78vmax] w-[78vmax] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.03]" />
    </div>
  );
}
