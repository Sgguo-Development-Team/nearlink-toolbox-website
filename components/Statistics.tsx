'use client'

import * as React from "react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Section } from "@/components/ui/section"
import { AnimateOnView } from "@/components/animations/AnimationWrapper"
import { BarChart3, Download, Users, Star, TrendingUp, ArrowUpRight, Activity } from 'lucide-react'

const chartData = [
  { date: "2024-01", downloads: 120, users: 80 },
  { date: "2024-02", downloads: 180, users: 120 },
  { date: "2024-03", downloads: 220, users: 160 },
  { date: "2024-04", downloads: 300, users: 220 },
  { date: "2024-05", downloads: 350, users: 280 },
  { date: "2024-06", downloads: 380, users: 320 },
]

const chartConfig = {
  views: {
    label: "统计数据",
    color: "hsl(var(--chart-1))",
    icon: BarChart3,
  },
  downloads: {
    label: "下载量",
    color: "hsl(var(--chart-1))",
    icon: Download,
  },
  users: {
    label: "活跃用户",
    color: "hsl(var(--chart-2))",
    icon: Users,
  },
} satisfies ChartConfig

export default function Statistics() {
  const [activeChart, setActiveChart] = React.useState<keyof typeof chartConfig>("downloads")

  const total = React.useMemo(
    () => ({
      downloads: chartData.reduce((acc, curr) => acc + curr.downloads, 0),
      users: chartData.reduce((acc, curr) => acc + curr.users, 0),
    }),
    []
  )

  const calculateGrowth = (data: typeof chartData, key: 'downloads' | 'users') => {
    const lastMonth = Number(data[data.length - 1][key])
    const previousMonth = Number(data[data.length - 2]?.[key] ?? 0)
    return previousMonth === 0 ? '100' : ((lastMonth - previousMonth) / previousMonth * 100).toFixed(1)
  }

  return (
    <Section
      id="statistics"
      title="使用数据"
      description="近6个月使用数据统计"
    >
      <div className="container mx-auto px-4">
        <AnimateOnView animation="fade-in-up" duration="normal" delay="400">
          <Card>
            <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
              <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5 text-primary" />
                  数据趋势
                </CardTitle>
                <CardDescription>
                  近6个月使用数据统计
                </CardDescription>
              </div>
              <div className="flex">
                {(["downloads", "users"] as const).map((key) => {
                  const chart = key
                  const Icon = chartConfig[chart].icon
                  const growth = calculateGrowth(chartData, chart)
                  return (
                    <button
                      key={chart}
                      data-active={activeChart === chart}
                      className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l
                        data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6
                        transition-colors duration-200 hover:bg-muted/30"
                      onClick={() => setActiveChart(chart)}
                    >
                      <span className="text-xs text-muted-foreground flex items-center gap-1.5">
                        <Icon className="h-4 w-4" />
                        {chartConfig[chart].label}
                      </span>
                      <span className="text-lg font-bold leading-none sm:text-3xl">
                        {total[key as keyof typeof total].toLocaleString()}
                      </span>
                      <span className="text-xs text-emerald-500 dark:text-emerald-400 flex items-center gap-0.5 mt-1">
                        <ArrowUpRight className="h-3 w-3" />
                        {growth}%
                      </span>
                    </button>
                  )
                })}
              </div>
            </CardHeader>
            <CardContent className="px-2 sm:p-6">
              <ChartContainer
                config={chartConfig}
                className="aspect-auto h-[350px] w-full"
              >
                <BarChart
                  data={chartData}
                  margin={{
                    left: 12,
                    right: 12,
                    top: 20,
                    bottom: 20,
                  }}
                >
                  <CartesianGrid vertical={false} strokeDasharray="3 3" />
                  <XAxis
                    dataKey="date"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    tickFormatter={(value) => {
                      const date = new Date(value)
                      return date.toLocaleDateString("zh-CN", {
                        year: "numeric",
                        month: "short",
                      })
                    }}
                  />
                  <ChartTooltip
                    content={
                      <ChartTooltipContent
                        className="w-[150px]"
                        nameKey="views"
                        labelFormatter={(value) => {
                          return new Date(value).toLocaleDateString("zh-CN", {
                            year: "numeric",
                            month: "long",
                          })
                        }}
                      />
                    }
                  />
                  <Bar
                    dataKey={activeChart}
                    fill={`var(--color-${activeChart})`}
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </AnimateOnView>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <AnimateOnView animation="fade-in-left" duration="normal" delay="600">
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Download className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle>总下载量</CardTitle>
                    <CardDescription>累计应用下载次数</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <p className="text-3xl font-bold">{total.downloads.toLocaleString()}</p>
                  <div className="flex items-center gap-1 text-emerald-500 dark:text-emerald-400">
                    <ArrowUpRight className="h-4 w-4" />
                    <span className="text-sm font-medium">{calculateGrowth(chartData, 'downloads')}%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimateOnView>

          <AnimateOnView animation="fade-in-up" duration="normal" delay="700">
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle>活跃用户</CardTitle>
                    <CardDescription>月活跃用户数量</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <p className="text-3xl font-bold">{total.users.toLocaleString()}</p>
                  <div className="flex items-center gap-1 text-emerald-500 dark:text-emerald-400">
                    <ArrowUpRight className="h-4 w-4" />
                    <span className="text-sm font-medium">{calculateGrowth(chartData, 'users')}%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimateOnView>

          <AnimateOnView animation="fade-in-right" duration="normal" delay="800">
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Star className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle>用户满意度</CardTitle>
                    <CardDescription>用户评分</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <p className="text-3xl font-bold">4.8/5.0</p>
                  <div className="flex items-center gap-1 text-emerald-500 dark:text-emerald-400">
                    <TrendingUp className="h-4 w-4" />
                    <span className="text-sm font-medium">96%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimateOnView>
        </div>
      </div>
    </Section>
  )
}
