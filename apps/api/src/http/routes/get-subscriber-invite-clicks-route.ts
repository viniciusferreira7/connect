import { eq } from 'drizzle-orm'
import type { FastifyInstance } from 'fastify'
import type { ZodTypeProvider } from 'fastify-type-provider-zod'
import { z } from 'zod'

import { db } from '@/database/drizzle/client'
import { subscriptions } from '@/database/drizzle/schema/subscriptions'
import { getSubscriberInviteClicks } from '@/functions/get-subscriber-invite-clicks'

export async function getSubscriberInviteClicksRoute(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().get(
    '/subscribers/:subscriberId/ranking/clicks',
    {
      schema: {
        tags: ['referral'],
        summary: 'Get subscriber invite clicks count',
        params: z.object({
          subscriberId: z.string().uuid(),
        }),
        response: {
          200: z.object({
            count: z.number().default(0),
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

      const { count } = await getSubscriberInviteClicks({ subscriberId })

      return reply.status(200).send({ count })
    },
  )
}
