import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type CSSProperties,
  type FormEvent,
  type ReactNode,
  useMemo,
  useRef,
  useState,
} from 'react'
import {
  Eye,
  FileCheck,
  KeyRound,
  ShieldCheck,
} from 'lucide-react'
import { createFileRoute } from '@tanstack/react-router'

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
import BeybLogo from '@/components/BeybLogo'
import { BorderBeam } from '@/components/ui/border-beam'
import { Input } from '@/components/ui/input'
import { ShimmerButton } from '@/components/ui/shimmer-button'

export const Route = createFileRoute('/')({ component: LandingPage })

const textureWaveAsset =
  'http://localhost:3845/assets/82f3fac497d62fd914622abc1823127c3c6a9e0c.png'
const arrowAsset =
  'http://localhost:3845/assets/97446840bad0d9404a230950e09daa14100c6239.png'

const simplifyCards = [
  {
    eyebrow: 'QUESTION',
    title: 'Ask in chat',
    text: 'Ask: "Where can I get 10% APY with low risk?" and get an answer in seconds.',
  },
  {
    eyebrow: 'EXPLAINS RISKS',
    title: 'Explains risks',
    text: 'Clear explanation of risks: volatility, liquidity, smart contract.',
  },
  {
    eyebrow: 'ANALYZE',
    title: 'Ask in chat',
    text: 'AI analyzes 50+ BNB Chain protocols in real time.',
  },
]

const whyBnbCards = [
  {
    title: 'Low Fees',
    text: 'From $0.10 vs $5-50 on Ethereum',
  },
  {
    title: 'Rich DeFi ecosystem',
    text: '500+ protocols, $5B+ TVL',
  },
  {
    title: 'High liquidity',
    text: 'Quick access to your funds.',
  },
]

const safetyCards = [
  {
    title: 'Non-custodial access',
    text: 'Your keys remain under your control. BEYB does not hold user funds.',
    icon: KeyRound,
    className: 'md:col-span-2 md:min-h-[220px]',
  },
  {
    title: 'Audited protocols',
    text: 'We focus on protocols with public audits and established on-chain track records.',
    icon: FileCheck,
    className: 'md:min-h-[220px]',
  },
  {
    title: 'Risk visibility',
    text: 'Each strategy includes a plain-language breakdown of liquidity, volatility and contract exposure.',
    icon: Eye,
    className: 'md:min-h-[220px]',
  },
  {
    title: 'Safety checks',
    text: 'BEYB surfaces red flags before you move capital and helps compare safer alternatives.',
    icon: ShieldCheck,
    className: 'md:col-span-2 md:min-h-[220px]',
  },
]

const faqItems = [
  {
    question: 'What does BEYB actually do?',
    answer:
      'It turns a natural-language question into a shortlist of BNB yield strategies, then explains tradeoffs and risks in plain English.',
  },
  {
    question: 'Does BEYB manage my funds?',
    answer:
      'No. The product is designed as a research and decision layer. Wallet control stays with the user.',
  },
  {
    question: 'How are strategies ranked?',
    answer:
      'They are compared by APY profile, liquidity conditions, contract and protocol risk, and how easy it is to exit.',
  },
  {
    question: 'Is this only for advanced DeFi users?',
    answer:
      'No. The main point is to remove DeFi jargon and show why a strategy may or may not fit a user goal.',
  },
  {
    question: 'Why start with BNB Chain?',
    answer:
      'BNB Chain has low fees, deep retail activity and enough protocol diversity to make the first release useful quickly.',
  },
  {
    question: 'When do I get access?',
    answer:
      'Early access is rolled out through the waitlist as demo capacity opens up and onboarding is expanded.',
  },
]

const marqueeItems = [
  'Pancake Swap',
  'Venus',
  'Pendle',
  'Pancake Swap',
  'Venus',
  'Pendle',
]

