const projects = [
  {
    image: "/assets/excavator-lilac.jpg",
    title: "Barangaroo South Excavation",
    description: "Deep basement excavation for a 40-storey commercial tower.",
    equipment: "13T Excavator, 5T Mini Excavator",
  },
  {
    image: "/assets/wheel-loader.jpg",
    title: "Parramatta Light Rail",
    description: "Material handling and site clearance for rail infrastructure.",
    equipment: "Wheel Loader, Backhoe Loader",
  },
  {
    image: "/assets/skidsteer-lilac.jpg",
    title: "Bondi Residential Development",
    description: "Tight-access earthworks for a boutique apartment complex.",
    equipment: "Skid Steer Loader, 1.7T Mini Excavator",
  },
  {
    image: "/assets/backhoe-lilac.jpg",
    title: "Western Sydney Airport",
    description: "Large-scale civil works and drainage trenching.",
    equipment: "Backhoe Loader, 25T Excavator",
  },
];

export default function ProjectsGallery() {
  return (
    <section id="about" className="bg-card py-24 px-6">
      <div className="container mx-auto">
        <p className="label-text text-primary text-center mb-3 text-sm">
          Portfolio
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground text-center mb-16">
          Our Projects in Action
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((p) => (
            <div
              key={p.title}
              className="group glass-card overflow-hidden hover:scale-[1.02] transition-all duration-300"
            >
              <div className="overflow-hidden aspect-[16/10]">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  width="800"
                  height="500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm mb-2">{p.description}</p>
                <p className="text-xs text-primary font-medium">Equipment: {p.equipment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
