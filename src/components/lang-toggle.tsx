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
        <Button variant="outline" size="sm" className="h-9 min-w-16">
          {languages[currentLang]}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {Object.entries(languages).map(([key, value]) => (
          <DropdownMenuItem key={key} asChild>
            <a href={`/${key === defaultLang ? '' : key}`}>{value}</a>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
