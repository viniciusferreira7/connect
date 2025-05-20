import { createEnv } from '@t3-oss/env-nextjs'
export const frontEnv = createEnv({
  server: {},
  client: {},

  runtimeEnv: {},
  emptyStringAsUndefined: true,
})
