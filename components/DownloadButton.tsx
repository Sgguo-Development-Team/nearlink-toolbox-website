import { Button } from "@/components/ui/button"
import { Download } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useState } from 'react'

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

  const fetchUpdateInfo = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetch('https://haohanyh-ctcc.gcxstudio.cn/software-updater.json', { mode: 'no-cors' });

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
