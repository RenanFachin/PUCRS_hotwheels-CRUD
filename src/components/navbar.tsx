import { Car, CarFront, Home, LayoutGrid, Plus } from 'lucide-react'

import { NavLink } from './nav-link'

export function Navbar() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center gap-10 px-6">
        <Car className="text-primary-900 size-7" />

        <hr className="h-9 border-l border-slate-300" />

        <nav className="flex items-center space-x-4">
          <NavLink to="/">
            <Home className="size-4" />
            Home
          </NavLink>

          <NavLink to="/cars">
            <CarFront className="size-4" />
            Carros
          </NavLink>

          <NavLink to="/add-cars">
            <Plus className="size-4" />
            Adicionar
          </NavLink>

          <NavLink to="/about">
            <LayoutGrid className="size-4" />
            Sobre
          </NavLink>
        </nav>
      </div>
    </div>
  )
}
