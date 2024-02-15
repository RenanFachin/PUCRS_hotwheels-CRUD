import * as Dialog from '@radix-ui/react-dialog'
import { Eye, Pencil, Trash, X } from 'lucide-react'

import { CarsProps } from '@/pages/app/cars'

import { Button } from './button'

interface CarDetailProps extends CarsProps {
  handleDeleteCar: (id: number) => void
}

export function CarDetail({ car, handleDeleteCar }: CarDetailProps) {
  return (
    <Dialog.Root>
      <div className="flex w-full flex-col rounded-md border p-5 shadow-md">
        <div className="flex w-full items-center justify-between gap-3">
          <h1 className="font-bold">{car.name}</h1>

          <span className="rounded-lg bg-yellow-500/90 px-2 py-1 text-xs font-bold text-white">
            {car.year}
          </span>
        </div>

        <div className="mb-6 mt-10 w-full space-y-1">
          <div className="flex items-center justify-between gap-3">
            <span className="text-sm text-primary-400">Marca:</span>
            <h3 className="text-sm font-bold">{car.brand}</h3>
          </div>

          <div className="flex items-center justify-between gap-3">
            <span className="text-sm text-primary-400">Cor:</span>
            <h3 className="text-sm font-bold">{car.color}</h3>
          </div>
        </div>

        <Dialog.Trigger>
          <Button variant="primary" type="button" style={{ width: '100%' }}>
            <Button.Icon>
              <Eye className="size-3" />
            </Button.Icon>

            <Button.Text>Visualizar</Button.Text>
          </Button>
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/70" />
          <Dialog.Content className="fixed left-1/2 top-1/2 w-full max-w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-primary-100 outline-none">
            <Dialog.Close className="absolute right-0 top-0 bg-slate-800/10 p-1.5 text-primary-600 hover:text-primary-500">
              <X className="size-3" />
            </Dialog.Close>

            <div className="flex flex-col rounded-md border p-10 shadow-md">
              <div className="flex w-full items-center justify-between gap-3">
                <h1 className="font-bold">{car.name}</h1>

                <span className="rounded-lg bg-yellow-500/90 px-2 py-1 text-xs font-bold text-white">
                  {car.year}
                </span>
              </div>

              <div className="mb-6 mt-10 w-full space-y-1">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm text-primary-400">Marca:</span>
                  <h3 className="text-sm font-bold">{car.brand}</h3>
                </div>

                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm text-primary-400">Cor:</span>
                  <h3 className="text-sm font-bold">{car.color}</h3>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant="primary"
                  type="button"
                  onClick={() => handleDeleteCar(car.id)}
                  style={{ flex: 1 }}
                >
                  <Button.Icon>
                    <Trash className="size-3" />
                  </Button.Icon>

                  <Button.Text>Deletar</Button.Text>
                </Button>

                <button className="group flex h-[42px] items-center justify-center gap-2 rounded-md border px-3 py-3 shadow-sm disabled:cursor-not-allowed">
                  <Pencil className="size-3" />
                </button>
              </div>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </div>
    </Dialog.Root>
  )
}
