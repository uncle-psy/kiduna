import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const earlyAccessRequests = pgTable("early_access_requests", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  message: text("message").notNull(),
  referredBy: text("referred_by"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
});
