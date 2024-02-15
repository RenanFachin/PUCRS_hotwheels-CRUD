import { createBrowserRouter } from 'react-router-dom'

import { About } from '@/pages/app/about'
import { Home } from '@/pages/app/home'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
])
