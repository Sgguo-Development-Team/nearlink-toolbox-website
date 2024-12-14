'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimateOnView } from '@/components/animations/AnimationWrapper'
import { Heart, Award, Users, Star } from 'lucide-react'
import { Section } from "@/components/ui/section"

const partners = [
  {
    name: "南京小熊派智能科技有限公司",
    contribution: "提供开发板支持",
    icon: Award,
    description: "为项目提供了核心的硬件支持，包括开发板和技术指导。"
  },
  {
    name: "江苏润和软件股份有限公司",
    contribution: "提供技术支持",
    icon: Users,
    description: "提供了关键的技术支持和解决方案咨询。"
  }
]

const contributors = [
  "开源贡献者",
  "测试人员",
  "文档撰写者",
  "问题反馈者"
]

export default function Acknowledgments() {
  return (
    <Section
      id="acknowledgments"
      title="致谢"
      description="感谢所有为项目做出贡献的个人和组织"
      className="bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-background via-secondary/5 to-background"
    >
      <div className="space-y-8">
        <div className="grid gap-6 md:grid-cols-2">
          {partners.map((partner, index) => (
            <AnimateOnView
              key={index}
              animation={index === 0 ? 'fade-in-left' : 'fade-in-right'}
              delay={`${(index + 2) * 100}`}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-lg bg-muted group-hover:scale-110 transition-transform duration-300">
                      <partner.icon className="h-6 w-6 text-foreground" />
                    </div>
                    <div>
                      <CardTitle>{partner.name}</CardTitle>
                      <Badge variant="secondary" className="mt-1">
                        {partner.contribution}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{partner.description}</CardDescription>
                </CardContent>
              </Card>
            </AnimateOnView>
          ))}
        </div>

        <AnimateOnView animation="fade-in">
          <Card className="relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <CardHeader>
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg bg-muted group-hover:scale-110 transition-transform duration-300">
                  <Heart className="h-6 w-6 text-foreground" />
                </div>
                <CardTitle>社区贡献者</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {contributors.map((contributor, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 bg-muted/50 rounded-full px-4 py-2 text-sm group/item hover:bg-primary/10 transition-colors duration-300"
                  >
                    <Star className="h-4 w-4" />
                    <span>{contributor}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </AnimateOnView>
      </div>
    </Section>
  )
}

