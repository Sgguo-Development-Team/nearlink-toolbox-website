import { cn } from "@/lib/utils"
import { AnimateOnView } from '@/components/animations/AnimationWrapper'

interface SectionProps {
  id?: string
  children: React.ReactNode
  title: React.ReactNode
  description?: React.ReactNode
  subDescription?: React.ReactNode
  className?: string
}

export function Section({
  children,
  title,
  description,
  subDescription,
  className,
  ...props
}: SectionProps) {
  return (
    <section className={cn("w-full py-12 md:py-24 lg:py-32 relative", className)} {...props}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimateOnView className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {title}
          </h2>
          {description && (
            <div className="text-muted-foreground text-lg">
              {description}
            </div>
          )}
          {subDescription && (
            <div className="max-w-3xl mx-auto mt-4">
              <div className="text-muted-foreground">
                {subDescription}
              </div>
            </div>
          )}
        </AnimateOnView>
        {children}
      </div>
    </section>
  )
}
