import express from "express";
import { Application } from "express";
import dotenv from "dotenv";
import cors from "cors";
const cookieParser = require("cookie-parser");
const session = require("express-session");
import bodyParser from "body-parser";
const redis = require("redis");
const RedisStore = require("connect-redis").default;

//For env File
dotenv.config();

const app: Application = express();
app.use(express.json());

app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static("angular-app")); //set the static path
app.set("view engine", "pug");
const port = process.env.PORT || 3000;
app.use(
  cors({
    origin: ["*"],
    credentials: true,
  })
);
const oneHour = 1000 * 60 * 60 * 1;

const client = redis.createClient({
  socket: {
    host: process.env.REDISHOST,
    port: process.env.REDISPORT,
  },
  password: process.env.REDISPASS,
});

(async () => {
  await client.connect();
  const pingCommandResult = await client.ping();
  console.log("Ping command result: ", pingCommandResult);
})();
app.use(
  session({
    secret: "thisisdeployentopenshift",
    store: new RedisStore({
      client: client,
    }),
    saveUninitialized: true,
    cookie: {
      maxAge: oneHour,
      secure: false, // if true only transmit cookie over https
      httpOnly: false,
    },
    resave: false,
  })
);

app.use("/", require("./index.ts"));
app.listen(port, () => {
  console.log(`Server is Fire at ${port}, runnong on ${process.env.NODE_ENV} environment`);
});
