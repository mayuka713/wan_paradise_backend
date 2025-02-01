// server/dbTest.ts
import { Client } from 'pg';

export async function createDatabase() {
  const client = new Client({
    user: process.env.DB_USER || 'your_db_user',
    host: process.env.DB_HOST || 'localhost',
    password: process.env.DB_PASSWORD || 'your_password',
    port: Number(process.env.DB_PORT) || 5432,
  });

  await client.connect();
  await client.query('CREATE DATABASE your_database_name'); // 必要に合わせて書き換え
  await client.end();
}
