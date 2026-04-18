import { useState, useEffect } from "react";
import { Phone, MessageCircle } from "lucide-react";

export default function StickyBottomBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-card/95 backdrop-blur-sm border-t border-secondary px-6 py-3">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <a
          href="tel:1300157882"
          className="flex items-center gap-2 text-foreground font-medium text-sm"
        >
          <Phone size={16} className="text-primary" />
          1300 157 882
        </a>
        <div className="flex gap-3 w-full sm:w-auto">
          <a
            href="https://wa.me/61435421324?text=Hi%20BuildHire%2C%20I%27d%20like%20to%20enquire%20about%20equipment%20hire."
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-none flex items-center justify-center gap-2 border border-foreground text-foreground px-5 py-2.5 rounded-md text-sm font-medium hover:border-primary transition-colors"
          >
            <MessageCircle size={16} />
            WhatsApp Us
          </a>
          <a
            href="#booking"
            className="flex-1 sm:flex-none text-center bg-primary text-primary-foreground px-5 py-2.5 rounded-md text-sm font-semibold hover:scale-105 transition-transform"
          >
            Book Equipment Now
          </a>
        </div>
      </div>
    </div>
  );
}
