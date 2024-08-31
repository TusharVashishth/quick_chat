import { Redis } from "ioredis";
let redis: Redis;
if (process.env.NODE_ENV === "production") {
  redis = new Redis(
    "rediss://default:AbAPAAIjcDFlNzVhZjI3MDA4NDk0N2M5ODNmNWQzMDI1ZjY5OWJiNnAxMA@engaging-seagull-45071.upstash.io:6379"
  );
} else {
  redis = new Redis({
    host: "localhost",
    port: 6379,
  });
}


export default redis;
