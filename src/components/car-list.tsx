import { ReactNode } from 'react'

interface CarListProps {
  children: ReactNode
}

export function CarList({ children }: CarListProps) {
  return (
    <div className="scrollbar-thin scrollbar-thumb-highlight-300/20 scrollbar-track-primary-100 grid max-h-[700px] grid-cols-3 gap-8 overflow-y-scroll px-32">
      {children}
    </div>
  )
}
