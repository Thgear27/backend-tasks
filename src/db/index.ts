import { drizzle } from "drizzle-orm/mysql2";
import { getMySQLUrl } from "../utils/env";

export const db = drizzle(getMySQLUrl());
