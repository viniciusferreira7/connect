import { backEnv } from '@connect/env'
import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  out: './src/database/drizzle/migrations',
  schema: './src/database/drizzle/schema',
  dialect: 'postgresql',
  dbCredentials: {
    url: backEnv.DATABASE_URL,
  },
})
