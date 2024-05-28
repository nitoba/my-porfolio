'use client'

import { ExternalLink } from 'lucide-react'
import { cn } from '../../../lib/utils'
import { Button } from '@/components/ui/button'
import type { HTMLAttributes } from 'react'
import { Badge } from '@/components/ui/badge'

interface ProjectCardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  variant?: 'primary' | 'secondary'
  project: {
    title: string
    description: string
    link: string
    image: string
    type: string
  }
}

export function ProjectCard({
  className,
  project,
  ...props
}: ProjectCardProps) {
  return (
    <div
      className={cn(
        'relative flex h-[28.75rem] flex-col items-center gap-4 rounded-xl border border-border bg-background p-3 shadow-sm transition-all duration-300 hover:border-primary dark:border-gray-700 dark:bg-gray-800 dark:shadow-white/10 dark:hover:border-primary',
        className,
      )}
      {...props}
    >
      <div className="relative z-0 h-[13rem] w-full flex-shrink-0 overflow-hidden rounded-xl bg-card-foreground backdrop-blur-sm">
        <img
          alt={project.title}
          src={project.image}
          sizes="100%"
          className="z-0 h-full w-full object-contain"
        />
      </div>
      <div className="flex h-full w-full flex-col gap-5 sm:gap-[0.875rem]">
        <h4 className="text-3xl/8">{project.title}</h4>

        <p className="line-clamp-6 text-sm/4 sm:text-base/4 sm:tracking-[0em]">
          {project.description}
        </p>
        <Badge
          className="absolute left-6 top-6 h-fit w-fit"
          variant="secondary"
        >
          {project.type}
        </Badge>

        <Button
          asChild
          className="absolute right-6 top-6 md:text-lg/6"
          variant="outline"
          size="icon"
        >
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="size-4" />
          </a>
        </Button>
      </div>
    </div>
  )
}
