import { zodResolver } from '@hookform/resolvers/zod'
import { Loader, Plus, Trash } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from './button'

// Validação dos campos do formulário
const carFormSchema = z.object({
  carName: z.string().min(1, 'O nome do carro é obrigatório').toLowerCase(),
  carBrand: z.string().min(1, 'A marca do carro é obrigatório').toLowerCase(),
  carColor: z.string().min(1, 'A cor do carro é obrigatório').toLowerCase(),
  carYear: z.coerce.number({
    required_error: 'O ano do carro é obrigatório',
    invalid_type_error: 'O ano do carro precisa ser um número',
  }),
})

type CarFormSchema = z.infer<typeof carFormSchema>

export function CarForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<CarFormSchema>({
    resolver: zodResolver(carFormSchema),
    defaultValues: {
      carBrand: '',
      carColor: '',
      carName: '',
      carYear: 0,
    },
  })

  async function handleAddNewCar(data: CarFormSchema) {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      console.log(data)

      toast.success('Carro adicionar com sucesso!')

      reset()
    } catch {
      toast.error('Não foi possível cadastrar.')
    }
  }

  function handleResetInputs() {
    reset()
  }

  return (
    <form
      className="flex  min-w-96 flex-col items-center gap-4 rounded-md border px-6 py-10 shadow-sm"
      onSubmit={handleSubmit(handleAddNewCar)}
    >
      <div className="flex w-full flex-col space-y-2">
        <label htmlFor="carName" className="text-xs font-bold">
          Nome
        </label>
        <input
          type="text"
          id="carName"
          className="border-input  focus-within: flex h-10 w-full rounded-md border bg-primary-300/20 px-3 py-2 text-sm outline-none placeholder:text-primary-300 focus-within:ring-2 focus-within:ring-primary-800 focus-within:ring-offset-2"
          {...register('carName')}
        />
        {errors.carName && (
          <span className="text-xs text-red-500">{errors.carName.message}</span>
        )}
      </div>

      <div className="flex w-full flex-col  space-y-2">
        <label htmlFor="carBrand" className="text-xs font-bold">
          Marca
        </label>
        <input
          type="text"
          id="carBrand"
          className="border-input  focus-within: flex h-10 w-full rounded-md border bg-primary-200/20 px-3 py-2 text-sm outline-none placeholder:text-primary-300 focus-within:ring-2 focus-within:ring-primary-800 focus-within:ring-offset-2"
          {...register('carBrand')}
        />
        {errors.carBrand && (
          <span className="text-xs text-red-500">
            {errors.carBrand.message}
          </span>
        )}
      </div>

      <div className="flex w-full flex-col  space-y-2">
        <label htmlFor="carColor" className="text-xs font-bold">
          Cor
        </label>
        <input
          type="text"
          id="carColor"
          className="border-input  focus-within: flex h-10 w-full rounded-md border bg-primary-200/20 px-3 py-2 text-sm outline-none placeholder:text-primary-300 focus-within:ring-2 focus-within:ring-primary-800 focus-within:ring-offset-2"
          {...register('carColor')}
        />
        {errors.carColor && (
          <span className="text-xs text-red-500">
            {errors.carColor.message}
          </span>
        )}
      </div>

      <div className="flex w-full flex-col  space-y-2">
        <label htmlFor="carYear" className="text-xs font-bold">
          Ano
        </label>
        <input
          type="text"
          id="carYear"
          className="border-input  focus-within: flex h-10 w-full rounded-md border bg-primary-200/20 px-3 py-2 text-sm outline-none placeholder:text-primary-300 focus-within:ring-2 focus-within:ring-primary-800 focus-within:ring-offset-2"
          {...register('carYear')}
        />
        {errors.carYear && (
          <span className="text-xs text-red-500">{errors.carYear.message}</span>
        )}
      </div>

      <div className="flex items-center gap-4">
        {isSubmitting ? (
          <Button variant="secondary" type="submit" disabled={isSubmitting}>
            <Button.Icon>
              <Loader className="size-4 animate-spin" />
            </Button.Icon>
            <Button.Text>Cadastrando</Button.Text>
          </Button>
        ) : (
          <>
            <Button variant="secondary" type="submit" disabled={isSubmitting}>
              <Button.Icon>
                <Plus className="size-4" />
              </Button.Icon>
              <Button.Text>Adicionar</Button.Text>
            </Button>

            <Button
              variant="primary"
              type="button"
              disabled={isSubmitting}
              onClick={handleResetInputs}
            >
              <Button.Icon>
                <Trash className="size-4" />
              </Button.Icon>
              <Button.Text>Resetar</Button.Text>
            </Button>
          </>
        )}
      </div>
    </form>
  )
}