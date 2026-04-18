import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 200, suffix: "+", label: "Pieces of Equipment" },
  { value: "Next-Day", suffix: "", label: "Delivery & Collection" },
  { value: 500, suffix: "+", label: "Projects Completed" },
];

function AnimatedNumber({ target, suffix }: { target: number | string; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (typeof target !== "number") return;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          const interval = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(interval);
            } else {
              setCount(Math.floor(current));
            }
          }, 1300 / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  if (typeof target === "string") {
    return <span ref={ref}>{target}</span>;
  }
  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function StatsBar() {
  return (
    <section id="stats" className="bg-primary py-10 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center py-4 ${
                i < stats.length - 1
                  ? "md:border-r md:border-white/30"
                  : ""
              }`}
            >
              <p className="text-5xl leading-none font-bold text-primary-foreground mb-2">
                <AnimatedNumber target={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-primary-foreground/80 text-sm label-text">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
