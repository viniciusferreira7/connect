import { backEnv } from '@connect/env'
import { eq } from 'drizzle-orm'
import type { FastifyInstance } from 'fastify'
import type { ZodTypeProvider } from 'fastify-type-provider-zod'
import { z } from 'zod'

import { db } from '@/database/drizzle/client'
import { subscriptions } from '@/database/drizzle/schema/subscriptions'
import { accessInviteLink } from '@/functions/access-invite-link'

export async function accessInviteLinkRoute(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().get(
    '/invites/:subscriberId',
    {
      schema: {
        tags: ['referral'],
        summary: 'Access invite link and redirects user',
        params: z.object({
          subscriberId: z.string().uuid(),
        }),
        response: {
          302: z.null(),
          400: z.object({
            message: z.string(),
          }),
        },
      },
    },
    async (request, reply) => {
      const { subscriberId } = request.params

      const redirectUrl = new URL(backEnv.CLIENT_URL)

      const subscriber = await db.query.subscriptions.findFirst({
        where: eq(subscriptions.id, subscriberId),
      })

      if (!subscriber) {
        return reply.status(404).send({ message: 'Subscriber not found' })
      }

      await accessInviteLink({ subscriberId })

      redirectUrl.searchParams.set('referrer', subscriberId)

      return reply.status(302).redirect(redirectUrl.toString())
    },
  )
}
