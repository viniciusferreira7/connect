import { backEnv } from '@connect/env'
import { fastifyCors } from '@fastify/cors'
import fastifySwagger from '@fastify/swagger'
import fastifySwaggerUi from '@fastify/swagger-ui'
import { fastify } from 'fastify'
import {
  jsonSchemaTransform,
  serializerCompiler,
  validatorCompiler,
} from 'fastify-type-provider-zod'

import { createSubscription } from './routes/subscriptions/create-subscription.js'

const app = fastify()

app.register(fastifyCors, {
  origin: backEnv.CLIENT_URL,
})

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

app.register(fastifySwagger, {
  openapi: {
    info: {
      title: 'Connect',
      description: 'Full-stack app.',
      version: '1.0.0',
    },
    servers: [],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
          description: 'JWT obtained from authorization route',
        },
      },
    },
  },
  transform: jsonSchemaTransform,
})

app.register(fastifySwaggerUi, {
  routePrefix: '/docs',
})

app.register(createSubscription)

app
  .listen({
    port: backEnv.PORT,
    host: backEnv.NODE_ENV === 'dev' ? undefined : '0.0.0.0',
  })
  .then(() => {
    console.log('HTTP server is running! 🚀')
  })
