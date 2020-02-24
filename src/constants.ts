import { config } from 'dotenv';

const results = config();

if (results.error) {
  console.log(results.error);
} 

/* auth secrets */
export const JWTSECRET = process.env['JWT_SECRET'];
/* database secrets */
export const DIALECT = process.env['DB_DIALECT'];
export const DBHOST = process.env['DB_HOST'];
export const DBPORT = Number(process.env['DB_PORT']);
export const DBUSER = process.env['DB_USER'];
export const DBPASS = process.env['DB_PASS'];
export const DBSCHEMA = process.env['DB_SCHEMA'];