import { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import z from "zod";
import { listSubscriptions, subscribeToEvent } from "../functions/subscribe-to-event";

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
                    subscriberId: z.string()
                })
            }
        }
    }, async (request, replay) => {
        const { name, email } = request.body

        const { subscriberId } = await subscribeToEvent({ name, email })


        return replay.status(201).send({ subscriberId })
    })

    app.get('/subscriptions', {

        schema: {
            summary: 'List all Subscriptions',
            response: {

                200: z.array(z.object({
                    id: z.string(),
                    name: z.string(),
                    email: z.string(),
                }))
            }

        }
    }, async (request, replay) => {
        const result = await listSubscriptions()
        return replay.status(200).send(result)

    })

}