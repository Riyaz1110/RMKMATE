import { useSchedule } from "@/hooks/use-conference";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, User, Calendar } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export default function Schedule() {
  const { data: schedule, isLoading } = useSchedule();

  // Group schedule by day
  const scheduleByDay = schedule?.reduce((acc, item) => {
    if (!acc[item.day]) acc[item.day] = [];
    acc[item.day].push(item);
    return acc;
  }, {} as Record<string, typeof schedule>) || {};

  const days = Object.keys(scheduleByDay);

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader title="Conference Schedule" subtitle="Program Agenda" />

        {isLoading ? (
          <div className="max-w-4xl mx-auto space-y-4">
             {[1, 2, 3, 4].map(i => <Skeleton key={i} className="h-32 w-full rounded-xl" />)}
          </div>
        ) : days.length === 0 ? (
          <div className="text-center py-24 max-w-2xl mx-auto bg-white rounded-2xl shadow-sm border">
            <Calendar className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">Schedule Coming Soon</h3>
            <p className="text-muted-foreground">
              The detailed program agenda for RMKMATE26 will be published closer to the conference date.
            </p>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto space-y-12">
            {days.map((day) => (
              <div key={day}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-primary text-white px-4 py-2 rounded-lg font-bold shadow-md">
                    {day}
                  </div>
                  <div className="h-px bg-slate-200 flex-1" />
                </div>
                
                <div className="space-y-4">
                  {scheduleByDay[day].map((item) => (
                    <Card key={item.id} className="p-6 hover:shadow-md transition-shadow border-l-4 border-l-primary/50 hover:border-l-primary relative overflow-hidden group">
                      <div className="flex flex-col md:flex-row gap-6">
                        {/* Time Column */}
                        <div className="md:w-32 flex flex-col justify-center items-start md:items-center border-b md:border-b-0 md:border-r border-dashed pb-4 md:pb-0 border-slate-200">
                          <div className="flex items-center text-primary font-mono font-semibold text-lg">
                            <Clock size={16} className="mr-2" />
                            {item.time}
                          </div>
                        </div>

                        {/* Content Column */}
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">
                            {item.event}
                          </h3>
                          
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                            {item.location && (
                              <div className="flex items-center gap-1">
                                <MapPin size={14} className="text-accent" />
                                <span>{item.location}</span>
                              </div>
                            )}
                            
                            {item.speakerId && (
                              <div className="flex items-center gap-1">
                                <User size={14} className="text-accent" />
                                <span>Keynote Speaker</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
