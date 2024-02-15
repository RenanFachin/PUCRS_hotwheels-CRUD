import { Check } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

export function About() {
  return (
    <div className="grid w-full flex-1 grid-cols-2 flex-col items-center py-12">
      <Helmet title="Sobre" />

      <div className="flex h-full flex-col items-center justify-center space-y-5 border-r ">
        <span className="rounded-lg bg-primary-300/30 px-3 py-2 text-sm font-bold">
          💡 Sobre
        </span>

        <p className="text-3xl font-bold">CRUD de HotWheels!</p>

        <p className="max-w-md text-center text-primary-500">
          Aplicação construída para a cadeira de desenvolvimento de sistemas
          front-end da PUC-RS.
        </p>
      </div>

      <div className="flex flex-col items-center space-y-5">
        <span className="rounded-lg bg-primary-300/30 px-3 py-2 text-sm font-bold">
          ✔️ Tasks
        </span>

        <div className="flex max-w-md flex-col items-start gap-4">
          <div className="flex items-center justify-center gap-3">
            <div className="rounded-md border p-1">
              <Check className="size-3 text-green-500" />
            </div>
            <span className="text-sm">
              <span className="font-bold underline">
                Implementar sistema de front-end
              </span>{' '}
              para uma coleção de carrinhos HotWheels
            </span>
          </div>

          <div className="flex items-center justify-center gap-3">
            <div className="rounded-md border p-1">
              <Check className="size-3 text-green-500" />
            </div>
            <span className="text-sm">
              Na fase 1 o projeto deve ser{' '}
              <span className="font-bold underline">estático</span>
            </span>
          </div>

          <div className="flex items-center justify-center gap-2">
            <div className="rounded-md border p-1">
              <Check className="size-3 text-green-500" />
            </div>
            <span className="text-sm">Criar um projeto React</span>
          </div>

          <div className="flex items-center justify-center gap-3">
            <div className="rounded-md border p-1">
              <Check className="size-3 text-green-500" />
            </div>
            <span className="text-sm">
              O projeto deve possuir componentes de entrada de dados para o
              formulário de cadastro
            </span>
          </div>

          <div className="flex items-center justify-center gap-3">
            <div className="rounded-md border p-1">
              <Check className="size-3 text-green-500" />
            </div>
            <span className="text-sm">
              O projeto deve possuir{' '}
              <span className="font-bold underline">validação</span> de dados do
              formulário
            </span>
          </div>

          <div className="flex items-center justify-center gap-3">
            <div className="rounded-md border p-1">
              <Check className="size-3 text-green-500" />
            </div>
            <span className="text-sm">
              O projeto deve possuir{' '}
              <span className="font-bold underline">feedbacks visuais</span>{' '}
              para o usuário
            </span>
          </div>

          <div className="flex items-center justify-center gap-3">
            <div className="rounded-md border p-1">
              <Check className="size-3 text-green-500" />
            </div>
            <span className="text-sm">
              Na fase 1: Deve possuir funcionalidades dinâmicas (listagem,
              busca, criação e exclusão)
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
