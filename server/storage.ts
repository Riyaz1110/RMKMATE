type Speaker = {
  id: number
  name: string
  topic: string
}

type CommitteeMember = {
  id: number
  name: string
  role: string
}

class Storage {
  private speakers: Speaker[] = []
  private committee: CommitteeMember[] = []

  private speakerId = 1
  private committeeId = 1

  async getSpeakers() {
    return this.speakers
  }

  async createSpeaker(data: any) {
    const speaker = { id: this.speakerId++, ...data }
    this.speakers.push(speaker)
    return speaker
  }

  async getCommitteeMembers() {
    return this.committee
  }

  async createCommitteeMember(data: any) {
    const member = { id: this.committeeId++, ...data }
    this.committee.push(member)
    return member
  }

  async deleteSpeaker(id: number) {
    this.speakers = this.speakers.filter(s => s.id !== id)
  }

  async deleteCommitteeMember(id: number) {
    this.committee = this.committee.filter(c => c.id !== id)
  }
}

export const storage = new Storage()
