import { Link, useLocation } from "wouter"
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"
import { Menu, X, ChevronDown } from "lucide-react"

export function Navigation() {
  const [location] = useLocation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  /* ✅ About removed from here (will place manually after Venue) */
  const links = [
    { href: "/", label: "Home" },
    { href: "/committees", label: "Committees" },
    { href: "/speakers", label: "Speakers" },
    { href: "/papers", label: "Paper Submission" },
    { href: "/schedule", label: "Schedule" },
    { href: "/contact", label: "Contact Us" },
  ]

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

        {/* ================= LOGO ================= */}
        <Link href="/">
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="h-10 w-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-105 transition-transform">
              R
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg group-hover:text-primary">
                RMKMATE26
              </span>
              <span className="text-xs text-muted-foreground uppercase tracking-wider">
                IEEE Conference
              </span>
            </div>
          </div>
        </Link>


        {/* ================= DESKTOP MENU ================= */}
        <div className="hidden lg:flex items-center gap-1">

          {/* NORMAL LINKS */}
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <div
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-md transition-colors cursor-pointer",
                  location === link.href
                    ? "text-primary bg-primary/5"
                    : "text-muted-foreground hover:text-primary hover:bg-secondary/50"
                )}
              >
                {link.label}
              </div>
            </Link>
          ))}

          {/* ================= VENUE DROPDOWN ================= */}
          <div className="relative group">
            <div className="px-4 py-2 text-sm font-medium rounded-md cursor-pointer text-muted-foreground hover:text-primary hover:bg-secondary/50 flex items-center gap-1">
              Venue
              <ChevronDown size={16} />
            </div>

            <div
              className="
                absolute left-0 top-full mt-2
                bg-white border shadow-xl rounded-xl
                opacity-0 invisible
                group-hover:opacity-100 group-hover:visible
                transition-all duration-200
                min-w-[200px]
                z-50
              "
            >
              <Link href="/venue">
                <div className="px-5 py-3 hover:bg-slate-100 rounded-t-xl cursor-pointer">
                  Conference Venue
                </div>
              </Link>

              <Link href="/transportation">
                <div className="px-5 py-3 hover:bg-slate-100 rounded-b-xl cursor-pointer">
                  Transportation
                </div>
              </Link>
            </div>
          </div>

          {/* ================= ABOUT RMKEC (AFTER VENUE) ================= */}
          <Link href="/about-rmkec">
            <div
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-md transition-colors cursor-pointer",
                location === "/about-rmkec"
                  ? "text-primary bg-primary/5"
                  : "text-muted-foreground hover:text-primary hover:bg-secondary/50"
              )}
            >
              About RMKEC
            </div>
          </Link>

        </div>


        {/* ================= MOBILE TOGGLE ================= */}
        <button
          className="lg:hidden p-2 text-foreground hover:bg-secondary rounded-md"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>


      {/* ================= MOBILE MENU ================= */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-background border-b shadow-xl animate-in slide-in-from-top-5 duration-200">
          <div className="flex flex-col p-4 gap-2">

            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                <div
                  className="px-4 py-3 rounded-lg hover:bg-secondary cursor-pointer"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </div>
              </Link>
            ))}

            <Link href="/venue">
              <div
                className="px-4 py-3 rounded-lg hover:bg-secondary cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Conference Venue
              </div>
            </Link>

            <Link href="/transportation">
              <div
                className="px-4 py-3 rounded-lg hover:bg-secondary cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Transportation
              </div>
            </Link>

            {/* ABOUT RMKEC for mobile */}
            <Link href="/about-rmkec">
              <div
                className="px-4 py-3 rounded-lg hover:bg-secondary cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About RMKEC
              </div>
            </Link>

          </div>
        </div>
      )}
    </nav>
  )
}
