import { Button, type ButtonProps } from '@/components/ui/button'
import { Send } from 'lucide-react'

export function SendMessageAction(props: ButtonProps) {
  // TODO: send email with resend
  return (
    <Button asChild {...props}>
      <a href="mailto:nito.ba.dev@gmail.com?subject=Let's talk about something special&body=Hello">
        Send me a message <Send className="ml-2 size-5" />
      </a>
    </Button>
  )
}
