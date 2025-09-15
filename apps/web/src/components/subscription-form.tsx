import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate, useSearch } from '@tanstack/react-router'
import { ArrowRight, Mail, User } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod/v3'

import { usePostSubscriptions } from '@/http/orval/subscriptions/subscriptions'
import { formatResponseErrors } from '@/utils/format-response-errors'

import { Button } from './button'
import { InputField, InputIcon, InputRoot } from './input'

const subscriptionSchema = z.object({
  name: z.string().min(2, 'Digite seu nome completo'),
  email: z.string().email('Digite um e-mail válido'),
})

type SubscriptionSchema = z.infer<typeof subscriptionSchema>

export function SubscriptionForm() {
  const search = useSearch({ from: '/', strict: true })
  const navigate = useNavigate({ from: '/' })

  const { mutate, isPending } = usePostSubscriptions()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubscriptionSchema>({
    resolver: zodResolver(subscriptionSchema),
    disabled: isPending,
  })

  function onSubscribe(data: SubscriptionSchema) {
    mutate(
      {
        data: {
          name: data.name,
          email: data.email,
          referrer: search?.referrer,
        },
      },
      {
        onSuccess: (data) => {
          navigate({
            to: '/invites/$inviteId',
            params: {
              inviteId: data?.subscriberId,
            },
          })
        },
        onError: (error) => {
          const { message, description } = formatResponseErrors(error)

          toast.error(message, {
            description,
          })
        },
      },
    )
  }

  return (
    <form
      onSubmit={handleSubmit(onSubscribe)}
      className="w-full space-y-6 rounded-2xl border border-gray-600 bg-gray-700 p-8 md:max-w-[440px]">
      <h2 className="font-heading text-xl font-semibold text-gray-200">
        Inscrição
      </h2>

      <div className="space-y-3">
        <div className="space-y-2">
          <InputRoot isError={!!errors?.name}>
            <InputIcon>
              <User className="size-6" />
            </InputIcon>
            <InputField
              type="text"
              placeholder="Nome completo"
              {...register('name')}
            />
          </InputRoot>

          {errors?.name && (
            <p className="text-danger text-xs font-semibold">
              {errors.name.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <InputRoot isError={!!errors?.email}>
            <InputIcon>
              <Mail className="size-6" />
            </InputIcon>
            <InputField
              type="text"
              placeholder="E-mail"
              {...register('email')}
            />
          </InputRoot>

          {errors?.email && (
            <p className="text-danger text-xs font-semibold">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <Button type="submit" disabled={isPending}>
        Confirmar
        <ArrowRight className="size-6" />
      </Button>
    </form>
  )
}
