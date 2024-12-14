import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimateOnView } from '@/components/animations/AnimationWrapper'
import { Terminal, Cpu, Zap, GitBranch, Package, Settings, Monitor, HardDrive } from 'lucide-react'
import { Section } from "@/components/ui/section"

const features = [
  {
    icon: Terminal,
    title: '双剑合璧',
    description: '海思亲儿子配开源猛将，左右开弓，随心所欲'
  },
  {
    icon: Cpu,
    title: '如虎添翼',
    description: '完美继承海思正统，稳如泰山的烧录体验'
  },
  {
    icon: Zap,
    title: '神兵利器',
    description: '开源大神倾力之作，为我所用，如鱼得水'
  },
  {
    icon: GitBranch,
    title: '众志成城',
    description: '汇聚天下英才，开源社区智慧的结晶'
  }
]

const capabilities = [
  {
    icon: Package,
    title: '海思正统',
    items: [
      '官方亲儿子',
      '稳如泰山',
      '万无一失',
      '品质保证'
    ]
  },
  {
    icon: Settings,
    title: '开源神器',
    items: [
      '集众智成城',
      '奇技淫巧',
      '批量神速',
      '自由定制'
    ]
  },
  {
    icon: Monitor,
    title: '四海通吃',
    items: [
      'Windows 无压力',
      'Linux 有内味',
      'BSD 也不怂',
      '跨平台无阻'
    ]
  },
  {
    icon: HardDrive,
    title: '烧录绝活',
    items: [
      '闪电烧录',
      '分区随心',
      '校验无忧',
      '容错过人'
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
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
        {features.map((feature, index) => (
          <AnimateOnView
            key={index}
            animation="fade-in"
            delay={`${(index + 2) * 100}`}
          >
            <Card className="h-full hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-foreground" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          </AnimateOnView>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 mb-12">
        <AnimateOnView animation="fade-in-left">
          <Card className="h-full relative overflow-hidden">
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
            <CardHeader>
              <CardTitle>海思亲儿子</CardTitle>
              <CardDescription>官方出品，必属精品</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Badge variant="secondary">稳如泰山</Badge>
                <p className="text-sm text-muted-foreground">官方认证，烧录无忧，万无一失</p>
              </div>
              <div className="space-y-2">
                <Badge variant="secondary">品质保证</Badge>
                <p className="text-sm text-muted-foreground">完美支持，功能齐全，兼容性满分</p>
              </div>
              <div className="space-y-2">
                <Badge variant="secondary">正统传承</Badge>
                <p className="text-sm text-muted-foreground">标准流程，规范操作，一键搞定</p>
              </div>
            </CardContent>
          </Card>
        </AnimateOnView>

        <AnimateOnView animation="fade-in-right">
          <Card className="h-full relative overflow-hidden">
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
            <CardHeader>
              <CardTitle>开源猛将</CardTitle>
              <CardDescription>大神之作，功能拉满</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Badge variant="secondary">集众智成城</Badge>
                <p className="text-sm text-muted-foreground">开源大神倾力之作，持续进化</p>
              </div>
              <div className="space-y-2">
                <Badge variant="secondary">奇技淫巧</Badge>
                <p className="text-sm text-muted-foreground">批量烧录、自定义选项，花式操作</p>
              </div>
              <div className="space-y-2">
                <Badge variant="secondary">自由随心</Badge>
                <p className="text-sm text-muted-foreground">开放透明，随心定制，为我所用</p>
              </div>
            </CardContent>
          </Card>
        </AnimateOnView>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {capabilities.map((capability, index) => (
          <AnimateOnView
            key={index}
            animation="fade-in"
            delay={`${(index + 2) * 100}`}
          >
            <Card className="h-full hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4">
                  <capability.icon className="w-6 h-6 text-foreground" />
                </div>
                <CardTitle>{capability.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {capability.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </AnimateOnView>
        ))}
      </div>
    </Section>
  )
}
