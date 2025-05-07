import { defineConfig } from "drizzle-kit";
import { getMySQLUrl } from "./src/utils/env";

export default defineConfig({
  out: "./drizzle",
  schema: "./src/db/schema.ts",
  dialect: "mysql",
  dbCredentials: {
    url: getMySQLUrl(),
  },
});
