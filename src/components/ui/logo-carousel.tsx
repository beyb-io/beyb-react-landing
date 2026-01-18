import { cn } from '@/lib/utils'

type LogoCarouselProps = {
  logos: string[]
  className?: string
  speed?: number
  ariaLabel?: string
}

export function LogoCarousel({
  logos,
  className,
  speed = 20,
  ariaLabel = 'Logo carousel',
}: LogoCarouselProps) {
  const track = [...logos, ...logos]

  return (
    <div className={cn('logo-carousel', className)} aria-label={ariaLabel}>
      <div
        className="logo-carousel-track"
        style={{ animationDuration: `${speed}s` }}
      >
        {track.map((logo, index) => (
          <div className="logo-carousel-item" key={`${logo}-${index}`}>
            {logo}
          </div>
        ))}
      </div>
    </div>
  )
}
