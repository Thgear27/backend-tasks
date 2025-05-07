import { int, boolean, mysqlTable, varchar, timestamp } from "drizzle-orm/mysql-core";

export const tasks = mysqlTable("tasks", {
  id: int().primaryKey().autoincrement(),
  text: varchar({ length: 255 }).notNull(),
  finished: boolean().notNull().default(false),
  createdAt: timestamp()
    .notNull()
    .$defaultFn(() => new Date()),
});
