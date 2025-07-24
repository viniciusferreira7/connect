import { eq } from 'drizzle-orm'

import { db } from '@/database/drizzle/client'
import { subscriptions } from '@/database/drizzle/schema/subscriptions'

interface SubscribeToEventParams {
  name: string
  email: string
}

export async function subscribeToEvent({
  name,
  email,
}: SubscribeToEventParams) {
  const subscribers = await db
    .select()
    .from(subscriptions)
    .where(eq(subscriptions.email, email))

  if (subscribers.length > 0) {
    return {
      subscriber: subscribers[0],
    }
  }

  const [subscriber] = await db
    .insert(subscriptions)
    .values({
      name,
      email,
    })
    .returning()

  return {
    subscriber,
  }
}
