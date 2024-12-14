'use client'

import { useEffect, useRef, ReactNode, useState } from 'react'
import '@/styles/animations.css'

interface AnimationWrapperProps {
  children: ReactNode
  className?: string
  delay?: string
  animation?: 'fade-in' | 'fade-in-left' | 'fade-in-right' | 'fade-in-up' | 'slide-in' | 'scale-in'
  duration?: 'fast' | 'normal' | 'slow'
  threshold?: number
}

export function AnimateOnView({
  children,
  className = '',
  animation = 'fade-in',
  delay,
  duration = 'normal',
  threshold = 0.3
}: AnimationWrapperProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(`animate-${animation}`)
          entry.target.classList.add(`duration-${duration}`)
          if (delay) {
            entry.target.classList.add(`delay-${delay}`)
          }
        }
      },
      { threshold }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [animation, delay, duration, threshold])

  return (
    <div ref={ref} className={`opacity-0 ${className}`}>
      {children}
    </div>
  )
}

interface TextCycleProps {
  words: string[]
  className?: string
  interval?: number
}

export function TextCycle({ words, className = '', interval = 3000 }: TextCycleProps) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length)
    }, interval)

    return () => clearInterval(timer)
  }, [words.length, interval])

  return (
    <div className="relative h-[1.5em]">
      <div
        key={index}
        className={`absolute inset-0 flex items-center justify-center animate-text-cycle ${className}`}
      >
        {words[index]}
      </div>
    </div>
  )
}

export function HoverScale({
  children,
  className = '',
  scale = '105'
}: {
  children: ReactNode
  className?: string
  scale?: string
}) {
  return (
    <div className={`transform transition-transform duration-300 hover:scale-${scale} ${className}`}>
      {children}
    </div>
  )
}

export function HoverGlow({
  children,
  className = '',
  color = 'primary'
}: {
  children: ReactNode
  className?: string
  color?: string
}) {
  return (
    <div className={`transition-all duration-300 hover:shadow-lg hover:shadow-${color}/20 ${className}`}>
      {children}
    </div>
  )
}

