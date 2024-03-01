import { GitMergeIcon, Plus } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

import { Button } from '@/components/button'
import { CRUDCard } from '@/components/ui/crud-card'
import {
  GlowingStarsBackgroundCard,
  GlowingStarsTitle,
} from '@/components/ui/glowing-stars'
import { TypewriterEffect } from '@/components/ui/typewritter-effect'

const words = [
  {
    text: 'Bem-vindo',
  },
  {
    text: 'ao',
  },
  {
    text: 'CRUD',
    className:
      'lg:text-4xl font-bold leading-tight tracking-tighter text-highlight-500 underline underline-offset-4',
  },
  {
    text: 'de',
  },
  {
    text: 'HotWheels!',
    className:
      'lg:text-4xl font-bold leading-tight tracking-tighter text-highlight-500 underline underline-offset-4',
  },
]

export function Home() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col space-y-28 py-12">
      <Helmet title="Home" />

      <div className="flex flex-col items-center space-y-5">
        <span className="rounded-lg bg-primary-300/30 px-3 py-2 text-sm font-bold">
          🚀 Página inicial
        </span>

        <TypewriterEffect words={words} />

        <p className="max-w-md text-center text-xs text-primary-500">
          Aplicação construída para a cadeira de desenvolvimento de sistemas
          front-end da PUC-RS
        </p>

        <div className="flex w-full items-center justify-center space-x-4 py-4 md:pb-10">
          <Button variant="secondary">
            <Button.Icon>
              <Plus className="size-3" />
            </Button.Icon>

            <Button.Text>
              <Link to="/add-cars">Adicionar</Link>
            </Button.Text>
          </Button>

          <Button variant="primary">
            <Button.Icon>
              <GitMergeIcon className="size-3" />
            </Button.Icon>

            <Button.Text>
              <Link to="https://github.com/RenanFachin/">
                GitHub
              </Link>
            </Button.Text>
          </Button>
        </div>
      </div>
    </div>
  )
}
