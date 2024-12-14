import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BracketsIcon as Bridge, Users, Rocket, Sparkles, Star, Code, Heart, Globe, Zap, Terminal, Network, Cpu, FileSearch, Factory, Library, RefreshCw, MessageSquare, FileCode, PlugIcon } from 'lucide-react'
import { AnimateOnView } from '@/components/animations/AnimationWrapper'
import { Section } from "@/components/ui/section"

const goals = [
  {
    icon: Bridge,
    title: '搭建桥梁',
    description: '连接星闪用户和开发者，促进生态系统的发展',
    progress: 85,
    highlights: [
      { icon: Star, text: '开源社区' },
      { icon: Code, text: '技术交流' },
      { icon: Heart, text: '资源共享' },
      { icon: Globe, text: '生态建设' }
    ],
    stats: [
      { value: '1000+', label: '社区用户' },
      { value: '50+', label: '开源项目' }
    ]
  },
  {
    icon: Users,
    title: '便捷使用',
    description: '让用户能够轻松使用开源固件，简化操作流程',
    progress: 90,
    highlights: [
      { icon: Star, text: '一键烧录' },
      { icon: Code, text: '智能识别' },
      { icon: Heart, text: '可视化界面' },
      { icon: Globe, text: '操作简单' }
    ],
    stats: [
      { value: '< 15秒', label: '烧录时间（Hi3863+921600）' },
      { value: '≈ 99%', label: '可用性' }
    ]
  },
  {
    icon: Rocket,
    title: '功能规划',
    description: '2025 Q1 功能增强计划',
    progress: 75,
    highlights: [
      { icon: PlugIcon, text: '软件内插件' },
      { icon: Zap, text: '交互增强' },
      { icon: Terminal, text: '串口增强' },
      { icon: Network, text: 'TCP/UDP调试' },
      { icon: Cpu, text: 'WS63 Efuse' },
      { icon: FileSearch, text: '固件分析' },
      { icon: Factory, text: '工厂多烧' },
      { icon: Library, text: '内置DLL' },
      { icon: RefreshCw, text: '自动更新' }
    ],
    stats: [
      { value: 'Q1', label: '2025' },
      { value: '9+', label: '新功能' }
    ]
  },
  {
    icon: Sparkles,
    title: '生态共建',
    description: '2025 Q2 生态扩展计划',
    progress: 80,
    highlights: [
      { icon: MessageSquare, text: '论坛社区' },
      { icon: FileCode, text: '更多格式' },
      { icon: Heart, text: '技术分享' },
      { icon: Globe, text: '共同进步' }
    ],
    stats: [
      { value: 'Q2', label: '2025' },
      { value: '2+', label: '新特性' }
    ]
  }
]

export default function ProjectGoals() {
  return (
    <Section
      id="project-goals"
      title="项目目标"
      description="打造开源生态，推动技术创新"
    >
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
        {goals.map((goal, index) => (
          <AnimateOnView
            key={index}
            animation="fade-in"
            delay={`${(index + 2) * 100}`}
          >
            <Card className="min-h-[540px]">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-muted group-hover:scale-110 transition-transform duration-300">
                    <goal.icon className="h-6 w-6 text-foreground" />
                  </div>
                  <div>
                    <CardTitle>{goal.title}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">{goal.description}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* 进度条 */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>完成进度</span>
                    <span className="text-primary">{goal.progress}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <div
                      className="h-full bg-primary transition-all duration-500 group-hover:opacity-80"
                      style={{ width: `${goal.progress}%` }}
                    />
                  </div>
                </div>

                {/* 统计数据 */}
                <div className="grid grid-cols-2 gap-4">
                  {goal.stats.map((stat, idx) => (
                    <div key={idx} className="text-center p-2 rounded-lg bg-muted/50 group-hover:bg-primary/5 transition-colors duration-300">
                      <div className="text-lg font-bold text-primary">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* 亮点功能 */}
                <div className="grid grid-cols-2 gap-2">
                  {goal.highlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-2 p-2 rounded-lg text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    >
                      <item.icon className="h-4 w-4 text-primary" />
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </AnimateOnView>
        ))}
      </div>
    </Section>
  )
}

