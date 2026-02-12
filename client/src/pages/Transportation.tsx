import { SectionHeader } from "@/components/SectionHeader"
import { Card } from "@/components/ui/card"

export default function Transportation() {
  const routes = [
    {
      no: 1,
      routeNo: "111",
      start: "Thiruvanmiyur",
      details:
        "Thiruvanmiyur Bus Terminus (6.20) – Adyar Depot – Madhya Kailash – Guindy – Ashok Pillar – Vadapalani – Koyambedu – College (8.10)"
    },
    {
      no: 2,
      routeNo: "112",
      start: "Tambaram",
      details:
        "Tambaram Yard (6.00) – Chrompet – Pallavaram – Guindy – Anna Nagar – College (8.15)"
    },
    {
      no: 3,
      routeNo: "121",
      start: "Porur",
      details:
        "Iyappan Thangal – Porur – Valasarawakkam – Koyambedu – Anna Nagar – College (8.10)"
    },
    {
      no: 4,
      routeNo: "131",
      start: "Tiruvallur",
      details:
        "Tiruvallur – Thiruninravur – Pattabiram – Avadi – Ambattur – College (8.10)"
    },
    {
      no: 5,
      routeNo: "132",
      start: "Ambattur",
      details:
        "Ambattur TI Cycles – Korattur – Senthil Nagar – College (8.10)"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-24 pb-20">
      <div className="container mx-auto px-6">

        <SectionHeader
          title="Transportation"
          subtitle="College Bus Route Details"
        />

        <Card className="p-8 rounded-3xl shadow-2xl bg-white">

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">

              {/* Table Header */}
              <thead className="bg-primary text-white sticky top-0">
                <tr>
                  <th className="px-4 py-3 text-left">S. No</th>
                  <th className="px-4 py-3 text-left">Route No</th>
                  <th className="px-4 py-3 text-left">Starting Point</th>
                  <th className="px-4 py-3 text-left">Route Details</th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody>
                {routes.map((route) => (
                  <tr
                    key={route.no}
                    className="border-b hover:bg-slate-50 transition"
                  >
                    <td className="px-4 py-4 font-semibold text-primary">
                      {route.no}
                    </td>

                    <td className="px-4 py-4">
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold text-sm">
                        {route.routeNo}
                      </span>
                    </td>

                    <td className="px-4 py-4 font-medium">
                      {route.start}
                    </td>

                    <td className="px-4 py-4 text-muted-foreground text-sm leading-relaxed">
                      {route.details}
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>

          {/* Footer Note */}
          <div className="mt-6 text-sm text-muted-foreground">
            Note: Arrival time at the college is approximately 8:10 AM for all routes.
          </div>

        </Card>
      </div>
    </div>
  )
}
