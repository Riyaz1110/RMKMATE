import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Speakers
  app.get(api.speakers.list.path, async (req, res) => {
    const speakers = await storage.getSpeakers();
    res.json(speakers);
  });

  app.post(api.speakers.create.path, async (req, res) => {
    const input = api.speakers.create.input.parse(req.body);
    const speaker = await storage.createSpeaker(input);
    res.status(201).json(speaker);
  });

  // Committee
  app.get(api.committee.list.path, async (req, res) => {
    const members = await storage.getCommitteeMembers();
    res.json(members);
  });

  // Schedule
  app.get(api.schedule.list.path, async (req, res) => {
    const items = await storage.getSchedules();
    res.json(items);
  });

  // Seed data if empty
  await seedDatabase();

  return httpServer;
}

async function seedDatabase() {
  const existingSpeakers = await storage.getSpeakers();
  if (existingSpeakers.length === 0) {
    await storage.createSpeaker({
      name: "Dr. Danish Nadeem",
      role: "CTO",
      affiliation: "Maeve Port, Netherlands",
      bio: "Expert in Cyber Physical Systems and Smart Ports.",
      imageUrl: "/images/image_1770799576934.png" // Placeholder or reference
    });
    await storage.createSpeaker({
      name: "Dr. Nilanjan Dey",
      role: "Associate Professor",
      affiliation: "Techno International New Town, Kolkata, India",
      bio: "Renowned researcher in Computer Science and Engineering."
    });
    await storage.createSpeaker({
      name: "Mr. Alireza Masoum",
      role: "Engineering Director",
      affiliation: "Industry Leader",
      bio: "Focus on industrial applications of CPS."
    });
  }

  const existingCommittee = await storage.getCommitteeMembers();
  if (existingCommittee.length === 0) {
    await storage.createCommitteeMember({
      name: "Dr. K.A. Mohamed Junaid",
      role: "Principal",
      category: "Patron",
      affiliation: "R.M.K. Engineering College"
    });
     await storage.createCommitteeMember({
      name: "Dr. T. Sethukarasi",
      role: "HOD - CSE",
      category: "Conference Chair",
      affiliation: "R.M.K. Engineering College"
    });
  }
}
