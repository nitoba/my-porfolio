import { DownloadIcon } from 'lucide-react'
import { Button } from './ui/button'
import type { ComponentProps } from 'react'
import { ShimmerButton } from './ui/shimmer-button'

export function ResumeActionButton(props: ComponentProps<typeof Button>) {
  return (
    <Button asChild {...props}>
      <ShimmerButton borderRadius="0.25rem">
        <a
          href="https://nitoba.github.io/resume/CV.pdf"
          download
          target="_blank"
          rel="noreferrer"
          className="flex items-center"
        >
          Resume
          <DownloadIcon className="ml-2 size-5" />
        </a>
      </ShimmerButton>
    </Button>
  )
}
