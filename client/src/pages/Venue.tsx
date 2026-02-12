import { useEffect, useState } from "react"
import { SectionHeader } from "@/components/SectionHeader"
import { Card } from "@/components/ui/card"

import rmk1 from "@/assets/rmk1.png"
import rmk2 from "@/assets/rmk2.png"
import rmk3 from "@/assets/rmk3.png"

import marina from "@/assets/marina.png"
import temple from "@/assets/kapaleeshwarar.png"
import mahabalipuram from "@/assets/Mahabalipuram.png"
import fort from "@/assets/fortstgeorge.png"
import mall from "@/assets/expressavenue.png"

export default function Venue() {

  /* ================= AUTO IMAGE SLIDER ================= */
  const images = [rmk1, rmk2, rmk3]
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20">

      <div className="container mx-auto px-6 space-y-20">

        {/* ================================================= */}
        {/* ================= RMK COLLEGE =================== */}
        {/* ================================================= */}

        <SectionHeader
          title="Venue"
          subtitle="R.M.K. Engineering College, Chennai"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Text */}
          <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
            <p>
              R.M.K. Engineering College, established in 1995, is one of the
              premier institutions affiliated to Anna University, Chennai.
              Accredited by NAAC with A+ Grade and NBA, the college is known for
              excellence in academics, placements, and research innovation.
            </p>

            <p>
              The campus provides world-class infrastructure including modern
              laboratories, smart classrooms, hostels, sports facilities and
              industry collaborations. It is located near NH-16 and easily
              accessible from all parts of Chennai.
            </p>

            <p>
              The conference RMKMATE 2026 will be hosted in this vibrant
              academic environment, providing an ideal setting for research,
              networking and innovation.
            </p>
          </div>

          {/* Auto Slider */}
          <div className="rounded-3xl overflow-hidden shadow-2xl h-[420px]">
            <img
              src={images[index]}
              className="w-full h-full object-cover transition-all duration-700"
            />
          </div>

        </div>


        {/* ================================================= */}
        {/* ============= HIGHLIGHTS OF CHENNAI ============== */}
        {/* ================================================= */}

        <div className="bg-primary text-white py-6 px-8 rounded-2xl shadow-xl">
          <h2 className="text-3xl font-bold">Highlights of Chennai</h2>
        </div>


        {/* ===== Highlight 1 ===== */}
        <Highlight
          title="Marina Beach"
          img={marina}
          desc="The second longest urban beach in the world. A perfect place to enjoy sunrise, sea breeze and local street food."
        />

        {/* ===== Highlight 2 ===== */}
        <Highlight
          title="Kapaleeshwarar Temple"
          img={temple}
          reverse
          desc="A historic Dravidian temple dedicated to Lord Shiva. Known for its colorful gopuram and rich cultural heritage."
        />

        {/* ===== Highlight 3 ===== */}
        <Highlight
          title="Mahabalipuram"
          img={mahabalipuram}
          desc="UNESCO World Heritage Site famous for stone carvings, shore temples and ancient monuments."
        />

        {/* ===== Highlight 4 ===== */}
        <Highlight
          title="Fort St. George"
          img={fort}
          reverse
          desc="The first English fortress in India built in 1644. It now houses a museum and the Tamil Nadu Legislative Assembly."
        />

        {/* ===== Highlight 5 ===== */}
        <Highlight
          title="Express Avenue Mall"
          img={mall}
          desc="One of the largest shopping malls in Chennai with shopping, dining and entertainment options for visitors."
        />

      </div>
    </div>
  )
}


/* ================================================= */
/* ========= REUSABLE HIGHLIGHT COMPONENT =========== */
/* ================================================= */

function Highlight({ title, desc, img, reverse = false }: any) {
  return (
    <Card className="p-10 rounded-3xl shadow-xl border-0 bg-white">

      <div className={`grid lg:grid-cols-2 gap-12 items-center ${reverse ? "lg:flex-row-reverse" : ""}`}>

        {!reverse && (
          <img
            src={img}
            className="rounded-2xl shadow-lg h-[350px] w-full object-cover"
          />
        )}

        <div>
          <h3 className="text-2xl font-bold text-primary mb-4">{title}</h3>
          <p className="text-muted-foreground leading-relaxed text-lg">{desc}</p>
        </div>

        {reverse && (
          <img
            src={img}
            className="rounded-2xl shadow-lg h-[350px] w-full object-cover"
          />
        )}

      </div>

    </Card>
  )
}
