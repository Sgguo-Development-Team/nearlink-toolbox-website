import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, Package, Star, Zap, Monitor, Command, Cloud } from 'lucide-react'
import { Section } from "@/components/ui/section"
import { AnimateOnView } from '@/components/animations/AnimationWrapper'

const features = [
  {
    icon: Download,
    title: '固件商店',
    description: '开发者上传固件，用户一键下载使用'
  },
  {
    icon: Package,
    title: '固件管理',
    description: '本地固件的管理、删除、重命名、导入'
  },
  {
    icon: Star,
    title: '固件收藏',
    description: '收藏常用固件，快速访问'
  },
  {
    icon: Zap,
    title: '串口烧写',
    description: '支持一键烧写，海思烧写和第三方工具烧写'
  },
  {
    icon: Monitor,
    title: '串口调试',
    description: '串口通信、调试、帧速率获取'
  },
  {
    icon: Command,
    title: '快捷命令',
    description: 'AT固件常用命令收藏'
  },
  {
    icon: Cloud,
    title: '云数据源',
    description: '支持国内外多个镜像源'
  }
]

export default function Features() {
  return (
    <Section
      id="features"
      title="主要功能"
      description="一站式解决方案，让开发更轻松"
      className="bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-background via-secondary/5 to-background"
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <AnimateOnView
            key={index}
            animation="fade-in"
            delay={`${(index + 2) * 100}`}
          >
            <Card className="h-full hover:shadow-lg transition-all duration-300 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-muted group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-6 w-6 text-foreground" />
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

