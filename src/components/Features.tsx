import { Clock, DollarSign, Shield, MapPin, HeadphonesIcon } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const features = [
  {
    icon: Clock,
    title: "24/7 Support",
    desc: "Round-the-clock emergency support when you need it most.",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    desc: "Clear, competitive rates with zero hidden fees.",
  },
  {
    icon: Shield,
    title: "Fully Compliant",
    desc: "All equipment meets safety standards. No compromises.",
  },
  {
    icon: MapPin,
    title: "NSW-Wide Delivery & Collection",
    desc: "Fast delivery & collection across all of New South Wales.",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Manager",
    desc: "A single point of contact who knows your projects.",
  },
];

export default function Features() {
  const { ref, visible } = useScrollAnimation();
  return (
    <section id="features" className="relative py-16 px-6 overflow-hidden">
      <img
        src="/assets/features-bg.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div ref={ref} className="container mx-auto relative z-10">
        <div className="text-center mb-10">
          <p className="label-text text-primary text-sm mb-2">Why BuildHire</p>
          <h2 className="text-2xl md:text-4xl font-bold text-white">
            Built For The Job
          </h2>
        </div>
        {/* Top row: 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto mb-4">
          {features.slice(0, 3).map((f, i) => (
            <div
              key={f.title}
              className={`group flex flex-col items-center text-center px-5 py-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/40 hover:bg-white/10 transition-all duration-300 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: visible ? `${i * 80}ms` : "0ms" }}
            >
              <div className="w-11 h-11 rounded-full bg-primary/20 flex items-center justify-center mb-3 group-hover:bg-primary/30 transition-colors">
                <f.icon size={20} className="text-primary" />
              </div>
              <h3 className="text-sm font-semibold text-white mb-1">{f.title}</h3>
              <p className="text-white/60 text-xs leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
        {/* Bottom row: 2 cards centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[540px] mx-auto">
          {features.slice(3).map((f, i) => (
            <div
              key={f.title}
              className={`group flex flex-col items-center text-center px-5 py-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/40 hover:bg-white/10 transition-all duration-300 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: visible ? `${(i + 3) * 80}ms` : "0ms" }}
            >
              <div className="w-11 h-11 rounded-full bg-primary/20 flex items-center justify-center mb-3 group-hover:bg-primary/30 transition-colors">
                <f.icon size={20} className="text-primary" />
              </div>
              <h3 className="text-sm font-semibold text-white mb-1">{f.title}</h3>
              <p className="text-white/60 text-xs leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
