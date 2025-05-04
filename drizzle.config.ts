import { defineConfig } from "drizzle-kit";
import { getPostgresUrl } from "./src/utils/env";

export default defineConfig({
  out: "./drizzle",
  schema: "./src/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: getPostgresUrl(),
  },
});
