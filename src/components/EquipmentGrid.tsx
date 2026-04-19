import { useState } from "react";
const boxTrailerImg = "/assets/box-trailer.jpg";
const sv08Img = "/assets/sv08-excavator.png";
const vio17Img = "/assets/vio17-excavator.png";

const vio35Img = "/assets/vio35-excavator.png";
const vio55Img = "/assets/vio55-excavator.png";
const vio80Img = "/assets/vio80-excavator.png";
const loaderImg = "/assets/wheel-loader.jpg";
const skidsteerImg = "/assets/skidsteer-lilac.jpg";
const backhoeImg = "/assets/backhoe-loader.jpg";
const miniDumperImg = "/assets/mini-dumper.png";
const cormidiC7xImg = "/assets/cormidi-c7x.jpg";
const cormidiC85Img = "/assets/cormidi-c85.jpg";
const isuzuTipperImg = "/assets/isuzu-tipper.png";
const rockBreakerImg = "/assets/rock-breaker-buildhire.png";
const augerImg = "/assets/auger-drive.jpg";
const rockGrabImg = "/assets/rock-grab.jpg";
const concreteSawImg = "/assets/concrete-saw.png";
const demolitionHammerImg = "/assets/demolition-hammer.png";
const typhoonWasherImg = "/assets/typhoon-pressure-washer.png";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const categories = ["All", "Excavators", "Mini Dumpers", "Tipper Trucks", "Attachments", "Concrete saws & other tools"];

interface EquipmentItem {
  name: string;
  category: string;
  image: string;
  rate: string;
  specs: Record<string, string>;
  badge: "high-demand" | "available" | "coming-soon";
  brochureUrl?: string;
  useContain?: boolean;
  tooltip?: string;
  imageScale?: string;
  deliveryNote?: string;
}

