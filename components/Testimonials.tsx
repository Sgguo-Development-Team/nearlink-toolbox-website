import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { AnimateOnView } from '@/components/animations/AnimationWrapper'
import { Section } from "@/components/ui/section"
import {  Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: "张三",
    avatar: "ZS",
    role: "软件工程师",
    content: "星闪工具箱大大提高了我的工作效率，特别是固件管理功能，非常实用！",
    rating: 5
  },
  {
    name: "李四",
    avatar: "LS",
    role: "硬件开发者",
    content: "串口调试功能非常强大，让我的调试工作变得轻松多了。",
    rating: 5
  },
  {
    name: "王五",
    avatar: "WW",
    role: "项目经理",
    content: "固件商店的一键下载功能为我们的团队节省了大量时间，强烈推荐！",
    rating: 5
  }
]

export default function Testimonials() {
  return (
    <Section
      id="testimonials"
      title="用户评价"
      description="听听他们怎么说"
    >
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <AnimateOnView
            key={index}
            animation="fade-in"
            delay={`${(index + 2) * 100}`}
          >
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-12 w-12 group-hover:scale-110 transition-transform duration-300">
                      <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <CardTitle>{testimonial.name}</CardTitle>
                      <span className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-primary text-primary group-hover:scale-110 transition-transform duration-300"
                      />
                    ))}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="relative">
                  <Quote className="h-8 w-8 absolute -top-4 -left-2 text-muted-foreground/20 rotate-180" />
                  <p className="text-muted-foreground pl-6">{testimonial.content}</p>
                </div>
              </CardContent>
            </Card>
          </AnimateOnView>
        ))}
      </div>
    </Section>
  )
}

