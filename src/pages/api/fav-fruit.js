import { Redis } from "@upstash/redis";

const store = Redis.fromEnv()

export default async function handler(req, res){
    const name = req.query.name;
    const favFruit = await store.get(`fav-fruit:${name}`);
    res.status(200),json({
        fruit: favFruit
    });
}