const availableEquipment: EquipmentItem[] = [
  {
    name: "0.8T Mini Excavator (SV08 Yanmar)",
    category: "Excavators",
    image: sv08Img,
    rate: "$200/day",
    badge: "available",
    deliveryNote: "$110 Delivery & Collection*",
    brochureUrl: "https://tuttbryant.com.au/wp-content/uploads/2022/08/Yanmar-SV08-Excavator-Brochure.pdf",
    specs: {
      "Operating Weight": "980 kg",
      "Dig Depth": "1,510 mm",
      "Bucket Capacity": "0.02 m³",
      "Engine Power": "7.1 kW",
      "Tail Swing": "Zero",
      "Transport Width": "700 mm",
    },
  },
  {
    name: "1.7T Mini Excavator (ViO17 Yanmar)",
    category: "Excavators",
    image: vio17Img,
    rate: "$205/day",
    badge: "high-demand",
    deliveryNote: "$110 Delivery & Collection*",
    brochureUrl: "https://tuttbryant.com.au/wp-content/uploads/2022/08/Yanmar-ViO17-Excavator-Brochure.pdf",
    specs: {
      "Operating Weight": "1,700 kg",
      "Dig Depth": "2,430 mm",
      "Bucket Capacity": "0.04 m³",
      "Engine Power": "11.5 kW",
      "Tail Swing": "Zero",
      "Transport Width": "980 mm",
    },
  },
  {
    name: "3.5T Excavator (ViO35-7 Yanmar)",
    category: "Excavators",
    image: vio35Img,
    rate: "$325/day",
    badge: "available",
    deliveryNote: "$150 Delivery & Collection*",
    brochureUrl: "https://tuttbryant.com.au/wp-content/uploads/2024/06/ViO30-7ViO35-7_240620_Single_LR.pdf",
    specs: {
      "Operating Weight": "3,500 kg",
      "Dig Depth": "3,200 mm",
      "Bucket Capacity": "0.10 m³",
      "Engine Power": "20 kW",
      "Tail Swing": "Minimal",
      "Transport Width": "1,500 mm",
    },
  },
  {
    name: "5.5T Excavator (ViO55 Yanmar)",
    category: "Excavators",
    image: vio55Img,
    rate: "$345/day",
    badge: "high-demand",
    deliveryNote: "Delivery & Collection* (third party transport — pricing on enquiry)",
    brochureUrl: "https://tuttbryant.com.au/wp-content/uploads/2022/08/Yanmar-ViO50-ViO55-Excavator-Brochure.pdf",
    specs: {
      "Operating Weight": "5,500 kg",
      "Dig Depth": "3,870 mm",
      "Bucket Capacity": "0.16 m³",
      "Engine Power": "30 kW",
      "Tail Swing": "Reduced",
      "Transport Width": "1,960 mm",
    },
  },
  {
    name: "Isuzu NQR450 Tipper",
    category: "Tipper Trucks",
    image: isuzuTipperImg,
    rate: "$280/day",
    badge: "available",
    brochureUrl: undefined,
    specs: {
      "GVM": "8,700 kg",
      "Payload": "4,500 kg",
      "Engine Power": "110 kW",
      "Tray Size": "4.2m x 2.1m",
      "Drive": "4x2",
      "Transmission": "6-speed AMT",
    },
  },
  {
    name: "Box Trailer",
    category: "Tipper Trucks",
    image: boxTrailerImg,
    rate: "$80/day",
    badge: "available",
    specs: {
      "Type": "Box Trailer",
      "Capacity": "Standard",
      "Suitable For": "General haulage & transport",
    },
  },
  {
    name: "Cormidi C7x 700kg Petrol High Tip",
    category: "Mini Dumpers",
    image: cormidiC7xImg,
    rate: "$200/day",
    badge: "available",
    deliveryNote: "$110 Delivery & Collection*",
    useContain: true,
    specs: {
      "Payload": "700 kg",
      "Width": "750 mm",
      "Engine": "Petrol",
      "Tip Type": "High Tip",
    },
  },
  {
    name: "Cormidi C85",
    category: "Mini Dumpers",
    image: cormidiC85Img,
    rate: "$200/day",
    badge: "available",
    deliveryNote: "$110 Delivery & Collection*",
    useContain: true,
    specs: {
      "Payload": "850 kg",
      "Width": "850 mm",
      "Engine": "Petrol",
      "Tip Type": "High Tip",
    },
  },
  {
    name: "Rock Breaker",
    category: "Attachments",
    image: rockBreakerImg,
    rate: "$110/day",
    badge: "available",
    deliveryNote: "Free delivery & collection when hired with a machine",
    useContain: true,
    specs: {
      "Type": "Hydraulic Breaker",
      "Suitable For": "1.7T – 3.5T Excavators",
    },
  },
  {
    name: "Auger Drive",
    category: "Attachments",
    image: augerImg,
    rate: "$99/day",
    badge: "available",
    deliveryNote: "Free delivery & collection when hired with a machine",
    useContain: true,
    specs: {
      "Type": "Hydraulic Auger",
      "Suitable For": "1.7T – 5.5T Excavators",
    },
  },
  {
    name: "Rock Grab",
    category: "Attachments",
    image: rockGrabImg,
    rate: "$135/day",
    badge: "available",
    deliveryNote: "Free delivery & collection when hired with a machine",
    useContain: true,
    specs: {
      "Type": "Hydraulic Rock Grab",
      "Suitable For": "3.5T – 8T Excavators",
    },
  },
  {
    name: "Husqvarna K970 MKIII 16\" Concrete Saw",
    category: "Concrete saws & other tools",
    image: concreteSawImg,
    rate: "$140/day",
    badge: "available",
    deliveryNote: "$100 Delivery & Collection*",
    useContain: true,
    specs: {
      "Type": "Concrete Saw",
      "Blade Size": "16\"",
      "Engine": "Petrol",
    },
  },
  {
    name: "Bosch GSH16-30 Demolition Hammer",
    category: "Concrete saws & other tools",
    image: demolitionHammerImg,
    rate: "$110/day",
    badge: "available",
    deliveryNote: "$100 Delivery & Collection*",
    useContain: true,
    specs: {
      "Type": "Demolition Hammer",
      "Impact Energy": "41 J",
      "Weight": "16.5 kg",
    },
  },
  {
    name: "Typhoon TPW4200H Pressure Washer",
    category: "Concrete saws & other tools",
    image: typhoonWasherImg,
    rate: "$150/day",
    badge: "available",
    deliveryNote: "$100 Delivery & Collection*",
    useContain: true,
    specs: {
      "Type": "Pressure Washer",
      "Pressure": "4,200 PSI",
      "Engine": "Petrol",
    },
  },
];

