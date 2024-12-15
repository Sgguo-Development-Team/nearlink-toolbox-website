'use client'

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { AnimateOnView } from '@/components/animations/AnimationWrapper'
import { Section } from "@/components/ui/section"
import { Trophy, Users, Star, Award, Globe, ArrowRight, Medal, Target } from 'lucide-react'
import { generateColorStyle } from '@/lib/color-style'
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import { useEffect } from "react"
import { Fancybox } from "@fancyapps/ui"
import "@fancyapps/ui/dist/fancybox/fancybox.css"

const achievements = [
  {
    icon: Trophy,
    title: '华为开发者大会',
    description: '2024年华为开发者年度盛典',
    category: 'award',
    detail: '项目主理人 林孟嘉 先生代表团队领取卓越社区价值贡献奖',
    image: '/assets/huawei-award.png',
    highlights: [
      { icon: Star, text: '卓越贡献', detail: '获得卓越社区价值贡献奖' },
      { icon: Users, text: '社区认可', detail: '获得开发者社区认可' },
      { icon: Globe, text: '国际影响', detail: '扩大国际社区影响力' }
    ]
  }
]

const stats = [
  {
    icon: Medal,
    value: '2024',
    label: '获奖年份',
    category: 'year',
    detail: '在2024年华为开发者大会上获得认可'
  },
  {
    icon: Trophy,
    value: '卓越社区价值贡献奖',
    label: '奖项级别',
    category: 'level',
    detail: '获得最高级别的社区贡献认可'
  },
  {
    icon: Target,
    value: '华为开发者大会',
    label: '颁奖盛典',
    category: 'event',
    detail: '在华为年度开发者盛典现场领奖'
  }
]

export default function Recognition() {
  useEffect(() => {
    Fancybox.bind("[data-fancybox]", {
      animated: true,
      dragToClose: false,
      showClass: "fancybox-fadeIn",
      hideClass: "fancybox-fadeOut",
      Toolbar: {
        display: {
          left: [],
          middle: ["prev", "counter", "next"],
          right: ["zoom", "fullscreen", "close"]
        }
      },
      Carousel: {
        infinite: true,
      },
    });

    return () => {
      Fancybox.destroy();
    };
  }, []);

  return (
    <Section
      id="recognition"
      title="华为本家认可"
      description="社区赋能星闪"
      subDescription={
        <span>
          星闪工具箱凭借其在开源社区的突出贡献和技术创新，获得华为的认可。在2024年华为开发者年度盛典上，项目主理人
          <span className="text-primary font-semibold mx-1">林孟嘉</span>
          先生代表团队领取了卓越社区价值贡献奖，这是对我们持续努力的肯定。
        </span>
      }
      className="bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-background via-primary/5 to-background"
    >
      <div className="space-y-8">
        {/* Award Showcase */}
        <AnimateOnView animation="fade-in-up" delay="300">
          <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
            <div className="relative aspect-[21/9] overflow-hidden">
              <a
                data-fancybox="award-gallery"
                data-caption="2024年华为开发者年度盛典 - 卓越社区价值贡献奖"
                href="/assets/huawei-award.png"
                className="block w-full h-full"
              >
                <Image
                  src="/assets/huawei-award.png"
                  alt="华为开发者大会颁奖典礼"
                  width={1920}
                  height={1080}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-background/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-background/50 backdrop-blur-sm">
                      <Trophy className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">
                        华为开发者年度盛典
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground">
                        卓越社区价值贡献奖颁奖典礼
                      </p>
                    </div>
                  </div>
                  <Badge className="bg-primary/20 hover:bg-primary/30 backdrop-blur-sm">
                    点击查看大图
                  </Badge>
                </div>
              </a>
            </div>
          </Card>
        </AnimateOnView>

        {/* Stats & Highlights */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Stats */}
          <AnimateOnView animation="fade-in-left" delay="400">
            <div className="grid gap-4">
              {stats.map((stat, index) => {
                const colorStyle = generateColorStyle(stat.category)
                return (
                  <Card
                    key={index}
                    className={`group hover:shadow-lg transition-all duration-300 ${colorStyle.color}`}
                  >
                    <CardHeader className="p-4 md:p-6">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-lg bg-background/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <stat.icon className="h-5 w-5 md:h-6 md:w-6" />
                        </div>
                        <div>
                          <CardTitle className="text-sm md:text-base group-hover:text-foreground transition-colors duration-300">
                            {stat.value}
                          </CardTitle>
                          <CardDescription className="text-xs md:text-sm">
                            {stat.label}
                          </CardDescription>
                        </div>
                      </div>
                      <p className="mt-2 text-xs md:text-sm text-muted-foreground group-hover:text-foreground/70 transition-colors duration-300">
                        {stat.detail}
                      </p>
                    </CardHeader>
                  </Card>
                )
              })}
            </div>
          </AnimateOnView>

          {/* Highlights */}
          <AnimateOnView animation="fade-in-right" delay="400">
            <Card className="group h-full">
              <CardHeader className="p-4 md:p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Star className="h-4 w-4 text-primary" />
                  </div>
                  <CardTitle className="text-sm md:text-base">主要亮点</CardTitle>
                </div>
                <div className="space-y-3">
                  {achievements[0].highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-lg bg-background/50 hover:bg-background/70 transition-all duration-300"
                    >
                      <highlight.icon className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-medium text-sm md:text-base">{highlight.text}</div>
                        <div className="text-xs md:text-sm text-muted-foreground">{highlight.detail}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardHeader>
            </Card>
          </AnimateOnView>
        </div>
      </div>
    </Section>
  )
}