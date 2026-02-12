import { SectionHeader } from "@/components/SectionHeader"

export default function AboutRMKEC() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <div className="container mx-auto px-6">
        
        <SectionHeader
          title="About R.M.K. Engineering College"
          subtitle="Excellence in Engineering Education"
        />

        <div className="max-w-4xl mx-auto text-muted-foreground leading-relaxed space-y-6 mt-10">
          <p>
            R.M.K. Engineering College was established in 1995 and is one of the premier
            engineering institutions affiliated to Anna University, Chennai.
          </p>

          <p>
            The institution is accredited by NAAC with A+ Grade and NBA for several programs.
            It has consistently achieved academic excellence and outstanding placement records.
          </p>

          <p>
            The college promotes innovation, research, and industry collaboration through
            Centers of Excellence in Artificial Intelligence, Big Data, Cloud Computing,
            and Information Security.
          </p>
        </div>

      </div>
    </div>
  )
}
