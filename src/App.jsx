import Navbar from "./components/Navbar";
import SEO from "./components/SEO";
import HeroSection from "./components/HeroSection";
import AboutProject from "./components/AboutProject";
import ReraSection from "./components/ReraSection";
import ApartmentSection from "./components/ApartmentSection";
import ConstructionProgress from "./components/ConstructionProgress";
import HomeLoan from "./components/HomeLoan";
import AmenitiesSection from "./components/AmenitiesSection";
import LuckyDraw from "./components/LuckyDraw";
import LegalQuality from "./components/LegalQuality";
import GallerySection from "./components/GallerySection";
import LocationSection from "./components/LocationSection";
import SiteVisitForm from "./components/SiteVisitForm";
import BuilderSection from "./components/BuilderSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FAQ from "./components/FAQ";
import InquirySection from "./components/InquirySection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import StickyMobileBar from "./components/StickyMobileBar";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="font-sans text-charcoal antialiased overflow-x-hidden selection:bg-accent/25 selection:text-primary min-h-screen flex flex-col bg-[#FAF9F5]">
      <SEO />
      <Navbar />
      
      <main className="flex-1">
        <HeroSection />
        <AboutProject />
        <ReraSection />
        <ApartmentSection />
        <ConstructionProgress />
        <HomeLoan />
        <AmenitiesSection />
        <LuckyDraw />
        <LegalQuality />
        <GallerySection />
        <LocationSection />
        <SiteVisitForm />
        <BuilderSection />
        <TestimonialsSection />
        <FAQ />
        <InquirySection />
        <ContactSection />
      </main>

      <Footer />
      <FloatingWhatsApp />
      <StickyMobileBar />
      <ScrollToTop />
    </div>
  );
}

export default App;
