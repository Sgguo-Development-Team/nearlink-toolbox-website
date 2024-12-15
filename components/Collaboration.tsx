import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { AnimateOnView } from '@/components/animations/AnimationWrapper'
import { Section } from "@/components/ui/section"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import {
  Youtube,
  Star,
  Rocket,
  ExternalLink,
  Github,
  Video,
  Users,
  Code,
  Sparkles
} from 'lucide-react'
import { generateColorStyle } from '@/lib/color-style'

const collaborations = [
  {
    name: "传说当中的帅锅",
    title: "B站知识区优质UP主",
    description: "专注于Windows干货和硬件开发的优质创作者，从2019年开始持续输出高质量内容",
    category: "creator",
    icon: Youtube,
    avatar: "/assets/sgguo-avatar.png",
    stats: [
      { value: "879万+", label: "播放量" },
      { value: "23.8万+", label: "获赞" }
    ],
    features: [
      { icon: Star, text: "B站认证优质UP主" },
      { icon: Video, text: "独特干货内容" },
      { icon: Users, text: "2万+忠实粉丝" }
    ],
    links: [
      { icon: ExternalLink, label: "B站主页", url: "https://space.bilibili.com/198316802" },
      { icon: ExternalLink, label: "个人网站", url: "https://www.sgguo.com" }
    ]
  },
  {
    name: "浩瀚银河",
    title: "Haohanyh Dreambuilder",
    description: "专注于嵌入式开发的技术团队，提供专业的开发工具和解决方案",
    category: "partner",
    icon: Rocket,
    stats: [
      { value: "5年+", label: "技术积累" },
      { value: "20+", label: "开源项目" },
    ],
    features: [
      { icon: Code, text: "专业开发工具" },
      { icon: Sparkles, text: "创新技术方案" },
      { icon: Star, text: "优质技术服务" }
    ],
    links: [
      { icon: ExternalLink, label: "官网", url: "https://www.haohanyh.com" },
      { icon: Github, label: "Github", url: "https://github.com/Hny0305Lin" }
    ]
  }
]

export default function Collaboration() {
  return (
    <Section
      id="collaboration"
      title="重量级合作"
      description="强强联手，共创未来"
      subDescription="与B站知识区优质UP主「传说当中的帅锅」和专业技术团队「浩瀚银河」深度合作，为用户提供更优质的产品和服务。"
    >
      <div className="grid gap-8 md:grid-cols-2">
        {collaborations.map((collab, index) => {
          const colorStyle = generateColorStyle(collab.category)
          return (
            <AnimateOnView
              key={index}
              animation={index === 0 ? 'fade-in-left' : 'fade-in-right'}
              delay={`${(index + 2) * 100}`}
            >
              <Card className={`group hover:shadow-lg transition-all duration-300 ${colorStyle.color} min-h-[380px]`}>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    {collab.avatar ? (
                      <Avatar className="w-16 h-16 border-2 border-primary/20 group-hover:scale-110 transition-transform duration-300">
                        <AvatarImage src={collab.avatar} alt={collab.name} className="object-cover" />
                        <AvatarFallback>
                          <collab.icon className="h-6 w-6" />
                        </AvatarFallback>
                      </Avatar>
                    ) : (
                      <div className="p-3 rounded-lg bg-background/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <collab.icon className="h-6 w-6" />
                      </div>
                    )}
                    <div>
                      <div className="flex items-center gap-2">
                        <CardTitle className="group-hover:text-foreground transition-colors duration-300">
                          {collab.name}
                        </CardTitle>
                        <Badge variant="secondary" className="group-hover:bg-primary/10 transition-colors duration-300">
                          {collab.title}
                        </Badge>
                      </div>
                      <CardDescription className="mt-1 group-hover:text-foreground/70 transition-colors duration-300">
                        {collab.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    {collab.stats.map((stat, idx) => (
                      <div key={idx} className="text-center p-3 rounded-lg bg-background/50 group-hover:bg-background/70 transition-all duration-300">
                        <div className="text-2xl font-bold text-primary">{stat.value}</div>
                        <div className="text-sm text-muted-foreground group-hover:text-foreground/70 transition-colors duration-300">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="grid grid-cols-3 gap-2">
                    {collab.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 p-2 rounded-lg bg-background/50 group-hover:bg-primary/5 transition-all duration-300"
                      >
                        <feature.icon className="h-4 w-4 text-primary" />
                        <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Separator className="bg-primary/10" />

                  {/* Links */}
                  <div className="flex gap-2">
                    {collab.links.map((link, idx) => (
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
    </Section>
  )
}
