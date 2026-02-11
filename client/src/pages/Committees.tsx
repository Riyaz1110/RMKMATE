import { useCommittee } from "@/hooks/use-conference";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

export default function Committees() {
  const { data: members, isLoading } = useCommittee();

  const categories = ["Organizing", "Advisory", "Technical", "Steering"];

  // Mock data if empty since we're generating first
  const displayMembers = members?.length ? members : [];

  const getMembersByCategory = (cat: string) => {
    return displayMembers.filter(m => m.category === cat);
  };

  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader 
          title="Committee Members" 
          subtitle="Leadership Team" 
        />

        <div className="max-w-6xl mx-auto">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <Skeleton key={i} className="h-40 rounded-xl" />
              ))}
            </div>
          ) : (
            <Tabs defaultValue={categories[0]} className="w-full">
              <div className="flex justify-center mb-10">
                <TabsList className="bg-slate-100 p-1 rounded-full h-auto flex-wrap justify-center">
                  {categories.map(cat => (
                    <TabsTrigger 
                      key={cat} 
                      value={cat}
                      className="rounded-full px-6 py-3 data-[state=active]:bg-primary data-[state=active]:text-white font-medium"
                    >
                      {cat} Committee
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {categories.map(cat => (
                <TabsContent key={cat} value={cat} className="animate-in fade-in zoom-in-95 duration-300">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {getMembersByCategory(cat).length > 0 ? (
                      getMembersByCategory(cat).map(member => (
                        <Card key={member.id} className="p-6 hover:shadow-lg transition-shadow border-slate-100 group">
                          <div className="flex items-start gap-4">
                            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl group-hover:bg-primary group-hover:text-white transition-colors">
                              {member.name.charAt(0)}
                            </div>
                            <div>
                              <h3 className="font-bold text-lg text-slate-900 group-hover:text-primary transition-colors">
                                {member.name}
                              </h3>
                              <Badge variant="outline" className="mt-1 mb-2 border-primary/20 text-primary">
                                {member.role}
                              </Badge>
                              {member.affiliation && (
                                <p className="text-sm text-muted-foreground">{member.affiliation}</p>
                              )}
                            </div>
                          </div>
                        </Card>
                      ))
                    ) : (
                      <div className="col-span-full text-center py-20 bg-slate-50 rounded-xl border border-dashed">
                        <p className="text-muted-foreground">Committee members for this category to be announced.</p>
                      </div>
                    )}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          )}
        </div>
      </div>
    </div>
  );
}
