import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimateOnView } from '@/components/animations/AnimationWrapper'
import { Section } from "@/components/ui/section"
import { Rocket, Zap, Star, Flag } from 'lucide-react'

const milestones = [
  {
    version: "v1.x",
    status: "公测中",
    date: "2024年10月",
    title: "1.2版本后皆为公测版本",
    icon: Rocket,
    features: [
      "基础功能实现",
      "界面设计完成",
      "核心功能测试",
      "性能优化"
    ]
  },
  {
    version: "v2.x",
    status: "计划中",
    date: "2024年12月",
    title: "正式发布",
    icon: Star,
    features: [
      "完整功能集",
      "稳定性提升",
      "用户反馈优化",
      "文档完善"
    ]
  },
  {
    version: "v3.x",
    status: "规划中",
    date: "2025年Q1",
    title: "功能扩展",
    icon: Zap,
    features: [
      "高级功能",
      "插件系统",
      "自动化工具",
      "性能监控"
    ]
  },
  {
    version: "v4.x",
    status: "远期规划",
    date: "2025年Q2",
    title: "生态系统",
    icon: Flag,
    features: [
      "社区集成",
      "云端同步",
      "开发者工具",
      "企业功能"
    ]
  }
]

export default function Roadmap() {
  return (
    <Section
      id="roadmap"
      title="发展路线"
      description="探索我们的发展计划和未来愿景"
    >
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />

        <div className="space-y-8">
          {milestones.map((milestone, index) => (
            <AnimateOnView
              key={index}
              animation="fade-in"
              delay={`${(index + 2) * 100}`}
            >
              <div className="relative pl-20">
                {/* Timeline dot */}
                <div className="absolute left-7 -translate-x-1/2 w-3 h-3 rounded-full bg-primary ring-4 ring-background" />

                <Card className="group hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur-xl border-primary/10">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-lg bg-background/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <milestone.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <CardTitle>{milestone.version}</CardTitle>
                            <Badge
                              variant={
                                milestone.status === "公测中"
                                  ? "default"
                                  : milestone.status === "计划中"
                                  ? "secondary"
                                  : "outline"
                              }
                              className="font-serif"
                            >
                              {milestone.status}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{milestone.date}</p>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <h3 className="font-semibold text-lg group-hover:text-primary transition-colors duration-300">
                      {milestone.title}
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {milestone.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center space-x-2 p-3 rounded-lg bg-background/50 group-hover:bg-primary/5 transition-all duration-300"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                          <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </AnimateOnView>
          ))}
        </div>
      </div>
    </Section>
  )
}
