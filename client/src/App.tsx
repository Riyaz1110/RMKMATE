import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import NotFound from "@/pages/not-found";

// Pages
import Home from "@/pages/Home";
import Speakers from "@/pages/Speakers";
import Committees from "@/pages/Committees";
import Schedule from "@/pages/Schedule";
import Venue from "@/pages/Venue";
import Contact from "@/pages/Contact";
import PaperSubmission from "@/pages/PaperSubmission";

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/speakers" component={Speakers} />
          <Route path="/committees" component={Committees} />
          <Route path="/schedule" component={Schedule} />
          <Route path="/venue" component={Venue} />
          <Route path="/contact" component={Contact} />
          <Route path="/papers" component={PaperSubmission} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
