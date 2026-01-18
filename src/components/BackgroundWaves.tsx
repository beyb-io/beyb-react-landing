export default function BackgroundWaves() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute -left-[20%] top-[10%] h-[360px] w-[720px] rounded-full blur-[120px]"
        style={{
          background:
            'radial-gradient(circle, hsl(var(--accent-gold) / 0.18), transparent 70%)',
        }}
      />
      <div
        className="absolute -right-[25%] top-[45%] h-[360px] w-[720px] rounded-full blur-[140px]"
        style={{
          background:
            'radial-gradient(circle, hsl(var(--accent-gold) / 0.14), transparent 70%)',
        }}
      />

      <svg
        className="absolute -top-24 left-1/2 w-[1200px] -translate-x-1/2 text-[hsl(var(--border)/0.55)] opacity-70"
        viewBox="0 0 1200 320"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M0 140C140 120 220 80 360 88C520 98 620 160 780 156C940 150 1040 88 1200 60"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <path
          d="M0 200C160 210 260 170 420 170C600 170 720 230 900 236C1040 242 1120 220 1200 210"
          stroke="currentColor"
          strokeWidth="1"
        />
      </svg>

      <svg
        className="absolute bottom-[-120px] right-[-160px] w-[960px] text-[hsl(var(--accent-gold)/0.6)] opacity-60 blur-[0.5px]"
        viewBox="0 0 960 320"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M0 240C160 210 280 180 420 170C620 156 740 210 960 160"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path
          d="M0 290C140 270 260 250 420 238C600 224 740 250 960 220"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.7"
        />
      </svg>

      <div className="sparkles absolute inset-0 hidden dark:md:block" />
    </div>
  )
}
