import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu, Github } from 'lucide-react'
import { ModeSwitcher } from "@/components/mode-switcher"

const navigation = [
  { name: "功能", href: "#features" },
  { name: "技术栈", href: "#tech-stack" },
  { name: "性能优化", href: "#performance" },
  { name: "未来规划", href: "#future-plans" }
]

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold">星闪工具箱</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-2">
            <Button asChild variant="ghost" size="icon" className="hidden md:inline-flex">
              <Link
                href="https://github.com/your-repo"
                target="_blank"
                rel="noreferrer"
              >
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <ModeSwitcher />
            <Button className="hidden md:inline-flex">
              立即下载
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">切换菜单</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {navigation.map((item) => (
                  <DropdownMenuItem key={item.name}>
                    <Link href={item.href}>{item.name}</Link>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuItem>
                  <Link href="#">立即下载</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  )
}

