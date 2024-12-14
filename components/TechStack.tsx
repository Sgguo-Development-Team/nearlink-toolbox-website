import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimateOnView } from '@/components/animations/AnimationWrapper'
import { Section } from "@/components/ui/section"
import { Cpu, Code, Zap, Layers } from 'lucide-react'

const techStack = [
  {
    icon: Cpu,
    title: '核心技术',
    description: '基于 Rust 和 Tauri 构建',
    items: [
      'Rust',
      'Tauri',
      'WebView',
      'IPC'
    ]
  },
  {
    icon: Code,
    title: '前端技术',
    description: '现代化的前端技术栈',
    items: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS'
    ]
  },
  {
    icon: Zap,
    title: '性能优化',
    description: '极致的性能体验',
    items: [
      '原生性能',
      '内存优化',
      '并发处理',
      '异步通信'
    ]
  },
  {
    icon: Layers,
    title: '架构设计',
    description: '可扩展的模块化设计',
    items: [
      'SOLID原则',
      '设计模式',
      '模块化',
      '插件系统'
    ]
  }
]

export default function TechStack() {
  return (
    <Section
      id="tech-stack"
      title="技术架构"
      description="采用现代化技术栈，打造高性能的跨平台应用"
    >
      <div className="grid gap-6 md:grid-cols-2">
        {techStack.map((stack, index) => (
          <AnimateOnView
            key={index}
            animation={index % 2 === 0 ? 'fade-in-left' : 'fade-in-right'}
            delay={`${(index + 2) * 100}`}
          >
            <Card className="h-full hover:shadow-lg transition-all duration-200 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-muted group-hover:scale-110 transition-transform duration-300">
                    <stack.icon className="h-6 w-6 text-foreground" />
                  </div>
                  <div>
                    <CardTitle>{stack.title}</CardTitle>
                    <CardDescription>{stack.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {stack.items.map((item, itemIndex) => (
                    <Badge
                      key={itemIndex}
                      variant="secondary"
                      className="group-hover:bg-primary/10 transition-colors duration-300"
                    >
                      {item}
                    </Badge>
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

