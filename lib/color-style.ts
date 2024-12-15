import { cn } from '@/lib/utils'

// 定义基础颜色配置
export const COLORS = {
  blue: {
    bg: 'bg-blue-500/10 dark:bg-blue-500/15',
    text: 'text-blue-600 dark:text-blue-400',
    hover: 'hover:bg-blue-500/20 dark:hover:bg-blue-500/25',
    border: 'border-blue-500/20 dark:border-blue-500/30',
  },
  purple: {
    bg: 'bg-purple-500/10 dark:bg-purple-500/15',
    text: 'text-purple-600 dark:text-purple-400',
    hover: 'hover:bg-purple-500/20 dark:hover:bg-purple-500/25',
    border: 'border-purple-500/20 dark:border-purple-500/30',
  },
  green: {
    bg: 'bg-green-500/10 dark:bg-green-500/15',
    text: 'text-green-600 dark:text-green-400',
    hover: 'hover:bg-green-500/20 dark:hover:bg-green-500/25',
    border: 'border-green-500/20 dark:border-green-500/30',
  },
  orange: {
    bg: 'bg-orange-500/10 dark:bg-orange-500/15',
    text: 'text-orange-600 dark:text-orange-400',
    hover: 'hover:bg-orange-500/20 dark:hover:bg-orange-500/25',
    border: 'border-orange-500/20 dark:border-orange-500/30',
  },
  pink: {
    bg: 'bg-pink-500/10 dark:bg-pink-500/15',
    text: 'text-pink-600 dark:text-pink-400',
    hover: 'hover:bg-pink-500/20 dark:hover:bg-pink-500/25',
    border: 'border-pink-500/20 dark:border-pink-500/30',
  },
  yellow: {
    bg: 'bg-yellow-500/10 dark:bg-yellow-500/15',
    text: 'text-yellow-600 dark:text-yellow-400',
    hover: 'hover:bg-yellow-500/20 dark:hover:bg-yellow-500/25',
    border: 'border-yellow-500/20 dark:border-yellow-500/30',
  },
  red: {
    bg: 'bg-red-500/10 dark:bg-red-500/15',
    text: 'text-red-600 dark:text-red-400',
    hover: 'hover:bg-red-500/20 dark:hover:bg-red-500/25',
    border: 'border-red-500/20 dark:border-red-500/30',
  },
  indigo: {
    bg: 'bg-indigo-500/10 dark:bg-indigo-500/15',
    text: 'text-indigo-600 dark:text-indigo-400',
    hover: 'hover:bg-indigo-500/20 dark:hover:bg-indigo-500/25',
    border: 'border-indigo-500/20 dark:border-indigo-500/30',
  },
  teal: {
    bg: 'bg-teal-500/10 dark:bg-teal-500/15',
    text: 'text-teal-600 dark:text-teal-400',
    hover: 'hover:bg-teal-500/20 dark:hover:bg-teal-500/25',
    border: 'border-teal-500/20 dark:border-teal-500/30',
  },
} as const

export type ColorKey = keyof typeof COLORS

// 生成颜色样式
export function generateColorStyle(category: string) {
  const colors = Object.keys(COLORS) as ColorKey[]
  const hash = category.split('').reduce((acc, char) => {
    return char.charCodeAt(0) + ((acc << 5) - acc)
  }, 0)

  const colorIndex = Math.abs(hash) % colors.length
  const colorKey = colors[colorIndex]
  const colorSet = COLORS[colorKey]

  return {
    label: category,
    color: cn(colorSet.bg, colorSet.text, colorSet.hover, colorSet.border),
  }
}

// 动态生成分类样式配置
export function getCategoryStyles<T extends string>(categories: readonly T[] | T[]) {
  const styles: Record<string, { label: string, color: string }> = {}

  if (!Array.isArray(categories)) {
    return styles
  }

  categories.forEach((category) => {
    styles[category] = generateColorStyle(category)
  })

  return styles
}

// 获取渐变背景样式
export function getGradientStyle(variant: 'blue' | 'rose' | 'amber' | 'purple' | 'green') {
  return cn(
    'rounded-lg border bg-card p-4 shadow-sm relative overflow-hidden',
    'before:absolute before:inset-0 before:opacity-20 before:transition-opacity hover:before:opacity-30',
    {
      'before:bg-gradient-to-br before:from-blue-400/40 before:via-cyan-400/40 before:to-blue-400/40': variant === 'blue',
      'before:bg-gradient-to-br before:from-rose-400/40 before:via-pink-400/40 before:to-rose-400/40': variant === 'rose',
      'before:bg-gradient-to-br before:from-amber-400/40 before:via-yellow-400/40 before:to-amber-400/40': variant === 'amber',
      'before:bg-gradient-to-br before:from-purple-400/40 before:via-fuchsia-400/40 before:to-purple-400/40': variant === 'purple',
      'before:bg-gradient-to-br before:from-green-400/40 before:via-emerald-400/40 before:to-green-400/40': variant === 'green',
    },
    'after:absolute after:inset-0 after:bg-gradient-to-br after:from-transparent after:via-white/5 after:to-transparent',
    'dark:after:via-black/5',
  )
}
