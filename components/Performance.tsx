import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, Server, ArrowRight, Gauge, Cpu } from 'lucide-react'
import { AnimateOnView } from '@/components/animations/AnimationWrapper'
import { Section } from "@/components/ui/section"

const performanceStrategies = [
  {
    icon: Zap,
    title: '前端优化',
    description: '持续优化用户界面和交互体验',
    metrics: [
      { value: '12%', label: '包体积减少', note: '基于v1.6版本' },
      { value: '200ms', label: '首屏加载', note: '理想网络环境' },
      { value: '120FPS+', label: '流畅动画', note: '标准硬件配置' },
      { value: '50%', label: '代码分割', note: '按路由分割' }
    ],
    strategies: [
      { icon: Gauge, text: '路由级代码分割' },
      { icon: Zap, text: '组件懒加载' },
      { icon: ArrowRight, text: '资源预加载' },
      { icon: Cpu, text: '渲染优化' }
    ]
  },
  {
    icon: Server,
    title: '后端优化',
    description: '确保软件稳定和高效运行',
    metrics: [
      { value: '4MB', label: '内存占用', note: '空载状态' },
      { value: '12ms', label: '响应延迟', note: '本地测试环境' },
      { value: '99.9%', label: '系统稳定', note: '实验室环境' },
      { value: '10K+', label: '并发支持', note: '理想负载下' }
    ],
    strategies: [
      { icon: Cpu, text: 'CPU使用优化' },
      { icon: Server, text: '内存管理' },
      { icon: Zap, text: '异步处理' },
      { icon: Gauge, text: '并发优化' }
    ]
  }
]

export default function Performance() {
  return (
    <Section
      id="performance"
      title="性能优化策略"
      description={
        <div className="space-y-2">
          <p>追求极致的性能体验</p>
          <p className="text-sm text-muted-foreground">* 以下数据均在实验室环境下测得，实际使用效果可能因环境差异而不同</p>
        </div>
      }
      className="bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-background via-primary/5 to-background"
    >
      <div className="grid gap-6 md:grid-cols-2">
        {performanceStrategies.map((category, index) => (
          <AnimateOnView
            key={index}
            animation={index === 0 ? 'fade-in-left' : 'fade-in-right'}
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
                    <p className="text-sm text-muted-foreground mt-1">{category.description}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-4 gap-4">
                  {category.metrics.map((metric, idx) => (
                    <div key={idx} className="text-center group/metric">
                      <div className="text-xl font-bold text-primary group-hover/metric:scale-110 transition-transform duration-300">
                        {metric.value}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {metric.label}
                      </div>
                      <div className="text-[10px] text-muted-foreground/70 mt-0.5 italic">
                        {metric.note}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {category.strategies.map((strategy, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-2 p-2 rounded-lg bg-muted/50 group-hover:bg-primary/10 transition-colors duration-300"
                    >
                      <strategy.icon className="h-4 w-4 text-primary" />
                      <span className="text-sm">{strategy.text}</span>
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

