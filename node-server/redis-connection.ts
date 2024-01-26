const redis = require("redis");
const { promisify } = require("util");
export class RedisConnection {
  client: any;

  isConnected = false;

  async connect() {
    try {
      this.client = redis.createClient({
        socket: {
          host: process.env.REDISHOST,
          port: process.env.REDISPORT,
        },
        password: process.env.REDISPASS,
      });
      this.client.on("error", (err: any) => {
        this.isConnected = false;
      });

      this.client.on("connect", () => {
        this.isConnected = true;
        console.log(`Redis Connected`);
      });

      await this.client.connect();
      const pingCommandResult = await this.client.ping();
      console.log("Ping command result: ", pingCommandResult);
    } catch (err) {
      this.isConnected = false;
    }
    return this.client;
  }
}
