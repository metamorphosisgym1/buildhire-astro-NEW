import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/video/hero-poster.webp"
        className="absolute inset-0 w-full h-full object-cover scale-[2] object-[85%_35%]"
        aria-hidden="true"
      >
        <source src="/video/hero-bg-mobile.mp4" type="video/mp4" media="(max-width: 767px)" />
        <source src="/video/hero-bg-desktop.mp4" type="video/mp4" />
      </video>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight mb-6 animate-fade-in-up">
          Sydney <span className="text-primary">Excavator & Equipment Hire</span>
        </h1>
        <p
          className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto"
          style={{ animationDelay: "0.2s" }}
        >
          Mini excavator hire Sydney — dry-hire rates shown online, with availability and delivery quoted for your site and hire dates.
        </p>
        {/* Dual CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <a
            href="#booking"
            className="inline-block bg-primary text-primary-foreground px-10 py-4 rounded-md font-bold text-lg hover:scale-105 transition-transform"
          >
            Start a Quote Request →
          </a>
          <a
            href="#equipment"
            className="inline-block border-2 border-primary text-primary px-10 py-4 rounded-md font-bold text-lg hover:bg-primary/10 transition-colors"
          >
            View Our Fleet
          </a>
        </div>
        {/* Call quick link */}
        <a
          href="tel:1300157882"
          className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors"
        >
          Or call 1300 157 882 for a delivery quote
        </a>
      </div>
      {/* Scroll arrow */}
      <a
        href="#stats"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60 animate-bounce-arrow"
        aria-label="Scroll down"
      >
        <ChevronDown size={36} />
      </a>
    </section>
  );
}
