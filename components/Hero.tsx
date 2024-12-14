'use client'

import { Button } from "@/components/ui/button"
import { ChevronRight, Cpu, Zap, Download } from 'lucide-react'
import { TextCycle, AnimateOnView } from '@/components/animations/AnimationWrapper'
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Section } from "@/components/ui/section"
import { Pacifico } from 'next/font/google'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { useState, useEffect } from 'react'

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pacifico',
})

const techWords = ['串口通信', '固件管理', '设备调试', '共享社区能力', '国产化软硬件']

interface UpdateInfo {
  version: string;
  notes: string;
  pub_date: string;
  platforms: {
    'windows-x86_64': {
      signature: string;
      url: string;
    }
  }
}

export default function Hero() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [updateInfo, setUpdateInfo] = useState<UpdateInfo | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchUpdateInfo = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetch('https://haohanyh-ctcc.gcxstudio.cn/software-updater.json');
      if (!response.ok) {
        throw new Error('Failed to fetch update information');
      }
      const data = await response.json();
      setUpdateInfo(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch update information');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownloadClick = () => {
    setIsDialogOpen(true);
    fetchUpdateInfo();
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <>
      <Section
        title={
          <div className="flex flex-col items-center justify-center">
            <AnimateOnView animation="fade-in-up" duration="normal" delay="300">
              <h1 className={`${pacifico.className} text-8xl text-primary lg:text-9xl`}>
                Nearlink Toolbox
              </h1>
            </AnimateOnView>
          </div>
        }
        description={
          <div className="flex flex-col items-center justify-center">
            <AnimateOnView animation="fade-in-up" duration="normal" delay="400">
              <div className="text-xl md:text-2xl font-normal text-muted-foreground mt-6 flex items-center justify-center gap-1">
                一站式
                <TextCycle
                  words={techWords}
                  className="font-semibold text-foreground"
                  interval={3000}
                />
                方案
              </div>
            </AnimateOnView>
          </div>
        }
        className="relative py-20 md:py-32 overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background">
        <div className="container mx-auto px-4">

          {/* 特性卡片 */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <AnimateOnView animation="fade-in-left" duration="normal" delay="600">
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 min-h-[200px]">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4
                    group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-300">
                    <Cpu className="h-6 w-6 group-hover:text-primary transition-colors duration-300" />
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors duration-300">
                    高性能
                  </CardTitle>
                  <CardDescription>
                    基于 Rust 和 Tauri，提供卓越的性能和效率
                  </CardDescription>
                </CardHeader>
              </Card>
            </AnimateOnView>

            <AnimateOnView animation="fade-in-up" duration="normal" delay="700">
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 min-h-[200px]">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4
                    group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-300">
                    <Zap className="h-6 w-6 group-hover:text-primary transition-colors duration-300" />
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors duration-300">
                    多功能
                  </CardTitle>
                  <CardDescription>
                    集成串口通信、固件管理、设备调试等多功能
                  </CardDescription>
                </CardHeader>
              </Card>
            </AnimateOnView>

            <AnimateOnView animation="fade-in-right" duration="normal" delay="800">
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 min-h-[200px]">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4
                    group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-300">
                    <Download className="h-6 w-6 group-hover:text-primary transition-colors duration-300" />
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors duration-300">
                    便捷使用
                  </CardTitle>
                  <CardDescription>
                    一键下载、智能管理，让开发更轻松
                  </CardDescription>
                </CardHeader>
              </Card>
            </AnimateOnView>
          </div>

          {/* 按钮组 */}
          <div className="flex flex-wrap justify-center gap-4">
            <AnimateOnView animation="fade-in-up" duration="normal" delay="900">
              <Button size="lg" className="group relative overflow-hidden" onClick={handleDownloadClick}>
                <span className="relative z-10 flex items-center">
                  立即下载
                  <Download className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                </span>
                <span className="absolute inset-0 bg-primary/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Button>
            </AnimateOnView>

            <AnimateOnView animation="fade-in-up" duration="normal" delay="1000">
              <Button variant="outline" size="lg" className="group relative overflow-hidden">
                <span className="relative z-10 flex items-center">
                  了解更多
                  <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </span>
                <span className="absolute inset-0 bg-primary/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Button>
            </AnimateOnView>
          </div>
        </div>
      </Section>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>软件更新信息</DialogTitle>
          </DialogHeader>
          {isLoading && (
            <div className="flex items-center justify-center py-4">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>
          )}
          {error && (
            <div className="text-red-500 py-4">
              {error}
            </div>
          )}
          {updateInfo && (
            <div className="space-y-4">
              <div>
                <h4 className="font-medium">版本</h4>
                <p className="text-sm text-muted-foreground">{updateInfo.version}</p>
              </div>
              <div>
                <h4 className="font-medium">发布时间</h4>
                <p className="text-sm text-muted-foreground">{formatDate(updateInfo.pub_date)}</p>
              </div>
              <div>
                <h4 className="font-medium">更新说明</h4>
                <p className="text-sm text-muted-foreground whitespace-pre-wrap">{updateInfo.notes}</p>
              </div>
              <Button
                className="w-full"
                onClick={() => window.open(updateInfo.platforms['windows-x86_64'].url, '_blank')}
              >
                下载最新版本
                <Download className="ml-2 h-4 w-4" />
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
