import { useSchedule } from "@/hooks/use-conference"
import { SectionHeader } from "@/components/SectionHeader"
import { Card } from "@/components/ui/card"
import { Clock, MapPin, User, Calendar } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"

export default function Schedule() {
  const { data: schedule, isLoading } = useSchedule()

  const scheduleByDay =
    schedule?.reduce((acc, item) => {
      if (!acc[item.day]) acc[item.day] = []
      acc[item.day].push(item)
      return acc
    }, {} as Record<string, typeof schedule>) || {}

  const days = Object.keys(scheduleByDay)

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-24 pb-20">
      <div className="container mx-auto px-6 space-y-20">

        <SectionHeader
          title="Conference Schedule"
          subtitle="Program Agenda & Important Deadlines"
        />

        {/* ================================================= */}
        {/* 🔥🔥 EXTRAORDINARY IMPORTANT DATES SECTION 🔥🔥 */}
        {/* ================================================= */}

        <section className="space-y-10">

          <div className="flex items-center gap-3 text-primary text-2xl font-bold">
            <Calendar className="w-7 h-7" />
            Important Dates
          </div>

          <div className="grid md:grid-cols-3 gap-10">

            {[
              {
                label: "Full Paper Submission",
                date: "01.02.2026",
                color: "from-blue-600 to-indigo-700"
              },
              {
                label: "Notification of Acceptance",
                date: "31.03.2026",
                color: "from-purple-600 to-violet-700"
              },
              {
                label: "Final Paper Submission",
                date: "10.04.2026",
                color: "from-emerald-600 to-green-700"
              }
            ].map((item) => (
              <div
                key={item.label}
                className={`rounded-3xl p-10 text-center text-white shadow-2xl bg-gradient-to-br ${item.color}
                hover:scale-105 transition-all duration-300`}
              >
                <p className="uppercase tracking-widest text-sm opacity-90 mb-4">
                  {item.label}
                </p>

                <h3 className="text-4xl font-extrabold drop-shadow-lg">
                  {item.date}
                </h3>
              </div>
            ))}
          </div>
        </section>

        {/* ================================================= */}
        {/* 🔥 NORMAL DAILY SCHEDULE (Your old content) */}
        {/* ================================================= */}

        {isLoading ? (
          <div className="space-y-4 max-w-4xl mx-auto">
            {[1, 2, 3].map(i => (
              <Skeleton key={i} className="h-32 w-full rounded-xl" />
            ))}
          </div>
        ) : days.length === 0 ? (
          <Card className="text-center py-20 shadow-lg rounded-2xl">
            <Calendar className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
            <h3 className="text-xl font-bold">Detailed Schedule Coming Soon</h3>
            <p className="text-muted-foreground">
              The full conference agenda will be published soon.
            </p>
          </Card>
        ) : (
          <div className="max-w-5xl mx-auto space-y-14">

            {days.map((day) => (
              <div key={day}>

                {/* Day Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-primary text-white px-6 py-2 rounded-xl font-bold shadow-md">
                    {day}
                  </div>
                  <div className="flex-1 h-px bg-slate-300" />
                </div>

                <div className="space-y-6">

                  {scheduleByDay[day].map((item) => (
                    <Card
                      key={item.id}
                      className="p-7 shadow-md hover:shadow-xl transition-all border-l-4 border-primary rounded-xl"
                    >
                      <div className="flex flex-col md:flex-row gap-6">

                        {/* Time */}
                        <div className="md:w-36 font-mono text-primary font-semibold text-lg flex items-center gap-2">
                          <Clock size={18} />
                          {item.time}
                        </div>

                        {/* Details */}
                        <div className="flex-1">
                          <h3 className="text-lg font-bold mb-2">{item.event}</h3>

                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">

                            {item.location && (
                              <div className="flex items-center gap-1">
                                <MapPin size={14} />
                                {item.location}
                              </div>
                            )}

                            {item.speakerId && (
                              <div className="flex items-center gap-1">
                                <User size={14} />
                                Keynote Speaker
                              </div>
                            )}

                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}

                </div>
              </div>
            ))}

          </div>
        )}
      </div>
    </div>
  )
}
