import type { FastifyInstance } from 'fastify'
import type { ZodTypeProvider } from 'fastify-type-provider-zod'
import { z } from 'zod'

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
            message: z.string(),
          }),
          400: z.object({
            message: z.string(),
          }),
        },
      },
    },
    async (request, reply) => {
      const { name, email } = request.body

      return reply.status(201).send({ message: 'created' })
    },
  )
}
