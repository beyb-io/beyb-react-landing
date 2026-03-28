import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

import { cn } from '@/lib/utils'

interface TeamMember {
  id: string
  name: string
  role: string
  bio?: string
  avatar?: string
}

interface Team1Props {
  heading?: string
  description?: string
  members?: TeamMember[]
  className?: string
}

function getInitials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

const Team1 = ({
  heading = 'Team',
  description = 'A lean team across growth, product design, frontend, and backend engineering.',
  members = [
    {
      id: 'member-1',
      name: 'Ismail',
      role: 'CEO & Founder',
      bio: 'Previously built in TON DeFi at Bidask.',
      avatar: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp',
    },
    {
      id: 'member-2',
      name: 'Beibut',
      role: 'CTO',
      bio: 'Previously worked on TON DeFi infrastructure at DYOR.',
      avatar: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp',
    },
    {
      id: 'member-3',
      name: 'Rashid',
      role: 'Product Lead',
      bio: 'Previously shipped TON DeFi product experience at EVAA.',
      avatar: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp',
    },
    {
      id: 'member-4',
      name: 'Aisan',
      role: 'Lead Designer',
      bio: 'Designing for TON DeFi products and user flows.',
      avatar: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp',
    },
  ],
  className,
}: Team1Props) => {
  return (
    <section className={cn('py-0', className)}>
      <div className="flex flex-col items-center text-center">
        <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold tracking-[-0.05em] text-olive">
          {heading}
        </h2>
        <p className="mt-4 max-w-[720px] text-sm leading-7 text-ink-muted sm:text-base">
          {description}
        </p>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {members.map((member) => (
          <article
            key={member.id}
            className="theme-card min-h-[280px] items-center justify-center text-center"
          >
            <Avatar className="size-20 border border-theme-line bg-theme-card-soft shadow-[0_6px_16px_rgba(160,132,96,0.14)] md:size-24">
              <AvatarImage src={member.avatar} />
              <AvatarFallback className="bg-theme-card-soft text-base font-semibold text-ink">
                {getInitials(member.name)}
              </AvatarFallback>
            </Avatar>
            <p className="mt-5 text-center text-[1.25rem] font-semibold tracking-[-0.03em] text-ink">
              {member.name}
            </p>
            <p className="mt-2 text-center text-sm uppercase tracking-[0.18em] text-ink-muted">
              {member.role}
            </p>
            {member.bio ? (
              <p className="mt-4 max-w-[24ch] text-sm leading-6 text-ink-muted">
                {member.bio}
              </p>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  )
}

export { Team1 }
