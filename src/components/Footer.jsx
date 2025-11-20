export default function Footer() {
  return (
    <footer id="contact" className="py-10 border-t border-white/10 mt-20 bg-gradient-to-b from-transparent to-black/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-3 gap-8 text-white/70">
          <div>
            <div className="text-white font-semibold text-lg">Carbon Drive</div>
            <p className="mt-2 text-sm">Premium cars, curated by enthusiasts. Visit our showroom or book a test drive today.</p>
          </div>
          <div>
            <div className="text-white font-semibold mb-2">Hours</div>
            <p className="text-sm">Mon–Sat: 9:00am – 7:00pm</p>
            <p className="text-sm">Sun: 11:00am – 5:00pm</p>
          </div>
          <div>
            <div className="text-white font-semibold mb-2">Contact</div>
            <p className="text-sm">(123) 456-7890</p>
            <p className="text-sm">sales@carbondrive.com</p>
          </div>
        </div>
        <div className="mt-8 text-xs text-white/50">© {new Date().getFullYear()} Carbon Drive. All rights reserved.</div>
      </div>
    </footer>
  );
}
