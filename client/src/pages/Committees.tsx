import { useState } from "react"
import { SectionHeader } from "@/components/SectionHeader"
import { Card } from "@/components/ui/card"

import chief from "@/assets/cheif.png"
import manjula from "@/assets/manjula.png"
import jothi from "@/assets/jothi.png"
import kishore from "@/assets/kishore.png"
import junaid from "@/assets/junaid.png"
import elwin from "@/assets/elwin.png"
import yalamanchi from "@/assets/yalamanchi.png"
import durgadevi from "@/assets/durgadevi.png"
import sowmya from "@/assets/sowmya.png" 
import palani from "@/assets/palani.png"
import pitchandi from "@/assets/pitchandi.png"
import mono from "@/assets/monoharan.png"
import pavai from "@/assets/pavai.png"
import siva from "@/assets/siva.png"
import mani from "@/assets/mani.png"
const members = [
  {
    name: "Thiru. R.S. Munirathinam",
    role: "Chief Patron",
    img: chief,
    intro: "Founder & Chairman of RMK Group of Institutions with decades of leadership in education."
  },
  {
    name: "Smt. Manjula Munirathinam",
    role: "Patron",
    img: manjula,
    intro: "Chairperson guiding academic excellence and institutional growth."
  },
  {
    name: "Shri. R. Jothi Naidu",
    role: "Patron",
    img: jothi,
    intro: "Director supporting operations and strategic administration."
  },
  {
    name: "Shri. R.M. Kishore",
    role: "Patron",
    img: kishore,
    intro: "Vice-Chairman promoting innovation and development."
  },
  {
    name: "Shri. Yalamanchi Pradeep",
    role: "Patron",
    img: yalamanchi,
    intro: "Secretary"
  },
  {
    name: "Dr. Durgadevi Pradeep",
    role: "Patron",
    img: durgadevi,
    intro: "Vice-Chairperson"
  },
  {
    name: "Smt. Sowmya Kishore",
    role: "Patron",
    img: sowmya,
    intro: "Management Trustee"
  },
  {
    name: "Dr. M. S. Palanichamy",
    role: "Advisor",
    img: palani,
    intro: "Advisor"
  },
  {
    name: "Shri. T. Pitchandi I.A.S",
    role: "Advisor",
    img: pitchandi,
    intro: "Advisor"
  },
  {
    name: "Shri. V. Manoharan",
    role: "Advisor",
    img: mono,
    intro: "Advisor"
  },
  {
    name: "Dr. K. A. Mohamed Junaid",
    role: "Advisor",
    img: junaid,
    intro: "Principal leading academic and research excellence."
  },
  {
    name: "Dr. S. Pavai Madheshwari",
    role: "Advisor",
    img: pavai,
    intro: "Academic Coordinator"
  },
  {
    name: "Dr. K. K. Sivagnana Prabhu",
    role: "Advisor",
    img: siva,
    intro: "Dean - CDC"
  },
  {
    name: "Dr. K. Manivannan",
    role: "Advisor",
    img: mani,
    intro: "Dean - EA"
  },
  
  {
    name: "Dr. Elwin Chandra Monie",
    role: "Advisor",
    img: elwin,
    intro: "Dean – Research driving research collaborations and innovation."
  }
]

const roles = ["All", "Chief Patron", "Patron", "Advisor"]

