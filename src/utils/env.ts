export function getPostgresUrl(): string {
  const POSTGRES_USER = process.env.POSTGRES_USER;
  const POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD;
  const POSTGRES_HOST = process.env.POSTGRES_HOST;
  const POSTGRES_DB = process.env.POSTGRES_DB;

  if (!POSTGRES_USER) throw new Error("Missing POSTGRES_USER environment variable");
  if (!POSTGRES_PASSWORD) throw new Error("Missing POSTGRES_PASSWORD environment variable");
  if (!POSTGRES_HOST) throw new Error("Missing POSTGRES_HOST environment variable");
  if (!POSTGRES_DB) throw new Error("Missing POSTGRES_DB environment variable");

  return `postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:5432/${POSTGRES_DB}`;
}
