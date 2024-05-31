import { Button, type ButtonProps } from '@/components/ui/button'
import { Send } from 'lucide-react'
import { useTranslation } from '@/i18n/utils'
import { type Lang } from '@/i18n/ui'

export function SendMessageAction(props: ButtonProps & { lang: Lang }) {
  const t = useTranslation(props.lang)
  return (
    <Button asChild {...props}>
      <a href="mailto:nito.ba.dev@gmail.com?subject=Let's talk about something special&body=Hello">
        {t('contact.send_message')} <Send className="ml-2 size-5" />
      </a>
    </Button>
  )
}
