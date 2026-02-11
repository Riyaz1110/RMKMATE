import { db } from "./db";
import { speakers, committeeMembers, schedules, type Speaker, type InsertSpeaker, type CommitteeMember, type InsertCommitteeMember, type Schedule, type InsertSchedule } from "@shared/schema";

export interface IStorage {
  getSpeakers(): Promise<Speaker[]>;
  createSpeaker(speaker: InsertSpeaker): Promise<Speaker>;
  getCommitteeMembers(): Promise<CommitteeMember[]>;
  createCommitteeMember(member: InsertCommitteeMember): Promise<CommitteeMember>;
  getSchedules(): Promise<Schedule[]>;
  createSchedule(schedule: InsertSchedule): Promise<Schedule>;
}

export class DatabaseStorage implements IStorage {
  async getSpeakers(): Promise<Speaker[]> {
    return await db.select().from(speakers);
  }

  async createSpeaker(insertSpeaker: InsertSpeaker): Promise<Speaker> {
    const [speaker] = await db.insert(speakers).values(insertSpeaker).returning();
    return speaker;
  }

  async getCommitteeMembers(): Promise<CommitteeMember[]> {
    return await db.select().from(committeeMembers);
  }

  async createCommitteeMember(insertMember: InsertCommitteeMember): Promise<CommitteeMember> {
    const [member] = await db.insert(committeeMembers).values(insertMember).returning();
    return member;
  }

  async getSchedules(): Promise<Schedule[]> {
    return await db.select().from(schedules);
  }

  async createSchedule(insertSchedule: InsertSchedule): Promise<Schedule> {
    const [schedule] = await db.insert(schedules).values(insertSchedule).returning();
    return schedule;
  }
}

export const storage = new DatabaseStorage();
