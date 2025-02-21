import { FastifyPluginAsyncZod } from "fastify-type-provider-zod"
import z from "zod"

export const subscribeToEventRoute: FastifyPluginAsyncZod = async (app) => {

    app.post('/subscriptions', {

        schema: {
            summary: 'subscribe someone to the event',

            body: z.object({
                name: z.string().min(3).max(255),
                email: z.string().email(),
            }),
            response: {
                201: z.object({
                    name: z.string(),
                    email: z.string().email(),
                })
            }
        }
    }, async (request, replay) => {
        const { name, email } = request.body
        return replay.status(201).send({ name, email })
    })

    app.get('/subscriptions', () => {
        return 'hello word'
    })

}