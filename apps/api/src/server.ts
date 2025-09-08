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

import { accessInviteLinkRoute } from './http/routes/access-invite-link-route'
import { createSubscriptionRoute } from './http/routes/create-subscription-route'
import { getRankingRoute } from './http/routes/get-ranking-route'
import { getSubscriberInviteClicksRoute } from './http/routes/get-subscriber-invite-clicks-route'
import { getSubscriberInvitesCountRoute } from './http/routes/get-subscriber-invites-count-route'
import { getSubscriberRankingPositionRoute } from './http/routes/get-subscriber-ranking-position-route'

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

app.register(createSubscriptionRoute)
app.register(accessInviteLinkRoute)
app.register(getSubscriberInviteClicksRoute)
app.register(getSubscriberInvitesCountRoute)
app.register(getSubscriberRankingPositionRoute)
app.register(getRankingRoute)

app
  .listen({
    port: backEnv.PORT,
    host: backEnv.NODE_ENV === 'development' ? undefined : '0.0.0.0',
  })
  .then(() => {
    console.log('HTTP server is running! 🚀')
  })
