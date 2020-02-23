import { config } from "dotenv";

const results = config();

if (results.error) {
  console.log(results.error);
} 

export const JWTSECRET = process.env["JWT_SECRET"];