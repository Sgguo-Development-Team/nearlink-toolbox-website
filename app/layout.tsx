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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(p){"use strict";!function(t){var s=window,e=document,i=p,c="".concat("https:"===e.location.protocol?"https://":"http://","sdk.51.la/js-sdk-pro.min.js"),n=e.createElement("script"),r=e.getElementsByTagName("script")[0];n.type="text/javascript",n.setAttribute("charset","UTF-8"),n.async=!0,n.src=c,n.id="LA_COLLECT",i.d=n;var o=function(){s.LA.ids.push(i)};s.LA?s.LA.ids&&o():(s.LA=p,s.LA.ids=[],o()),r.parentNode.insertBefore(n,r)}()}({id:"3FEV3KB1oTV6d3Yi",ck:"3FEV3KB1oTV6d3Yi",autoTrack:true,hashMode:true,screenRecord:true});
            `,
          }}
        />
      </head>
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
