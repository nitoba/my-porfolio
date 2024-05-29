import { languages, defaultLang } from '@/i18n/ui'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useState } from 'react'

export function LangToggle() {
  const [selectedLanguage, setSelectedLanguage] =
    useState<keyof typeof languages>(defaultLang)

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="h-9">
          {languages[selectedLanguage]}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {Object.entries(languages).map(([key, value]) => (
          <DropdownMenuItem
            key={key}
            onClick={() => setSelectedLanguage(key as keyof typeof languages)}
          >
            {value}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