export default function Committees() {
  const [filter, setFilter] = useState("All")

  const filtered =
    filter === "All" ? members : members.filter(m => m.role === filter)

  const MemberCard = ({ member }: any) => (
    <Card className="p-6 text-center rounded-2xl hover:shadow-xl transition">
      <div className="flex justify-center mb-4">
        <img
          src={member.img}
          alt={member.name}
          className="w-40 h-40 rounded-full object-cover"
        />
      </div>

      <h3 className="font-bold text-lg text-primary">{member.name}</h3>
      <p className="text-sm font-medium text-gray-600">{member.role}</p>
      <p className="text-sm text-muted-foreground mt-2">{member.intro}</p>
    </Card>
  )

  return (
    <div className="bg-slate-50 pt-24 pb-20">

      <section className="container mx-auto px-6">

        <SectionHeader
          title="Committee Members"
          subtitle="Leadership & Advisory Team"
        />

        {/* 🔥 FILTER BAR FIRST */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {roles.map(r => (
            <button
              key={r}
              onClick={() => setFilter(r)}
              className={`px-6 py-2 rounded-full border font-medium transition ${
                filter === r
                  ? "bg-primary text-white"
                  : "bg-white hover:bg-slate-100"
              }`}
            >
              {r}
            </button>
          ))}
        </div>

        {/* 🔥 MEMBERS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map(m => (
            <MemberCard key={m.name} member={m} />
          ))}
        </div>
        {/* ================= INTERNATIONAL & NATIONAL COMMITTEES ================= */}
<section className="mt-24 bg-white rounded-3xl shadow-lg p-10">

  <SectionHeader
    title="International & National Committee Members"
    subtitle="Expert Panel and Academic Advisors"
  />

  <div className="grid md:grid-cols-2 gap-12">

    {/* ===== International ===== */}
    <div>
      <h3 className="text-xl font-bold text-primary mb-6">
        International Committee Members
      </h3>

      <ul className="space-y-4 text-sm text-gray-700">
        <li><b>Dr. Naresh Chand</b> — Life Fellow IEEE, Associate Vice President, Chapter Relations, IEEE Photonics Society, USA</li>
        <li><b>Dr. San Murugesan</b> — Director, BRITE Professional Services, Adjunct Professor, Western Sydney University, Australia</li>
        <li><b>Dr. Ahmad Asari Sulaiman</b> — Professor, Universiti Teknologi MARA (UiTM), Malaysia</li>
        <li><b>Dr. Celestine Iwendi</b> — Fellow Higher Education Academy, UK</li>
        <li><b>Dr. Krishnadas Nanath</b> — Associate Professor in Data Science, Middlesex University, Dubai</li>
        <li><b>Dr. Ashish Seth</b> — Professor, INHA University, South Korea</li>
        <li><b>Dr. Mohammad T. Khasawneh</b> — Professor, Systems Science & Industrial Engineering, USA</li>
        <li><b>Dr. Yong Wang</b> — Assistant Professor, Thomas J. Watson College, USA</li>
      </ul>
    </div>

    {/* ===== National ===== */}
    <div>
      <h3 className="text-xl font-bold text-primary mb-6">
        National Committee Members
      </h3>

      <ul className="space-y-4 text-sm text-gray-700">
        <li><b>Dr. P. Sakthivel</b> — Chairman, IEEE Madras Section</li>
        <li><b>Dr. S. Radha</b> — Secretary, IEEE Madras Section</li>
        <li><b>Dr. S. Brindha</b> — Treasurer, IEEE Madras Section</li>
        <li><b>Dr. V. Nagarajan</b> — Conference Committee Member</li>
        <li><b>Dr. N. Venkateswaran</b> — Professor, Dept. of ECE, Chennai</li>
        <li><b>Dr. S. Raghavan</b> — Professor (HAG), NIT Trichy</li>
        <li><b>Dr. Surajith Debnath</b> — HoD, Women's Polytechnic, Tripura</li>
        <li><b>Dr. D. Sriram Kumar</b> — Professor, Dept. of ECE, NIT Trichy</li>
        <li><b>Dr. Srinivas Talabattula</b> — Associate Professor, IISc Bangalore</li>
        <li><b>Dr. Hrishikesh Venkataraman</b> — Associate Professor, IIIT Sri City</li>
        <li><b>Dr. M.D. Selvaraj</b> — Associate Professor, IIITDM Kancheepuram</li>
        <li><b>Dr. J. Klutto Milleth</b> — Chief Technologist, CEWIT Chennai</li>
      </ul>
    </div>

  </div>
</section>


      </section>
    </div>
  )
}
