import { Redis } from '../../../ChatBot/node_modules/@upstash/redis/types/platforms/nodejs'

export const redis = new Redis({
  url: process.env.REDIS_URL!,
  token: process.env.REDIS_SECRET!
})
