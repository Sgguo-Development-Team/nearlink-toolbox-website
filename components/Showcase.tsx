'use client'

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { AnimateOnView } from '@/components/animations/AnimationWrapper'
import { Section } from "@/components/ui/section"
import { Terminal, ArrowRight, Code, Settings, Monitor, Download, Zap, Command, ChevronRight } from 'lucide-react'
import { generateColorStyle } from '@/lib/color-style'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import Image from "next/image"
import { useEffect } from "react"
import { Fancybox } from "@fancyapps/ui"
import "@fancyapps/ui/dist/fancybox/fancybox.css"

const screenshots = [
  {
    title: "云端固件",
    description: "海量固件资源，一键下载安装，支持多个镜像源",
    image: '/assets/cloud-firmwares.png',
    category: 'cloud'
  },
  {
    title: "串口调试",
    description: "专业的串口调试工具，支持多种波特率和数据格式",
    image: '/assets/terminal.png',
    category: 'terminal'
  },
  {
    title: "固件烧写",
    description: "支持海思官方工具和开源 ws63flash，双剑合璧",
    image: '/assets/flash.png',
    category: 'flash'
  },
  {
    title: "命令集合",
    description: "常用命令集合，一键发送，提高效率",
    image: '/assets/commands.png',
    category: 'commands'
  }
]

const showcaseFeatures = [
  {
    icon: Terminal,
    title: '串口调试',
    description: '专业的串口调试工具',
    category: 'terminal',
    detail: '提供专业的串口调试功能，支持多种数据格式和通信协议',
    features: [
      { name: '多串口支持', detail: '同时支持多个串口设备连接' },
      { name: '自定义波特率', detail: '支持自定义各种波特率设置' },
      { name: '数据格式转换', detail: '支持多种数据格式的转换' },
      { name: '日志保存', detail: '自动保存通信日志记录' }
    ]
  },
  {
    icon: Download,
    title: '云端固件',
    description: '一站式固件下载平台',
    category: 'cloud',
    detail: '集成多个固件源，提供便捷的下载和管理功能',
    features: [
      { name: '多镜像源支持', detail: '支持多个固件下载源' },
      { name: '一键下载', detail: '快速下载所需固件' },
      { name: '固件收藏', detail: '收藏常用固件便于访问' },
      { name: '版本管理', detail: '管理不同版本的固件' }
    ]
  },
  {
    icon: Zap,
    title: '固件烧写',
    description: '双工具支持，更多选择',
    category: 'flash',
    detail: '集成官方和开源烧录工具，提供多种烧录方式',
    features: [
      { name: '海思官方工具', detail: '支持官方烧录工具' },
      { name: 'ws63flash支持', detail: '集成开源烧录方案' },
      { name: '一键烧录', detail: '简化烧录操作流程' },
      { name: '智能识别', detail: '自动识别设备类型' }
    ]
  },
  {
    icon: Command,
    title: '命令集合',
    description: '常用命令快捷发送',
    category: 'commands',
    detail: '提供常用命令的快捷操作功能',
    features: [
      { name: '命令收藏', detail: '收藏常用命令便于使用' },
      { name: '一键发送', detail: '快速发送预设命令' },
      { name: '快捷键支持', detail: '支持键盘快捷操作' },
      { name: '历史记录', detail: '记录已使用的命令' }
    ]
  }
]

const highlightedFeatures = [
  {
    icon: Code,
    title: '开源生态',
    description: '集成开源工具，支持社区贡献，共同成长',
    category: 'ecosystem'
  },
  {
    icon: Settings,
    title: '便捷配置',
    description: '图形化界面配置，无需记忆复杂参数',
    category: 'config'
  },
  {
    icon: Monitor,
    title: '实时监控',
    description: '串口数据实时显示，支持多种数据格式',
    category: 'monitor'
  }
]

