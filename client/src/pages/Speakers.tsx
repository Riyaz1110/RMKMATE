import { useSpeakers } from "@/hooks/use-conference";
import { SectionHeader } from "@/components/SectionHeader";
import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export default function Speakers() {
  const { data: speakers, isLoading, error } = useSpeakers();

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-20">
        <SectionHeader title="Keynote Speakers" subtitle="Distinguished Experts" />
        <div className="space-y-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex flex-col md:flex-row gap-8 bg-white p-6 rounded-2xl shadow-sm border">
              <Skeleton className="w-full md:w-64 h-64 rounded-xl" />
              <div className="flex-1 py-4 space-y-4">
                <Skeleton className="h-8 w-1/2" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-20 w-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-red-500">Failed to load speakers</h2>
        <p className="text-muted-foreground mt-2">Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader 
          title="Keynote Speakers" 
          subtitle="Distinguished Experts" 
          className="mb-16"
        />

        <div className="space-y-12 max-w-5xl mx-auto">
          {speakers && speakers.length > 0 ? (
            speakers.map((speaker, idx) => (
              <motion.div 
                key={speaker.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card className="overflow-hidden border-none shadow-xl hover:shadow-2xl transition-shadow bg-white rounded-3xl">
                  <div className="flex flex-col md:flex-row">
                    {/* Image Column */}
                    <div className="md:w-1/3 lg:w-1/4 relative group">
                      <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10" />
                      <img 
                        src={speaker.imageUrl || "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"} 
                        alt={speaker.name}
                        className="w-full h-full object-cover min-h-[300px] md:min-h-full"
                      />
                    </div>

                    {/* Content Column */}
                    <div className="flex-1 p-8 md:p-10 flex flex-col justify-center">
                      <div className="mb-4">
                        <Badge variant="secondary" className="mb-3 text-primary bg-primary/10 hover:bg-primary/20">
                          Keynote Speaker
                        </Badge>
                        <h3 className="font-display font-bold text-3xl text-slate-900 mb-1">
                          {speaker.name}
                        </h3>
                        <p className="text-lg font-medium text-primary mb-1">{speaker.role}</p>
                        <p className="text-muted-foreground italic">{speaker.affiliation}</p>
                      </div>

                      <div className="w-16 h-1 bg-accent rounded-full mb-6" />

                      <div className="prose prose-slate max-w-none text-muted-foreground">
                        <p className="leading-relaxed">
                          {speaker.bio || "An expert in Cyber Physical Systems with over 20 years of research experience. They have published numerous papers in top-tier conferences and journals."}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))
          ) : (
            <div className="text-center py-20 bg-white rounded-2xl border border-dashed">
              <p className="text-muted-foreground">Speaker details will be announced soon.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
