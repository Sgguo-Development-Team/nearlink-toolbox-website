import { Separator } from "@/components/ui/separator"
import { Mail } from 'lucide-react'

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
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">联系我们</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center">
                <Mail size={16} className="mr-2" />
                <a href="mailto:mirahikari@gcxstudio.cn" className="hover:text-foreground transition-colors">mirahikari@gcxstudio.cn</a>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2" />
                <a href="mailto:lmj-mc@outlook.com" className="hover:text-foreground transition-colors">lmj-mc@outlook.com</a>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2" />
                <a href="mailto:mail@sgguo.com" className="hover:text-foreground transition-colors">mail@sgguo.com</a>
              </li>
            </ul>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="text-center text-sm text-muted-foreground">
          <p className="mb-4">
            Built & Designed by <a href="https://www.gcxstudio.cn" className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent font-bold hover:from-pink-600 hover:to-purple-400 transition duration-500">
              MiraHikari
            </a> with 👌
          </p>
          © 2024-PRESENT <a href="https://www.sgguo.com" className="hover:text-foreground transition-colors">Sgguo Development Team</a>. 保留所有权利。
        </div>
      </div>
    </footer>
  )
}

