import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api, type InsertSpeaker } from "@shared/routes";

// ============================================
// SPEAKERS
// ============================================

export function useSpeakers() {
  return useQuery({
    queryKey: [api.speakers.list.path],
    queryFn: async () => {
      const res = await fetch(api.speakers.list.path);
      if (!res.ok) throw new Error("Failed to fetch speakers");
      return api.speakers.list.responses[200].parse(await res.json());
    },
  });
}

export function useCreateSpeaker() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: InsertSpeaker) => {
      const res = await fetch(api.speakers.create.path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to create speaker");
      return api.speakers.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [api.speakers.list.path] });
    },
  });
}

// ============================================
// COMMITTEE
// ============================================

export function useCommittee() {
  return useQuery({
    queryKey: [api.committee.list.path],
    queryFn: async () => {
      const res = await fetch(api.committee.list.path);
      if (!res.ok) throw new Error("Failed to fetch committee members");
      return api.committee.list.responses[200].parse(await res.json());
    },
  });
}

// ============================================
// SCHEDULE
// ============================================

export function useSchedule() {
  return useQuery({
    queryKey: [api.schedule.list.path],
    queryFn: async () => {
      const res = await fetch(api.schedule.list.path);
      if (!res.ok) throw new Error("Failed to fetch schedule");
      return api.schedule.list.responses[200].parse(await res.json());
    },
  });
}
