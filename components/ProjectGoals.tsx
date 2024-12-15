import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { BracketsIcon as Bridge, Users, Rocket, Sparkles, Star, Code, Heart, Globe, Zap, Terminal, Network, MessageSquare, FileCode, PlugIcon, ChevronDown } from 'lucide-react'
import { AnimateOnView } from '@/components/animations/AnimationWrapper'
import { Section } from "@/components/ui/section"
import { generateColorStyle } from '@/lib/color-style'
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

const goals = [
  {
    icon: Bridge,
    title: '搭建桥梁',
    description: '连接星闪用户和开发者，促进生态系统的发展',
    category: 'bridge',
    detail: '打造开发者和用户之间的桥梁，促进技术交流和资源共享',
    progress: 85,
    highlights: [
      { icon: Star, text: '开源社区', detail: '建立活跃的开源社区' },
      { icon: Code, text: '技术交流', detail: '促进开发者之间的技术交流' },
      { icon: Heart, text: '资源共享', detail: '共享开发资源和经验' },
      { icon: Globe, text: '生态建设', detail: '完善软件生态系统' }
    ],
    stats: [
      { value: '1000+', label: '社区用户' },
      { value: '50+', label: '开源项目' }
    ],
    timeline: [
      { date: '2024 Q1', event: '社区平台上线' },
      { date: '2024 Q2', event: '开源项目孵化' },
      { date: '2024 Q3', event: '技术交流活动' },
      { date: '2024 Q4', event: '生态系统完善' }
    ]
  },
  {
    icon: Users,
    title: '便捷使用',
    description: '让用户能够轻松使用开源固件，简化操作流程',
    category: 'usage',
    detail: '优化用户体验，让复杂的烧录过程变得简单易用',
    progress: 90,
    highlights: [
      { icon: Star, text: '一键烧录', detail: '简化烧录流程' },
      { icon: Code, text: '智能识别', detail: '自动识别设备类型' },
      { icon: Heart, text: '可视化界面', detail: '直观的操作界面' },
      { icon: Globe, text: '操作简单', detail: '降低使用门槛' }
    ],
    stats: [
      { value: '< 15秒', label: '烧录时间（Hi3863+921600）' },
      { value: '≈ 99%', label: '可用性' }
    ],
    timeline: [
      { date: '2024 Q1', event: '界面优化升级' },
      { date: '2024 Q2', event: '智能识别增强' },
      { date: '2024 Q3', event: '操作流程简化' },
      { date: '2024 Q4', event: '用户体验提升' }
    ]
  },
  {
    icon: Rocket,
    title: '功能规划',
    description: '2025 Q1 功能增强计划',
    category: 'roadmap',
    detail: '规划未来功能发展，不断提升软件能力',
    progress: 75,
    highlights: [
      { icon: PlugIcon, text: '软件内插件', detail: '支持插件扩展' },
      { icon: Zap, text: '交互增强', detail: '优化交互体验' },
      { icon: Terminal, text: '串口增强', detail: '增强串口功能' },
      { icon: Network, text: 'TCP/UDP调试', detail: '网络调试功能' }
    ],
    stats: [
      { value: 'Q1', label: '2025' },
      { value: '9+', label: '新功能' }
    ],
    timeline: [
      { date: '2025 Q1', event: '插件系统上线' },
      { date: '2025 Q1', event: '交互体验升级' },
      { date: '2025 Q2', event: '功能模块扩展' },
      { date: '2025 Q2', event: '性能优化提升' }
    ]
  },
  {
    icon: Sparkles,
    title: '生态共建',
    description: '2025 Q2 生态扩展计划',
    category: 'ecosystem',
    detail: '构建完整的生态系统，实现共赢发展',
    progress: 80,
    highlights: [
      { icon: MessageSquare, text: '论坛社区', detail: '建立交流平台' },
      { icon: FileCode, text: '更多格式', detail: '支持更多文件格式' },
      { icon: Heart, text: '技术分享', detail: '促进技术交流' },
      { icon: Globe, text: '共同进步', detail: '推动行业发展' }
    ],
    stats: [
      { value: 'Q2', label: '2025' },
      { value: '2+', label: '新特性' }
    ],
    timeline: [
      { date: '2025 Q2', event: '社区论坛升级' },
      { date: '2025 Q2', event: '格式支持扩展' },
      { date: '2025 Q3', event: '技术分享平台' },
      { date: '2025 Q3', event: '生态体系完善' }
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
        {goals.map((goal, index) => {
          const colorStyle = generateColorStyle(goal.category)
          return (
            <AnimateOnView
              key={index}
              animation="fade-in"
              delay={`${(index + 2) * 100}`}
            >
              <Card className={`group hover:shadow-lg transition-all duration-300 ${colorStyle.color}`}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 rounded-lg bg-background/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <goal.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="group-hover:text-foreground transition-colors duration-300">
                          {goal.title}
                        </CardTitle>
                        <CardDescription className="group-hover:text-foreground/70 transition-colors duration-300">
                          {goal.description}
                        </CardDescription>
                      </div>
                    </div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <ChevronDown className="h-4 w-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle>{goal.title}</DialogTitle>
                          <DialogDescription>{goal.detail}</DialogDescription>
                        </DialogHeader>
                        <ScrollArea className="h-[400px] pr-4">
                          <div className="space-y-6">
                            <Alert>
                              <AlertTitle>目标进度</AlertTitle>
                              <AlertDescription>
                                当前完成度：{goal.progress}%
                              </AlertDescription>
                            </Alert>
                            <Accordion type="single" collapsible>
                              <AccordionItem value="highlights">
                                <AccordionTrigger>主要亮点</AccordionTrigger>
                                <AccordionContent>
                                  <div className="grid grid-cols-2 gap-4">
                                    {goal.highlights.map((item, idx) => (
                                      <div
                                        key={idx}
                                        className={`p-3 rounded-lg bg-background/50 hover:bg-background/70 transition-all duration-300 ${colorStyle.color}`}
                                      >
                                        <div className="flex items-center gap-2">
                                          <item.icon className="h-4 w-4 text-primary" />
                                          <span className="font-medium">{item.text}</span>
                                        </div>
                                        <p className="text-sm text-muted-foreground mt-2">{item.detail}</p>
                                      </div>
                                    ))}
                                  </div>
                                </AccordionContent>
                              </AccordionItem>
                              <AccordionItem value="timeline">
                                <AccordionTrigger>时间线</AccordionTrigger>
                                <AccordionContent>
                                  <div className="space-y-4">
                                    {goal.timeline.map((item, idx) => (
                                      <div
                                        key={idx}
                                        className="flex items-center gap-4 p-3 rounded-lg bg-background/50"
                                      >
                                        <div className="text-sm font-medium text-primary">{item.date}</div>
                                        <Separator orientation="vertical" className="h-4" />
                                        <div className="text-sm">{item.event}</div>
                                      </div>
                                    ))}
                                  </div>
                                </AccordionContent>
                              </AccordionItem>
                            </Accordion>
                          </div>
                        </ScrollArea>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* 进度条 */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground group-hover:text-foreground/70 transition-colors duration-300">完成进度</span>
                      <span className="text-primary">{goal.progress}%</span>
                    </div>
                    <Progress value={goal.progress} className="h-2" />
                  </div>

                  {/* 统计数据 */}
                  <div className="grid grid-cols-2 gap-4">
                    {goal.stats.map((stat, idx) => (
                      <div
                        key={idx}
                        className="text-center p-2 rounded-lg bg-background/50 group-hover:bg-background/70 transition-colors duration-300"
                      >
                        <div className="text-lg font-bold text-primary">{stat.value}</div>
                        <div className="text-xs text-muted-foreground group-hover:text-foreground/70 transition-colors duration-300">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimateOnView>
          )
        })}
      </div>
    </Section>
  )
}

