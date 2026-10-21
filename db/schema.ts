import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const researchRecords = sqliteTable("research_records", {
  id: text("id").primaryKey(),
  category: text("category").notNull(), name: text("name").notNull(),
  status: text("status").notNull(), owner: text("owner").notNull(),
  detail: text("detail").notNull(), meta: text("meta").notNull(),
  progress: integer("progress").notNull().default(0),
  createdAt: text("created_at").notNull(),
});
