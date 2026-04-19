import { MapPin, Truck } from "lucide-react";

export default function DeliveryRegions() {
  return (
    <section id="delivery" className="bg-card py-24 px-6">
      <div className="container mx-auto">
        <p className="label-text text-primary text-center mb-3 text-sm">
          Coverage
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground text-center mb-6">
          NSW Wide Delivery & Collection
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
          We deliver equipment across all of New South Wales — from Sydney metro to regional areas. No matter where your job site is, we've got you covered.
        </p>
        <div className="max-w-4xl mx-auto">
          {/* NSW Map outline */}
          <div className="relative bg-muted/20 border border-secondary rounded-2xl p-8 md:p-12">
            <svg
              viewBox="0 0 600 500"
              className="w-full h-auto max-h-[450px]"
              fill="none"
              role="img"
              aria-label="Map of NSW showing delivery regions"
            >
              {/* NSW simplified outline */}
              <path
                d="M 50 60 L 550 60 L 550 120 L 530 140 L 540 180 L 520 220 L 530 260 L 510 300 L 520 340 L 500 380 L 480 400 L 440 420 L 380 440 L 300 450 L 200 440 L 120 410 L 80 370 L 60 300 L 50 200 Z"
                className="fill-primary/10 stroke-primary/40"
                strokeWidth="2"
              />
              
              {/* Region dots */}
              {[
                { x: 480, y: 320, label: "Sydney", main: true },
                { x: 420, y: 260, label: "Blue Mountains" },
                { x: 350, y: 180, label: "Hunter Valley" },
                { x: 470, y: 200, label: "Newcastle" },
                { x: 500, y: 380, label: "Wollongong" },
                { x: 300, y: 350, label: "Canberra Region" },
                { x: 200, y: 250, label: "Orange / Bathurst" },
                { x: 150, y: 150, label: "Dubbo" },
                { x: 400, y: 100, label: "Tamworth" },
                { x: 480, y: 120, label: "Coffs Harbour" },
                { x: 350, y: 420, label: "South Coast" },
                { x: 100, y: 350, label: "Wagga Wagga" },
              ].map((loc) => (
                <g key={loc.label}>
                  <circle
                    cx={loc.x}
                    cy={loc.y}
                    r={loc.main ? 8 : 5}
                    className={loc.main ? "fill-primary" : "fill-primary/60"}
                  />
                  {loc.main && (
                    <circle
                      cx={loc.x}
                      cy={loc.y}
                      r={16}
                      className="fill-primary/20 animate-pulse"
                    />
                  )}
                  <text
                    x={loc.x}
                    y={loc.y - 12}
                    textAnchor="middle"
                    className="fill-foreground/70 text-[11px] font-medium"
                  >
                    {loc.label}
                  </text>
                </g>
              ))}
            </svg>
            {/* Coverage badge */}
            <div className="absolute top-4 right-4 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 flex items-center gap-2">
              <Truck size={16} className="text-primary" />
              <span className="text-sm font-semibold text-primary">NSW Wide</span>
            </div>
          </div>
          {/* Key areas */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              "Greater Sydney",
              "Central Coast",
              "Hunter & Newcastle",
              "Blue Mountains",
              "Illawarra & Wollongong",
              "South Coast",
              "Central West",
              "Regional NSW",
            ].map((area) => (
              <div
                key={area}
                className="flex items-center gap-2 bg-muted/30 border border-secondary rounded-xl px-4 py-3"
              >
                <MapPin size={14} className="text-primary flex-shrink-0" />
                <span className="text-sm text-foreground font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
