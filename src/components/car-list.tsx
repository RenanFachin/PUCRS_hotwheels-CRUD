import { useAutoAnimate } from '@formkit/auto-animate/react'
import { ReactNode } from 'react'

interface CarListProps {
  children: ReactNode
}

export function CarList({ children }: CarListProps) {
  const [parent] = useAutoAnimate()

  return (
    <div
      className="flex max-h-[660px] min-h-[550px] grid-cols-3 flex-col gap-2 overflow-y-scroll scrollbar-thin scrollbar-track-primary-100 scrollbar-thumb-highlight-300/20 md:grid md:gap-8"
      ref={parent}
    >
      {children}
    </div>
  )
}
