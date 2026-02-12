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
    },
    {
  no: 6,
  routeNo: "132A",
  start: "Korattur Bus Stand",
  details: "Korattur Bus Stand (7.10) – Padi Saravana Stores (7.20) – Senthil Nagar (7.25) – Ambedkar Nagar (7.28) – Padiyanallur (7.40) – Karanodai (7.50) – College (8.10)"
},
{
  no: 7,
  routeNo: "135",
  start: "Ambattur Ram Nagar",
  details: "Ambattur Rakki (7.10) – Oragadam (7.18) – Pudur (7.20) – Kallikuppam (7.25) – Puzhal Camp (7.35) – College (8.10)"
},
{
  no: 8,
  routeNo: "135A",
  start: "Murugappa Polytechnic",
  details: "Murugappa Polytechnic (7.05) – Ambattur Rakki (7.15) – Oragadam (7.20) – Pudur (7.35) – Wireless – Kallikuppam – Puzhal Camp (7.35) – College (8.10)"
},
{
  no: 9,
  routeNo: "136",
  start: "Pattabiram",
  details: "Murugappa Polytechnic (7.05) – Thirumullaivoyal (7.10) – Ambattur Rakki (7.15) – Pudur (7.17) – Kallikuppam (7.20) – Surapet (7.25) – Velammal (7.30) – Kavankarai (7.40) – Red Hills (7.45) – College (8.10)"
},
{
  no: 10,
  routeNo: "137",
  start: "Puzhal Camp",
  details: "Puzhal Camp (7.30) – Puzhal Jail Stop (7.32) – Kavankarai (7.35) – Vadakarai (7.40) – Ambika Theatre (7.45) – Red Hills (7.50) – College (8.10)"
},
{
  no: 11,
  routeNo: "138",
  start: "Avadi",
  details: "Avadi Depot (7.00) – Murugappa Polytechnic (7.05) – Thirumullaivoyal (7.10) – College (8.10)"
},
{
  no: 12,
  routeNo: "141",
  start: "T. Nagar",
  details: "Panagal Park (6.45) – Pondy Bazaar (6.50) – Vani Mahal (6.52) – Vidhyodaya School (6.55) – Valluvarkottam (7.00) – Anna Arch (7.10) – College (8.10)"
},
{
  no: 13,
  routeNo: "145",
  start: "Kodambakkam",
  details: "Meenakshi College (6.50) – Mahalingapuram (6.55) – Chetpet Signal (6.55) – Shenoy Nagar (7.10) – Nathamuni (7.20) – College (8.10)"
},
{
  no: 14,
  routeNo: "153",
  start: "Mogappair West",
  details: "Mogappair West Depot (7.00) – Golden Flats (7.10) – Collector Nagar (7.13) – Anna Nagar Depot (7.19) – Senthil Nagar (7.25) – College (8.10)"
},
{
  no: 15,
  routeNo: "156",
  start: "Mogappair East",
  details: "Mogappair East Depot (7.00) – Collector Nagar (7.05) – College (8.10)"
},
{
  no: 16,
  routeNo: "157",
  start: "Thiruverkadu Arch",
  details: "Thiruverkadu Arch (6.50) – Maduravoyal (6.55) – Nerkundram (7.00) – Thirumangalam (7.05) – Anna Nagar West Depot (7.20) – College (8.10)"
},
{
  no: 17,
  routeNo: "158",
  start: "Collector Nagar",
  details: "Collector Nagar Bus Stop (7.05) – Padikuppam Road (7.07) – Thirumangalam (7.15) – College (8.10)"
},
{
  no: 18,
  routeNo: "162",
  start: "Mandaveli",
  details: "Mylapore Luz (6.40) – Triplicane (6.45) – Egmore (6.55) – Villivakkam (7.12) – Nathamuni (7.15) – College (8.10)"
},
{
  no: 19,
  routeNo: "163",
  start: "Purasawalkam",
  details: "Kelly’s Signal (6.45) – Abirami Theatre (6.47) – Purasawalkam Tank (6.50) – Otteri (6.58) – Agaram (7.05) – College (8.10)"
},
{
  no: 20,
  routeNo: "165",
  start: "Perambur",
  details: "Perambur Bus Depot (7.00) – Perambur Church (7.05) – Kolathur (7.15) – Retteri (7.20) – College (8.10)"
},
{
  no: 21,
  routeNo: "166",
  start: "Thiru Vi Ka Nagar",
  details: "Thiru Vi Ka Nagar (7.05) – Periyar Nagar (7.15) – Kolathur Anna Statue (7.20) – Retteri (7.30) – College (8.10)"
},
{
  no: 22,
  routeNo: "167",
  start: "Kolathur Anna Statue",
  details: "Moogambigai (7.15) – Retteri (7.20) – Vinayagapuram (7.25) – College (8.10)"
},
{
  no: 23,
  routeNo: "172",
  start: "Tollgate",
  details: "Tondiarpet Depot (6.50) – Maharani (6.55) – Mint (7.00) – College (8.10)"
},
{
  no: 24,
  routeNo: "173",
  start: "Kasimedu",
  details: "Royapuram Market (6.50) – Stanley Hospital (7.10) – Basin Bridge (7.15) – Sharma Nagar (7.30) – College (8.10)"
},
{
  no: 25,
  routeNo: "174",
  start: "Ambedkar College Vyasarpadi",
  details: "Mathur (7.05) – Milk Colony (7.10) – Arul Nagar (7.15) – Moolakadai (7.30) – College (8.10)"
},
{
  no: 26,
  routeNo: "175",
  start: "Manali Market",
  details: "Mathur (7.05) – Milk Colony (7.08) – Moolakadai (7.25) – College (8.10)"
},
{
  no: 27,
  routeNo: "176",
  start: "Madhavaram Bus Stand",
  details: "Madhavaram Roundana (7.40) – College (8.05)"
},
{
  no: 28,
  routeNo: "181",
  start: "Tiruvottiyur",
  details: "Kaladipet – Theradi – Ennore Lift Gate (6.50) – College (8.10)"
},
{
  no: 29,
  routeNo: "182",
  start: "Manali New Town",
  details: "MMDA – Nappalayam – Athipattu – Minjur (7.10) – College (8.10)"
},
{
  no: 30,
  routeNo: "183",
  start: "Ponneri",
  details: "Anna Statue (7.45) – Thatchur (7.55) – College (8.10)"
},
{
  no: 31,
  routeNo: "184",
  start: "Tiruvottiyur Ajax",
  details: "Ennore Lift Gate (7.00) – Minjur (7.30) – Ponneri (7.45) – College (8.10)"
},
{
  no: 32,
  routeNo: "191",
  start: "Sunnambukulam",
  details: "Arambakkam – Ramapuram – Gummidipoondi Bypass (7.45) – College (8.10)"
},
{
  no: 33,
  routeNo: "192",
  start: "Uthukottai",
  details: "Periyapalayam (7.40) – Arani (7.50) – Panapakkam (8.00) – College (8.10)"
},
{
  no: 34,
  routeNo: "193/293",
  start: "Gummidipoondi Bazar",
  details: "Panapakkam (7.50) – College (8.10)"
},
{
  no: 35,
  routeNo: "194",
  start: "Thiruvallur",
  details: "Railway Station (6.40) – Bus Stand (6.48) – Periyapalayam (7.40) – Arani (7.50) – College (8.10)"
},
{
  no: 36,
  routeNo: "195",
  start: "Uthukottai",
  details: "Palavakkam (7.25) – Periyapalayam (7.40) – Arani (7.50) – College (8.10)"
},
{
  no: 37,
  routeNo: "196",
  start: "Thiruvallur",
  details: "Ekadu – Vengal – Kanniputhur – Janappanchathiram – College (8.10)"
},
{
  no: 38,
  routeNo: "Spare",
  start: "Wheels India",
  details: "Wheels India (8.00) – College (9.00) (Used only for breakdown/maintenance purpose)"
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
