import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Inventory from "./components/Inventory";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white">
      {/* Background flourishes */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1000px_500px_at_10%_-10%,rgba(59,130,246,0.18),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_400px_at_120%_10%,rgba(147,197,253,0.12),transparent)]" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Inventory />
      </main>
      <Footer />
    </div>
  );
}

export default App;
