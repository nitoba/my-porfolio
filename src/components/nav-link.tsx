import type { ComponentProps } from 'react'
import { Button } from './ui/button'

export function NavLink(props: ComponentProps<'a'>) {
  return (
    <Button asChild variant="ghost" size="lg">
      <a {...props} />
    </Button>
  )
}
