import { inArray } from "drizzle-orm";
import { db } from "../drizzle/client";
import { subscriptions } from "../drizzle/tables/subscriptions";
import { redis } from "../redis/client";


export async function getRanking() {

    const ranking = await redis.zrevrange('referral:ranking', 0, 2, 'WITHSCORES')
    const subscriberIdAndScores: Record<string, number> = {}

    for (let i = 0; i < ranking.length; i += 2) {
        subscriberIdAndScores[ranking[i]] = Number.parseInt(ranking[i + 1])
    }

    console.log(subscriberIdAndScores)


    const subscribers = await db.select().from(subscriptions).where(inArray(subscriptions.id, Object.keys(subscriberIdAndScores)))

    const subscribersWithScores = subscribers
        .map(subscriber => {
            return {
                ...subscriber,
                id: subscriber.id,
                name: subscriber.name,
                score: subscriberIdAndScores[subscriber.id]
            }
        })
        .sort((a, b) => b.score - a.score)

    return { subscribersWithScores }
}




