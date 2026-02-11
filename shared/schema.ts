import { pgTable, text, serial, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const speakers = pgTable("speakers", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  role: text("role").notNull(), // e.g. CTO, Professor
  affiliation: text("affiliation").notNull(), // e.g. Maeve Port, Techno International
  imageUrl: text("image_url"),
  bio: text("bio"),
});

export const committeeMembers = pgTable("committee_members", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  role: text("role").notNull(), // e.g. Chair, Co-Chair
  category: text("category").notNull(), // e.g. Organizing, Advisory, Technical
  affiliation: text("affiliation"),
});

export const schedules = pgTable("schedules", {
  id: serial("id").primaryKey(),
  day: text("day").notNull(), // e.g. "Day 1", "23 Jan 2026"
  time: text("time").notNull(),
  event: text("event").notNull(),
  speakerId: serial("speaker_id").references(() => speakers.id),
  location: text("location"),
});

export const insertSpeakerSchema = createInsertSchema(speakers).omit({ id: true });
export const insertCommitteeMemberSchema = createInsertSchema(committeeMembers).omit({ id: true });
export const insertScheduleSchema = createInsertSchema(schedules).omit({ id: true });

export type Speaker = typeof speakers.$inferSelect;
export type InsertSpeaker = z.infer<typeof insertSpeakerSchema>;
export type CommitteeMember = typeof committeeMembers.$inferSelect;
export type InsertCommitteeMember = z.infer<typeof insertCommitteeMemberSchema>;
export type Schedule = typeof schedules.$inferSelect;
export type InsertSchedule = z.infer<typeof insertScheduleSchema>;
