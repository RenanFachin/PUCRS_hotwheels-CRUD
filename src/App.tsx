import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'

import { router } from '@/routes'

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | hotwheels-crud" />
      <RouterProvider router={router} />
    </HelmetProvider>
  )
}
