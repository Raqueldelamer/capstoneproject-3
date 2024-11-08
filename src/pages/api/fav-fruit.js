import { Redis } from "@upstash/redis";

const store = Redis.fromEnv()

export default async function handler(req, res){
    const fruit = req.query.fruit;
    const favFruit = await store.get(`fav-fruit:${fruit}`);
    res.status(200),json({
        fruit: favFruit
    });
}