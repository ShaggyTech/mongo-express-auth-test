// User Model
import User from "../models/User";
// Types
import { PassportStatic } from "passport";

const setupLocalPassport = (passport: PassportStatic) => {
  // passport-local-mongoose setup LocalStrategy
  passport.use(User.createStrategy());
  passport.serializeUser(User.serializeUser());
  passport.deserializeUser(User.deserializeUser());
};

export { setupLocalPassport };
