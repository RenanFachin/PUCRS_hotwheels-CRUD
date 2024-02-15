import { Outlet } from 'react-router-dom'

import { Navbar } from '@/components/navbar'

export function AppLayout() {
  return (
    <div className="bg-primary-100 flex min-h-screen flex-col antialiased">
      <Navbar />

      <div className="flex flex-1 flex-col gap-4 p-8 pt-6">
        {/* Contéudo da página */}
        <Outlet />
      </div>
    </div>
  )
}
