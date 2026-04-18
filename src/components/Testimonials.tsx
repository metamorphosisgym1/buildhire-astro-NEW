import { useState } from "react";
import { Star, User } from "lucide-react";

const CHAR_LIMIT = 120;
const testimonials = [
  {
    quote:
      "We have used Build Hire on several occasions and couldn't be happier with the service. Their machines are unbelievable — always well maintained and ready to go. The team is consistently on time, reliable, and easy to deal with. Build Hire has played a big part in keeping our sites moving efficiently.",
    name: "FW Building",
    rating: 5,
  },
  {
    quote:
      "We've used Build Hire a number of times now and they've been solid every single job. The machines are top quality and perfect for the kind of tight access work we do. What stands out is how reliable they are, always delivered on time and ready to go, which makes a big difference on site. We'll always use Build Hire machines moving forward, love the lilac branding, stands out on site and looks the part.",
    name: "Almighty Fencing",
    rating: 5,
  },
  {
    quote:
      "We've worked with Build Hire across a number of projects and they've been nothing but consistent. Their machines are new or near new and haven't disappointed — always reliable and ready to perform on site. The team is very approachable and easy to deal with, which makes the whole process smooth from start to finish.",
    name: "Mac Developments",
    rating: 5,
  },
];

function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = t.quote.length > CHAR_LIMIT;
  const displayQuote = !isLong || expanded ? t.quote : t.quote.slice(0, CHAR_LIMIT).trimEnd() + "…";
  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-8 flex flex-col justify-between">
      <div>
        <div className="flex gap-1 mb-4" aria-label={`${t.rating} out of 5 stars`}>
          {Array.from({ length: t.rating }).map((_, i) => (
            <Star key={i} size={18} className="fill-primary text-primary" />
          ))}
        </div>
        <p className="text-white/80 leading-relaxed mb-2 italic">
          "{displayQuote}"
        </p>
        {isLong && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-primary text-sm font-medium hover:underline underline-offset-2 mb-4 transition-colors"
            aria-expanded={expanded}
          >
            {expanded ? "Show less" : "Read more"}
          </button>
        )}
      </div>
      <div className="flex items-center gap-3 mt-4">
        <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0">
          <User size={20} className="text-white/60" />
        </div>
        <p className="font-bold text-white">{t.name}</p>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="relative py-24 px-6 overflow-hidden" aria-labelledby="testimonials-heading">
      <img
        src="/assets/isuzu-tipper.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="container mx-auto relative z-10">
        <p className="label-text text-primary text-center mb-3 text-sm">
          Client Feedback
        </p>
        <h2 id="testimonials-heading" className="text-3xl md:text-5xl font-bold text-white text-center mb-16">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}
        </div>
        {/* Google reviews trust signal */}
        <div className="flex items-center justify-center gap-3 mt-12 text-white/60">
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" aria-hidden="true">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          <div className="flex gap-0.5" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={16} className="fill-primary text-primary" />
            ))}
          </div>
          <span className="text-sm font-medium">5/5 from Google Reviews</span>
        </div>
      </div>
    </section>
  );
}
