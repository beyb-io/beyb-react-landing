import { cn } from '@/lib/utils'

import type { ChatMessage } from '@/lib/i18n'

type ChatPreviewProps = {
  messages: ChatMessage[]
  labels: {
    user: string
    ai: string
  }
  inputPlaceholder: string
  className?: string
  compact?: boolean
}

export default function ChatPreview({
  messages,
  labels,
  inputPlaceholder,
  className,
  compact = false,
}: ChatPreviewProps) {
  return (
    <div className={cn('glass-card relative overflow-hidden', className)}>
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="edge-glow" />
      <div
        className={cn(
          'relative flex flex-col',
          compact ? 'gap-4 p-5' : 'gap-5 p-6'
        )}
      >
        {messages.map((message, index) => {
          const isUser = message.role === 'user'
          return (
            <div
              key={`${message.role}-${index}`}
              className={cn(
                'flex flex-col',
                isUser ? 'items-end text-right' : 'items-start text-left'
              )}
            >
              <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground/70">
                {isUser ? labels.user : labels.ai}
              </span>
              <div
                className={cn(
                  'mt-2 max-w-[85%] rounded-2xl border px-4 py-3 text-sm leading-relaxed',
                  isUser
                    ? 'border-[hsl(var(--accent-gold)/0.35)] bg-[hsl(var(--accent-gold)/0.16)]'
                    : 'border-border/50 bg-background/50'
                )}
              >
                {message.text}
              </div>
            </div>
          )
        })}

        <div className="mt-4 flex items-center gap-3 rounded-full border border-border/60 bg-background/40 px-4 py-2 text-xs text-muted-foreground">
          <span className="h-2 w-2 rounded-full bg-[hsl(var(--accent-gold))] shadow-[0_0_12px_hsl(var(--accent-gold)/0.6)]" />
          <span>{inputPlaceholder}</span>
        </div>
      </div>
    </div>
  )
}
