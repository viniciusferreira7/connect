import type { FastifyInstance } from 'fastify'
import type { ZodTypeProvider } from 'fastify-type-provider-zod'
import { z } from 'zod'

import { subscribeToEvent } from '@/functions/subscribe-to-event'

export async function createSubscription(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().post(
    '/subscriptions',
    {
      schema: {
        tags: ['subscriptions'],
        summary: 'Subscriber someone to the event',
        body: z.object({
          name: z.string(),
          email: z.string(),
        }),
        response: {
          201: z.object({
            subscriberId: z.string().uuid(),
          }),
          400: z.object({
            message: z.string(),
          }),
        },
      },
    },
    async (request, reply) => {
      const { name, email } = request.body

      const { subscriber } = await subscribeToEvent({
        name,
        email,
      })

      return reply.status(201).send({ subscriberId: subscriber.id })
    },
  )
}
