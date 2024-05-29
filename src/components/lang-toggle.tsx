import { languages, defaultLang } from '@/i18n/ui'
import { getLangFromUrl } from '@/i18n/utils'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export function LangToggle() {
  const currentLang = getLangFromUrl(new URL(window.location.href))
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="h-9">
          {currentLang.toUpperCase()}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="flex min-w-[3.5rem] flex-col items-center justify-center text-center"
      >
        {Object.keys(languages).map((key) => (
          <DropdownMenuItem
            key={key}
            asChild
            className="flex w-full items-center justify-center"
          >
            <a href={`/${key === defaultLang ? '' : key}`}>
              {key.toUpperCase()}
            </a>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
