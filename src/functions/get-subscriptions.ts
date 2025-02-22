import { db } from "../drizzle/client";
import { subscriptions } from "../drizzle/tables/subscriptions";

export async function getSubscriptions() {

    const result = await db.select().from(subscriptions)

    return result

}
