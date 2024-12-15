import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { AnimateOnView } from '@/components/animations/AnimationWrapper'
import { Terminal, Cpu, Zap, GitBranch, Package, Settings, Monitor, HardDrive, ArrowRight } from 'lucide-react'
import { Section } from "@/components/ui/section"
import { generateColorStyle } from '@/lib/color-style'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Info } from "lucide-react"
import { cn } from "@/lib/utils"

const features = [
  {
    icon: Terminal,
    title: '双剑合璧',
    description: '海思亲儿子配开源猛将，左右开弓，随心所欲',
    category: 'integration',
    detail: '完美集成海思官方工具和开源方案，为您提供最佳烧录体验'
  },
  {
    icon: Cpu,
    title: '如虎添翼',
    description: '完美继承海思正统，稳如泰山的烧录体验',
    category: 'stability',
    detail: '继承海思官方工具的稳定性，确保烧录过程万无一失'
  },
  {
    icon: Zap,
    title: '神兵利器',
    description: '开源大神倾力之作，为我所用，如鱼得水',
    category: 'power',
    detail: '采用开源社区最新技术，提供强大的功能扩展'
  },
  {
    icon: GitBranch,
    title: '众志成城',
    description: '汇聚天下英才，开源社区智慧的结晶',
    category: 'community',
    detail: '汇集开源社区的智慧，持续进化和改进'
  }
]

const capabilities = [
  {
    icon: Package,
    title: '海思正统',
    category: 'official',
    description: '官方认证，品质保证',
    detail: '海思官方认证的烧录工具，稳定可靠',
    items: [
      { name: '官方亲儿子', detail: '海思官方认证的烧录工具，可靠性有保障' },
      { name: '稳如泰山', detail: '继承官方工具的稳定性，烧录过程安全可靠' },
      { name: '万无一失', detail: '完整的错误处理和恢复机制，确保烧录成功' },
      { name: '品质保证', detail: '严格的质量控制，提供最佳用户体验' }
    ]
  },
  {
    icon: Settings,
    title: '开源神器',
    category: 'opensource',
    description: '开源社区，智慧结晶',
    items: [
      { name: '集众智成城', detail: '汇集开源社区的智慧，持续优化改进' },
      { name: '奇技淫巧', detail: '创新的烧录方案，提供更多可能性' },
      { name: '批量神速', detail: '高效的批量烧录功能，提升工作效率' },
      { name: '自由定制', detail: '灵活的配置选项，满足个性化需求' }
    ]
  },
  {
    icon: Monitor,
    title: '四海通吃',
    category: 'compatibility',
    description: '跨平台，无障碍',
    items: [
      { name: 'Windows 无压力', detail: 'Windows 平台完美支持，操作简单直观' },
      { name: 'Linux 有内味', detail: 'Linux 平台预定支持中' },
      { name: 'macOS 也行', detail: 'macOS 平台预定支持中' },
      { name: '跨平台无阻', detail: '多平台无缝切换，统一的用户体验 （预计2025年支持）' }
    ]
  },
  {
    icon: HardDrive,
    title: '烧录绝活',
    category: 'flash',
    description: '高效，可靠',
    items: [
      { name: '闪电烧录', detail: '优化的烧录算法，速度快捷高效' },
      { name: '分区随心', detail: '灵活的分区管理，满足不同需求' },
      { name: '校验无忧', detail: '完整的数据校验，确保烧录准确' },
      { name: '容错过人', detail: '强大的错误处理，自动恢复机制' }
    ]
  }
]

export default function Integration() {
  return (
    <Section
      title="烧录神器 双剑合璧"
      description="海思亲儿子 + 开源猛将，左右开弓，随心所欲"
      subDescription="星闪工具箱集成了海思官方烧录工具和来自开源大神的 ws63flash，堪称烧录界的双剑合璧。无论您是喜欢稳如泰山的官方工具，还是偏爱灵活多变的开源方案，我们都能让您如鱼得水。"
    >
      {/* 特性展示 */}
      <div className="grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8 md:mb-12">
        {features.map((feature, index) => {
          const colorStyle = generateColorStyle(feature.category)
          return (
            <AnimateOnView
              key={index}
              animation="fade-in"
              delay={`${(index + 2) * 100}`}
            >
              <HoverCard>
                <HoverCardTrigger>
                  <Card className={`h-full hover:shadow-lg transition-all duration-300 group ${colorStyle.color}`}>
                    <CardHeader className="p-4 md:p-6">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-background/50 flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                        <feature.icon className="h-5 w-5 md:h-6 md:w-6" />
                      </div>
                      <CardTitle className="text-sm md:text-base group-hover:text-foreground transition-colors duration-300">
                        {feature.title}
                      </CardTitle>
                      <CardDescription className="text-xs md:text-sm group-hover:text-foreground/70 transition-colors duration-300">
                        {feature.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="flex justify-between space-x-4">
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {feature.detail}
                      </p>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </AnimateOnView>
          )
        })}
      </div>

      {/* 功能展示 */}
      <Tabs defaultValue="official" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-8">
          {capabilities.map((capability) => (
            <TabsTrigger
              key={capability.category}
              value={capability.category}
              className={cn(
                "data-[state=active]:bg-primary/10",
                "transition-all duration-200"
              )}
            >
              <div className="flex items-center gap-2">
                <capability.icon className="h-4 w-4 md:h-5 md:w-5" />
                <span className="hidden md:inline text-sm">{capability.title}</span>
              </div>
            </TabsTrigger>
          ))}
        </TabsList>
        {capabilities.map((capability) => {
          const colorStyle = generateColorStyle(capability.category)
          return (
            <TabsContent key={capability.category} value={capability.category}>
              <AnimateOnView animation="fade-in">
                <Card className={`group ${colorStyle.color}`}>
                  <CardHeader className="p-4 md:p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 md:space-x-4">
                        <div className="p-2 md:p-3 rounded-lg bg-background/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <capability.icon className="h-5 w-5 md:h-6 md:w-6" />
                        </div>
                        <div>
                          <CardTitle className="text-sm md:text-base">{capability.title}</CardTitle>
                          <CardDescription className="text-xs md:text-sm">{capability.description}</CardDescription>
                        </div>
                      </div>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8 md:h-9 md:w-9">
                            <Info className="h-4 w-4 md:h-5 md:w-5" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-80" align="end">
                          <div className="space-y-2">
                            <h4 className="text-sm font-medium">{capability.title}</h4>
                            <p className="text-xs md:text-sm text-muted-foreground">{capability.detail}</p>
                          </div>
                        </PopoverContent>
                      </Popover>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 md:p-6">
                    <div className="grid md:grid-cols-2 gap-3 md:gap-4">
                      {capability.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="group/item space-y-2 md:space-y-3 p-3 md:p-4 rounded-lg bg-background/50 hover:bg-background/70 transition-all duration-300"
                        >
                          <div className="flex items-center gap-2">
                            <ArrowRight className="h-4 w-4 text-primary group-hover/item:translate-x-0.5 transition-transform duration-300" />
                            <span className="text-sm md:text-base font-medium">{item.name}</span>
                          </div>
                          <Separator className="bg-primary/10" />
                          <p className="text-xs md:text-sm text-muted-foreground group-hover/item:text-foreground/70 transition-colors duration-300">
                            {item.detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimateOnView>
            </TabsContent>
          )
        })}
      </Tabs>
    </Section>
  )
}

