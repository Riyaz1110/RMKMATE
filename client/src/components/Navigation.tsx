import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/committees", label: "Committees" },
    { href: "/speakers", label: "Speakers" },
    { href: "/papers", label: "Paper Submission" },
    { href: "/schedule", label: "Schedule" },
    { href: "/venue", label: "Venue" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-border/50 py-3"
          : "bg-white border-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-3 cursor-pointer group">
            {/* Logo placeholder - using text/icon if no image available */}
            <div className="h-10 w-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-105 transition-transform">
              R
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg leading-none text-foreground group-hover:text-primary transition-colors">
                RMKMATE26
              </span>
              <span className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
                IEEE Conference
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-1">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <div
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-md transition-colors cursor-pointer relative",
                  location === link.href
                    ? "text-primary bg-primary/5"
                    : "text-muted-foreground hover:text-primary hover:bg-secondary/50"
                )}
              >
                {link.label}
                {location === link.href && (
                  <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-primary rounded-full" />
                )}
              </div>
            </Link>
          ))}
          <Button className="ml-4 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25">
            Register Now
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-foreground hover:bg-secondary rounded-md"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-background border-b shadow-xl animate-in slide-in-from-top-5 duration-200">
          <div className="flex flex-col p-4 gap-2">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                <div
                  className={cn(
                    "px-4 py-3 text-sm font-medium rounded-lg transition-colors cursor-pointer",
                    location === link.href
                      ? "text-primary bg-primary/5 font-semibold"
                      : "text-foreground hover:bg-secondary"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </div>
              </Link>
            ))}
            <div className="h-px bg-border my-2" />
            <Button className="w-full">Register Now</Button>
          </div>
        </div>
      )}
    </nav>
  );
}