const comingSoonEquipment: EquipmentItem[] = [
  {
    name: "8T Excavator (ViO80 Yanmar)",
    category: "Excavators",
    image: vio80Img,
    rate: "$420/day",
    badge: "coming-soon",
    deliveryNote: "Delivery & Collection* (third party transport — pricing on enquiry)",
    brochureUrl: "https://tuttbryant.com.au/wp-content/uploads/2022/08/Yanmar-ViO80-Excavator-Brochure.pdf",
    specs: {
      "Operating Weight": "8,000 kg",
      "Dig Depth": "4,500 mm",
      "Bucket Capacity": "0.28 m³",
      "Engine Power": "45 kW",
      "Tail Swing": "Conventional",
      "Transport Width": "2,200 mm",
    },
  },
  {
    name: "14.5T Sumitomo Excavator",
    category: "Excavators",
    image: vio80Img,
    rate: "$470/day",
    badge: "coming-soon",
    deliveryNote: "Delivery & Collection* (third party transport — pricing on enquiry)",
    brochureUrl: "/brochures/Sumitomo_SH145X-6_Tutt_Bryant.pdf",
    specs: {
      "Operating Weight": "14,000 kg",
      "Dig Depth": "5,900 mm",
      "Bucket Capacity": "0.55 m³",
      "Engine Power": "80 kW",
      "Tail Swing": "Conventional",
      "Transport Width": "2,490 mm",
    },
  },
  {
    name: "Skid Steer Loader",
    category: "Skid Steers",
    image: skidsteerImg,
    rate: "$320/day",
    badge: "coming-soon" as const,
    specs: {
      "Operating Weight": "3,400 kg",
      "Rated Capacity": "900 kg",
      "Engine Power": "55 kW",
      "Bucket Width": "1,830 mm",
      "Lift Height": "3,050 mm",
      "Travel Speed": "12 km/h",
    },
  },
];

const getBadgeStyle = (badge: EquipmentItem["badge"]) => {
  switch (badge) {
    case "high-demand":
      return "bg-green-500/90 text-white";
    case "coming-soon":
      return "bg-amber-500/90 text-white";
    default:
      return "bg-muted text-muted-foreground";
  }
};

const getBadgeLabel = (badge: EquipmentItem["badge"]) => {
  switch (badge) {
    case "high-demand":
      return "High Demand";
    case "coming-soon":
      return "Coming Soon";
    default:
      return "Available";
  }
};

function renderEquipmentName(name: string) {
  const match = name.match(/C7[xX]/);

  if (!match) {
    return name;
  }

  const [before, after] = name.split(match[0]);

  return (
    <>
      {before}
      C7
      <span className="inline-block font-[Arial,sans-serif] text-[0.88em] font-bold leading-none align-[0.02em]">
        X
      </span>
      {after}
    </>
  );
}

