import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, FileText, CheckCircle } from "lucide-react";

export default function PaperSubmission() {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader title="Paper Submission" subtitle="Call For Papers" />

        <div className="max-w-5xl mx-auto space-y-12">
          {/* Instructions */}
          <Card className="p-8 border-none shadow-lg">
            <h3 className="font-display font-bold text-2xl mb-6">Submission Guidelines</h3>
            <div className="prose prose-slate max-w-none text-muted-foreground">
              <p className="mb-4">
                Authors are invited to submit full papers describing original research work in areas of Cyber Physical Systems, IoT, AI, and related technologies. Papers must be formatted according to the IEEE conference template.
              </p>
              <ul className="space-y-2 list-none pl-0">
                {[
                  "Papers must be written in English.",
                  "Paper length should be between 4 to 6 pages.",
                  "Simultaneous submissions to other conferences are not allowed.",
                  "All papers will undergo a double-blind peer review process."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button className="gap-2">
                <Download size={18} />
                Download IEEE Template (Word)
              </Button>
              <Button variant="outline" className="gap-2">
                <Download size={18} />
                Download IEEE Template (LaTeX)
              </Button>
            </div>
          </Card>

          {/* Submission Portal */}
          <div className="bg-primary text-primary-foreground rounded-2xl p-10 text-center relative overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="relative z-10">
              <FileText className="w-16 h-16 mx-auto mb-4 opacity-90" />
              <h3 className="font-display font-bold text-3xl mb-4">Ready to Submit?</h3>
              <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                All submissions are handled through the EasyChair conference management system. Please create an account or log in to submit your paper.
              </p>
              <Button size="lg" variant="secondary" className="font-bold h-14 px-8 text-lg">
                Submit via EasyChair
              </Button>
            </div>
          </div>

          {/* Important Dates */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Paper Submission", date: "Oct 15, 2025" },
              { label: "Notification", date: "Nov 20, 2025" },
              { label: "Camera Ready", date: "Dec 05, 2025" },
              { label: "Registration", date: "Dec 10, 2025" },
            ].map((item, i) => (
              <Card key={i} className="p-6 text-center hover:border-primary transition-colors cursor-default">
                <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold mb-2">{item.label}</p>
                <p className="text-xl font-bold text-primary">{item.date}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
