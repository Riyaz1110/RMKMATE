import { SectionHeader } from "@/components/SectionHeader"
import rmk1 from "@/assets/rmk1.png"
import cheif from "@/assets/cheif2.png"
import yr from "@/assets/add2.png"
export default function AboutRMKEC() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-20">

      <div className="container mx-auto px-6">

        <SectionHeader
          title="About R.M.K. Engineering College"
          subtitle="Excellence in Engineering Education Since 1995"
        />

        <div className="mt-12 grid md:grid-cols-2 gap-10 items-center">
          <img
            src={rmk1}
            className="rounded-2xl shadow-xl w-full h-[420px] object-cover"
          />

          <div className="text-muted-foreground space-y-5 leading-relaxed text-lg">
            <p>
              Established in 1995, <b>R.M.K. Engineering College</b> is one of the premier
              institutions affiliated to Anna University, Chennai. The college is accredited
              by NAAC with <b>A+ Grade</b> and NBA for several programs.
            </p>

            <p>
              The institution provides world-class infrastructure, well-equipped laboratories,
              and modern research centers. Centers of Excellence in <b>Artificial Intelligence,
              Big Data, Cloud Computing, and Information Security</b> foster innovation and
              industry collaboration.
            </p>

            <p>
              With outstanding placement records and strong discipline, RMK nurtures students
              into skilled professionals and responsible citizens with integrity and character.
            </p>
          </div>
        </div>


        <div className="mt-24">
          <SectionHeader
            title="Founder & Chairman"
            subtitle="Thiru. R.S. Munirathinam"
          />

          <div className="grid md:grid-cols-2 gap-10 items-center mt-10">

            <img
              src={cheif}
              className="rounded-2xl shadow-xl w-full h-[450px] object-cover"
            />

            <div className="text-muted-foreground space-y-4 leading-relaxed">
              <p>
                Thiru. R.S. Munirathinam is a visionary leader, philanthropist and a dedicated
                educationist committed to uplifting rural communities through quality education.
              </p>

              <p>
                A former Member of the Tamil Nadu State Assembly, he played a key role in
                establishing SIPCOT, Industrial Estate and the Institute of Road Transport at
                Gummidipoondi. His leadership has transformed RMK into a center of excellence.
              </p>

              <p>
                He has received numerous honors including the <b>Vidya Ratna Award</b>,
                <b> Lifetime Achievement Award (2022)</b>, Thailand–Tamil Nadu Friendship Award,
                and an <b>Honorary Doctorate</b> for his decades of contribution to education.
              </p>
            </div>
          </div>
        </div>


        <div className="mt-24 bg-blue-50 rounded-3xl p-10 shadow-lg">
          <SectionHeader
            title="Chairman's Message"
            subtitle="A Home Away From Home"
          />

          <p className="text-muted-foreground mt-8 leading-relaxed text-lg">
            Dear Students, welcome to RMK Engineering College. Your journey from school to
            college marks the beginning of a remarkable chapter in life. At RMK, we are committed
            to guiding you every step of the way — academically, personally, and professionally.
            Our faculty and management work together to nurture your talents and help you grow
            into confident individuals ready to serve society.
            <br /><br />
            You will not just graduate with a degree, but with values, discipline, and the
            skills required to succeed in life. This is your home away from home.
            <br /><br />
            <b>— Thiru. R.S. Munirathinam, Chairman</b>
          </p>
        </div>


        <div className="mt-24">
          <SectionHeader
            title="Our Management Team"
            subtitle="Guiding the Vision of Excellence"
          />

          <div className="grid md:grid-cols-3 gap-8 mt-12">

            {[
              {
                name: "Shri. R.M. Kishore",
                role: "Vice Chairman",
                desc: "Mechanical Engineer and MBA with vast experience in education and infrastructure development."
              },
              {
                name: "Tmt. Manjula Munirathinam",
                role: "Chairperson",
                desc: "A dedicated social worker actively involved in women empowerment and education."
              },
              {
                name: "Thiru. Yalamanchi Pradeep",
                role: "Secretary",
                desc: "Information Systems expert and entrepreneur with global industry experience."
              },
              {
                name: "Dr. Durga Devi Pradeep",
                role: "Vice Chairperson",
                desc: "Ph.D. in Management with expertise in academic leadership and development."
              },
              {
                name: "Tmt. Sowmya Kishore",
                role: "Trustee",
                desc: "Psychology and counselling specialist focused on student well-being."
              },
            ].map((person, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
                <h3 className="font-semibold text-lg">{person.name}</h3>
                <p className="text-blue-600 text-sm mb-2">{person.role}</p>
                <p className="text-muted-foreground text-sm">{person.desc}</p>
              </div>
            ))}

          </div>
        </div>


        <div className="mt-24 text-center">
          <SectionHeader
            title="30 Years of Excellence"
            subtitle="8 Institutions • One Vision • Infinite Opportunities"
          />

          <img
            src={yr}
            className="rounded-2xl shadow-xl mx-auto w-full md:w-4/5 h-[400px] object-cover mt-10"
          />

          <p className="text-muted-foreground mt-8 max-w-3xl mx-auto leading-relaxed">
            For three decades, RMK has continuously adapted to modern technologies and evolving
            industry needs. With highly qualified faculty, optimal student-faculty ratios and
            strong industry partnerships, we create an engaging and transformative learning
            environment for every student.
          </p>
        </div>

      </div>
    </div>
  )
}
