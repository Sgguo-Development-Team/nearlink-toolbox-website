import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { AnimateOnView } from '@/components/animations/AnimationWrapper'
import { Section } from "@/components/ui/section"
import { Book, Coffee, Heart, Code, Zap, Settings, Monitor, Package, ArrowRight } from 'lucide-react'

const docCategories = [
  {
    icon: Book,
    title: '傻瓜式操作',
    description: '三步上手，零基础也能轻松驾驭',
    items: [
      '一键烧录',
      '智能识别',
      '自动配置',
      '可视化界面'
    ]
  },
  {
    icon: Package,
    title: '功能全家桶',
    description: '麻雀虽小，五脏俱全，一站式搞定',
    items: [
      '固件管理',
      '串口调试',
      '批量烧录',
      '参数配置'
    ]
  },
  {
    icon: Settings,
    title: '贴心工具',
    description: '各种实用小功能，让烧录更轻松',
    items: [
      '进度显示',
      '日志记录',
      '错误提示',
      '状态监控'
    ]
  },
  {
    icon: Monitor,
    title: '界面操作',
    description: '告别命令行，所见即所得',
    items: [
      '拖拽上传',
      '点击烧录',
      '实时预览',
      '操作提示'
    ]
  }
]

const features = [
  {
    icon: Zap,
    title: '一键烧录',
    content: '智能识别设备，自动配置参数，点击即可开始烧录'
  },
  {
    icon: Code,
    title: '双模驱动',
    content: '官方工具和开源方案双驱动，随心切换，稳定可靠'
  },
  {
    icon: Coffee,
    title: '省��设计',
    content: '智能报错提示，烧录进度显示，让操作更有把握'
  },
  {
    icon: Heart,
    title: '贴心助手',
    content: '内置多种实用工具，让烧录工作事半功倍'
  }
]

export default function Documentation() {
  return (
    <Section
      title="简单到不能再简单"
      description="告别复杂操作，人人都是烧录高手"
      subDescription="无需敲命令、记参数，图形化界面让烧录变得简单直观。智能识别设备、自动配置参数，一键烧录让您立即上手，轻松掌握。"
      className="bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-background via-primary/5 to-background"
    >
      <div className="grid gap-8">
        <div className="grid gap-6 md:grid-cols-2">
          {docCategories.map((category, index) => (
            <AnimateOnView
              key={index}
              animation={index % 2 === 0 ? 'fade-in-left' : 'fade-in-right'}
              delay={`${(index + 2) * 100}`}
            >
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-lg bg-muted group-hover:scale-110 transition-transform duration-300">
                      <category.icon className="h-6 w-6 text-foreground" />
                    </div>
                    <div>
                      <CardTitle>{category.title}</CardTitle>
                      <CardDescription>{category.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    {category.items.map((item, itemIndex) => (
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

        <div className="grid gap-6 md:grid-cols-4">
          {features.map((feature, index) => (
            <AnimateOnView
              key={index}
              animation="fade-in"
              delay={`${(index + 2) * 100}`}
            >
              <Card className="text-center">
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
      </div>
    </Section>
  )
}
