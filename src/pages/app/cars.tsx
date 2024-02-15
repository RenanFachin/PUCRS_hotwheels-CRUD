import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { toast } from 'sonner'

import { CarDetail } from '@/components/car-detail'
import { CarForm, CarFormSchema } from '@/components/car-form'
import { CarList } from '@/components/car-list'
import { CARS } from '@/utils/carsData'

// Criando um ID aleatório
function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

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
  // console.log(cars)
  // console.log(CARS)

  // DELETANDO UM REGISTRO
  async function handleDeleteCar(id: number) {
    await new Promise((resolve) => setTimeout(resolve, 300)) // Simulando uma chamada para API

    const carsArray = cars.filter((car) => {
      return car.id !== id
    })

    setCars(carsArray)
    toast.success('Carro apagado com sucesso!')
  }

  // ADICIONNANDO UM REGISTRO
  async function handleAddCar(data: CarFormSchema) {
    try {
      await new Promise((resolve) => setTimeout(resolve, 800)) // Simulando uma chamada para API

      const newCar = {
        id: getRandomInt(6, 10000),
        name: data.carName,
        year: data.carYear,
        brand: data.carBrand,
        color: data.carColor,
      }

      // console.log(newCar)

      const carsArray = [...cars, newCar]

      setCars(carsArray)
      console.log(cars)

      toast.success('Carro adicionar com sucesso!')
    } catch {
      toast.error('Não foi possível cadastrar.')
    }
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
        <CarForm handleAddCar={handleAddCar} />
      </div>

      <CarList>
        {/* LEMBRAR DE UTILIZAR O CAR DO STATE PARA PERCORRER COM MAP */}
        {cars.length > 0 ? (
          cars.map((car) => {
            return (
              <CarDetail
                key={car.id}
                car={car}
                handleDeleteCar={handleDeleteCar}
              />
            )
          })
        ) : (
          <div className="col-span-3 mx-auto">
            <h2 className="text-center text-3xl font-bold">
              Lista de carro vazia!
            </h2>
            <p className="text-primary-400">
              Parece que você não tem nenhum carro cadastrado até o momento
            </p>
          </div>
        )}
      </CarList>
    </div>
  )
}
