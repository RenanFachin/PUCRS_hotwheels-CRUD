import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'

import { CarDetail } from '@/components/car-detail'
import { CarForm } from '@/components/car-form'
import { CarList } from '@/components/car-list'
import { CARS } from '@/utils/carsData'

interface Car {
  brand: string
  color: string
  id: number
  name: string
  year: string
}
export interface CarsProps {
  car: Car
}

export function Cars() {
  const [cars, setCars] = useState<Car[]>(CARS)
  console.log(cars)

  function handleDeleteCar(id: number) {
    const carsArray = cars.filter((car) => {
      return car.id !== id
    })

    setCars(carsArray)
  }

  return (
    <div className="grid w-full flex-1 grid-cols-custom flex-col items-center py-12">
      <Helmet title="Sobre" />

      <div className="flex h-full flex-col items-center justify-center space-y-5 border-r-2 border-r-primary-200/50">
        <div className="flex flex-col items-center">
          <h1 className="flex items-center rounded-lg px-3 py-2 text-2xl font-bold">
            Adicionar carro
          </h1>

          <p className="max-w-md text-center text-primary-500">
            Formulário para adição de carro ao sistema.
          </p>
        </div>
        <CarForm />
      </div>

      <CarList>
        {cars.map((car) => {
          return (
            <CarDetail
              key={car.id}
              car={car}
              handleDeleteCar={handleDeleteCar}
            />
          )
        })}
      </CarList>
    </div>
  )
}
