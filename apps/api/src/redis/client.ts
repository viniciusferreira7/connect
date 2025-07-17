import { backEnv } from '@connect/env'
import { Redis } from 'ioredis'

export const redis = new Redis(backEnv.REDIS_URL)
