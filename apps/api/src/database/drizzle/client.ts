import { backEnv } from '@connect/env'
import { drizzle } from 'drizzle-orm/node-postgres'
import { Pool } from 'pg'

import { subscriptions } from './schema/subscriptions'

export const pg = new Pool({
  connectionString: backEnv.DATABASE_URL,
})

export const db = drizzle({ client: pg, schema: { subscriptions } })
