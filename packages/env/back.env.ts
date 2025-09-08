import { z } from 'zod/v4'

export const backEnvSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'production', 'test'])
    .default('development'),
  PORT: z.coerce.number().default(3333),

  DATABASE_URL: z.url(),
  DATABASE_USERNAME: z.string(),
  DATABASE_PASSWORD: z.string(),
  DATABASE_NAME: z.string(),

  REDIS_URL: z.url(),
  REDIS_PASSWORD: z.string(),

  CLIENT_URL: z.url(),
})

const _env = backEnvSchema.safeParse(process.env)

if (_env.success === false) {
  console.error('❌ Invalid environment variables', _env.error.issues)
  throw new Error('Invalid environment variables')
}

export const backEnv = _env.data
