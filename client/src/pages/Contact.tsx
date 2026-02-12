import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(data: ContactFormValues) {
  try {
    await emailjs.send(
      "service_tcxyabi",      // your service id
      "template_0z2sdhh",    // your template id
      {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      },
      "hct1Kxi_tI90nPhCl"      // your public key
    );

    toast({
      title: "Message Sent",
      description: "Email sent successfully!",
    });

    form.reset();
  } catch (error) {
    toast({
      title: "Error",
      description: "Failed to send email",
      variant: "destructive",
    });
  }
}


  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader title="Contact Us"/>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="p-8 border-none shadow-lg bg-primary text-primary-foreground relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 -ml-8 -mb-8 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
              
              <h3 className="font-display font-bold text-2xl mb-6">Contact Information</h3>
              
              <div className="space-y-6 relative z-10">
                <div className="flex items-start gap-4">
                  <MapPin className="shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">Address</h4>
                    <p className="text-primary-foreground/80 text-sm leading-relaxed">
                      RSM Nagar,
                      Kavaraipettai,
                      Gummidipoondi Taluk,
                      Tiruvallur District,
                      Tamil Nadu,
                      India.
                      Pin code: 601 206.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Phone className="shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Phone</h4>
                    <p className="text-primary-foreground/80 text-sm"> 044 – 6790 6790 Fax : 044 – 6790 6791 </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Mail className="shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Email</h4>
                    <p className="text-primary-foreground/80 text-sm">rmkmate@rmkec.ac.in</p>
                  </div>
                </div>
              </div>
            </Card>
            
            <div className="bg-white p-8 rounded-2xl border shadow-sm">
              <h3 className="font-display font-bold text-xl mb-4 text-slate-900">Conference Coordinator</h3>
              <p className="font-medium text-primary">Dr.D.Paulraj</p>
              <p className="text-sm text-muted-foreground mb-4">Conference Chair</p>
              <p className="text-sm">Phone: +91 8248687752</p>
              <p className="text-sm">EMail : rmkmate@rmkec.ac.in</p>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-8 shadow-lg border-slate-100">
            <h3 className="font-display font-bold text-2xl mb-6 text-slate-900">Send us a Message</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} className="bg-slate-50" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="your@email.com" {...field} className="bg-slate-50" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input placeholder="Query regarding..." {...field} className="bg-slate-50" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="How can we help you?" 
                          className="min-h-[120px] bg-slate-50" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 h-12 text-lg shadow-lg shadow-primary/20"
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </Card>
        </div>
      </div>
    </div>
  );
}