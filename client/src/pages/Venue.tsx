import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

export default function Venue() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader title="Venue & Location" subtitle="R.M.K. Engineering College" />

        <div className="max-w-6xl mx-auto">
          {/* Main Venue Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="bg-slate-100 rounded-2xl overflow-hidden shadow-inner h-[400px]">
                {/* Embedded Google Map */}
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3880.866579045763!2d80.14159531482613!3d13.35879799060269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a527f0d0469094b%3A0x6e761f9d458097d7!2sR.M.K.%20Engineering%20College!5e0!3m2!1sen!2sin!4v1645000000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <h3 className="font-display font-bold text-2xl mb-4 text-primary">About the Institution</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                R.M.K. Engineering College, established in the year 1995, is situated at Kavaraipettai, Gummidipoondi Taluk, Thiruvallur District, Tamil Nadu. The college is affiliated to Anna University, Chennai and is accredited by NBA and NAAC with A+ Grade.
              </p>
              
              <div className="space-y-4 mt-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="bg-white p-2 rounded-full shadow-sm text-primary">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Address</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      RSM Nagar, Kavaraipettai, Gummidipoondi Taluk, Thiruvallur District, Tamil Nadu - 601 206.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="bg-white p-2 rounded-full shadow-sm text-primary">
                    <Globe size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">How to Reach</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      The college is located on the NH-16 (Chennai-Kolkata Highway), about 30 km from Chennai. It is well connected by road and rail transport.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Accommodation (Optional section) */}
          <div className="mb-12">
            <h3 className="font-display font-bold text-2xl mb-6 border-l-4 border-primary pl-4">Accommodation</h3>
            <p className="text-muted-foreground mb-6">
              Limited accommodation is available in the college hostel on a payment basis. Several hotels are also available in nearby towns.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                "College Hostel",
                "Grand Hotel Chennai",
                "Highway Inn"
              ].map((place, i) => (
                <Card key={i} className="p-6">
                  <h4 className="font-bold mb-2">{place}</h4>
                  <p className="text-sm text-muted-foreground">Contact conference organizers for booking assistance.</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