function LandingPage() {
  const [contact, setContact] = useState('')
  const [ctaStatus, setCtaStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const beamContainerRef = useRef<HTMLDivElement>(null)
  const beamCenterRef = useRef<HTMLDivElement>(null)
  const beamTopLeftRef = useRef<HTMLDivElement>(null)
  const beamTopRightRef = useRef<HTMLDivElement>(null)
  const beamBottomLeftRef = useRef<HTMLDivElement>(null)
  const beamBottomRightRef = useRef<HTMLDivElement>(null)

  const isLoading = ctaStatus === 'loading'

  const marqueeText = useMemo(() => marqueeItems.join('   '), [])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const value = contact.trim()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const telegramHandleRegex = /^@?[a-zA-Z0-9_]{5,32}$/
    const telegramUrlRegex =
      /^https?:\/\/(t\.me|telegram\.me)\/[a-zA-Z0-9_]{5,32}$/

    if (
      !value ||
      (!emailRegex.test(value) &&
        !telegramHandleRegex.test(value) &&
        !telegramUrlRegex.test(value))
    ) {
      setCtaStatus('error')
      return
    }

    setCtaStatus('loading')

    setTimeout(() => {
      setContact('')
      setCtaStatus('success')
    }, 800)
  }

  return (
    <main
      className="landing-shell text-foreground"
      style={
        {
          '--texture-wave': `url("${textureWaveAsset}")`,
        } as CSSProperties
      }
    >
      <div className="landing-texture landing-texture-top" aria-hidden="true" />
      <div className="landing-texture landing-texture-middle" aria-hidden="true" />
      <div className="landing-texture landing-texture-bottom" aria-hidden="true" />

      <section className="relative mx-auto flex min-h-[100dvh] w-full max-w-[1180px] flex-col px-4 pb-4 pt-4 sm:px-6 lg:px-8">
        <div className="hero-grid absolute inset-x-0 top-0 h-[100dvh]" aria-hidden="true" />

        <header className="animate-rise flex items-center justify-between gap-6 px-2 py-3 sm:px-4">
          <nav className="hidden items-center gap-10 text-[16px] font-semibold uppercase tracking-[-0.02em] text-ink/70 lg:flex">
            <a href="#top" className="transition-colors hover:text-ink">BEYB</a>
            <a href="#how-it-works" className="transition-colors hover:text-ink">How it works</a>
            <a href="#team" className="transition-colors hover:text-ink">Team</a>
            <a href="#faq" className="transition-colors hover:text-ink">FAQ</a>
          </nav>

          <div className="flex items-center gap-3">
            <LaunchAppButton className="h-12 px-7 text-[16px] font-medium" />
          </div>
        </header>

        <div
          id="top"
          className="relative flex flex-1 flex-col justify-center pb-8 pt-6 sm:pt-8"
        >
          <div className="hero-glow hero-glow-left" aria-hidden="true" />
          <div className="hero-glow hero-glow-right" aria-hidden="true" />

          <div className="animate-rise delay-1 flex w-full justify-start overflow-visible">
            <BeybLogo className="hero-wordmark h-auto w-[min(74vw,1080px)] max-w-none" />
          </div>

          <div className="animate-rise delay-2 mt-8 max-w-[1180px]">
            <h2 className="max-w-[16ch] text-balance text-left text-[clamp(2.9rem,5vw,5.25rem)] font-semibold leading-[0.94] tracking-[-0.075em] text-ink">
              Get BNB Yield by asking one question
            </h2>
            <p className="mt-4 max-w-[980px] text-left text-[clamp(1.2rem,2vw,2rem)] leading-[1.25] tracking-[-0.03em] text-ink/70">
              Ask about returns - AI shows you 6-28% APY strategies and explains risks
            </p>
          </div>

          <div className="animate-rise delay-3 mt-10 flex flex-wrap items-center gap-4">
            <LaunchAppButton className="h-11 px-5 text-base font-medium" />
          </div>
        </div>

        <div className="relative left-1/2 mt-auto w-screen -translate-x-1/2 overflow-hidden border-y border-theme-line/80 bg-theme-strip shadow-[0_4px_14.5px_rgba(0,0,0,0.18)]">
          <div className="marquee-track py-4 text-[clamp(1.5rem,4vw,2.8rem)] font-medium uppercase tracking-[-0.03em] text-ink/85">
            <span>{marqueeText}</span>
            <span aria-hidden="true">{marqueeText}</span>
          </div>
        </div>
      </section>

      <section id="how-beyb-simplify-yield" className="mx-auto w-full max-w-[1180px] px-4 py-10 sm:px-6 lg:px-8">
        <SectionTitle title="How BEYB simplify yield" />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {simplifyCards.map((card) => (
            <BeamCard key={card.title + card.eyebrow} className="h-full min-h-[206px]">
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-ink-muted">
                {card.eyebrow}
              </p>
              <h3 className="mt-5 text-[1.6rem] font-semibold tracking-[-0.04em] text-ink">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-ink-muted sm:text-base">{card.text}</p>
            </BeamCard>
          ))}
        </div>
      </section>

      <section id="how-it-works" className="mx-auto w-full max-w-[1180px] px-4 py-10 sm:px-6 lg:px-8">
        <SectionTitle title="How it works" />
        <div className="theme-panel relative mt-6 overflow-hidden p-4 sm:p-6">
          <BorderBeam
            size={140}
            duration={8}
            colorFrom="#d7b990"
            colorTo="#f4eee5"
            borderWidth={2}
          />
          <div className="grid gap-5 md:hidden">
            <MiniStepCard title="Подключите кошелек" icon="💼" />
            <MiniStepCard title="Получите описание стратегии" icon="🔍" />
            <MiniStepCard title="Защита и риски" icon="🛡️" />
            <MiniStepCard title="Доход и APY" icon="⚡" />
          </div>

          <BeamContainer
            ref={beamContainerRef}
            className="relative hidden min-h-[420px] items-center justify-center rounded-[24px] bg-[linear-gradient(180deg,rgba(255,255,255,0.42),rgba(255,255,255,0.08))] px-10 py-8 md:flex"
          >
            <div className="grid w-full grid-cols-[1fr_auto_1fr] items-center gap-x-8 gap-y-12">
              <div className="flex justify-end">
                <StepNode
                  ref={beamTopLeftRef}
                  icon="💼"
                  label="Подключите кошелек"
                  tone="sky"
                />
              </div>

              <div className="row-span-2 flex justify-center">
                <CenterNode ref={beamCenterRef} />
              </div>

              <div className="flex justify-start">
                <StepNode
                  ref={beamTopRightRef}
                  icon="🔍"
                  label="Получите описание стратегии"
                  tone="gold"
                />
              </div>

              <div className="flex justify-end">
                <StepNode
                  ref={beamBottomLeftRef}
                  icon="🛡️"
                  label="Защита и риски"
                  tone="blue"
                />
              </div>

              <div className="flex justify-start">
                <StepNode
                  ref={beamBottomRightRef}
                  icon="⚡"
                  label="Доход и APY"
                  tone="peach"
                />
              </div>
            </div>

            <AnimatedBeam
              containerRef={beamContainerRef}
              fromRef={beamTopLeftRef}
              toRef={beamCenterRef}
              curvature={0.12}
              pathWidth={2}
              gradientStartColor="#d4bc9f"
              gradientStopColor="#aa8f72"
            />
            <AnimatedBeam
              containerRef={beamContainerRef}
              fromRef={beamTopRightRef}
              toRef={beamCenterRef}
              curvature={-0.12}
              pathWidth={2}
              gradientStartColor="#d4bc9f"
              gradientStopColor="#aa8f72"
            />
            <AnimatedBeam
              containerRef={beamContainerRef}
              fromRef={beamBottomLeftRef}
              toRef={beamCenterRef}
              curvature={-0.12}
              pathWidth={2}
              gradientStartColor="#d4bc9f"
              gradientStopColor="#aa8f72"
              delay={0.2}
            />
            <AnimatedBeam
              containerRef={beamContainerRef}
              fromRef={beamBottomRightRef}
              toRef={beamCenterRef}
              curvature={0.12}
              pathWidth={2}
              gradientStartColor="#d4bc9f"
              gradientStopColor="#aa8f72"
              delay={0.35}
            />
          </BeamContainer>
        </div>
      </section>

      <section id="why-bnb-chain" className="mx-auto w-full max-w-[1180px] px-4 py-10 sm:px-6 lg:px-8">
        <SectionTitle title="Why BNB chain" />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {whyBnbCards.map((card) => (
            <BeamCard key={card.title} className="min-h-[154px] justify-center">
              <h3 className="text-[1.5rem] font-semibold tracking-[-0.04em] text-ink">
                {card.title}
              </h3>
              <p className="mt-5 text-sm leading-7 text-ink-muted sm:text-base">{card.text}</p>
            </BeamCard>
          ))}
        </div>
      </section>

      <section id="safety" className="mx-auto w-full max-w-[1180px] px-4 py-10 sm:px-6 lg:px-8">
        <SectionTitle title="Safety first" />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {safetyCards.map((card) => {
            const Icon = card.icon
            return (
              <BeamCard key={card.title} className={`justify-between ${card.className}`}>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-theme-card-soft text-ink shadow-[0_6px_16px_rgba(160,132,96,0.14)]">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="mt-8">
                  <h3 className="text-[1.35rem] font-semibold tracking-[-0.03em] text-ink">
                    {card.title}
                  </h3>
                  <p className="mt-3 max-w-[40ch] text-sm leading-7 text-ink-muted sm:text-base">
                    {card.text}
                  </p>
                </div>
              </BeamCard>
            )
          })}
        </div>
      </section>

      <section id="team" className="mx-auto w-full max-w-[1180px] px-4 py-10 sm:px-6 lg:px-8">
        <SectionTitle title="Our team" />
        <BeamCard className="mt-6 min-h-[144px] justify-center">
          <p className="max-w-[720px] text-sm leading-7 text-ink-muted sm:text-base">
            Product, DeFi research and AI tooling team building a simpler way to navigate BNB yield.
          </p>
        </BeamCard>
      </section>

      <section id="faq" className="mx-auto w-full max-w-[1180px] px-4 py-10 sm:px-6 lg:px-8">
        <SectionTitle title="FAQ" />
        <div className="theme-panel relative mt-6 overflow-hidden px-5 py-2 sm:px-8">
          <BorderBeam
            size={140}
            duration={8}
            delay={0.3}
            colorFrom="#d7b990"
            colorTo="#f4eee5"
            borderWidth={2}
          />
          <Accordion type="single" collapsible className="relative z-10">
            {faqItems.map((item, index) => (
              <AccordionItem key={item.question} value={`item-${index}`} className="border-theme-line/60">
                <AccordionTrigger className="py-5 text-base font-semibold text-ink hover:text-ink">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-7 text-ink-muted sm:text-base">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="waitlist" className="mx-auto w-full max-w-[1180px] px-4 pb-16 pt-10 sm:px-6 lg:px-8">
        <div className="cta-card relative grid gap-8 overflow-hidden lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <BorderBeam
            size={160}
            duration={9}
            delay={1}
            colorFrom="#d7b990"
            colorTo="#f4eee5"
            borderWidth={2}
          />
          <div>
            <h2 className="text-[clamp(2rem,4.5vw,3.2rem)] font-semibold tracking-[-0.05em] text-ink">
              Be the First
            </h2>
            <p className="mt-4 max-w-[430px] text-sm leading-7 text-ink sm:text-base">
              Leave your contact - we&apos;ll send a demo and early access to the first release.
            </p>
            <p className="mt-5 text-sm text-ink-muted underline decoration-dotted underline-offset-4">
              500+ already on the waitlist
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div className="flex flex-col gap-3 sm:flex-row">
              <Input
                value={contact}
                onChange={(event) => {
                  setContact(event.target.value)
                  if (ctaStatus !== 'idle') {
                    setCtaStatus('idle')
                  }
                }}
                placeholder="Email or Telegram"
                aria-label="Email or Telegram"
                className="h-[59px] rounded-full border-theme-line bg-theme-card-soft px-5 text-base text-ink placeholder:text-ink-muted focus-visible:border-theme-line focus-visible:ring-0"
              />

              <ShimmerButton
                type="submit"
                disabled={isLoading}
                shimmerColor="#fff6e8"
                shimmerDuration="3.4s"
                background="linear-gradient(96deg, hsl(var(--theme-button-start)) 4.81%, hsl(var(--theme-button-mid)) 27.4%, hsl(var(--theme-button-mid)) 73.56%, hsl(var(--theme-button-end)) 96.15%)"
                className="h-[59px] rounded-full border-theme-line px-6 text-base font-medium text-ink shadow-[0_4px_11.6px_rgba(73,71,60,0.22)]"
              >
                {ctaStatus === 'success' ? 'Sent' : isLoading ? 'Sending...' : 'Get Access'}
                <img src={arrowAsset} alt="" className="size-4 object-contain" />
              </ShimmerButton>
            </div>

            <p className="px-2 text-sm text-ink-muted">
              {ctaStatus === 'error'
                ? 'Enter a valid email or Telegram contact.'
                : 'No spam. 1-2 updates per month'}
            </p>
          </form>
        </div>
      </section>
    </main>
  )
}

function SectionTitle({ title }: { title: string }) {
  return (
    <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold tracking-[-0.05em] text-olive">
      {title}
    </h2>
  )
}

function LaunchAppButton({ className }: { className?: string }) {
  return (
    <ShimmerButton
      type="button"
      shimmerColor="#fff8ec"
      shimmerDuration="2.7s"
      background="linear-gradient(96deg, hsl(var(--theme-button-start)) 4.81%, hsl(var(--theme-button-mid)) 27.4%, hsl(var(--theme-button-mid)) 73.56%, hsl(var(--theme-button-end)) 96.15%)"
      className={`launch-button rounded-full ${className ?? ''}`}
      onClick={() => {
        window.location.href = '/app'
      }}
    >
      Launch App
      <img src={arrowAsset} alt="" className="size-4 object-contain" />
    </ShimmerButton>
  )
}

function BeamCard({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <article className={`theme-card relative overflow-hidden ${className ?? ''}`}>
      <BorderBeam
        size={110}
        duration={7}
        colorFrom="#d7b990"
        colorTo="#f4eee5"
        borderWidth={2}
      />
      {children}
    </article>
  )
}

const StepNode = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<typeof BeamNode> & {
    icon: string
    label: string
    tone?: 'sky' | 'gold' | 'blue' | 'peach'
  }
>(({ icon, label, tone = 'gold', className, ...props }, ref) => {
  const toneClass = {
    sky: 'bg-[#f1efe8]',
    gold: 'bg-[#f3e8cf]',
    blue: 'bg-[#e6edf4]',
    peach: 'bg-[#f5e6db]',
  }[tone]

  return (
    <BeamNode
      ref={ref}
      {...props}
      className={`beam-step-node h-[118px] w-[220px] flex-col rounded-[24px] border-theme-line bg-theme-card px-4 py-4 text-center shadow-[0_7px_18px_rgba(180,145,105,0.14)] ${className ?? ''}`}
    >
      <span className={`beam-icon-circle ${toneClass} text-lg`}>{icon}</span>
      <span className="mt-3 text-sm font-medium leading-5 text-ink">{label}</span>
    </BeamNode>
  )
})

StepNode.displayName = 'StepNode'

function CenterNode(props: ComponentPropsWithoutRef<typeof BeamNode>) {
  return (
    <BeamNode
      {...props}
      className="beam-center-node flex h-[86px] w-[86px] flex-col rounded-full border-theme-line bg-theme-card shadow-[0_8px_24px_rgba(196,163,123,0.26)]"
    >
      <span className="beam-icon-circle bg-[linear-gradient(180deg,#f2e0be,#ebcf97)] text-[20px]">✦</span>
      <span className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-ink/70">
        BEYB AI
      </span>
    </BeamNode>
  )
}

function MiniStepCard({ title, icon }: { title: string; icon: string }) {
  return (
    <div className="theme-card min-h-[100px] items-center text-center">
      <span className="beam-icon-circle bg-theme-card-soft text-lg">{icon}</span>
      <p className="mt-3 text-sm font-medium text-ink">{title}</p>
    </div>
  )
}
