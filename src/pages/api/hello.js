import { Redis } from '@upstash/redis';

// set up on terminal https://github.com/rmccrear/lv-3-may-2024/blob/main/week-3/part-1-setup.md
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// Initialize Redis
const redis = Redis.fromEnv();

export default async function handler(req, res) {
  const item = req.query.item || "pineapple";
  const user = req.query.user 
  await redis.set(`item:${user}`, item) 
  // await redis.set("user", user)


  const result = await redis.get("item");

  res.status(200).json({ name: user, result: result});


}
