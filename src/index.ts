import express, { json, urlencoded } from "express";
import passport from "passport";
import dotenv from "dotenv";
import morgan from "morgan";
import session from "express-session";
import MongoStore from "connect-mongo";
import mongoose from "mongoose";

// Load .env config variables
dotenv.config({
  path: `${process.cwd()}/src/config/config.env`,
});

// Configuration setup
import { connectMongoDB } from "./config/database";
import { setupLocalPassport } from "./config/passport";

const PORT = process.env.PORT || 5000;
const MONGO_URI =
  process.env.MONGO_URI || "error: env variable MONGO_URI not set";
const SESSION_USER_SECRET = process.env.SESSION_USER_SECRET;

connectMongoDB(MONGO_URI);

// Passport config
setupLocalPassport(passport);

const app = express();
app.use(urlencoded({ extended: false }));
app.use(json());

// Sessions
app.use(
  session({
    secret: SESSION_USER_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      client: mongoose.connection.getClient(),
    }),
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// define a route handler for the default home page
app.get("/", (_req, res) => {
  res.send("Hello world!");
});

// start the Express server
app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});
