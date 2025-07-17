import { backEnv } from '@connect/env'
import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  out: './src/database/drizzle',
  schema: './src/database/drizzle/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: backEnv.DATABASE_URL,
  },
})
