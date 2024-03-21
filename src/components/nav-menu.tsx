import type { ComponentProps } from 'react'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { Button } from './ui/button'
import { MenuIcon } from 'lucide-react'

export function NavMenu({ children, ...props }: ComponentProps<typeof Sheet>) {
  return (
    <div className="lg:hidden">
      <Sheet {...props}>
        <SheetTrigger asChild>
          <Button size="icon" asChild variant="outline">
            <MenuIcon />
          </Button>
        </SheetTrigger>

        <SheetContent>{children}</SheetContent>
      </Sheet>
    </div>
  )
}
