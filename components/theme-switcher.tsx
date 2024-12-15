'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'

export function ThemeSwitcher() {
  const {  setTheme, resolvedTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
    >
      <span className="relative h-4 w-4 group-hover:scale-110 transition-transform duration-300">
        <Sun className="absolute inset-0 rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute inset-0 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />
      </span>
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
