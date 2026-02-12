import { Link } from "wouter";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="h-8 w-8 bg-primary rounded flex items-center justify-center text-white font-bold">
                R
              </div>
              <span className="font-display font-bold text-xl text-white">RMKMATE2026</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 mb-6">
              RMKMATE is an international academic conference dedicated to advancing research, innovation, and collaboration in the fields of Artificial Intelligence (AI), Knowledge Management, Intelligent Systems, and Telecommunication Engineering.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-white text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about-rmkec" className="hover:text-primary transition-colors">About RMKEC</Link>
              </li>
              <li>
                <Link href="/committees" className="hover:text-primary transition-colors">Organizing Committee</Link>
              </li>
              <li>
                <Link href="/speakers" className="hover:text-primary transition-colors">Keynote Speakers</Link>
              </li>
              <li>
                <Link href="/schedule" className="hover:text-primary transition-colors">Conference Schedule</Link>
              </li>
              <li>
                <Link href="/papers" className="hover:text-primary transition-colors">Paper Submission</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-white text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary mt-0.5 shrink-0" size={18} />
                <span>
                  R.M.K. Engineering College,<br />
                  RSM Nagar, Kavaraipettai,<br />
                  Gummidipoondi Taluk,<br />
                  Thiruvallur District,<br />
                  Tamil Nadu, India.
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="text-primary shrink-0 mt-1" size={18} />

                <div className="flex flex-col">
                  <span>044 – 6790 6790</span>
                  <span>Fax: 044 – 6790 6791</span>
                </div>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="text-primary shrink-0" size={18} />
                <span>rmkmate@rmkec.ac.in</span>
              </li>
            </ul>
          </div>

          {/* Important Dates */}
          <div>
            <h3 className="font-display font-semibold text-white text-lg mb-6">Important Dates</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex justify-between items-center border-b border-white/10 pb-2">
                <span className="text-slate-400">Full Paper Submission</span>
                <span className="font-medium text-white">Feb 1, 2026</span>
              </li>
              <li className="flex justify-between items-center border-b border-white/10 pb-2">
                <span className="text-slate-400">Acceptance Notification</span>
                <span className="font-medium text-white">Mar 31, 2026</span>
              </li>
              <li className="flex justify-between items-center border-b border-white/10 pb-2">
                <span className="text-slate-400">Final Paper Submission</span>
                <span className="font-medium text-white">Apr 4, 2025</span>
              </li>
              <li className="flex justify-between items-center border-b border-white/10 pb-2">
                <span className="text-slate-400">Conference Date</span>
                <span className="text-primary font-bold">Apr 15-16, 2026</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© 2026 RMKMATE2026. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}