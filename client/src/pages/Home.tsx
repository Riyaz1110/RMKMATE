import { motion } from "framer-motion";
import { ArrowRight, Calendar, MapPin, Users, Award, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { SectionHeader } from "@/components/SectionHeader";
import heroImage from "/images/image_1770799558904.png";

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
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/70 z-10" />
          <img 
            src={bgPattern} 
            alt="Conference Hall" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container relative z-20 mx-auto px-4 md:px-6 pt-20">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-4xl"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white border border-white/20 backdrop-blur-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-medium">Registrations Open for 2026</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
              RMKMATE26
            </motion.h1>
            
            <motion.h2 variants={itemVariants} className="font-sans font-light text-2xl md:text-3xl text-slate-200 mb-8 max-w-2xl">
              2nd International Conference on <br/>
              <span className="font-semibold text-accent">Smart Cyber Physical Systems</span>
            </motion.h2>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-6 text-white/80 mb-10 text-lg">
              <div className="flex items-center gap-2">
                <Calendar className="text-primary" />
                <span>23 - 24 January, 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="text-primary" />
                <span>R.M.K. Engineering College, Chennai</span>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 h-12 rounded-full shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all text-lg">
                Submit Paper
              </Button>
              <Link href="/schedule">
                <Button variant="outline" size="lg" className="bg-transparent text-white border-white/30 hover:bg-white/10 font-semibold px-8 h-12 rounded-full hover:text-white transition-all text-lg">
                  View Schedule
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/5 rounded-3xl -z-10 rotate-3" />
              <img 
                src="/images/image_1770799558904.png" 
                alt="Conference Banner" 
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-xl border border-slate-100 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <Users size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Expected Attendees</p>
                    <p className="text-2xl font-bold text-slate-900">500+</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <SectionHeader 
                title="About The Conference" 
                subtitle="RMKMATE26" 
                align="left" 
                className="mb-6"
              />
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                The 2nd International Conference on Smart Cyber Physical Systems (RMKMATE26) aims to provide a platform for researchers, scientists, engineers, and scholars to exchange and share their experiences, new ideas, and research results.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Organized by the Department of Computer Science at R.M.K. Engineering College, this conference focuses on cutting-edge technologies in Cyber-Physical Systems, IoT, AI, and related fields. We invite high-quality research papers describing original and unpublished work.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: FileText, title: "Paper Publication", desc: "Selected papers will be published in Scopus Indexed Journals" },
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
            {[
              "Artificial Intelligence & Machine Learning",
              "Internet of Things (IoT) & Edge Computing",
              "Cyber-Physical Systems & Security",
              "Big Data Analytics & Cloud Computing",
              "Blockchain Technology & Applications",
              "Robotics & Automation"
            ].map((track, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="font-bold text-xl">{i + 1}</span>
                </div>
                <h3 className="font-display font-bold text-xl mb-3 group-hover:text-primary transition-colors">{track}</h3>
                <p className="text-muted-foreground text-sm">
                  Submissions are invited for original research papers on {track.toLowerCase()} and related applications.
                </p>
                <div className="mt-6 flex items-center text-primary font-medium text-sm">
                  <span>Learn more</span>
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/papers">
              <Button size="lg" className="bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white transition-all">
                View All Submission Guidelines
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">Ready to Participate?</h2>
          <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Join us at RMKMATE26 for two days of inspiring talks, networking, and knowledge sharing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="font-bold h-14 px-8 text-lg">
              Register Now
            </Button>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="bg-transparent border-white/30 text-white hover:bg-white/10 h-14 px-8 text-lg">
                Contact Organizers
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
