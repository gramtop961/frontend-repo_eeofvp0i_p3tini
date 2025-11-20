import { Menu, Phone, MapPin } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-slate-900/70 backdrop-blur border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-slate-700 to-slate-800 border border-white/10 flex items-center justify-center">
            <span className="text-white font-bold">CD</span>
          </div>
          <div className="leading-tight">
            <div className="text-white font-semibold tracking-wide">Carbon Drive</div>
            <div className="text-xs text-white/60 -mt-0.5">Premium Motors</div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#inventory" className="hover:text-white transition-colors">Inventory</a>
          <a href="#financing" className="hover:text-white transition-colors">Financing</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </nav>

        <div className="hidden sm:flex items-center gap-4">
          <a href="tel:+1234567890" className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-white text-sm transition-colors">
            <Phone size={16} />
            <span>(123) 456-7890</span>
          </a>
          <a href="#map" className="hidden lg:inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-white text-sm transition-colors">
            <MapPin size={16} />
            <span>Find us</span>
          </a>
        </div>

        <button className="md:hidden text-white/80 hover:text-white" aria-label="Menu">
          <Menu />
        </button>
      </div>
    </header>
  );
}
