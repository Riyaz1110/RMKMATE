import { SectionHeader } from "@/components/SectionHeader"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Upload, ShieldCheck, FileText } from "lucide-react"

export default function PaperSubmission() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 pt-24 pb-24">

      <div className="container mx-auto px-6 max-w-6xl space-y-24">

        <SectionHeader
          title="Manuscript Submission"
          subtitle="Submit your original research contributions"
        />

        {/* ================= HERO / INTRO ================= */}
        <Card className="p-12 rounded-3xl shadow-2xl border-0 bg-white/90 backdrop-blur-lg text-center">
          <FileText className="w-14 h-14 mx-auto text-primary mb-6" />
          <p className="text-lg leading-relaxed text-muted-foreground max-w-4xl mx-auto">
            RMKMATE invites Academicians, Researchers, Industrialists and Students to submit their
            novel, previously unpublished and high-quality research papers. All submissions will be
            double-blind peer reviewed and evaluated based on research novelty, correctness,
            technical contribution and clarity.
          </p>
        </Card>

        {/* ================= IMPORTANT DATES ================= */}
        <section>
          <h3 className="text-2xl font-bold text-primary mb-10 flex items-center gap-3">
            <Calendar /> Important Dates
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { label: "Full Paper Submission", date: "01.02.2026" },
              { label: "Notification of Acceptance", date: "31.03.2026" },
              { label: "Final Paper Submission", date: "10.04.2026" },
            ].map((d) => (
              <Card
                key={d.label}
                className="text-center p-10 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 bg-white"
              >
                <p className="text-sm uppercase tracking-wider text-muted-foreground mb-3">
                  {d.label}
                </p>
                <p className="text-3xl font-bold text-primary">{d.date}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* ================= SUBMISSION PORTAL ================= */}
<section>
  <Card className="relative overflow-hidden p-14 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-2xl text-center">

    {/* 🔥 FIX: add pointer-events-none */}
    <div className="absolute inset-0 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />

    <Upload className="w-16 h-16 mx-auto mb-6" />

    <h3 className="text-4xl font-bold mb-5">Submit Your Paper</h3>

    <p className="opacity-90 mb-10 max-w-2xl mx-auto text-lg">
      All submissions are handled through the Microsoft CMT portal for managing the peer-review process.
    </p>

    <a
      href="https://cmt3.research.microsoft.com/RMKMATE2026"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block"
    >
      <button className="px-12 py-4 text-lg font-bold bg-white text-black rounded-xl shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300">
        Submit via Microsoft CMT
      </button>
    </a>

  </Card>
</section>


        {/* ================= REGISTRATION FEE ================= */}
        <section>
          <h3 className="text-2xl font-bold text-primary mb-10">Registration Fee</h3>

          <div className="grid md:grid-cols-2 gap-10">

            <Card className="p-10 rounded-3xl shadow-lg hover:shadow-xl transition">
              <h4 className="font-bold text-lg mb-5 text-primary">Indian Delegates</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>IEEE Member – INR 9000</li>
                <li>Non IEEE Member – INR 10000</li>
              </ul>
            </Card>

            <Card className="p-10 rounded-3xl shadow-lg hover:shadow-xl transition">
              <h4 className="font-bold text-lg mb-5 text-primary">Foreign Delegates</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>IEEE Member – USD 150</li>
                <li>Non IEEE Member – USD 175</li>
              </ul>
            </Card>

          </div>
        </section>

        {/* ================= GENERAL INFORMATION ================= */}
        <section>
          <h3 className="text-2xl font-bold text-primary mb-10">General Information</h3>

          <Card className="p-10 rounded-3xl shadow-lg bg-white">
            <ul className="space-y-3 text-muted-foreground list-disc ml-6">
              <li>Maximum paper length: 5 pages</li>
              <li>Format strictly as per conference template</li>
              <li>All papers must be in English</li>
              <li>Peer reviewed by experts based on significance, novelty and clarity</li>
              <li>Final submission only after acceptance and registration</li>
            </ul>
          </Card>
        </section>

        {/* ================= PLAGIARISM POLICY ================= */}
        <section>
          <h3 className="text-2xl font-bold text-primary mb-10 flex items-center gap-3">
            <ShieldCheck /> Plagiarism Policy
          </h3>

          <Card className="p-10 rounded-3xl border border-red-200 bg-red-50 shadow-lg">
            <ul className="space-y-3 text-red-700 list-disc ml-6">
              <li>Plagiarism check mandatory before submission</li>
              <li>Similarity index must not exceed 5%</li>
              <li>Proper citation required for all borrowed materials</li>
              <li>Copyright permission must be obtained where necessary</li>
            </ul>
          </Card>
        </section>

        {/* ================= AUTHOR ETHICS ================= */}
        <section>
          <h3 className="text-2xl font-bold text-primary mb-10">Author Ethics</h3>

          <Card className="p-10 rounded-3xl shadow-lg space-y-3">
            <a href="https://conferences.ieeeauthorcenter.ieee.org/author-ethics/ethical-requirements" target="_blank" className="text-primary underline block">IEEE Author Ethics</a>
            <a href="https://www.ieee.org/publications/rights/plagiarism/plagiarism.html" target="_blank" className="text-primary underline block">IEEE Plagiarism Policy</a>
            <a href="https://www.ieee.org/publications/rights/multi-sub-guidelines-intro.html" target="_blank" className="text-primary underline block">IEEE Double Submission Policy</a>
            <a href="https://www.ieee.org/conferences/publishing/templates.html" target="_blank" className="text-primary underline block">IEEE Paper Template</a>
          </Card>
        </section>

      </div>
    </div>
  )
}
