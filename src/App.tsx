import { useState, useEffect } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import WhyChooseUs from "./components/WhyChooseUs";
import ProductsSection from "./components/ProductsSection";
import GallerySection from "./components/GallerySection";
import ManufacturingProcess from "./components/ManufacturingProcess";
import AffordablePricing from "./components/AffordablePricing";
import BusinessHighlights from "./components/BusinessHighlights";
import Testimonials from "./components/Testimonials";
import FAQSection from "./components/FAQSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import EnquiryModal from "./components/EnquiryModal";
import FloatingActions from "./components/FloatingActions";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [prefilledProduct, setPrefilledProduct] = useState<string>("");

  // Handle section scrolling on click
  const handleNavigateToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const targetEl = document.getElementById(sectionId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Scroll spy to highlight navbar based on physical window location
  useEffect(() => {
    const sections = ["home", "about", "products", "gallery", "contact"];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset for navbar height and margins
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Open Enquiry modal with dynamic product prefilled (or empty if generic)
  const handleOpenEnquiryModal = (productName?: string) => {
    setPrefilledProduct(productName || "");
    setIsEnquiryModalOpen(true);
  };

  const handleCloseEnquiryModal = () => {
    setIsEnquiryModalOpen(false);
    setPrefilledProduct("");
  };

  return (
    <div className="relative min-h-screen text-slate-800 bg-white selection:bg-accent-200 selection:text-primary-950 font-sans leading-normal antialiased">
      
      {/* Top Professional Header Bar */}
      <Header />

      {/* Sticky Dynamic Navigation Menu */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigateToSection}
        openEnquiryModal={() => handleOpenEnquiryModal()}
      />

      {/* Hero Banner Area */}
      <Hero
        onScrollToSection={handleNavigateToSection}
        openEnquiryModal={() => handleOpenEnquiryModal()}
      />

      {/* About Us Company Profile and Stories */}
      <AboutUs />

      {/* Why Choose Us Strengths Section */}
      <WhyChooseUs />

      {/* Products alternating list with specification drawers */}
      <ProductsSection onOpenEnquiry={handleOpenEnquiryModal} />

      {/* High impact process timeline */}
      <ManufacturingProcess />

      {/* Affordable Factory-Direct Pricing section */}
      <AffordablePricing onOpenEnquiry={() => handleOpenEnquiryModal("Bulk Custom Dies Set")} />

      {/* Grid gallery catalog with custom categories and zoom lightbox */}
      <GallerySection />

      {/* Business Counter Highlights */}
      <BusinessHighlights />

      {/* Verified industrial client reviews */}
      <Testimonials />

      {/* Industrial accordion FAQs */}
      <FAQSection />

      {/* Contact Section, mock maps, and direct Enquiry Form */}
      <ContactSection
        prefilledProduct={prefilledProduct}
        onClearPrefilledProduct={() => setPrefilledProduct("")}
      />

      {/* Modern responsive Footer and design credits */}
      <Footer
        onNavigate={handleNavigateToSection}
        onOpenEnquiry={handleOpenEnquiryModal}
      />

      {/* Floating Action widgets (WhatsApp, Call, Scroll top) */}
      <FloatingActions />

      {/* Pop-up Enquiry modal */}
      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={handleCloseEnquiryModal}
        prefilledProduct={prefilledProduct}
      />

    </div>
  );
}
