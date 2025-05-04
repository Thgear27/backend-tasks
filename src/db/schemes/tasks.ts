import { integer, boolean, pgTable, varchar, timestamp } from "drizzle-orm/pg-core";

export const tasks = pgTable("tasks", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  text: varchar({ length: 255 }).notNull(),
  finished: boolean().notNull().default(true),
  createdAt: timestamp().notNull().$defaultFn(() => new Date()),
});
