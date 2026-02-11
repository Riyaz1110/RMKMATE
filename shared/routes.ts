import { z } from 'zod';
import { speakers, committeeMembers, schedules, insertSpeakerSchema, insertCommitteeMemberSchema, insertScheduleSchema } from './schema';

export const errorSchemas = {
  notFound: z.object({ message: z.string() }),
  internal: z.object({ message: z.string() }),
};

export const api = {
  speakers: {
    list: {
      method: 'GET' as const,
      path: '/api/speakers' as const,
      responses: {
        200: z.array(z.custom<typeof speakers.$inferSelect>()),
      },
    },
    create: {
      method: 'POST' as const,
      path: '/api/speakers' as const,
      input: insertSpeakerSchema,
      responses: {
        201: z.custom<typeof speakers.$inferSelect>(),
      },
    },
  },
  committee: {
    list: {
      method: 'GET' as const,
      path: '/api/committee' as const,
      responses: {
        200: z.array(z.custom<typeof committeeMembers.$inferSelect>()),
      },
    },
  },
  schedule: {
    list: {
      method: 'GET' as const,
      path: '/api/schedule' as const,
      responses: {
        200: z.array(z.custom<typeof schedules.$inferSelect>()),
      },
    },
  },
};

export function buildUrl(path: string, params?: Record<string, string | number>): string {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  return url;
}
