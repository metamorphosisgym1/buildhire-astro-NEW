import { useState, useEffect } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

const equipmentLinks = [
  { label: "0.8T Mini Excavator", href: "/equipment/08t-mini-excavator-hire-sydney/", price: "$200/day" },
  { label: "1T Mini Excavator", href: "/equipment/1t-mini-excavator-hire-sydney/", price: "$200/day" },
  { label: "1.7T Mini Excavator", href: "/equipment/17t-mini-excavator-hire-sydney/", price: "$205/day" },
  { label: "3.5T Excavator", href: "/equipment/35t-excavator-hire-sydney/", price: "$340/day" },
  { label: "5.5T Excavator", href: "/equipment/55t-excavator-hire-sydney/", price: "$370/day" },
  { label: "8T Excavator", href: "/equipment/8t-excavator-hire-sydney/", price: "$420/day" },
  { label: "14.5T Excavator", href: "/equipment/145t-excavator-hire-sydney/", price: "$490/day" },
  { label: "23T Sumitomo SH235X-6", href: "/equipment/23t-excavator-hire-sydney/", price: "$490/day" },
  { label: "Tipper Truck", href: "/equipment/tipper-truck-hire-sydney/", price: "$280/day" },
];

const industriesLinks = [
  { label: "Pool Builders", href: "/industries/pool-builders/" },
  { label: "Landscapers", href: "/industries/landscapers/" },
  { label: "Builders & Concreters", href: "/industries/builders/" },
  { label: "Plumbers & Drainage", href: "/industries/plumbers/" },
  { label: "Civil Contractors", href: "/industries/civil-contractors/" },
  { label: "Demolition Contractors", href: "/industries/demolition-contractors/" },
  { label: "Property Developers", href: "/industries/property-developers/" },
  { label: "Drainage Contractors", href: "/industries/drainage-contractors/" },
];

const mobileLinks = [
  { label: "Equipment", href: "/equipment/" },
  { label: "Industries", href: "/industries/" },
  { label: "Service Areas", href: "/service-areas/" },
  { label: "Blog", href: "/blog/" },
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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close mobile menu on page navigation (Astro page transitions)
  useEffect(() => {
    const handleNavigation = () => setMobileOpen(false);
    document.addEventListener("astro:page-load", handleNavigation);
    document.addEventListener("astro:after-swap", handleNavigation);
    return () => {
      document.removeEventListener("astro:page-load", handleNavigation);
      document.removeEventListener("astro:after-swap", handleNavigation);
    };
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
          <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
            {/* Equipment dropdown */}
            <div className="relative group">
              <button className={`flex items-center gap-1 font-medium text-sm transition-colors ${
                scrolled ? "text-foreground/80 hover:text-foreground" : "text-white/90 hover:text-white"
              }`}>
                Equipment <ChevronDown size={13} className="group-hover:rotate-180 transition-transform duration-200" />
              </button>
              <div className="absolute top-full left-0 mt-3 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-2">
                  {equipmentLinks.map((item) => (
                    <a key={item.href} href={item.href} className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-gray-50 text-sm text-gray-700 hover:text-primary transition-colors">
                      <span>{item.label}</span>
                      <span className="text-xs text-gray-400 font-medium">{item.price}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            {/* Industries dropdown */}
            <div className="relative group">
              <button className={`flex items-center gap-1 font-medium text-sm transition-colors ${
                scrolled ? "text-foreground/80 hover:text-foreground" : "text-white/90 hover:text-white"
              }`}>
                Industries <ChevronDown size={13} className="group-hover:rotate-180 transition-transform duration-200" />
              </button>
              <div className="absolute top-full left-0 mt-3 w-52 bg-white rounded-xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-2">
                  {industriesLinks.map((item) => (
                    <a key={item.href} href={item.href} className="block px-3 py-2 rounded-lg hover:bg-gray-50 text-sm text-gray-700 hover:text-primary transition-colors">
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <a
              href="/service-areas/"
              className={`font-medium text-sm transition-colors ${
                scrolled ? "text-foreground/80 hover:text-foreground" : "text-white/90 hover:text-white"
              }`}
            >
              Service Areas
            </a>
            <a
              href="/blog/"
              className={`font-medium text-sm transition-colors ${
                scrolled ? "text-foreground/80 hover:text-foreground" : "text-white/90 hover:text-white"
              }`}
            >
              Blog
            </a>
            <a
              href="#contact"
              className={`font-medium text-sm transition-colors ${
                scrolled ? "text-foreground/80 hover:text-foreground" : "text-white/90 hover:text-white"
              }`}
            >
              About
            </a>
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
        <div className="fixed inset-0 z-[55] bg-background flex flex-col items-center justify-center gap-6 animate-scale-in overflow-y-auto py-16">
          <button
            className="absolute top-5 right-6 text-foreground"
            onClick={() => setMobileOpen(false)}
            aria-label="Close mobile menu"
          >
            <X size={28} />
          </button>
          {mobileLinks.map((link) => (
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
