import { useEffect, useMemo } from 'react'

export type Lang = 'en'

export type ChatMessage = {
  role: 'user' | 'ai'
  text: string
}

export const defaultLang: Lang = 'en'

type Translation = {
  meta: {
    title: string
    description: string
  }
  name: string
  navCta: string
  nav: {
    how: string
    demo: string
    team: string
    faq: string
  }
  ui: {
    toggleTheme: string
  }
  hero: {
    eyebrow: string
    title: string
    subtitle: string
    primaryCta: string
    secondaryCta: string
    note: string
    logosLabel: string
    placeholder: {
      label: string
      badge: string
      cards: Array<{ label: string; title: string; text: string }>
      footerLeft: string
      footerRight: string
    }
  }
  chatInputPlaceholder: string
  labels: {
    user: string
    ai: string
  }
  heroChat: ChatMessage[]
  what: {
    title: string
    items: Array<{ label: string; title: string; text: string }>
  }
  how: {
    title: string
    steps: Array<{ label: string; title: string; text: string }>
  }
  why: {
    title: string
    items: Array<{ title: string; text: string }>
  }
  demo: {
    title: string
    subtitle: string
    tabs: {
      lowRisk: string
      highApy: string
      explain: string
    }
    samples: {
      lowRisk: ChatMessage[]
      highApy: ChatMessage[]
      explain: ChatMessage[]
    }
  }
  security: {
    title: string
    items: string[]
  }
  team: {
    title: string
    body: string[]
    badges: string[]
    members: Array<{
      name: string
      role: string
      bio: string
      image: string
      imageAlt: string
    }>
  }
  cta: {
    title: string
    text: string
    placeholder: string
    button: string
    loading: string
    success: string
    error: string
    socialProof: string
    note: string
  }
  faq: {
    title: string
    items: Array<{ question: string; answer: string }>
  }
  footer: {
    copyright: string
    links: Array<{ label: string; href: string }>
  }
}

