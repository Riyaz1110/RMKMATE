import { motion } from "framer-motion";
import { ArrowRight, Calendar, MapPin, Users, Award, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { SectionHeader } from "@/components/SectionHeader";
import heroImage from "@/assets/rmkbanner.png";
import poster from "@/assets/backgroundpo.png"
// Placeholder for banner since the uploaded one might not fit perfectly everywhere
const bgPattern = "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen">
        <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden">

        {/* Background
        <div className="absolute inset-0">
          <img
            src={poster}
            alt="Conference Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/80 to-slate-900/95" />
        </div> */}
        {/* Background
<div className="absolute inset-0">
  <img
    src={poster}
    alt="Conference Background"
    className="w-full h-full object-cover"
  />

  <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/30 to-slate-900/50" />
</div> */}
{/* Background */}
<div className="absolute inset-0">
  <img
    src={poster}
    alt="Conference Background"
    className="w-full h-full object-cover"
  />

  {/* Better contrast overlay */}
  <div className="absolute inset-0 bg-black/55 backdrop-blur-[2px]" />
</div>



        {/* Content */}
        <div className="relative z-10 w-full text-center px-6">
          
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white border border-white/20 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Registrations Open for 2026
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight text-center">
            RMKMATE<span className="text-primary ml-1">2026</span>
          </h1>

          <p className="text-2xl md:text-3xl text-slate-200 font-light max-w-4xl mx-auto leading-relaxed">
            International Conference on <br />
            <span className="font-semibold text-primary">
              Research Methodologies in Knowledge Management,
              Artificial Intelligence & Telecommunication Engineering
            </span>
          </p>

          <div className="flex flex-wrap justify-center gap-8 mt-8 text-white/80 text-lg">
            <div className="flex items-center gap-2">
              <Calendar className="text-primary" />
              15–16 April 2026
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="text-primary" />
              R.M.K. Engineering College, Chennai
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-10">
  
  <Link href="/paper-submission">
    <Button
      size="lg"
      className="rounded-full px-10 h-14 text-lg shadow-lg"
    >
      Submit Paper
    </Button>
  </Link>

  <Link href="/schedule">
    <Button
      size="lg"
      variant="outline"
      className="rounded-full px-10 h-14 text-lg bg-transparent border-white text-white hover:bg-white/10"
    >
      View Schedule
    </Button>
  </Link>

</div>

        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/5 rounded-3xl -z-10 rotate-3" />
              <img 
                src={heroImage} 
                alt="Conference Banner" 
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
              {/* <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-xl border border-slate-100 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <Users size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Expected Attendees</p>
                    <p className="text-2xl font-bold text-slate-900">500+</p>
                  </div>
                </div>
              </div> */}
            </div>
            
            <div>
              <SectionHeader 
                title="About The Conference" 
                subtitle="RMKMATE2026" 
                align="left" 
                className="mb-6"
              />
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                RMKMATE is an international academic conference focused on advancing research and innovation in Artificial Intelligence (AI), Knowledge Management, Intelligent Systems, and Telecommunication Engineering.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                It serves as a platform for researchers, academicians, industry professionals, and students to present novel, unpublished research contributions addressing modern technological challenges and real-world applications.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: FileText, title: "Paper Publication", desc: "Selected papers will be published in IEEE Journals" },
                  { icon: Award, title: "Best Paper Awards", desc: "Recognition for outstanding research contributions" },
                ].map((feature, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-xl border hover:border-primary/30 hover:bg-primary/5 transition-colors">
                    <feature.icon className="w-10 h-10 text-primary shrink-0" />
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-20 bg-slate-50">
  <div className="container mx-auto px-4 md:px-6">
    <SectionHeader title="Conference Tracks" subtitle="Call for Papers" />

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

      {/* Track 1 */}
      <div className="bg-white p-8 rounded-2xl shadow-md border hover:shadow-xl transition-all">
        <h3 className="text-2xl font-bold text-primary mb-6">Track – 1</h3>
        <ul className="space-y-2 text-sm text-gray-700 list-disc list-inside">
          <li>Soft Computing</li>
          <li>Quantum Computing</li>
          <li>Artificial Neural Networks</li>
          <li>Fuzzy Logic</li>
          <li>Cloud Computing</li>
          <li>Secure Computing in IoT</li>
          <li>Intelligent E-Learning Systems</li>
          <li>Smart Computing</li>
          <li>Big Data Analytics</li>
          <li>Networks and Cyber Security</li>
          <li>Smart Parallel and Distributed Algorithms</li>
          <li>Smart Mobile Communications and Networks</li>
          <li>Cyber-Physical Systems Platform</li>
          <li>Information Security</li>
        </ul>
      </div>

      {/* Track 2 */}
      <div className="bg-white p-8 rounded-2xl shadow-md border hover:shadow-xl transition-all">
        <h3 className="text-2xl font-bold text-primary mb-6">Track – 2</h3>
        <ul className="space-y-2 text-sm text-gray-700 list-disc list-inside">
          <li>Grid Computing</li>
          <li>Wireless Sensor Networks</li>
          <li>Smart Cities</li>
          <li>Bioinformatics and Systems Biology</li>
          <li>Data Mining and Clustering</li>
          <li>Genetic Programming</li>
          <li>Control Systems and Networks</li>
          <li>Robotic Simulated Annealing</li>
          <li>Wireless Communication</li>
          <li>Optical Communication</li>
          <li>Network Applications & Services</li>
          <li>Satellite and Space Communications</li>
          <li>Technologies for E-Communication</li>
          <li>Communications and Information Security</li>
        </ul>
      </div>

      {/* Track 3 */}
      <div className="bg-white p-8 rounded-2xl shadow-md border hover:shadow-xl transition-all">
        <h3 className="text-2xl font-bold text-primary mb-6">Track – 3</h3>
        <ul className="space-y-2 text-sm text-gray-700 list-disc list-inside">
          <li>Signal Processing for Communications</li>
          <li>RF and Wireless Communications</li>
          <li>FPGA & VLSI Technologies</li>
          <li>Digital and Analog Communications</li>
          <li>MIC, MMIC, MEMS/NEMS Devices</li>
          <li>GPS and Remote Sensing</li>
          <li>Laser Communication Networks</li>
          <li>Satellite and Radar Communication</li>
          <li>Robotics and Automation</li>
          <li>Home Automation</li>
          <li>Control Systems and Applications</li>
          <li>Power System</li>
          <li>Reconfigurable Computing Systems</li>
        </ul>
      </div>

    </div>

    <div className="mt-12 text-center">
      <Link href="/papers">
        <Button size="lg" className="bg-primary text-white hover:opacity-90">
          View Submission Guidelines
        </Button>
      </Link>
    </div>
  </div>
</section>


      {/* CTA Section */}
      
<section className="py-24 bg-primary relative overflow-hidden">
  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
  <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
    <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">
      Ready to Participate?
    </h2>
    <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10">
      Join us at RMKMATE2026 for two days of inspiring talks, networking, and knowledge sharing.
    </p>

    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      
      {/* ✅ Updated Register Now Button */}
      <Link href="/contact">
        <Button
          size="lg"
          variant="secondary"
          className="font-bold h-14 px-8 text-lg"
        >
          Register Now
        </Button>
      </Link>

      <Link href="/contact">
        <Button
          size="lg"
          variant="outline"
          className="bg-transparent border-white/30 text-white hover:bg-white/10 h-14 px-8 text-lg"
        >
          Contact Organizers
        </Button>
      </Link>

    </div>
  </div>
</section>

    </div>
  );
}
// import { motion } from "framer-motion";
// import { Calendar, MapPin, Users, Award, FileText } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Link } from "wouter";
// import { SectionHeader } from "@/components/SectionHeader";
// import heroImage from "@assets/rmkbanner.png";
// import poster from "@assets/backgroundpo.png";

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-white">
//       {/* ================= HERO SECTION ================= */}
// <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden">

