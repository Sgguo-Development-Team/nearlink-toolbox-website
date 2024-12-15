import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/ThemeProvider"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Nearlink Toolbox - 星闪技术解决方案",
  description: "专业的串口通信、固件管理、设备调试解决方案。基于 Rust 和 Tauri 构建，提供高性能的跨平台体验。华为鸿蒙星闪技术解决方案。华为开发者盛典获奖项目。",
  keywords: [
    "串口通信",
    "鸿蒙星闪",
    "华为开发者盛典",
    "卓越社区价值贡献奖",
    "华为开发者社区",
    "解决方案",
    "固件管理",
    "设备调试",
    "Rust",
    "Tauri",
    "跨平台",
    "高性能",
    "工具箱",
    "Nearlink",
    "星闪工具箱",
    "浩瀚银河"
  ],
  authors: [{ name: "MiraHikari" }],
  creator: "MiraHikari",
  publisher: "MiraHikari",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    title: "Nearlink Toolbox - 星闪技术解决方案",
    description: "专业的串口通信、固件管理、设备调试解决方案。基于 Rust 和 Tauri 构建，提供高性能的跨平台体验。",
    siteName: "Nearlink Toolbox",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nearlink Toolbox - 星闪技术解决方案",
    description: "专业的串口通信、固件管理、设备调试解决方案。基于 Rust 和 Tauri 构建，提供高性能的跨平台体验。",
  },
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "/",
  },
  referrer: "no-referrer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
