import { eq } from 'drizzle-orm'
import type { FastifyInstance } from 'fastify'
import type { ZodTypeProvider } from 'fastify-type-provider-zod'
import { z } from 'zod'

import { db } from '@/database/drizzle/client'
import { subscriptions } from '@/database/drizzle/schema/subscriptions'
import { getSubscriberRankingPosition } from '@/functions/get-subscriber-ranking-position'

export async function getSubscriberRankingPositionRoute(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().get(
    '/subscribers/:subscriberId/ranking',
    {
      schema: {
        tags: ['referral'],
        summary: 'Get subscriber ranking position',
        params: z.object({
          subscriberId: z.string().uuid(),
        }),
        response: {
          200: z.object({
            position: z.number().nullable(),
          }),
          404: z.object({
            message: z.string(),
          }),
        },
      },
    },
    async (request, reply) => {
      const { subscriberId } = request.params

      const subscriber = await db.query.subscriptions.findFirst({
        where: eq(subscriptions.id, subscriberId),
      })

      if (!subscriber) {
        return reply.status(404).send({ message: 'Subscriber not found' })
      }

      const { position } = await getSubscriberRankingPosition({ subscriberId })

      return reply.status(200).send({ position })
    },
  )
}