//   {/* Background */}
//   <div className="absolute inset-0">
//     <img
//       src={poster}
//       alt="Conference Background"
//       className="w-full h-full object-cover"
//     />
//     <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/80 to-slate-900/95" />
//   </div>

//   {/* Centered Content */}
//   <div className="relative z-10 w-full text-center px-6">

//     <div className="flex justify-center mb-6">
//       <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white border border-white/20 backdrop-blur-md">
//         <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
//         Registrations Open for 2026
//       </div>
//     </div>

//     <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
//       RMKMATE<span className="text-primary">2026</span>
//     </h1>

//     <p className="text-2xl md:text-3xl text-slate-200 font-light max-w-4xl mx-auto leading-relaxed">
//       International Conference on <br />
//       <span className="font-semibold text-primary">
//         Research Methodologies in Knowledge Management,
//         Artificial Intelligence & Telecommunication Engineering
//       </span>
//     </p>

//     <div className="flex flex-wrap justify-center gap-8 mt-8 text-white/80 text-lg">
//       <div className="flex items-center gap-2">
//         <Calendar className="text-primary" />
//         15–16 April 2026
//       </div>
//       <div className="flex items-center gap-2">
//         <MapPin className="text-primary" />
//         R.M.K. Engineering College, Chennai
//       </div>
//     </div>

