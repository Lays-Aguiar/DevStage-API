import { fastifyCors } from '@fastify/cors'
import { fastifySwagger } from '@fastify/swagger'
import { fastifySwaggerUi } from '@fastify/swagger-ui'
import { fastify } from 'fastify'
import { ZodTypeProvider, jsonSchemaTransform, serializerCompiler, validatorCompiler, } from 'fastify-type-provider-zod'
import { env } from './env'
import { accessInviteLinkRoute } from './routes/access-invite-link'
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

app.register(subscribeToEventRoute)
app.register(accessInviteLinkRoute)

app.listen({ port: env.PORT }).then(() => {
    console.log('HTTP server running!')
})