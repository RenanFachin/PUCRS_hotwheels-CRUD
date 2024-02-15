import { ReactNode } from 'react'

interface CarListProps {
  children: ReactNode
}

export function CarList({ children }: CarListProps) {
  return <div className="grid grid-cols-3 gap-8 px-32">{children}</div>
}
