export function getMySQLUrl(): string {
  const MYSQL_USER = process.env.MYSQL_USER;
  const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD;
  const MYSQL_HOST = process.env.MYSQL_HOST;
  const MYSQL_DB = process.env.MYSQL_DATABASE;

  if (!MYSQL_USER) throw new Error("Missing MYSQL_USER environment variable");
  if (!MYSQL_PASSWORD) throw new Error("Missing MYSQL_PASSWORD environment variable");
  if (!MYSQL_HOST) throw new Error("Missing MYSQL_HOST environment variable");
  if (!MYSQL_DB) throw new Error("Missing MYSQL_DATABASE environment variable");

  return `mysql://${MYSQL_USER}:${MYSQL_PASSWORD}@${MYSQL_HOST}:3306/${MYSQL_DB}`;
}
