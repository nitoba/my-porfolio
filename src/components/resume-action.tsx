import { DownloadIcon } from 'lucide-react'
import { Button } from './ui/button'

export function ResumeActionButton() {
  return (
    <Button asChild>
      <a href="/download">
        Resume
        <DownloadIcon className="size-5 ml-2" />
      </a>
    </Button>
  )
}
