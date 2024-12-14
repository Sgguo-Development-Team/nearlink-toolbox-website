import { Separator } from "@/components/ui/separator"
import { Mail, Github } from 'lucide-react'
import Link from "next/link"

const navigation = {
  main: [
    { name: "功能", href: "#features" },
    { name: "技术栈", href: "#tech-stack" },
    { name: "性能优化", href: "#performance" },
    { name: "未来规划", href: "#future-plans" }
  ],
  social: [
    {
      name: "GitHub",
      href: "https://github.com/your-repo",
      icon: Github
    },
    {
      name: "Email",
      href: "mailto:mirahikari@gcxstudio.cn",
      icon: Mail
    }
  ]
}

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">星闪工具箱</h3>
            <p className="text-sm text-muted-foreground">
              为固件管理和星闪设备调试提供强大解决方案
            </p>
            <div className="flex space-x-4">
              {navigation.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <item.icon className="h-5 w-5" />
                  <span className="sr-only">{item.name}</span>
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">联系我们</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center">
                <Mail size={16} className="mr-2" />
                mirahikari@gcxstudio.cn
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2" />
                lmj-mc@outlook.com
              </li>
            </ul>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="text-center text-sm text-muted-foreground">
          © 2023 星闪工具箱. 保留所有权利。
        </div>
      </div>
    </footer>
  )
}

