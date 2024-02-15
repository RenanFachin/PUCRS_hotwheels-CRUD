import { Trash } from 'lucide-react'

import { CarsProps } from '@/pages/app/cars'

import { Button } from './button'

interface CarDetailProps extends CarsProps {
  handleDeleteCar: (id: number) => void
}

export function CarDetail({ car, handleDeleteCar }: CarDetailProps) {
  return (
    <div className="flex flex-col rounded-md border p-5 shadow-md">
      <div className="flex items-center justify-between gap-3">
        <h1 className="font-bold">{car.name}</h1>

        <span className="rounded-lg bg-yellow-500/90 px-2 py-1 text-xs font-bold text-white">
          {car.year}
        </span>
      </div>

      <div className="mb-6 mt-10 space-y-1">
        <div className="flex items-center justify-between gap-3">
          <span className="text-sm">Marca:</span>
          <h3 className="text-sm font-bold">{car.brand}</h3>
        </div>

        <div className="flex items-center justify-between gap-3">
          <span className="text-sm">Cor:</span>
          <h3 className="text-sm font-bold">{car.color}</h3>
        </div>
      </div>

      <Button
        variant="primary"
        type="button"
        onClick={() => handleDeleteCar(car.id)}
      >
        <Button.Icon>
          <Trash className="size-3" />
        </Button.Icon>

        <Button.Text>Apagar</Button.Text>
      </Button>
    </div>
  )
}
