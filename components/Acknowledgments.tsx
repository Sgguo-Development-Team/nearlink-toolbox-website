'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimateOnView } from '@/components/animations/AnimationWrapper'
import { Heart, Award, Users, Star, ExternalLink, Github, Mail } from 'lucide-react'
import { Section } from "@/components/ui/section"
import { generateColorStyle } from '@/lib/color-style'
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

const partners = [
  {
    name: "南京小熊派智能科技有限公司",
    contribution: "提供开发板支持",
    icon: Award,
    description: "为项目提供了核心的硬件支持，包括开发板和技术指导。",
    category: "hardware",
    links: [
      { icon: ExternalLink, label: "官网", url: "https://bearpi.cn/" },
      { icon: Github, label: "Github", url: "https://github.com/BearPi" },
    ]
  },
  {
    name: "江苏润和软件股份有限公司",
    contribution: "提供技术支持",
    icon: Users,
    description: "提供了关键的技术支持和解决方案咨询。",
    category: "software",
    links: [
      { icon: ExternalLink, label: "官网", url: "http://www.hihope.org/" },
      { icon: Mail, label: "联系", url: "mailto:hihope@hoperun.com" }
    ]
  }
]

const contributors = [
  {
    category: "development",
    title: "开源贡献者",
    icon: Github,
    description: "参与代码开发和功能实现"
  },
  {
    category: "testing",
    title: "测试人员",
    icon: Star,
    description: "参与软件测试和质量保证"
  },
  {
    category: "docs",
    title: "文档撰写者",
    icon: Mail,
    description: "参与文档编写和维护"
  },
  {
    category: "feedback",
    title: "问题反馈者",
    icon: Heart,
    description: "提供宝贵的反馈和建议"
  }
]

export default function Acknowledgments() {
  return (
    <Section
      id="acknowledgments"
      title="致谢"
      description="感谢所有为项目做出贡献的个人和组织"
      className="bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-background via-primary/5 to-background"
    >
      <div className="space-y-12">
        {/* Partners */}
        <div className="grid gap-6 md:grid-cols-2">
          {partners.map((partner, index) => {
            const colorStyle = generateColorStyle(partner.category)
            return (
              <AnimateOnView
                key={index}
                animation={index === 0 ? 'fade-in-left' : 'fade-in-right'}
                delay={`${(index + 2) * 100}`}
              >
                <Card className={`h-full hover:shadow-lg transition-all duration-300 group ${colorStyle.color}`}>
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="p-3 rounded-lg bg-background/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <partner.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="group-hover:text-foreground transition-colors duration-300">
                          {partner.name}
                        </CardTitle>
                        <Badge variant="secondary" className="mt-2 group-hover:bg-primary/10 transition-colors duration-300">
                          {partner.contribution}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="group-hover:text-foreground/70 transition-colors duration-300">
                      {partner.description}
                    </CardDescription>
                    <Separator className="bg-primary/10" />
                    <div className="flex gap-2">
                      {partner.links.map((link, idx) => (
                        <Button
                          key={idx}
                          variant="ghost"
                          size="sm"
                          className="group/link hover:bg-primary/10"
                          asChild
                        >
                          <a href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                            <link.icon className="h-4 w-4 group-hover/link:scale-110 transition-transform duration-300" />
                            <span>{link.label}</span>
                          </a>
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimateOnView>
            )
          })}
        </div>

        {/* Contributors */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {contributors.map((contributor, index) => {
            const colorStyle = generateColorStyle(contributor.category)
            return (
              <AnimateOnView
                key={index}
                animation="fade-in"
                delay={`${(index + 2) * 100}`}
              >
                <Card className={`text-center hover:shadow-lg transition-all duration-300 group ${colorStyle.color}`}>
                  <CardHeader>
                    <div className="mx-auto p-3 rounded-lg bg-background/50 group-hover:scale-110 transition-transform duration-300">
                      <contributor.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="mt-4 group-hover:text-foreground transition-colors duration-300">
                      {contributor.title}
                    </CardTitle>
                    <CardDescription className="group-hover:text-foreground/70 transition-colors duration-300">
                      {contributor.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </AnimateOnView>
            )
          })}
        </div>
      </div>
    </Section>
  )
}

