import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'

type Theme = 'light' | 'dark'

type ThemeToggleProps = {
  label: string
}

const getInitialTheme = (): Theme => {
  if (typeof document === 'undefined') {
    return 'dark'
  }

  return document.documentElement.classList.contains('dark') ? 'dark' : 'light'
}

export default function ThemeToggle({ label }: ThemeToggleProps) {
  const [theme, setTheme] = useState<Theme>(() => getInitialTheme())

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const stored = window.localStorage.getItem('theme')
    if (stored === 'light' || stored === 'dark') {
      setTheme(stored)
      return
    }

    const prefersDark = window.matchMedia?.(
      '(prefers-color-scheme: dark)'
    ).matches
    setTheme(prefersDark ? 'dark' : 'light')
  }, [])

  useEffect(() => {
    if (typeof document === 'undefined') {
      return
    }

    document.documentElement.classList.toggle('dark', theme === 'dark')
    document.documentElement.style.colorScheme = theme

    if (typeof window !== 'undefined') {
      window.localStorage.setItem('theme', theme)
    }
  }, [theme])

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      className="rounded-full border border-border/60 bg-background/60 text-foreground backdrop-blur hover:bg-background"
      onClick={() =>
        setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
      }
      aria-label={label}
    >
      {theme === 'dark' ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
    </Button>
  )
}
