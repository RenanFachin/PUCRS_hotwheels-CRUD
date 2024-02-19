import { Car, CarFront, Home, LayoutGrid, Plus } from 'lucide-react'

import { NavLink } from './nav-link'

export function Navbar() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center gap-10 px-8">
        <Car className="size-7 text-primary-900" />

        <hr className="h-9 border-l border-slate-300" />

        <nav className="flex items-center space-x-8">
          <NavLink to="/">
            <Home className="size-4" />
            Home
          </NavLink>

          <NavLink to="/cars">
            <CarFront className="size-4" />
            Carros
          </NavLink>

          <NavLink to="/about">
            <LayoutGrid className="size-4" />
            Sobre
          </NavLink>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <NavLink to="/add-cars">
            <Plus className="size-4" />
            Adicionar
          </NavLink>
        </div>
      </div>
    </div>
  )
}
