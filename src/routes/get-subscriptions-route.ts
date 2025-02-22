import { FastifyPluginAsyncZod } from "fastify-type-provider-zod"
import z from "zod"
import { getSubscriptions } from "../functions/get-subscriptions"


export const getSubscriptionsRoute: FastifyPluginAsyncZod = async (app) => {

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
        const result = await getSubscriptions()
        return replay.status(200).send(result)

    })



}