import { fastifyCors } from '@fastify/cors'
import { fastifySwagger } from '@fastify/swagger'
import { fastifySwaggerUi } from '@fastify/swagger-ui'
import { fastify } from 'fastify'
import { ZodTypeProvider, jsonSchemaTransform, serializerCompiler, validatorCompiler, } from 'fastify-type-provider-zod'
import { env } from './env'
import { accessInviteLinkRoute } from './routes/access-invite-link-route'
import { getRankingRoute } from './routes/get-ranking-route'
import { getSubscriberInviteClicksRoute } from './routes/get-subscriber-invite-clicks-route'
import { getSubscriberInvitesCountRoute } from './routes/get-subscriber-invites-counts-route'
import { getSubscribeRankingPositionRoute } from './routes/get-subscriber-ranking-position-route'
import { getSubscriptionsRoute } from './routes/get-subscriptions-route'
import { subscribeToEventRoute } from './routes/subscribe-to-event-route'

const app = fastify().withTypeProvider<ZodTypeProvider>()
/*
* config para url do Front 
* 
* app.register(fastifyCors, {
*   origin: 'https://localhost:3000'// url do front-end
*})
* 
*/

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

app.register(fastifyCors)

app.register(fastifySwagger, {
    openapi: {
        info: {
            title: 'NLW Connect',
            version: '1.0.0',

        },
    },
    transform: jsonSchemaTransform
})

app.register(fastifySwaggerUi, {
    routePrefix: '/docs',
})

app.register(getRankingRoute)
app.register(accessInviteLinkRoute)
app.register(subscribeToEventRoute)
app.register(getSubscriptionsRoute)
app.register(getSubscribeRankingPositionRoute)
app.register(getSubscriberInviteClicksRoute)
app.register(getSubscriberInvitesCountRoute)

app.listen({ port: env.PORT }).then(() => {
    console.log('HTTP server running!')
})