'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Section } from "@/components/ui/section"
import { AnimateOnView } from "@/components/animations/AnimationWrapper"
import { Calendar, Code2, Cpu, Globe, Puzzle, Zap } from "lucide-react"


const plans = [
  {
    icon: Cpu,
    title: "性能优化",
    description: "持续优化应用性能，提供更快的响应速度",
    timeline: "2024 Q2",
  },
  {
    icon: Code2,
    title: "更多设备支持",
    description: "扩展对更多设备和协议的支持",
    timeline: "2024 Q2",
  },
  {
    icon: Puzzle,
    title: "插件系统",
    description: "引入插件系统，支持社区开发者扩展功能",
    timeline: "2024 Q3",
  },
  {
    icon: Globe,
    title: "国际化",
    description: "支持多语言界面，覆盖更多用户群体",
    timeline: "2024 Q3",
  },
  {
    icon: Calendar,
    title: "自动化工作流",
    description: "支持自定义自动化工作流程",
    timeline: "2024 Q4",
  },
  {
    icon: Zap,
    title: "AI 助手",
    description: "集成 AI 助手，提供智能化支持",
    timeline: "2024 Q4",
  },
]

export default function FuturePlans() {
  return (
    <Section
      id="future-plans"
      title="未来规划"
      description="我们正在规划和开发的新功能"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan, index) => {
            // 计算动画延迟和类型
            const row = Math.floor(index / 3)
            const col = index % 3
            let animation = "fade-in-up"
            if (col === 0) animation = "fade-in-left"
            if (col === 2) animation = "fade-in-right"
            const baseDelay = 300 + row * 200 // 每行延迟增加200ms
            const delay = `${baseDelay + col * 100}` // 每列增加100ms

            return (
              <AnimateOnView
                key={plan.title}
                animation={animation as "fade-in-up" | "fade-in-left" | "fade-in-right"}
                duration="normal"
                delay={delay}
              >
                <Card className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <plan.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="flex items-center justify-between">
                      {plan.title}
                      <span className="text-sm font-normal text-muted-foreground">
                        {plan.timeline}
                      </span>
                    </CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-1 w-full bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary transition-all duration-500 group-hover:opacity-80"
                        style={{
                          width: plan.timeline.includes("Q2")
                            ? "70%"
                            : plan.timeline.includes("Q3")
                            ? "40%"
                            : "20%",
                        }}
                      />
                    </div>
                  </CardContent>
                </Card>
              </AnimateOnView>
            )
          })}
        </div>
      </div>
    </Section>
  )
}

