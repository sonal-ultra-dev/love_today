import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import Hero from "./components/sections/Hero.jsx";
import HowItWorks from "./components/sections/HowItWorks.jsx";
import OneToOneClub from "./components/sections/OneToOneClub.jsx";
import ReferralProgram from "./components/sections/ReferralProgram.jsx";
import Stories from "./components/sections/Stories.jsx";
import Safety from "./components/sections/Safety.jsx";
import CTABanner from "./components/sections/CTABanner.jsx";
import Pricing from "./pages/Pricing.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import Terms from "./pages/Terms.jsx";
import RefundPolicy from "./pages/RefundPolicy.jsx";
import ServiceDeliveryPolicy from "./pages/ServiceDeliveryPolicy.jsx";
import Contact from "./pages/Contact.jsx";

function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <OneToOneClub />
      <ReferralProgram />
      <Stories />
      <Safety />
      <CTABanner />
    </>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-ink">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/service-delivery-policy" element={<ServiceDeliveryPolicy />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}