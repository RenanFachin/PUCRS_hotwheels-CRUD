import { Helmet } from 'react-helmet-async'
import { toast } from 'sonner'

import { CarForm, CarFormSchema } from '@/components/car-form'

export function AddCars() {
  // ADICIONNANDO UM REGISTRO
  async function handleAddCar(data: CarFormSchema) {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))

      console.log(data)

      toast.success('Carro adicionar com sucesso!')
    } catch {
      toast.error('Não foi possível cadastrar.')
    }
  }

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col items-center space-y-5 py-12">
      <Helmet title="Adicionar carros" />
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
  )
}
