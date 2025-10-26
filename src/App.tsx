import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import SmartHomeAutomation from "./components/SmartHomeAutomation";
import NetworkOptimization from "./components/NetworkOptimization";
import WebsiteDevelopment from "./components/WebsiteDevelopment";
import LowVoltageWiring from "./components/LowVoltageWiring";
import TVInstallation from "./components/TVInstallation";
import SoundSystemInstallation from "./components/SoundSystemInstallation";
import SmartLighting from "./components/SmartLighting";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";

function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/smart-home-automation" element={<SmartHomeAutomation />} />
        <Route path="/network-optimization" element={<NetworkOptimization />} />
        <Route path="/website-development" element={<WebsiteDevelopment />} />
        <Route path="/low-voltage-wiring" element={<LowVoltageWiring />} />
        <Route path="/tv-installation" element={<TVInstallation />} />
        <Route path="/sound-system-installation" element={<SoundSystemInstallation />} />
        <Route path="/smart-lighting" element={<SmartLighting />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
      </Routes>
    </Router>
  );
}