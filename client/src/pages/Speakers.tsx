import { SectionHeader } from "@/components/SectionHeader"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

/* ========= IMPORT IMAGES ========= */

import peer from "@/assets/peer.png"
import ribas from "@/assets/ribas.png"
import han from "@/assets/han.png"

import kendall from "@/assets/kendall.png"
import yoon from "@/assets/yoon.png"
import gokila from "@/assets/gokila.png"

import happo from "@/assets/happo.png"
import pek from "@/assets/pek.png"
import daniel from "@/assets/daniel.png"

/* ================================= */

const speakers = [
  {
    name: "Prof. Dr. Peter Peer",
    role: "Executive Editor – ICT Express",
    affiliation: "University of Ljubljana, Slovenia",
    image: peer,
    bio: "Head of the Computer Vision Laboratory with extensive research contributions in AI and Image Processing."
  },
  {
    name: "Prof. Guillem Alenya Ribas",
    role: "Director",
    affiliation: "Institut de Robòtica i Informàtica Industrial, Spain",
    image: ribas,
    bio: "Joint centre of the Spanish Scientific Research Council (CSIC) and Polytechnic University of Catalonia."
  },
  {
    name: "Prof. Dong Seog HAN",
    role: "Co-Editor-in-Chief – ICT Express",
    affiliation: "Kyungpook National University, South Korea",
    image: han,
    bio: "Head of Intelligent Signal Processing Laboratory and expert in communication systems."
  },
  {
    name: "Professor Dr. Graham Kendall",
    role: "Former Editor-in-Chief – IEEE Transactions",
    affiliation: "Malaysia",
    image: kendall,
    bio: "Research leader in computational intelligence and AI applications."
  },
  {
    name: "Prof. Sangwon Yoon",
    role: "Professor",
    affiliation: "State University of New York, USA",
    image: yoon,
    bio: "Department of Systems & Industrial Engineering with strong academic research portfolio."
  },
  {
    name: "Dr. Gokila Durai",
    role: "Associate Professor",
    affiliation: "Augusta University, USA",
    image: gokila,
    bio: "Expert in Computer & Cyber Sciences and emerging technologies."
  },
  {
    name: "Dr. Ari Happonen",
    role: "Associate Professor",
    affiliation: "LUT University, Finland",
    image: happo,
    bio: "Researcher in digital transformation and industrial engineering."
  },
  {
    name: "Dr PEK Chuen Khee",
    role: "Head of School – Management & Marketing",
    affiliation: "Taylor’s University, Malaysia",
    image: pek,
    bio: "Academic leader with focus on management and business technologies."
  },
  {
    name: "Dr. Daniel Chandran",
    role: "Professor",
    affiliation: "University of Technology Sydney, Australia",
    image: daniel,
    bio: "Faculty of Engineering and leadership in systems and management research."
  }
]

export default function Speakers() {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20">

      <div className="container mx-auto px-6">

        <SectionHeader
          title="Keynote Speakers"
          subtitle="Distinguished International Experts"
        />

        <div className="space-y-10 max-w-6xl mx-auto">

          {speakers.map((sp) => (
            <Card
              key={sp.name}
              className="
              relative overflow-hidden
              rounded-3xl
              bg-white
              border border-slate-200
              shadow-lg
              hover:shadow-2xl
              hover:-translate-y-1
              transition-all duration-300
              group
            "
            >

              <div className="flex flex-col md:flex-row">

                {/* IMAGE LEFT */}
                <div className="md:w-72 w-full overflow-hidden">
                <img
                  src={sp.image}
                  alt={sp.name}
                  className="w-full h-full object-cover min-h-[260px] group-hover:scale-105 transition duration-500"
                />
              </div>


                {/* CONTENT RIGHT */}
                <div className="flex-1 p-8 md:p-10 flex flex-col justify-center">

                  <Badge className="mb-4 bg-primary/10 text-primary w-fit">
                    Keynote Speaker
                  </Badge>

                  <h3 className="text-3xl font-bold text-slate-900 mb-1">
                    {sp.name}
                  </h3>

                  <p className="text-lg font-semibold text-primary">
                    {sp.role}
                  </p>

                  <p className="text-muted-foreground italic mb-4">
                    {sp.affiliation}
                  </p>

                  <div className="w-14 h-1 bg-primary rounded mb-4" />

                  <p className="text-muted-foreground leading-relaxed">
                    {sp.bio}
                  </p>
                </div>

              </div>
            </Card>
          ))}

        </div>

      </div>
    </div>
  )
}
