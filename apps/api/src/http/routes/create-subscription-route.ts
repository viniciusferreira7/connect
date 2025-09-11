import type { FastifyInstance } from 'fastify'
import type { ZodTypeProvider } from 'fastify-type-provider-zod'
import { z } from 'zod'

import { subscribeToEvent } from '@/functions/subscribe-to-event'

export async function createSubscriptionRoute(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().post(
    '/subscriptions',
    {
      schema: {
        tags: ['subscriptions'],
        summary: 'Subscriber someone to the event',
        body: z.object({
          name: z.string(),
          email: z.string(),
          referrer: z.string().nullish(),
        }),
        response: {
          201: z.object({
            subscriberId: z.string().uuid(),
          }),
          400: z.object({
            message: z.string(),
            issue: z
              .object({
                _errors: z.array(z.string()),
              })
              .catchall(z.any()),
          }),
        },
      },
    },
    async (request, reply) => {
      const { name, email, referrer } = request.body

      const { subscriber } = await subscribeToEvent({
        name,
        email,
        referrerId: referrer,
      })

      return reply.status(201).send({ subscriberId: subscriber.id })
    },
  )
}