export const translations: Record<Lang, Translation> = {
  en: {
    meta: {
      title: 'BEYB — AI Yields on BNB',
      description:
        'BEYB is an AI chat for BNB yield strategies. Ask in plain language and get clear risk explanations.',
    },
    name: 'BEYB',
    navCta: 'Join waitlist',
    nav: {
      how: 'How it works',
      demo: 'Demo',
      team: 'Team',
      faq: 'FAQ',
    },
    ui: {
      toggleTheme: 'Toggle theme',
    },
    hero: {
      eyebrow: 'AI × DeFi on BNB Chain',
      title: 'BNB yield in one question.',
      subtitle:
        'Ask about yield — AI finds 6-28% APY strategies and explains risks in plain language.',
      primaryCta: 'Join waitlist',
      secondaryCta: 'See demo',
      note: 'Beta in development.',
      logosLabel: 'DeFi platform logos',
      placeholder: {
        label: 'BEYB beta',
        badge: 'BNB',
        cards: [
          {
            label: 'Yield',
            title: '8-12% APY',
            text: 'Low risk',
          },
          {
            label: 'Risks',
            title: 'Clear',
            text: 'Liquidity + volatility',
          },
        ],
        footerLeft: 'Realtime analysis',
        footerRight: 'AI routing',
      },
    },
    chatInputPlaceholder: 'Ask about yield, risks, or protocols...',
    labels: {
      user: 'You',
      ai: 'AI',
    },
    heroChat: [
      {
        role: 'user',
        text: 'Where is low-risk yield on BNB right now?',
      },
      {
        role: 'ai',
        text: 'Here are 3 options: 8–12% APY, low risk, no long exposure. I will explain why.',
      },
      {
        role: 'user',
        text: 'What if the market drops?',
      },
      {
        role: 'ai',
        text: 'I will show stress scenarios, alternatives, and how to cap drawdowns.',
      },
    ],
    what: {
      title: 'How BEYB simplifies yield',
      items: [
        {
          label: 'Ask',
          title: 'Ask in chat',
          text: 'Ask: "Where can I get 10% APY with low risk?" and get an answer in seconds.',
        },
        {
          label: 'Analyze',
          title: 'AI analyzes',
          text: 'AI analyzes 50+ BNB Chain protocols in real time.',
        },
        {
          label: 'Risks',
          title: 'Clear risk breakdown',
          text: 'Plain-language risks: volatility, liquidity, smart contracts.',
        },
      ],
    },
    how: {
      title: 'How it works',
      steps: [
        {
          label: 'Step 1',
          title: 'Connect a wallet',
          text: 'MetaMask, Trust Wallet, WalletConnect.',
        },
        {
          label: 'Step 2',
          title: 'Ask a question',
          text: 'Write what you want: "10% APY with low risk."',
        },
        {
          label: 'Step 3',
          title: 'Get strategies',
          text: 'AI analyzes 50+ protocols in seconds.',
        },
        {
          label: 'Step 4',
          title: 'Take action',
          text: 'Execute a strategy in one click.',
        },
      ],
    },
    why: {
      title: 'Why BNB Chain?',
      items: [
        {
          title: 'Low fees',
          text: '~$0.10 per transaction vs $5-50 on Ethereum.',
        },
        {
          title: 'Rich DeFi ecosystem',
          text: '500+ protocols, $5B+ TVL.',
        },
        {
          title: 'High liquidity',
          text: 'Fast entry and exit from positions.',
        },
      ],
    },
    demo: {
      title: 'BEYB in action',
      subtitle: 'Dialogue examples and answer format',
      tabs: {
        lowRisk: 'Low risk yield',
        highApy: 'Higher APY',
        explain: 'Explain risks',
      },
      samples: {
        lowRisk: [
          { role: 'user', text: 'Need low-risk yield on BNB for 3–6 months.' },
          {
            role: 'ai',
            text: '3 strategies: 6–10% APY, high liquidity, low volatility. I will compare risks.',
          },
          { role: 'user', text: 'Can I exit without penalties?' },
          {
            role: 'ai',
            text: 'We will pick options with fast exits and show terms.',
          },
        ],
        highApy: [
          { role: 'user', text: 'Want higher APY, not full degen.' },
          {
            role: 'ai',
            text: '18–28% APY on BNB is possible with medium risk. I will surface hidden fees.',
          },
          { role: 'user', text: 'What is the drawdown scenario?' },
          {
            role: 'ai',
            text: 'I will show worst-case outcomes and hedging options.',
          },
        ],
        explain: [
          { role: 'user', text: 'Explain the risks of strategy X.' },
          {
            role: 'ai',
            text: 'Key risks: volatility, liquidity, smart contracts. I will highlight the triggers.',
          },
          { role: 'user', text: 'How can I reduce risk?' },
          {
            role: 'ai',
            text: 'I will suggest lower-APY alternatives and trade-offs.',
          },
        ],
      },
    },
    security: {
      title: 'Security first',
      items: [
        'Non-custodial — your keys stay with you.',
        'Vetted protocols — we work only with audited contracts.',
        'Risk monitoring — AI flags potential threats.',
        'Transparency — clear explanations for every strategy.',
      ],
    },
    team: {
      title: 'A team that ships',
      body: [
        'Alumni of the TON ecosystem. Launched multiple Web3 products.',
        'Now building an AI-first yield interface for BNB.',
      ],
      badges: [
        'TON alumni',
        'Multiple launches',
        'Product & execution',
        'BNB-focused',
      ],
      members: [
        {
          name: 'Alex K.',
          role: 'Founder / Product',
          bio: 'Short bio — will update soon.',
          image: '/team/alex.svg',
          imageAlt: 'Photo of Alex',
        },
        {
          name: 'Mira S.',
          role: 'AI / Research',
          bio: 'Short bio — will update soon.',
          image: '/team/mira.svg',
          imageAlt: 'Photo of Mira',
        },
        {
          name: 'Denis R.',
          role: 'Engineering',
          bio: 'Short bio — will update soon.',
          image: '/team/denis.svg',
          imageAlt: 'Photo of Denis',
        },
      ],
    },
    cta: {
      title: 'Be the first',
      text: 'Leave a contact — we will send the demo and early access to the first release.',
      placeholder: 'Email or Telegram',
      button: 'Join waitlist',
      loading: 'Sending...',
      success: 'Thanks! We will reach out soon.',
      error: 'Enter a valid email or Telegram.',
      socialProof: '500+ already on the waitlist',
      note: 'No spam. 1–2 updates/month.',
    },
    faq: {
      title: 'FAQ',
      items: [
        {
          question: 'How does the AI pick strategies?',
          answer:
            'It analyzes APY, TVL, protocol history, audits, and liquidity risks.',
        },
        {
          question: 'Do I need to pay to use it?',
          answer: 'Core features are free. Premium analytics will come later.',
        },
        {
          question: 'Which wallets are supported?',
          answer:
            'MetaMask, Trust Wallet, Coinbase Wallet, and others via WalletConnect.',
        },
        {
          question: 'Can I lose money?',
          answer:
            'DeFi has risks. The AI helps you understand them but does not guarantee profit.',
        },
      ],
    },
    footer: {
      copyright: '© BEYB',
      links: [
        { label: 'X', href: 'https://x.com/aiyieldchat' },
        { label: 'Telegram', href: 'https://t.me/aiyieldchat' },
        { label: 'Email', href: 'mailto:hello@aiyield.chat' },
      ],
    },
  },
}

export function useI18n() {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = defaultLang
      document.documentElement.dataset.lang = defaultLang
    }
  }, [])

  const copy = useMemo(() => translations[defaultLang], [])

  return { lang: defaultLang, copy }
}