function EquipmentCard({
  item,
  onViewSpecs,
}: {
  item: EquipmentItem;
  onViewSpecs: (item: EquipmentItem) => void;
}) {
  return (
    <div className="group glass-card hover:scale-[1.03] hover:shadow-[0_12px_40px_-8px_rgba(193,160,232,0.25)] transition-all duration-300 relative">
      <div className={`absolute top-4 right-4 z-10 px-3 py-1 rounded-full text-xs font-semibold ${getBadgeStyle(item.badge)}`}>
        {getBadgeLabel(item.badge)}
      </div>
      <div className={`overflow-hidden rounded-t-lg aspect-[4/3] relative ${item.useContain ? "bg-muted/30 p-2 sm:p-6 flex items-center justify-center" : ""}`}>
        <img
          src={item.image}
          alt={item.name}
          className={`transition-transform duration-700 group-hover:scale-110 ${item.useContain ? "object-contain max-h-full max-w-full scale-[0.65] sm:scale-90" : "w-full h-full object-cover"} ${item.imageScale || ""}`}
          loading="lazy"
        />
        {item.badge === "coming-soon" && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <span className="text-white font-bold text-lg tracking-wide">Coming Soon</span>
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-start gap-2 mb-1">
          <h3 className="text-lg font-bold text-foreground">{renderEquipmentName(item.name)}</h3>
        </div>
        <p className="text-muted-foreground text-sm mb-1">From {item.rate} <span className="text-xs">(incl GST)</span></p>
        {item.deliveryNote && (
          <p className="text-xs text-primary/80 mb-4 font-medium">{item.deliveryNote}</p>
        )}
        {!item.deliveryNote && <div className="mb-4" />}
        <div className="flex flex-col gap-2">
          {item.badge === "coming-soon" ? (
            <span className="text-center text-sm font-medium text-muted-foreground py-2.5">
              Enquire for Availability
            </span>
          ) : (
            <>
              <div className="flex items-center gap-3">
                <a
                  href="#booking"
                  className="flex-1 text-center bg-primary text-primary-foreground py-2.5 rounded-md font-medium text-sm hover:scale-105 transition-transform"
                >
                  Book Now
                </a>
                <button
                  onClick={() => onViewSpecs(item)}
                  className="flex-1 text-center text-sm font-medium text-foreground py-2.5 hover:text-primary transition-colors underline underline-offset-4"
                >
                  View Specs
                </button>
              </div>
              {item.brochureUrl && (
                <a
                  href={item.brochureUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center border border-secondary text-muted-foreground py-2.5 rounded-md font-medium text-sm hover:border-primary hover:text-foreground transition-colors"
                >
                  Download Specs ↓
                </a>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default function EquipmentGrid() {
  const [filter, setFilter] = useState("All");
  const [selectedItem, setSelectedItem] = useState<EquipmentItem | null>(null);
  const { ref, visible } = useScrollAnimation();

  const allEquipment = [...availableEquipment, ...comingSoonEquipment];
  const filteredItems = filter === "All" ? allEquipment : allEquipment.filter((e) => e.category === filter);

  return (
    <section id="equipment" className="bg-card py-24 px-6">
      <div
        ref={ref}
        className={`container mx-auto transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p className="label-text text-primary text-center mb-3 text-sm">Our Fleet</p>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground text-center mb-4">
          Premium Excavator & Equipment Hire
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Excavation dry hire Sydney — from mini excavators to tipper trucks, all maintained to the highest standards.
        </p>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-md text-sm font-medium transition-all ${
                filter === cat
                  ? "bg-primary text-primary-foreground"
                  : "border border-secondary text-muted-foreground hover:border-primary hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <EquipmentCard key={item.name} item={item} onViewSpecs={setSelectedItem} />
          ))}
        </div>

        {/* Sydney metro note */}
        <div className="mt-10 text-center bg-muted/30 border border-secondary rounded-xl px-6 py-4">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Outside Sydney Metro?</span>{" "}
            Delivery & collection outside the Sydney metropolitan area is available — please{" "}
            <a href="#booking" className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors">
              contact us
            </a>{" "}
            to confirm delivery & collection pricing for your location.
          </p>
        </div>
        <p className="text-xs text-muted-foreground text-center mt-3">* Delivery & Collection prices are subject to change pending fuel prices.</p>
      </div>

      {/* Specs Modal */}
      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="max-w-3xl bg-card border-secondary">
          <DialogHeader>
            <DialogTitle className="text-foreground">{selectedItem?.name}</DialogTitle>
          </DialogHeader>
          {selectedItem && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="space-y-3">
                <div className={`aspect-[4/3] rounded-lg overflow-hidden ${selectedItem.useContain ? "bg-muted/30 p-4" : ""}`}>
                  <img src={selectedItem.image} alt={selectedItem.name} className={`w-full h-full ${selectedItem.useContain ? "object-contain" : "object-cover"} ${selectedItem.imageScale || ""}`} />
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className={`aspect-[4/3] rounded-md overflow-hidden opacity-60 hover:opacity-100 transition-opacity cursor-pointer ${selectedItem.useContain ? "bg-muted/30 p-2" : ""}`}>
                      <img src={selectedItem.image} alt={`${selectedItem.name} view ${i}`} className={`w-full h-full ${selectedItem.useContain ? "object-contain" : "object-cover"}`} />
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="label-text text-xs text-muted-foreground mb-3">Technical Specifications</h4>
                <table className="w-full text-sm">
                  <tbody className="divide-y divide-secondary">
                    {Object.entries(selectedItem.specs).map(([key, value]) => (
                      <tr key={key}>
                        <td className="py-3 text-muted-foreground">{key}</td>
                        <td className="py-3 text-right font-medium text-foreground">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="mt-6">
                  <p className="text-primary font-bold text-lg mb-1">From {selectedItem.rate} <span className="text-sm font-normal">(incl GST)</span></p>
                  {selectedItem.deliveryNote && (
                    <p className="text-xs text-primary/80 mb-4 font-medium">{selectedItem.deliveryNote}</p>
                  )}
                  {!selectedItem.deliveryNote && <div className="mb-4" />}
                  <div className="flex flex-col gap-2">
                    <a
                      href="#booking"
                      onClick={() => setSelectedItem(null)}
                      className="inline-block text-center bg-primary text-primary-foreground px-6 py-3 rounded-md font-semibold text-sm hover:scale-105 transition-transform"
                    >
                      Book This Machine
                    </a>
                    {selectedItem.brochureUrl && (
                      <a
                        href={selectedItem.brochureUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-center border border-secondary text-muted-foreground px-6 py-3 rounded-md font-medium text-sm hover:border-primary hover:text-foreground transition-colors"
                      >
                        Download Specs ↓
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
