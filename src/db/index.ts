import { config } from 'dotenv'

import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as schema from './schema';

config()

const connectionString = process.env.DATABASE_URL!;

// Disable prefetch as it is not supported for "transaction" pool mode
export const client = new Pool({ connectionString });
export const db = drizzle(client, { schema });
