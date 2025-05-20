import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const backEnv = createEnv({
  server: {
    PORT: z.coerce.number().default(3333),

    DATABASE_URL: z.string().url(),
    DATABASE_USERNAME: z.string(),
    DATABASE_PASSWORD: z.string(),
    DATABASE_NAME: z.string(),

    JWT_SECRET: z.string(),
  },
  client: {},

  runtimeEnv: {
    PORT: process.env.PORT,

    DATABASE_URL: process.env.DATABASE_URL,
    DATABASE_USERNAME: process.env.DATABASE_USERNAME,
    DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
    DATABASE_NAME: process.env.DATABASE_NAME,

    JWT_SECRET: process.env.JWT_SECRET,
  },
  emptyStringAsUndefined: true,
})
