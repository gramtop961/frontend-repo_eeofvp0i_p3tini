import { Star, Gauge, Fuel, BatteryCharging, BadgeDollarSign } from "lucide-react";

const cars = [
  {
    name: "Specter GT",
    price: 124900,
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
    specs: [
      { icon: Gauge, label: "3.1s 0-60" },
      { icon: Fuel, label: "Twin Turbo" },
      { icon: Star, label: "Carbon Package" },
    ],
  },
  {
    name: "Eon XR",
    price: 89500,
    img: "https://images.unsplash.com/photo-1549921296-3ecfbbc25fbd?q=80&w=2000&auto=format&fit=crop",
    specs: [
      { icon: BatteryCharging, label: "390mi Range" },
      { icon: Gauge, label: "2.9s 0-60" },
      { icon: Star, label: "Autopilot" },
    ],
  },
  {
    name: "Vanta RS",
    price: 96300,
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
    specs: [
      { icon: Gauge, label: "AWD" },
      { icon: Fuel, label: "650hp" },
      { icon: Star, label: "Track Ready" },
    ],
  },
];

export default function Inventory() {
  return (
    <section id="inventory" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Featured Inventory</h2>
            <p className="text-white/70 mt-1">Hand-picked vehicles ready for immediate delivery</p>
          </div>
          <a href="#all" className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-white border border-white/10">
            <BadgeDollarSign size={18} />
            View all offers
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cars.map((car) => (
            <div key={car.name} className="group overflow-hidden rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-white/10">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={car.img} alt={car.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-3 left-3 flex gap-2">
                  {car.specs.map((s, i) => (
                    <span key={i} className="inline-flex items-center gap-1.5 rounded-lg bg-white/10 px-2.5 py-1.5 text-xs text-white border border-white/10 backdrop-blur">
                      <s.icon size={14} /> {s.label}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-semibold text-lg">{car.name}</h3>
                  <p className="text-white/90 font-bold">${(car.price).toLocaleString()}</p>
                </div>
                <div className="mt-3 flex gap-2">
                  <button className="flex-1 rounded-lg bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 font-medium transition-colors">Details</button>
                  <button className="flex-1 rounded-lg bg-white/10 hover:bg-white/15 text-white px-4 py-2 border border-white/10">Test drive</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
