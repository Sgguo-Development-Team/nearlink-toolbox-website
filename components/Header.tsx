'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu, Github, Layers, Cpu, Sparkles, Rocket, Trophy } from 'lucide-react'
import { ThemeSwitcher } from "@/components/ThemeSwitcher"
import { DownloadButton } from "@/components/DownloadButton"

const navigation = [
  { name: "获奖经历", href: "#recognition", icon: Trophy },
  { name: "展示图", href: "#showcase", icon: Layers },
  { name: "功能", href: "#features", icon: Cpu },
  { name: "发展路线", href: "#roadmap", icon: Rocket }
]

export default function Header() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId.replace('#', ''))
    if (section) {
      const headerOffset = 80
      const elementPosition = section.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center space-x-2 group">
              <Sparkles className="h-5 w-5 text-primary group-hover:rotate-12 transition-transform duration-300" />
              <span className="font-bold text-xl text-primary">芯异构（福州）信息科技有限公司产品 - 星闪工具箱</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5 group"
                >
                  <item.icon className="h-4 w-4 group-hover:text-primary group-hover:scale-110 transition-all duration-300" />
                  {item.name}
                </button>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-2">
            <Button asChild variant="ghost" size="icon" className="hidden md:inline-flex">
              <Link
                href="https://github.com/MiraHikari/nearlink-firmwares"
                target="_blank"
                rel="noreferrer"
                className="group"
              >
                <Github className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <ThemeSwitcher />
            <div className="hidden md:block">
              <DownloadButton />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">切换菜单</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {navigation.map((item) => (
                  <DropdownMenuItem key={item.name} onSelect={() => scrollToSection(item.href)}>
                    <item.icon className="h-4 w-4 mr-2" />
                    {item.name}
                  </DropdownMenuItem>
                ))}
                <DropdownMenuItem asChild>
                  <div className="w-full">
                    <DownloadButton variant="ghost" className="w-full justify-start" />
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  )
}

