import { ChangeEvent, createContext, ReactNode, useState } from 'react'
import { toast } from 'sonner'

import { CarFormSchema } from '@/components/car-form'
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

// Tipagem das informações que serão armazenadas dentro do contexto
interface CarsContextType {
  search: string
  cars: Car[]
  handleAddCar: (data: CarFormSchema) => void
  handleSearch: (event: ChangeEvent<HTMLInputElement>) => void
  handleDeleteCar: (id: number) => void
}

export const CarsContext = createContext({} as CarsContextType)

interface CarsContextProviderProps {
  children: ReactNode
}

export function CarsContextProvider({ children }: CarsContextProviderProps) {
  const [cars, setCars] = useState<Car[]>(CARS)
  const [search, setSearch] = useState('')

  function getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min
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

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    const query = event.target.value

    setSearch(query)
  }

  async function handleDeleteCar(id: number) {
    await new Promise((resolve) => setTimeout(resolve, 300)) // Simulando uma chamada para API

    const carsArray = cars.filter((car) => {
      return car.id !== id
    })

    setCars(carsArray)
    toast.success('Carro apagado com sucesso!')
  }

  return (
    <CarsContext.Provider
      value={{ cars, search, handleSearch, handleDeleteCar, handleAddCar }}
    >
      {children}
    </CarsContext.Provider>
  )
}
