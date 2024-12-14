import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { AnimateOnView } from '@/components/animations/AnimationWrapper'
import { Section } from "@/components/ui/section"
import { Terminal, ArrowRight, Code, Settings, Monitor, Download, Zap, Command } from 'lucide-react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

// Import screenshots
import cloudFirmwares from '@/assets/cloud-firmwares.png'
import terminal from '@/assets/terminal.png'
import flash from '@/assets/flash.png'
import commands from '@/assets/commands.png'

const screenshots = [
  {
    title: "云端固件",
    description: "海量固件资源，一键下载安装，支持多个镜像源",
    image: cloudFirmwares
  },
  {
    title: "串口调试",
    description: "专业的串口调试工具，支持多种波特率和数据格式",
    image: terminal
  },
  {
    title: "固件烧写",
    description: "支持海思官方工具和开源 ws63flash，双剑合璧",
    image: flash
  },
  {
    title: "命令集合",
    description: "常用命令集合，一键发送，提高效率",
    image: commands
  }
]

const showcaseFeatures = [
  {
    icon: Terminal,
    title: '串口调试',
    description: '专业的串口调试工具',
    features: [
      '多串口支持',
      '自定义波特率',
      '数据格式转换',
      '日志保存'
    ]
  },
  {
    icon: Download,
    title: '云端固件',
    description: '一站式固件下载平台',
    features: [
      '多镜像源支持',
      '一键下载',
      '固件收藏',
      '版本管理'
    ]
  },
  {
    icon: Zap,
    title: '固件烧写',
    description: '双工具支持，更多选择',
    features: [
      '海思官方工具',
      'ws63flash支持',
      '一键烧录',
      '智能识别'
    ]
  },
  {
    icon: Command,
    title: '命令集合',
    description: '常用命令快捷发送',
    features: [
      '命令收藏',
      '一键发送',
      '快捷键支持',
      '历史记录'
    ]
  }
]

const highlightedFeatures = [
  {
    icon: Code,
    title: '开源生态',
    content: '集成开源工具，支持社区贡献，共同成长'
  },
  {
    icon: Settings,
    title: '便捷配置',
    content: '图形化界面配置，无需记忆复杂参数'
  },
  {
    icon: Monitor,
    title: '实时监控',
    content: '串口数据实时显示，支持多种数据格式'
  }
]

export default function Showcase() {
  return (
    <Section
      id="showcase"
      title="功能展示"
      description="探索强大的工具集"
      subDescription="集成海思官方工具和开源方案，提供专业的串口调试和固件管理功能，让开发调试更轻松。"
      className="bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-background via-primary/5 to-background"
    >
      {/* Screenshots Carousel */}
      <div className="mb-16 relative px-12">
        <Carousel className="w-full max-w-5xl mx-auto" opts={{ loop: true }}>
          <CarouselContent>
            {screenshots.map((screenshot, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="overflow-hidden border-0 shadow-xl rounded-t-xl">
                    <div className="relative overflow-hidden ">
                      <Image
                        src={screenshot.image}
                        alt={screenshot.title}
                        width={1920}
                        height={1080}
                        className="object-cover"
                      />
                      <div className="absolute bottom-0 left-0 p-6 text-primary">
                        <h3 className="text-2xl font-bold mb-2">{screenshot.title}</h3>
                        <p className="text-sm">{screenshot.description}</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      {/* Main Features Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
        {showcaseFeatures.map((feature, index) => (
          <AnimateOnView
            key={index}
            animation="fade-in"
            delay={`${(index + 2) * 100}`}
          >
            <Card className="h-full hover:shadow-lg transition-all duration-300 group">
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
              <CardContent>
                <div className="space-y-2">
                  {feature.features.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex items-center space-x-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    >
                      <ArrowRight className="h-4 w-4 text-primary" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </AnimateOnView>
        ))}
      </div>

      {/* Highlighted Features */}
      <div className="grid gap-6 md:grid-cols-3">
        {highlightedFeatures.map((feature, index) => (
          <AnimateOnView
            key={index}
            animation="fade-in"
            delay={`${(index + 2) * 100}`}
          >
            <Card className="text-center hover:shadow-lg transition-all duration-300 group">
              <CardHeader>
                <div className="mx-auto p-3 rounded-lg bg-muted group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-6 w-6 text-foreground" />
                </div>
                <CardTitle className="mt-4">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.content}</CardDescription>
              </CardContent>
            </Card>
          </AnimateOnView>
        ))}
      </div>
    </Section>
  )
}
