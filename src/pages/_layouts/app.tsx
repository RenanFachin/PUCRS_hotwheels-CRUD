import { Outlet } from 'react-router-dom'

import { GithubWidget } from '@/components/github-widget'
import { Navbar } from '@/components/navbar'

export function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-primary-100 antialiased">
      <Navbar />

      <div className="flex flex-1 flex-col gap-4 p-8 pt-6">
        {/* Contéudo da página */}
        <Outlet />
      </div>

      <GithubWidget />
    </div>
  )
}
