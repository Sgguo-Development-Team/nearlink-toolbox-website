'use client'

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, Package, Star, Zap, Monitor, Command, Cloud, Cpu, Settings, Wifi, Share2, Upload, BarChart } from 'lucide-react'
import { Section } from "@/components/ui/section"
import { AnimateOnView } from '@/components/animations/AnimationWrapper'

const features = [
  {
    icon: Package,
    secondaryIcon: Download,
    title: '固件商店',
    description: '开发者上传固件，用户一键下载使用',
    gradient: 'from-blue-500/10 to-cyan-500/10'
  },
  {
    icon: Settings,
    secondaryIcon: Upload,
    title: '固件管理',
    description: '本地固件的管理、删除、重命名、导入',
    gradient: 'from-purple-500/10 to-pink-500/10'
  },
  {
    icon: Star,
    secondaryIcon: Share2,
    title: '固件收藏',
    description: '收藏常用固件，快速访问',
    gradient: 'from-yellow-500/10 to-orange-500/10'
  },
  {
    icon: Cpu,
    secondaryIcon: Wifi,
    title: '串口烧写',
    description: '支持一键烧写，海思烧写和第三方工具烧写',
    gradient: 'from-green-500/10 to-emerald-500/10'
  },
  {
    icon: Monitor,
    secondaryIcon: BarChart,
    title: '串口调试',
    description: '串口通信、调试、帧速率获取',
    gradient: 'from-red-500/10 to-pink-500/10'
  },
  {
    icon: Command,
    secondaryIcon: Zap,
    title: '快捷命令',
    description: 'AT固件常用命令收藏',
    gradient: 'from-indigo-500/10 to-purple-500/10'
  },
  {
    icon: Cloud,
    secondaryIcon: Download,
    title: '云数据源',
    description: '支持国内外多个镜像源',
    gradient: 'from-sky-500/10 to-blue-500/10'
  }
]

export default function Features() {
  return (
    <Section
      id="features"
      title={
        <div className="flex items-center gap-2">
          <Cpu className="h-8 w-8 text-primary animate-pulse" />
          <span>主要功能</span>
        </div>
      }
      description="一站式解决方案，让开发更轻松"
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <AnimateOnView
            key={index}
            animation="fade-in"
            delay={`${(index + 2) * 100}`}
          >
            <Card className="h-full hover:shadow-lg transition-all duration-300 group relative overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <div className="p-3 rounded-lg bg-muted group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="h-6 w-6 text-foreground" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 p-1.5 rounded-full bg-primary/10 group-hover:scale-110 transition-transform duration-300">
                      <feature.secondaryIcon className="h-3.5 w-3.5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </AnimateOnView>
        ))}
      </div>
    </Section>
  )
}

