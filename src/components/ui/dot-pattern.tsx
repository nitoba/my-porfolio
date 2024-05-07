import { cn } from '@/lib/utils'
import { useId } from 'react'

interface DotPatternProps {
  width?: string | number
  height?: string | number
  x?: string | number
  y?: string | number
  cx?: string | number
  cy?: string | number
  cr?: string | number
  className?: string
  [key: string]: unknown
}
export function DotPattern({
  width = 16,
  height = 16,
  x = 0,
  y = 0,
  cy = 1,
  cr = 1,
  className,
  ...props
}: DotPatternProps) {
  const id = useId()

  return (
    <svg
      aria-hidden="true"
      className={cn(
        'pointer-events-none absolute inset-0 h-full w-full fill-muted-foreground/50',
        className,
      )}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          patternContentUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <circle id="pattern-circle" cx={cy} cy={cy} r={cr} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
    </svg>
  )
}

export default DotPattern