//     <div className="flex flex-col sm:flex-row gap-6 justify-center mt-10">
//       <Button size="lg" className="rounded-full px-10 h-14 text-lg shadow-lg">
//         Submit Paper
//       </Button>

//       <Link href="/schedule">
//         <Button
//           size="lg"
//           variant="outline"
//           className="rounded-full px-10 h-14 text-lg bg-transparent border-white text-white hover:bg-white/10"
//         >
//           View Schedule
//         </Button>
//       </Link>
//     </div>

//   </div>
// </section>


//       {/* ================= ABOUT SECTION ================= */}
//       <section className="py-24">
//         <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          
//           <img
//             src={heroImage}
//             className="rounded-3xl shadow-2xl object-cover"
//           />

//           <div>
//             <SectionHeader
//               title="About The Conference"
//               subtitle="RMKMATE2026"
//               align="left"
//             />

//             <p className="text-lg text-muted-foreground leading-relaxed mt-6">
//               RMKMATE2026 is an international academic conference focused on
//               advancing research in Artificial Intelligence, Knowledge
//               Management, Intelligent Systems, and Telecommunication
//               Engineering.
//             </p>

//             <p className="mt-4 text-muted-foreground leading-relaxed">
//               It provides a global platform for researchers, academicians,
//               industry professionals, and students to present innovative,
//               unpublished research addressing real-world technological
//               challenges.
//             </p>

//             <div className="grid sm:grid-cols-2 gap-6 mt-8">
//               <div className="flex gap-4 p-5 border rounded-xl hover:bg-primary/5 transition">
//                 <FileText className="text-primary w-8 h-8" />
//                 <div>
//                   <h4 className="font-semibold">IEEE Publication</h4>
//                   <p className="text-sm text-muted-foreground">
//                     Selected papers will be submitted to IEEE Xplore.
//                   </p>
//                 </div>
//               </div>

//               <div className="flex gap-4 p-5 border rounded-xl hover:bg-primary/5 transition">
//                 <Award className="text-primary w-8 h-8" />
//                 <div>
//                   <h4 className="font-semibold">Best Paper Awards</h4>
//                   <p className="text-sm text-muted-foreground">
//                     Recognizing outstanding research excellence.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ================= PUBLICATION PARTNERS ================= */}
//       <section className="py-20 bg-slate-50 text-center">
//         <SectionHeader title="Publication & Sponsors" subtitle="Partners" />
        
//         <div className="mt-12 flex flex-wrap justify-center items-center gap-16 opacity-80">
//           <img src="/scopus.png" className="h-12" />
//           <img src="/springer.png" className="h-12" />
//           <img src="/ieee.png" className="h-12" />
//           <img src="/dst.png" className="h-12" />
//         </div>
//       </section>

//       {/* ================= TRACKS ================= */}
//       <section className="py-24">
//         <div className="container mx-auto px-6">
//           <SectionHeader title="Conference Tracks" subtitle="Call for Papers" />

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
//             {["Track 1", "Track 2", "Track 3"].map((track, i) => (
//               <div
//                 key={i}
//                 className="p-8 rounded-2xl border shadow-sm hover:shadow-xl transition"
//               >
//                 <h3 className="text-2xl font-bold text-primary mb-4">
//                   {track}
//                 </h3>
//                 <p className="text-muted-foreground text-sm leading-relaxed">
//                   Advanced Computing, AI, Intelligent Systems,
//                   Telecommunication Networks, Cyber Security, Signal
//                   Processing, Smart Systems and more.
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ================= CTA ================= */}
//       <section className="py-24 bg-primary text-center text-white">
//         <h2 className="text-4xl md:text-5xl font-bold mb-6">
//           Join RMKMATE2026
//         </h2>
//         <p className="text-lg opacity-80 max-w-2xl mx-auto">
//           Be part of an inspiring platform connecting academia and industry
//           for impactful research collaboration.
//         </p>

//         <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center">
//           <Button size="lg" variant="secondary" className="h-14 px-10 text-lg">
//             Register Now
//           </Button>
//           <Link href="/contact">
//             <Button
//               size="lg"
//               variant="outline"
//               className="h-14 px-10 text-lg border-white text-white hover:bg-white/10"
//             >
//               Contact Organizers
//             </Button>
//           </Link>
//         </div>
//       </section>
//     </div>
//   );
// }
// import { motion } from "framer-motion";
// import { Calendar, MapPin, Award, FileText } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Link } from "wouter";
// import { SectionHeader } from "@/components/SectionHeader";
// import heroImage from "@assets/rmkbanner.png";
// import poster from "@assets/backgroundpo.png";

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-white">
      
