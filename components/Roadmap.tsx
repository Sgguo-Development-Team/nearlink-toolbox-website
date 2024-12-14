import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimateOnView } from '@/components/animations/AnimationWrapper'
import { Section } from "@/components/ui/section"
import { Rocket, Zap, Star, Flag } from 'lucide-react'

const milestones = [
  {
    version: "v1.x",
    status: "内测中",
    date: "2024年10月",
    title: "内测版本",
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
      className="bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-background via-secondary/5 to-background"
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {milestones.map((milestone, index) => (
          <AnimateOnView
            key={index}
            animation="fade-in"
            delay={`${(index + 2) * 100}`}
          >
            <Card className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-secondary/5 rounded-full blur-3xl group-hover:bg-secondary/10 transition-all duration-300" />
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <milestone.icon className="w-6 h-6 text-foreground" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <CardTitle>{milestone.version}</CardTitle>
                      <Badge
                        variant={
                          milestone.status === "内测中"
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
              </CardHeader>
              <CardContent className="space-y-4 relative">
                <h3 className="font-semibold group-hover:text-primary transition-colors duration-300">
                  {milestone.title}
                </h3>
                <div className="space-y-2">
                  {milestone.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center space-x-2 group/item hover:translate-x-1 transition-transform duration-200"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50 group-hover/item:bg-primary/50 transition-colors duration-200" />
                      <span className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors duration-200">
                        {feature}
                      </span>
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
