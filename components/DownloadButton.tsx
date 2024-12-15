import { Button } from "@/components/ui/button"
import { Download } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useState } from 'react'
import { generateColorStyle } from '@/lib/color-style'

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

interface DownloadButtonProps {
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "sm" | "lg" | "icon"
  className?: string
}

export function DownloadButton({ variant = "default", size = "default", className = "" }: DownloadButtonProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [updateInfo, setUpdateInfo] = useState<UpdateInfo | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const versionColor = generateColorStyle('version')
  const dateColor = generateColorStyle('date')
  const notesColor = generateColorStyle('notes')

  const fetchUpdateInfo = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetch('https://haohanyh-ctcc.gcxstudio.cn/software-updater.json');

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setUpdateInfo(data);
    } catch (err) {
      console.error('Error fetching update info:', err);
      setError(err instanceof Error ? err.message : '获取更新信息失败，请稍后再试');
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
      <Button
        variant={variant}
        size={size}
        onClick={handleDownloadClick}
        className={`group ${className}`}
      >
        <span className="relative z-10 flex items-center">
          立即下载
          <Download className="ml-2 h-4 w-4 group-hover:translate-y-0.5 transition-transform duration-300" />
        </span>
      </Button>

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
              <div className={`p-3 rounded-lg transition-colors duration-300 ${versionColor.color}`}>
                <h4 className="font-medium">版本</h4>
                <p className="text-sm">{updateInfo.version}</p>
              </div>
              <div className={`p-3 rounded-lg transition-colors duration-300 ${dateColor.color}`}>
                <h4 className="font-medium">发布时间</h4>
                <p className="text-sm">{formatDate(updateInfo.pub_date)}</p>
              </div>
              <div className={`p-3 rounded-lg transition-colors duration-300 ${notesColor.color}`}>
                <h4 className="font-medium">更新说明</h4>
                <p className="text-sm whitespace-pre-wrap">{updateInfo.notes}</p>
              </div>
              <Button
                className="w-full group relative overflow-hidden"
                onClick={() => window.open(updateInfo.platforms['windows-x86_64'].url, '_blank')}
              >
                <span className="relative z-10 flex items-center justify-center w-full">
                  下载最新版本
                  <Download className="ml-2 h-4 w-4 group-hover:translate-y-0.5 transition-transform duration-300" />
                </span>
                <span className="absolute inset-0 bg-primary/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
