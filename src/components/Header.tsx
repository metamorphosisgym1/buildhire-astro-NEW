import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Our Equipment", href: "#equipment" },
  { label: "Service Areas", href: "#features" },
  { label: "About Us", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Announcement bar */}
      {showBanner && (
        <div className="fixed top-0 left-0 right-0 z-[60] bg-primary text-primary-foreground text-center text-sm py-2 px-6">
          <span className="font-medium">
            🚛 Sydney's Fastest Equipment Delivery & Collection — Book by 12pm for Next-Day On-Site Arrival
          </span>
          <button
            onClick={() => setShowBanner(false)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-primary-foreground/70 hover:text-primary-foreground"
            aria-label="Close announcement"
          >
            <X size={16} />
          </button>
        </div>
      )}
      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
          showBanner ? "top-[40px]" : "top-0"
        } ${
          scrolled
            ? "glass-header py-3 shadow-sm"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-6">
          <a href="/" className={`text-2xl font-bold tracking-tight ${scrolled ? "text-foreground" : "text-white"}`}>
            BuildHire
          </a>
          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-medium text-sm transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:rounded-full after:bg-primary after:opacity-0 hover:after:opacity-100 after:transition-opacity ${
                  scrolled ? "text-foreground/80 hover:text-foreground" : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#booking"
              className="bg-primary text-primary-foreground px-6 py-2.5 rounded-md font-semibold text-sm hover:scale-105 transition-transform"
            >
              Book Now
            </a>
            <a
              href="tel:1300157882"
              className={`flex items-center gap-2 font-medium text-sm transition-colors ${
                scrolled ? "text-foreground/80 hover:text-foreground" : "text-white/90 hover:text-white"
              }`}
            >
              <Phone size={14} />
              1300 157 882
            </a>
          </nav>
          {/* Mobile toggle */}
          <button
            className={`md:hidden ${scrolled ? "text-foreground" : "text-white"}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>
      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[55] bg-background flex flex-col items-center justify-center gap-8 animate-scale-in">
          <button
            className="absolute top-5 right-6 text-foreground"
            onClick={() => setMobileOpen(false)}
            aria-label="Close mobile menu"
          >
            <X size={28} />
          </button>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-foreground text-2xl font-bold"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#booking"
            className="bg-primary text-primary-foreground px-8 py-3 rounded-md font-semibold text-lg mt-4"
            onClick={() => setMobileOpen(false)}
          >
            Book Now
          </a>
          <a
            href="tel:1300157882"
            className="flex items-center gap-2 text-foreground text-lg font-medium mt-2"
            onClick={() => setMobileOpen(false)}
          >
            <Phone size={18} />
            1300 157 882
          </a>
        </div>
      )}
    </>
  );
}
