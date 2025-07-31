import type { InferSelectModel } from 'drizzle-orm'

import { db } from '@/database/drizzle/client'
import { subscriptions } from '@/database/drizzle/schema/subscriptions'
import { redis } from '@/database/redis/client'

type Ranking = Array<
  InferSelectModel<typeof subscriptions> & {
    score: number
  }
>

export async function getRanking() {
  const scores = await redis.zrevrange('referral:ranking', 0, 3, 'WITHSCORES')

  const subscribers = await db.select().from(subscriptions)

  const ranking = scores.reduce<Ranking>((acc, current, index) => {
    const subscriber = subscribers.find((item) => item.id === current)

    const subscriberScore = scores[index + 1]

    if (subscriber && subscriberScore) {
      acc.push({
        ...subscriber,
        score: Number.parseInt(subscriberScore),
      })
    }

    return acc
  }, [])

  return {
    ranking: ranking.sort((a, b) => b.score - a.score),
  }
}
