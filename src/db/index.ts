import { drizzle } from "drizzle-orm/node-postgres";
import { getPostgresUrl } from "../utils/env";

export const db = drizzle(getPostgresUrl());
