import dotenv from "dotenv";

if (!dotenv.config()) {
  throw new Error("env values not found!");
}

export default {
  port: process.env.PORT,
};
