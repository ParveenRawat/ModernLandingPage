import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";

const App = () => {
  return (
    <div className="min-h-screen overflow-hidden text-white bg-slate-950">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
