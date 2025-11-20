import { useEffect, useMemo, useRef, useState } from "react";

// Spline embed component
function SplineEmbed({ url, active }) {
  return (
    <iframe
      title="3D Car"
      src={url}
      className={`absolute inset-0 w-full h-full transition-opacity duration-700 ${active ? "opacity-100" : "opacity-0"}`}
      style={{ pointerEvents: active ? "auto" : "none" }}
      loading="lazy"
      allow="autoplay; fullscreen"
    />
  );
}

const CARS = [
  {
    name: "Specter GT",
    tagline: "Twin‑turbo V8 • 0-60 in 3.1s",
    price: "$124,900",
    // Primary slide uses the provided Spline scene
    type: "spline",
    url: "https://prod.spline.design/m8wpIQzXWhEh9Yek/scene.splinecode",
  },
  {
    name: "Eon XR",
    tagline: "All‑electric • 390mi range",
    price: "$89,500",
    type: "image",
    url: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2000&auto=format&fit=crop",
  },
  {
    name: "Vanta RS",
    tagline: "Carbon‑ceramic brakes • AWD",
    price: "$96,300",
    type: "image",
    url: "https://images.unsplash.com/photo-1518551933037-3b14bda8f0bf?q=80&w=2000&auto=format&fit=crop",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current && clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % CARS.length);
    }, 5000); // auto-advance every 5s
    return () => timerRef.current && clearInterval(timerRef.current);
  }, []);

  const goTo = (i) => setIndex(i);
  const next = () => setIndex((i) => (i + 1) % CARS.length);
  const prev = () => setIndex((i) => (i - 1 + CARS.length) % CARS.length);

  return (
    <section className="relative pt-24">
      <div className="relative h-[80vh] w-full overflow-hidden rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900 to-black border border-white/10">
        {/* Slides */}
        <div className="absolute inset-0">
          {CARS.map((car, i) => (
            <div key={i} className={`absolute inset-0 transition-opacity duration-700 ${i === index ? "opacity-100" : "opacity-0"}`}>
              {car.type === "spline" ? (
                <SplineEmbed url={car.url} active={i === index} />
              ) : (
                <img
                  src={car.url}
                  alt={car.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              )}
              {/* Gradient overlays for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_70%_110%,rgba(59,130,246,0.25),transparent)]" />
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-end">
          <div className="w-full p-6 sm:p-10 lg:p-14">
            <div className="max-w-3xl">
              <div className="mb-4 flex items-center gap-2">
                <div className="h-1 w-12 rounded bg-blue-500"></div>
                <p className="text-blue-200/80 text-sm">Premium Performance Dealership</p>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                Discover your next drive
              </h1>

              <p className="mt-4 text-lg text-white/80">
                Explore an exclusive selection of performance cars, electric
                innovations, and limited editions — curated for enthusiasts.
              </p>

              {/* Car meta for current slide */}
              <div className="mt-6 inline-flex items-center gap-4 rounded-2xl bg-white/10 px-5 py-3 backdrop-blur border border-white/10 text-white">
                <span className="font-semibold">{CARS[index].name}</span>
                <span className="text-white/70">{CARS[index].tagline}</span>
                <span className="ml-2 rounded-full bg-white/15 px-3 py-1 text-sm">{CARS[index].price}</span>
              </div>

              {/* CTA */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href="#inventory" className="inline-flex items-center justify-center rounded-xl bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 font-semibold shadow-lg shadow-blue-500/25 transition-colors">
                  Browse inventory
                </a>
                <a href="#test-drive" className="inline-flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/15 text-white px-6 py-3 font-semibold border border-white/10 backdrop-blur transition-colors">
                  Book a test drive
                </a>
              </div>
            </div>

            {/* Controls */}
            <div className="mt-8 flex items-center justify-between">
              <div className="flex items-center gap-2">
                {CARS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`h-1.5 rounded-full transition-all ${i === index ? "w-10 bg-white" : "w-4 bg-white/40"}`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button onClick={prev} className="px-3 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-white border border-white/10">Prev</button>
                <button onClick={next} className="px-3 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-white border border-white/10">Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
