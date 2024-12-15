'use client'

import { Cpu, Zap, Download } from 'lucide-react'
import { TextCycle, AnimateOnView } from '@/components/animations/AnimationWrapper'
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Section } from "@/components/ui/section"
import { Pacifico } from 'next/font/google'
import { DownloadButton } from "@/components/DownloadButton"
import { generateColorStyle } from '@/lib/color-style'

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pacifico',
})

const techWords = ['串口通信', '固件管理', '设备调试', '共享社区能力', '国产化软硬件']

const features = [
  {
    icon: Cpu,
    title: '高性能',
    description: '基于 Rust 和 Tauri，提供卓越的性能和效率',
    category: 'performance'
  },
  {
    icon: Zap,
    title: '多功能',
    description: '集成串口通信、固件管理、设备调试等多功能',
    category: 'features'
  },
  {
    icon: Download,
    title: '便捷使用',
    description: '一键下载、智能管理，让开发更轻松',
    category: 'usability'
  }
]

export default function Hero() {
  return (
    <Section
      title={
        <div className="flex flex-col items-center justify-center">
          <AnimateOnView animation="fade-in-up" duration="normal" delay="300">
            <h1 className={`${pacifico.className} text-8xl text-primary lg:text-9xl`}>
              Nearlink Toolbox
            </h1>
          </AnimateOnView>
        </div>
      }
      description={
        <div className="flex flex-col items-center justify-center">
          <AnimateOnView animation="fade-in-up" duration="normal" delay="400">
            <div className="text-xl md:text-2xl font-normal text-muted-foreground mt-6 flex items-center justify-center gap-1">
              一站式
              <TextCycle
                words={techWords}
                className="font-semibold text-foreground"
                interval={3000}
              />
              方案
            </div>
          </AnimateOnView>
        </div>
      }
      className="relative py-20 md:py-32 overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background bg-fixed"
    >
      <div className="container mx-auto px-4">
        {/* 特性卡片 */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => {
            const colorStyle = generateColorStyle(feature.category)
            const animations = ['fade-in-left', 'fade-in-up', 'fade-in-right']
            const delays = ['600', '700', '800']

            return (
              <AnimateOnView
                key={feature.title}
                animation={animations[index] as 'fade-in-left' | 'fade-in-up' | 'fade-in-right'}
                duration="normal"
                delay={delays[index]}
              >
                <Card className={`h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 min-h-[200px] group ${colorStyle.color}`}>
                  <CardHeader className="relative z-10">
                    <div className="w-12 h-12 rounded-full bg-background/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="group-hover:text-foreground transition-colors duration-300">
                      {feature.title}
                    </CardTitle>
                    <CardDescription className="group-hover:text-foreground/70 transition-colors duration-300">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </AnimateOnView>
            )
          })}
        </div>

        {/* 按钮组 */}
        <div className="flex flex-wrap justify-center gap-4">
          <AnimateOnView animation="fade-in-up" duration="normal" delay="900">
            <DownloadButton size="lg" className="group relative overflow-hidden">
            </DownloadButton>
          </AnimateOnView>
        </div>
      </div>
    </Section>
  )
}