export default function Showcase() {
  useEffect(() => {
    // Initialize Fancybox
    Fancybox.bind("[data-fancybox]", {
      animated: true,
      dragToClose: false,
      showClass: "fancybox-fadeIn",
      hideClass: "fancybox-fadeOut",
      Toolbar: {
        display: {
          left: [],
          middle: ["prev", "counter", "next"],
          right: ["zoom", "fullscreen", "close"]
        }
      },
      Carousel: {
        infinite: true,
      },
    });

    // Cleanup
    return () => {
      Fancybox.destroy();
    };
  }, []);

  return (
    <Section
      id="showcase"
      title="功能展示"
      description="探索强大的工具集"
      subDescription="集成海思官方工具和开源方案，提供专业的串口调试和固件管理功能，让开发调试更轻松。"
      className="bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-background via-primary/5 to-background"
    >
      {/* Screenshots Gallery */}
      <div className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {screenshots.map((screenshot, index) => {
            return (
              <a
                key={index}
                data-fancybox="gallery"
                data-caption={`${screenshot.title} - ${screenshot.description}`}
                href={screenshot.image}
                className="block"
              >
                <Card className={`overflow-hidden border-0 shadow-xl grouph-full`}>
                  <div className="relative overflow-hidden aspect-video">
                    <Image
                      src={screenshot.image}
                      alt={screenshot.title}
                      width={1920}
                      height={1080}
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                      priority={index === 0}
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                      <h3 className="text-sm md:text-lg font-bold mb-1  transition-colors duration-300 text-primary">
                        {screenshot.title}
                      </h3>
                      <p className="text-xs md:text-sm text-primary-foreground transition-colors duration-300 line-clamp-2">
                        {screenshot.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </a>
            )
          })}
        </div>
      </div>

      {/* Main Features Grid */}
      <div className="grid gap-4 md:gap-6 grid-cols-2 lg:grid-cols-4 mb-8 md:mb-12">
        {showcaseFeatures.map((feature, index) => {
          const colorStyle = generateColorStyle(feature.category)
          return (
            <AnimateOnView
              key={index}
              animation="fade-in"
              delay={`${(index + 2) * 100}`}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <Card className={`h-full hover:shadow-lg transition-all duration-300 group cursor-pointer ${colorStyle.color}`}>
                    <CardHeader className="p-4 md:p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3 md:space-x-4">
                          <div className="p-2 md:p-3 rounded-lg bg-background/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <feature.icon className="h-4 w-4 md:h-6 md:w-6" />
                          </div>
                          <CardTitle className="text-sm md:text-base group-hover:text-foreground transition-colors duration-300">
                            {feature.title}
                          </CardTitle>
                        </div>
                        <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all duration-300" />
                      </div>
                    </CardHeader>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-3 rounded-lg ${colorStyle.color}`}>
                        <feature.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <DialogTitle>{feature.title}</DialogTitle>
                        <DialogDescription>{feature.detail}</DialogDescription>
                      </div>
                    </div>
                  </DialogHeader>
                  <ScrollArea className="max-h-[60vh]">
                    <div className="grid md:grid-cols-2 gap-4">
                      {feature.features.map((item, idx) => (
                        <Card key={idx} className="group/item">
                          <CardHeader>
                            <div className="flex items-center gap-2">
                              <ArrowRight className="h-4 w-4 text-primary group-hover/item:translate-x-0.5 transition-transform duration-300" />
                              <CardTitle className="text-sm md:text-base">{item.name}</CardTitle>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p className="text-xs md:text-sm text-muted-foreground group-hover/item:text-foreground transition-colors duration-300">
                              {item.detail}
                            </p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </ScrollArea>
                </DialogContent>
              </Dialog>
            </AnimateOnView>
          )
        })}
      </div>

      {/* Highlighted Features */}
      <div className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-3">
        {highlightedFeatures.map((feature, index) => {
          const colorStyle = generateColorStyle(feature.category)
          return (
            <AnimateOnView
              key={index}
              animation="fade-in"
              delay={`${(index + 2) * 100}`}
            >
              <Card className={`text-center hover:shadow-lg transition-all duration-300 group ${colorStyle.color}`}>
                <CardHeader className="p-4 md:p-6">
                  <div className="mx-auto p-2 md:p-3 rounded-lg bg-background/50 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-4 w-4 md:h-6 md:w-6" />
                  </div>
                  <CardTitle className="mt-3 md:mt-4 text-sm md:text-base group-hover:text-foreground transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-xs md:text-sm group-hover:text-foreground/70 transition-colors duration-300">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </AnimateOnView>
          )
        })}
      </div>
    </Section>
  )
}
