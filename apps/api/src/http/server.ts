import { backEnv } from '@connect/env'
import { fastify } from 'fastify'

const app = fastify()

app.listen({ port: backEnv.PORT, host: '0.0.0.0' }).then(() => {
  console.log('HTTP server is running! 🚀')
})
