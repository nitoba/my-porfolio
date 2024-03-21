import type { ComponentProps } from 'react'
import { Button, type ButtonProps } from './ui/button'

export function NavLink({
  size = 'lg',
  ...props
}: ComponentProps<'a'> & { size?: ButtonProps['size'] }) {
  return (
    <Button asChild variant="ghost" size={size}>
      <a {...props} />
    </Button>
  )
}
