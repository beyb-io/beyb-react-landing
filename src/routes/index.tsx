import { type FormEvent, useRef, useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { Bot, MessageSquare, Search, Wallet, Zap } from 'lucide-react'

import BackgroundWaves from '@/components/BackgroundWaves'
import ChatPreview from '@/components/ChatPreview'
import {
  AnimatedBeam,
  BeamContainer,
  BeamNode,
} from '@/components/ui/animated-beam'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs'
import { LogoCarousel } from '@/components/ui/logo-carousel'
import { TextureCard } from '@/components/ui/texture-card'
import { useI18n } from '@/lib/i18n'

export const Route = createFileRoute('/')({ component: App })

const heroLogos = [
  'PancakeSwap',
  'Venus',
  'Alpaca',
  'Beefy',
  'Wombat',
  'Radiant',
  'Stargate',
  'Pendle',
]

function App() {
  const { copy } = useI18n()
  const [ctaValue, setCtaValue] = useState('')
  const [ctaStatus, setCtaStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle')
  const [ctaError, setCtaError] = useState('')
  const howContainerRef = useRef<HTMLDivElement>(null)
  const howCoreRef = useRef<HTMLDivElement>(null)
  const howStepOneRef = useRef<HTMLDivElement>(null)
  const howStepTwoRef = useRef<HTMLDivElement>(null)
  const howStepThreeRef = useRef<HTMLDivElement>(null)
  const howStepFourRef = useRef<HTMLDivElement>(null)
  const [stepOne, stepTwo, stepThree, stepFour] = copy.how.steps

  const isLoading = ctaStatus === 'loading'
  const isSuccess = ctaStatus === 'success'
  const isError = ctaStatus === 'error'

  const isValidContact = (value: string) => {
    const normalized = value.trim()
    if (!normalized) {
      return false
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const telegramHandleRegex = /^@?[a-zA-Z0-9_]{5,32}$/
    const telegramUrlRegex =
      /^https?:\/\/(t\.me|telegram\.me)\/[a-zA-Z0-9_]{5,32}$/

    return (
      emailRegex.test(normalized) ||
      telegramHandleRegex.test(normalized) ||
      telegramUrlRegex.test(normalized)
    )
  }

  const handleCtaSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const normalized = ctaValue.trim()

    if (!isValidContact(normalized)) {
      setCtaError(copy.cta.error)
      setCtaStatus('error')
      return
    }

    setCtaStatus('loading')
    setCtaError('')

    setTimeout(() => {
      setCtaStatus('success')
      setCtaValue('')
    }, 900)
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-aurora">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-screen overflow-hidden">
        <video
          className="h-full w-full object-cover opacity-60"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src="/bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-40" />
      <BackgroundWaves />

      <section className="relative z-10 mx-auto flex min-h-[90vh] w-full max-w-6xl flex-col gap-12 px-6 pb-20 pt-16 md:min-h-screen md:grid md:grid-cols-[1.05fr_0.95fr] md:items-center md:pt-24">
        <div className="flex flex-col gap-6">
          <Badge
            variant="outline"
            className="w-fit border-border/60 bg-background/70 px-3 py-1 text-[11px] uppercase tracking-[0.3em] text-muted-foreground"
          >
            {copy.hero.eyebrow}
          </Badge>
          <h1 className="animate-fade-up text-[34px] font-semibold leading-tight tracking-tight text-foreground md:text-5xl">
            {copy.hero.title}
          </h1>
          <p
            className="animate-fade-up text-base leading-relaxed text-muted-foreground md:text-lg"
            style={{ animationDelay: '120ms' }}
          >
            {copy.hero.subtitle}
          </p>
          <div
            className="animate-fade-up flex flex-col gap-3 sm:flex-row sm:items-center"
            style={{ animationDelay: '220ms' }}
          >
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-[hsl(var(--accent-gold))] text-foreground shadow-[0_0_30px_hsl(var(--accent-gold)/0.35)] hover:bg-[hsl(var(--accent-gold)/0.12)]"
            >
              <a href="#waitlist">{copy.hero.primaryCta}</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-border/70 bg-background/60"
            >
              <a href="#demo">{copy.hero.secondaryCta}</a>
            </Button>
          </div>
          <p
            className="animate-fade-up text-xs uppercase tracking-[0.3em] text-muted-foreground"
            style={{ animationDelay: '320ms' }}
          >
            {copy.hero.note}
          </p>
          <div
            className="animate-fade-up mt-4"
            style={{ animationDelay: '380ms' }}
          >
            <LogoCarousel logos={heroLogos} ariaLabel={copy.hero.logosLabel} />
          </div>
        </div>

        <div className="relative animate-fade-up" style={{ animationDelay: '140ms' }}>
          <div className="glass-card relative overflow-hidden p-6 md:p-8">
            <div className="absolute inset-0 bg-grid opacity-30" />
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[hsl(var(--accent-gold)/0.25)] blur-[60px]" />
            <div className="relative flex flex-col gap-6">
              <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                <span>{copy.hero.placeholder.label}</span>
                <span className="rounded-full border border-border/60 bg-background/70 px-3 py-1">
                  {copy.hero.placeholder.badge}
                </span>
              </div>
              <div className="space-y-3">
                <div className="h-3 w-3/4 rounded-full bg-muted/40" />
                <div className="h-3 w-2/3 rounded-full bg-muted/30" />
                <div className="h-3 w-1/2 rounded-full bg-muted/25" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-border/50 bg-background/60 p-4">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                    {copy.hero.placeholder.cards[0].label}
                  </p>
                  <p className="mt-2 text-base font-semibold text-foreground">
                    {copy.hero.placeholder.cards[0].title}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {copy.hero.placeholder.cards[0].text}
                  </p>
                </div>
                <div className="rounded-2xl border border-border/50 bg-background/60 p-4">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                    {copy.hero.placeholder.cards[1].label}
                  </p>
                  <p className="mt-2 text-base font-semibold text-foreground">
                    {copy.hero.placeholder.cards[1].title}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {copy.hero.placeholder.cards[1].text}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>{copy.hero.placeholder.footerLeft}</span>
                <span className="rounded-full border border-border/40 px-3 py-1">
                  {copy.hero.placeholder.footerRight}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-6xl px-6 py-16">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            {copy.what.title}
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {copy.what.items.map((item, index) => (
            <Card
              key={item.title}
              className="glass-card animate-fade-up border-border/50 py-2 shadow-none"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <CardHeader className="gap-3">
                <Badge
                  variant="secondary"
                  className="w-fit bg-background/70 text-[11px] uppercase tracking-[0.25em] text-muted-foreground"
                >
                  {item.label}
                </Badge>
                <CardTitle className="text-lg font-semibold text-foreground">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0 text-sm leading-relaxed text-muted-foreground">
                {item.text}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section
        id="how"
        className="relative mx-auto w-full max-w-6xl px-6 py-16"
      >
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            {copy.how.title}
          </h2>
        </div>
        <BeamContainer
          ref={howContainerRef}
          className="glass-card relative mt-10 grid gap-10 overflow-hidden px-6 py-10 md:grid-cols-[1fr_auto_1fr] md:items-center md:px-10"
        >
          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-col items-center gap-3 text-center">
              <BeamNode
                ref={howStepOneRef}
                className="h-12 w-12 border-2 border-amber-500/25 bg-amber-500/10"
              >
                <Wallet className="h-5 w-5 text-amber-600" />
              </BeamNode>
              <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                {stepOne?.label}
              </span>
              <span className="text-sm font-semibold text-foreground">
                {stepOne?.title}
              </span>
            </div>
            <div className="flex flex-col items-center gap-3 text-center">
              <BeamNode
                ref={howStepTwoRef}
                className="h-12 w-12 border-2 border-sky-500/25 bg-sky-500/10"
              >
                <MessageSquare className="h-5 w-5 text-sky-600" />
              </BeamNode>
              <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                {stepTwo?.label}
              </span>
              <span className="text-sm font-semibold text-foreground">
                {stepTwo?.title}
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-3 text-center">
            <BeamNode
              ref={howCoreRef}
              className="h-16 w-16 border-2 border-[hsl(var(--accent-gold)/0.35)] bg-[hsl(var(--accent-gold)/0.15)] shadow-[0_0_20px_hsl(var(--accent-gold)/0.35)]"
            >
              <Bot className="h-7 w-7 text-[hsl(var(--accent-gold))]" />
            </BeamNode>
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              BEYB AI
            </span>
          </div>
          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-col items-center gap-3 text-center">
              <BeamNode
                ref={howStepThreeRef}
                className="h-12 w-12 border-2 border-emerald-500/25 bg-emerald-500/10"
              >
                <Search className="h-5 w-5 text-emerald-600" />
              </BeamNode>
              <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                {stepThree?.label}
              </span>
              <span className="text-sm font-semibold text-foreground">
                {stepThree?.title}
              </span>
            </div>
            <div className="flex flex-col items-center gap-3 text-center">
              <BeamNode
                ref={howStepFourRef}
                className="h-12 w-12 border-2 border-orange-500/25 bg-orange-500/10"
              >
                <Zap className="h-5 w-5 text-orange-600" />
              </BeamNode>
              <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                {stepFour?.label}
              </span>
              <span className="text-sm font-semibold text-foreground">
                {stepFour?.title}
              </span>
            </div>
          </div>
          <AnimatedBeam
            containerRef={howContainerRef}
            fromRef={howStepOneRef}
            toRef={howCoreRef}
            duration={3}
            curvature={0.2}
            gradientStartColor="#f59e0b"
            gradientStopColor="#fbbf24"
          />
          <AnimatedBeam
            containerRef={howContainerRef}
            fromRef={howStepTwoRef}
            toRef={howCoreRef}
            duration={3}
            delay={0.4}
            curvature={-0.2}
            gradientStartColor="#38bdf8"
            gradientStopColor="#0ea5e9"
          />
          <AnimatedBeam
            containerRef={howContainerRef}
            fromRef={howStepThreeRef}
            toRef={howCoreRef}
            duration={3}
            delay={0.8}
            curvature={0.2}
            gradientStartColor="#34d399"
            gradientStopColor="#10b981"
          />
          <AnimatedBeam
            containerRef={howContainerRef}
            fromRef={howStepFourRef}
            toRef={howCoreRef}
            duration={3}
            delay={1.2}
            curvature={-0.2}
            gradientStartColor="#fb923c"
            gradientStopColor="#f97316"
          />
        </BeamContainer>
      </section>

      <section
        id="why"
        className="relative mx-auto w-full max-w-6xl px-6 py-16"
      >
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            {copy.why.title}
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {copy.why.items.map((item, index) => (
            <Card
              key={item.title}
              className="glass-card animate-fade-up border-border/50 py-2 shadow-none"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <CardHeader className="gap-3">
                <CardTitle className="text-lg font-semibold text-foreground">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0 text-sm leading-relaxed text-muted-foreground">
                {item.text}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section
        id="demo"
        className="relative mx-auto w-full max-w-6xl px-6 py-16"
      >
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            {copy.demo.title}
          </h2>
          <p className="text-sm text-muted-foreground md:text-base">
            {copy.demo.subtitle}
          </p>
        </div>
        <Tabs defaultValue="lowRisk" className="mt-8">
          <TabsList className="h-auto w-full flex-wrap gap-2 rounded-full border border-border/50 bg-background/60 p-2 md:w-fit">
            <TabsTrigger value="lowRisk" className="rounded-full px-4 py-2">
              {copy.demo.tabs.lowRisk}
            </TabsTrigger>
            <TabsTrigger value="highApy" className="rounded-full px-4 py-2">
              {copy.demo.tabs.highApy}
            </TabsTrigger>
            <TabsTrigger value="explain" className="rounded-full px-4 py-2">
              {copy.demo.tabs.explain}
            </TabsTrigger>
          </TabsList>
          <div className="mt-6">
            <TabsContent value="lowRisk">
              <ChatPreview
                compact
                messages={copy.demo.samples.lowRisk}
                labels={copy.labels}
                inputPlaceholder={copy.chatInputPlaceholder}
              />
            </TabsContent>
            <TabsContent value="highApy">
              <ChatPreview
                compact
                messages={copy.demo.samples.highApy}
                labels={copy.labels}
                inputPlaceholder={copy.chatInputPlaceholder}
              />
            </TabsContent>
            <TabsContent value="explain">
              <ChatPreview
                compact
                messages={copy.demo.samples.explain}
                labels={copy.labels}
                inputPlaceholder={copy.chatInputPlaceholder}
              />
            </TabsContent>
          </div>
        </Tabs>
      </section>

      <section
        id="security"
        className="relative mx-auto w-full max-w-6xl px-6 py-16"
      >
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            {copy.security.title}
          </h2>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {copy.security.items.map((item, index) => (
            <div
              key={item}
              className="glass-card animate-fade-up border-border/50 p-4 text-sm leading-relaxed text-muted-foreground"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section
        id="team"
        className="relative mx-auto w-full max-w-6xl px-6 py-16"
      >
        <Card className="glass-card border-border/50 py-4 shadow-none">
          <CardHeader className="gap-4">
            <CardTitle className="text-2xl font-semibold tracking-tight md:text-3xl">
              {copy.team.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-6 text-sm text-muted-foreground md:text-base">
            <div className="flex flex-col gap-3">
              {copy.team.body.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {copy.team.badges.map((badge) => (
                <Badge
                  key={badge}
                  variant="outline"
                  className="border-border/60 bg-background/60 text-xs uppercase tracking-[0.18em] text-muted-foreground"
                >
                  {badge}
                </Badge>
              ))}
            </div>
            <div className="grid gap-4 pt-2 sm:grid-cols-2 lg:grid-cols-3">
              {copy.team.members.map((member) => (
                <div
                  key={member.name}
                  className="glass-card border-border/50 p-4"
                >
                  <img
                    src={member.image}
                    alt={member.imageAlt}
                    className="h-44 w-full rounded-2xl object-cover"
                    loading="lazy"
                  />
                  <div className="mt-4 flex flex-col gap-2">
                    <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      {member.role}
                    </span>
                    <h3 className="text-base font-semibold text-foreground">
                      {member.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {member.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <section
        id="waitlist"
        className="relative mx-auto w-full max-w-6xl px-6 py-16"
      >
        <TextureCard className="relative w-full overflow-hidden border-border/40 shadow-[0_40px_90px_-70px_hsl(var(--accent-gold)/0.6)]">
          <div className="edge-glow" />
          <div className="relative px-6 py-10 text-foreground md:px-10">
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div className="max-w-xl">
                <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                  {copy.cta.title}
                </h2>
                <p className="mt-3 text-sm text-muted-foreground md:text-base">
                  {copy.cta.text}
                </p>
                <p className="mt-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  {copy.cta.socialProof}
                </p>
              </div>
              <div className="w-full max-w-md">
                <form
                  className="flex flex-col gap-3 sm:flex-row"
                  onSubmit={handleCtaSubmit}
                >
                  <Input
                    className="h-11 rounded-full border-border/60 bg-background/70"
                    placeholder={copy.cta.placeholder}
                    aria-label={copy.cta.placeholder}
                    aria-invalid={isError}
                    disabled={isLoading}
                    onChange={(event) => {
                      setCtaValue(event.target.value)
                      if (ctaStatus !== 'idle') {
                        setCtaStatus('idle')
                      }
                      if (ctaError) {
                        setCtaError('')
                      }
                    }}
                    type="text"
                    value={ctaValue}
                  />
                  <Button
                    className="h-11 rounded-full border-[hsl(var(--accent-gold))] px-6 text-foreground shadow-[0_0_24px_hsl(var(--accent-gold)/0.3)] hover:bg-[hsl(var(--accent-gold)/0.12)]"
                    variant="outline"
                    type="submit"
                    disabled={isLoading}
                  >
                    {isLoading ? copy.cta.loading : copy.cta.button}
                  </Button>
                </form>
                {isError ? (
                  <p className="mt-3 text-xs text-destructive" role="alert">
                    {ctaError}
                  </p>
                ) : null}
                {isSuccess ? (
                  <p className="mt-3 text-xs text-emerald-400" role="status">
                    {copy.cta.success}
                  </p>
                ) : null}
                <p className="mt-3 text-xs text-muted-foreground">
                  {copy.cta.note}
                </p>
              </div>
            </div>
          </div>
        </TextureCard>
      </section>

      <section
        id="faq"
        className="relative mx-auto w-full max-w-6xl px-6 py-16"
      >
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            {copy.faq.title}
          </h2>
        </div>
        <Accordion
          type="single"
          collapsible
          className="mt-8 grid gap-4 md:grid-cols-2"
        >
          {copy.faq.items.map((item, index) => (
            <AccordionItem
              key={item.question}
              value={`faq-${index}`}
              className="glass-card animate-fade-up border border-border/50 px-4"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <AccordionTrigger className="text-base font-semibold text-foreground">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <footer className="relative mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 pb-10 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
        <span>{copy.footer.copyright}</span>
        <div className="flex gap-4">
          {copy.footer.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>
      </footer>
    </main>
  )
}
