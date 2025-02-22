import { db } from "../drizzle/client";
import { subscriptions } from "../drizzle/tables/subscriptions";


interface SubscribeToEventParams {
    name: string;
    email: string;
}


export async function subscribeToEvent({ name, email }: SubscribeToEventParams) {
    const result = await db.insert(subscriptions).values({
        name,
        email
    }).returning()
    console.log(result)
    const subscriber = result[0]

    return {
        subscriberId: subscriber.id,
    }

}


export async function listSubscriptions() {

    const result = await db.select().from(subscriptions)

    return result

}
