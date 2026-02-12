// type Speaker = {
//   id: number
//   name: string
//   topic: string
// }

// type CommitteeMember = {
//   id: number
//   name: string
//   role: string
// }

// class Storage {
//   private speakers: Speaker[] = []
//   private committee: CommitteeMember[] = []

//   private speakerId = 1
//   private committeeId = 1

//   async getSpeakers() {
//     return this.speakers
//   }

//   async createSpeaker(data: any) {
//     const speaker = { id: this.speakerId++, ...data }
//     this.speakers.push(speaker)
//     return speaker
//   }

//   async getCommitteeMembers() {
//     return this.committee
//   }

//   async createCommitteeMember(data: any) {
//     const member = { id: this.committeeId++, ...data }
//     this.committee.push(member)
//     return member
//   }

//   async deleteSpeaker(id: number) {
//     this.speakers = this.speakers.filter(s => s.id !== id)
//   }

//   async deleteCommitteeMember(id: number) {
//     this.committee = this.committee.filter(c => c.id !== id)
//   }
// }

// export const storage = new Storage()
// ================= TYPES =================

// export type Speaker = {
//   id: number
//   name: string
//   topic: string
//   role?: string
//   affiliation?: string
//   bio?: string
//   imageUrl?: string
// }

// export type CommitteeMember = {
//   id: number
//   name: string
//   role: string
//   category?: string
//   affiliation?: string
// }

// export type ScheduleItem = {
//   id: number
//   title: string
//   time: string
//   speaker?: string
// }

// // ================= STORAGE CLASS =================

// class Storage {
//   private speakers: Speaker[] = []
//   private committee: CommitteeMember[] = []
//   private schedules: ScheduleItem[] = []

//   private speakerId = 1
//   private committeeId = 1
//   private scheduleId = 1

//   // ================= SPEAKERS =================

//   async getSpeakers(): Promise<Speaker[]> {
//     return this.speakers
//   }

//   async createSpeaker(data: Omit<Speaker, "id">): Promise<Speaker> {
//     const speaker: Speaker = {
//       id: this.speakerId++,
//       ...data
//     }
//     this.speakers.push(speaker)
//     return speaker
//   }

//   async deleteSpeaker(id: number): Promise<boolean> {
//     const before = this.speakers.length
//     this.speakers = this.speakers.filter(s => s.id !== id)
//     return this.speakers.length !== before
//   }

//   // ================= COMMITTEE =================

//   async getCommitteeMembers(): Promise<CommitteeMember[]> {
//     return this.committee
//   }

//   async createCommitteeMember(
//     data: Omit<CommitteeMember, "id">
//   ): Promise<CommitteeMember> {
//     const member: CommitteeMember = {
//       id: this.committeeId++,
//       ...data
//     }
//     this.committee.push(member)
//     return member
//   }

//   async deleteCommitteeMember(id: number): Promise<boolean> {
//     const before = this.committee.length
//     this.committee = this.committee.filter(c => c.id !== id)
//     return this.committee.length !== before
//   }

//   // ================= SCHEDULE =================

//   async getSchedules(): Promise<ScheduleItem[]> {
//     return this.schedules
//   }

//   async createSchedule(
//     data: Omit<ScheduleItem, "id">
//   ): Promise<ScheduleItem> {
//     const schedule: ScheduleItem = {
//       id: this.scheduleId++,
//       ...data
//     }
//     this.schedules.push(schedule)
//     return schedule
//   }

//   async deleteSchedule(id: number): Promise<boolean> {
//     const before = this.schedules.length
//     this.schedules = this.schedules.filter(s => s.id !== id)
//     return this.schedules.length !== before
//   }
// }

// // ================= EXPORT =================

// export const storage = new Storage()
type Speaker = {
  id: number
  name: string
  role: string
  affiliation: string
  bio: string
  imageUrl?: string
}

type CommitteeMember = {
  id: number
  name: string
  role: string
  category: string
  affiliation: string
}

type ScheduleItem = {
  id: number
  title: string
  time: string
  speaker?: string
  venue?: string
}

class Storage {
  private speakers: Speaker[] = []
  private committee: CommitteeMember[] = []
  private schedules: ScheduleItem[] = []

  private speakerId = 1
  private committeeId = 1
  private scheduleId = 1

  // ================= SPEAKERS =================
  async getSpeakers() {
    return this.speakers
  }

  async createSpeaker(data: Omit<Speaker, "id">) {
    const speaker: Speaker = {
      id: this.speakerId++,
      ...data
    }
    this.speakers.push(speaker)
    return speaker
  }

  async deleteSpeaker(id: number) {
    this.speakers = this.speakers.filter(s => s.id !== id)
  }

  // ================= COMMITTEE =================
  async getCommitteeMembers() {
    return this.committee
  }

  async createCommitteeMember(data: Omit<CommitteeMember, "id">) {
    const member: CommitteeMember = {
      id: this.committeeId++,
      ...data
    }
    this.committee.push(member)
    return member
  }

  async deleteCommitteeMember(id: number) {
    this.committee = this.committee.filter(c => c.id !== id)
  }

  // ================= SCHEDULE =================
  async getSchedules() {
    return this.schedules
  }

  async createSchedule(data: Omit<ScheduleItem, "id">) {
    const schedule: ScheduleItem = {
      id: this.scheduleId++,
      ...data
    }
    this.schedules.push(schedule)
    return schedule
  }

  async deleteSchedule(id: number) {
    this.schedules = this.schedules.filter(s => s.id !== id)
  }
}

export const storage = new Storage()
