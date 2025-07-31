import type { FastifyInstance } from 'fastify'
import type { ZodTypeProvider } from 'fastify-type-provider-zod'
import { z } from 'zod'

import { getRanking } from '@/functions/get-ranking'

export async function getRankingRoute(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().get(
    '/ranking',
    {
      schema: {
        tags: ['referral'],
        summary: 'Get ranking',
        response: {
          200: z.object({
            ranking: z.array(
              z.object({
                id: z.string().uuid(),
                name: z.string(),
                email: z.string().email(),
                createdAt: z.date(),
                score: z.number().default(0),
              }),
            ),
          }),
          404: z.object({
            message: z.string(),
          }),
        },
      },
    },
    async (request, reply) => {
      const { ranking } = await getRanking()

      return reply.status(200).send({ ranking })
    },
  )
}
