import { DownloadIcon } from 'lucide-react'
import { Button } from './ui/button'
import type { ComponentProps } from 'react'

export function ResumeActionButton(props: ComponentProps<typeof Button>) {
  return (
    <Button asChild {...props}>
      <a
        href="https://github.com/nitoba/resume/files/14704923/CV.pdf"
        download
        target="_blank"
        rel="noreferrer"
      >
        Resume
        <DownloadIcon className="ml-2 size-5" />
      </a>
    </Button>
  )
}