//       {/* ================= HERO SECTION ================= */}
//       <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden">

//         {/* Background */}
//         <div className="absolute inset-0">
//           <img
//             src={poster}
//             alt="Conference Background"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/80 to-slate-900/95" />
//         </div>

//         {/* Content */}
//         <div className="relative z-10 w-full text-center px-6">
          
//           <div className="flex justify-center mb-6">
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white border border-white/20 backdrop-blur-md">
//               <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
//               Registrations Open for 2026
//             </div>
//           </div>

//           <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight text-center">
//             RMKMATE<span className="text-primary ml-1">2026</span>
//           </h1>

//           <p className="text-2xl md:text-3xl text-slate-200 font-light max-w-4xl mx-auto leading-relaxed">
//             International Conference on <br />
//             <span className="font-semibold text-primary">
//               Research Methodologies in Knowledge Management,
//               Artificial Intelligence & Telecommunication Engineering
//             </span>
//           </p>

//           <div className="flex flex-wrap justify-center gap-8 mt-8 text-white/80 text-lg">
//             <div className="flex items-center gap-2">
//               <Calendar className="text-primary" />
//               15–16 April 2026
//             </div>
//             <div className="flex items-center gap-2">
//               <MapPin className="text-primary" />
//               R.M.K. Engineering College, Chennai
//             </div>
//           </div>

//           <div className="flex flex-col sm:flex-row gap-6 justify-center mt-10">
//             <Button size="lg" className="rounded-full px-10 h-14 text-lg shadow-lg">
//               Submit Paper
//             </Button>

//             <Link href="/schedule">
//               <Button
//                 size="lg"
//                 variant="outline"
//                 className="rounded-full px-10 h-14 text-lg bg-transparent border-white text-white hover:bg-white/10"
//               >
//                 View Schedule
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* ================= ABOUT SECTION ================= */}
//       <section className="py-24">
//         <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          
//           <img
//             src={heroImage}
//             alt="R.M.K Engineering College"
//             className="rounded-3xl shadow-2xl object-cover"
//           />

//           <div>
//             <SectionHeader
//               title="About The Conference"
//               subtitle="RMKMATE2026"
//               align="left"
//             />

//             <p className="text-lg text-muted-foreground leading-relaxed mt-6">
//               RMKMATE2026 is an international academic conference focused on
//               advancing research in Artificial Intelligence, Knowledge
//               Management, Intelligent Systems, and Telecommunication Engineering.
//             </p>

//             <p className="mt-4 text-muted-foreground leading-relaxed">
//               It provides a global platform for researchers, academicians,
//               industry professionals, and students to present innovative,
//               unpublished research addressing real-world technological challenges.
//             </p>

//             <div className="grid sm:grid-cols-2 gap-6 mt-8">
//               <div className="flex gap-4 p-5 border rounded-xl hover:bg-primary/5 transition">
//                 <FileText className="text-primary w-8 h-8" />
//                 <div>
//                   <h4 className="font-semibold">IEEE Publication</h4>
//                   <p className="text-sm text-muted-foreground">
//                     Selected papers will be submitted to IEEE Xplore.
//                   </p>
//                 </div>
//               </div>

//               <div className="flex gap-4 p-5 border rounded-xl hover:bg-primary/5 transition">
//                 <Award className="text-primary w-8 h-8" />
//                 <div>
//                   <h4 className="font-semibold">Best Paper Awards</h4>
//                   <p className="text-sm text-muted-foreground">
//                     Recognizing outstanding research excellence.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ================= CTA ================= */}
//       <section className="py-24 bg-primary text-center text-white">
//         <h2 className="text-4xl md:text-5xl font-bold mb-6">
//           Join RMKMATE2026
//         </h2>
//         <p className="text-lg opacity-80 max-w-2xl mx-auto">
//           Be part of an inspiring platform connecting academia and industry
//           for impactful research collaboration.
//         </p>

//         <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center">
//           <Button size="lg" variant="secondary" className="h-14 px-10 text-lg">
//             Register Now
//           </Button>

//           <Link href="/contact">
//             <Button
//               size="lg"
//               variant="outline"
//               className="h-14 px-10 text-lg border-white text-white hover:bg-white/10"
//             >
//               Contact Organizers
//             </Button>
//           </Link>
//         </div>
//       </section>
//     </div>
//   );
// }