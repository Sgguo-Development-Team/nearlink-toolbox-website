import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { AnimateOnView } from '@/components/animations/AnimationWrapper'
import { Section } from "@/components/ui/section"
import { Book, Settings, Monitor, Package, ArrowRight, Info } from 'lucide-react'
import { generateColorStyle } from '@/lib/color-style'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const docCategories = [
  {
    icon: Book,
    title: '傻瓜式操作',
    description: '三步上手，零基础也能轻松驾驭',
    category: 'beginner',
    detail: '精心设计的用户界面和操作流程，让新手也能快速上手',
    items: [
      { name: '一键烧录', detail: '智能识别设备，自动配置参数' },
      { name: '智能识别', detail: '自动检测设备型号和状态' },
      { name: '自动配置', detail: '根据设备自动选择最佳配置' },
      { name: '可视化界面', detail: '直观的操作界面，所见即所得' }
    ]
  },
  {
    icon: Package,
    title: '功能全家桶',
    description: '麻雀虽小，五脏俱全，一站式搞定',
    category: 'features',
    detail: '集成多种实用功能，满足不同场景的需求',
    items: [
      { name: '固件管理', detail: '集中管理和组织固件文件' },
      { name: '串口调试', detail: '专业的串口通信和调试工具' },
      { name: '批量烧录', detail: '支持多设备同时烧录' },
      { name: '参数配置', detail: '灵活配置各种烧录参数' }
    ]
  },
  {
    icon: Settings,
    title: '贴心工具',
    description: '各种实用小功能，让烧录更轻松',
    category: 'tools',
    detail: '提供多种辅助工具，提升使用体验',
    items: [
      { name: '进度显示', detail: '实时显示烧录进度和状态' },
      { name: '日志记录', detail: '详细记录操作和错误信息' },
      { name: '错误提示', detail: '智能诊断和错误提示' },
      { name: '状态监控', detail: '实时监控设备和任务状态' }
    ]
  },
  {
    icon: Monitor,
    title: '界面操作',
    description: '告别命令行，所见即所得',
    category: 'interface',
    detail: '现代化的图形界面，让操作更加直观',
    items: [
      { name: '点击烧录', detail: '简单点击即可开始烧录' },
      { name: '实时预览', detail: '预览和确认烧录内容' },
      { name: '操作提示', detail: '智能操作提示和引导' }
    ]
  }
]

export default function Documentation() {
  return (
    <Section
      title="简单到不能再简单"
      description="告别复杂操作，人人都是烧录高手"
      subDescription="无需敲命令、记参数，图形化界面让烧录变得简单直观。智能识别设备、自动配置参数，一键烧录让您立即上手，轻松掌握。"
    >
      {/* 特性展示 */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
        {docCategories.map((category, index) => {
          const colorStyle = generateColorStyle(category.category)
          return (
            <AnimateOnView
              key={index}
              animation="fade-in"
              delay={`${(index + 2) * 100}`}
            >
              <Sheet>
                <SheetTrigger asChild>
                  <Card className={`h-full hover:shadow-lg transition-all duration-300 group cursor-pointer ${colorStyle.color}`}>
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-background/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <category.icon className="w-6 h-6" />
                      </div>
                      <CardTitle className="group-hover:text-foreground transition-colors duration-300">
                        {category.title}
                      </CardTitle>
                      <CardDescription className="group-hover:text-foreground/70 transition-colors duration-300">
                        {category.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </SheetTrigger>
                <SheetContent className="w-[400px] sm:w-[540px] overflow-y-auto">
                  <SheetHeader>
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg ${colorStyle.color}`}>
                        <category.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <SheetTitle>{category.title}</SheetTitle>
                        <SheetDescription>{category.description}</SheetDescription>
                      </div>
                    </div>
                  </SheetHeader>
                  <ScrollArea className="h-full mt-6">
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-sm font-semibold mb-2">详细说明</h4>
                        <p className="text-sm text-muted-foreground">{category.detail}</p>
                      </div>
                      <Separator />
                      <div>
                        <h4 className="text-sm font-semibold mb-4">主要优势</h4>
                        <div className="grid grid-cols-2 gap-4">
                          {category.items.map((item, idx) => (
                            <div
                              key={idx}
                              className={`p-3 rounded-lg bg-background/50 hover:bg-background/70 transition-all duration-300 ${colorStyle.color}`}
                            >
                              <div className="flex items-center gap-2">
                                <ArrowRight className="h-4 w-4 text-primary" />
                                <span className="text-sm">{item.name}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </ScrollArea>
                </SheetContent>
              </Sheet>
            </AnimateOnView>
          )
        })}
      </div>

      {/* 功能展示 */}
      <Tabs defaultValue="beginner" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-8">
          {docCategories.map((category) => (
            <TabsTrigger
              key={category.category}
              value={category.category}
              className={cn(
                "data-[state=active]:bg-primary/10",
                "transition-all duration-200"
              )}
            >
              <div className="flex items-center gap-2">
                <category.icon className="h-4 w-4 md:h-5 md:w-5" />
                <span className="hidden md:inline text-sm">{category.title}</span>
              </div>
            </TabsTrigger>
          ))}
        </TabsList>
        {docCategories.map((category) => {
          const colorStyle = generateColorStyle(category.category)
          return (
            <TabsContent key={category.category} value={category.category}>
              <AnimateOnView animation="fade-in">
                <Card className={`group ${colorStyle.color}`}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 rounded-lg bg-background/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <category.icon className="h-6 w-6" />
                        </div>
                        <div>
                          <CardTitle>{category.title}</CardTitle>
                          <CardDescription>{category.description}</CardDescription>
                        </div>
                      </div>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <Info className="h-4 w-4" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-80" align="end">
                          <div className="space-y-2">
                            <h4 className="font-medium">{category.title}</h4>
                            <p className="text-sm text-muted-foreground">{category.detail}</p>
                          </div>
                        </PopoverContent>
                      </Popover>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {category.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="group/item space-y-3 p-4 rounded-lg bg-background/50 hover:bg-background/70 transition-all duration-300"
                        >
                          <div className="flex items-center gap-2">
                            <ArrowRight className="h-4 w-4 text-primary group-hover/item:translate-x-0.5 transition-transform duration-300" />
                            <span className="font-medium">{item.name}</span>
                          </div>
                          <Separator className="bg-primary/10" />
                          <p className="text-sm text-muted-foreground group-hover/item:text-foreground/70 transition-colors duration-300">
                            {item.detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimateOnView>
            </TabsContent>
          )
        })}
      </Tabs>
    </Section>
  )
}
