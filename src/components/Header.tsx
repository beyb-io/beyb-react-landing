import { Link } from '@tanstack/react-router'

import ThemeToggle from '@/components/ThemeToggle'
import { Button } from '@/components/ui/button'
import { useI18n } from '@/lib/i18n'

export default function Header() {
  const { copy } = useI18n()

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center gap-4 px-6 py-4">
        <Link
          to="/"
          className="text-lg font-semibold tracking-tight text-foreground"
        >
          {copy.name}
        </Link>

        <nav className="order-3 flex w-full flex-wrap items-center gap-4 text-[11px] uppercase tracking-[0.2em] text-muted-foreground md:order-none md:w-auto md:flex-1 md:justify-center">
          <a href="#how" className="transition-colors hover:text-foreground">
            {copy.nav.how}
          </a>
          <a href="#demo" className="transition-colors hover:text-foreground">
            {copy.nav.demo}
          </a>
          <a href="#team" className="transition-colors hover:text-foreground">
            {copy.nav.team}
          </a>
          <a href="#faq" className="transition-colors hover:text-foreground">
            {copy.nav.faq}
          </a>
        </nav>

        <div className="order-2 ml-auto flex items-center gap-3 md:order-none md:ml-0">
          {/* Language toggle removed; English is default */}
          <ThemeToggle label={copy.ui.toggleTheme} />
          <Button
            asChild
            variant="outline"
            className="rounded-full border-[hsl(var(--accent-gold))] px-5 text-foreground shadow-[0_0_30px_hsl(var(--accent-gold)/0.35)] hover:bg-[hsl(var(--accent-gold)/0.12)]"
          >
            <a href="#waitlist">{copy.navCta}</a>
          </Button>
        </div>
      </div>
    </header>
  )
}
