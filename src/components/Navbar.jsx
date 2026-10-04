import { useState, useEffect } from "react";
import { Download, MessageCircle, Send, ChevronRight, X } from "lucide-react";
import {
  NAV_LINKS,
  PROJECT_NAME,
  DISPLAY_WHATSAPP,
  BROCHURE_URL,
  BROCHURE_FILENAME,
  getWhatsAppUrl,
} from "../data/siteConfig";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Scroll listener for header shrink and background change past 50px
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section for scroll-spy highlighting
      const sections = NAV_LINKS.map((link) => link.href.replace("#", ""));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open & listen for Escape key
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.classList.remove("menu-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.replace("#", "");
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveSection(targetId);
    }
  };

  return (
    <>
      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <nav className="nav-container" aria-label="Main Navigation">
          {/* Logo Block */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="logo-block"
            aria-label={`${PROJECT_NAME} Home`}
          >
            <div className="logo-badge">{PROJECT_NAME.charAt(0)}</div>
            <div className="logo-text-group">
              <span className="logo-title">{PROJECT_NAME}</span>
              <span className="logo-tagline">1 & 2 BHK RESIDENCES &bull; RERA APPROVED</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <ul className="nav-links">
            {NAV_LINKS.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`nav-link ${isActive ? "active" : ""}`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Right-Side Action Pill Buttons */}
          <div className="nav-actions">
            <a
              href={BROCHURE_URL}
              download={BROCHURE_FILENAME}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-nav btn-brochure"
              aria-label="Download brochure"
              title="Download Brochure"
            >
              <Download size={14} className="text-accent" />
              <span>Brochure</span>
            </a>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-nav btn-whatsapp-nav"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle size={15} />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Hamburger Menu Button (visible <= 1280px) */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className={`hamburger-btn ${isOpen ? "is-active" : ""}`}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation-drawer"
          >
            <span className="hamburger-line line-1"></span>
            <span className="hamburger-line line-2"></span>
            <span className="hamburger-line line-3"></span>
          </button>
        </nav>
      </header>

      {/* Backdrop for Mobile Drawer */}
      <div
        className={`nav-backdrop ${isOpen ? "is-open" : ""}`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Slide-in Drawer */}
      <aside
        id="mobile-navigation-drawer"
        className={`nav-drawer ${isOpen ? "is-open" : ""}`}
        aria-label="Mobile Navigation"
      >
        <div className="drawer-header">
          <div className="logo-block">
            <div className="logo-badge">{PROJECT_NAME.charAt(0)}</div>
            <div className="logo-text-group">
              <span className="logo-title" style={{ color: "#ffffff" }}>{PROJECT_NAME}</span>
              <span className="logo-tagline">1 & 2 BHK RESIDENCES</span>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <ul className="drawer-links">
          {NAV_LINKS.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`drawer-link ${isActive ? "active" : ""}`}
                >
                  <span>{link.label}</span>
                  <ChevronRight size={16} className="text-accent/70" />
                </a>
              </li>
            );
          })}
        </ul>

        <div className="drawer-actions">
          <a
            href={BROCHURE_URL}
            download={BROCHURE_FILENAME}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-nav btn-brochure"
          >
            <Download size={15} className="text-accent" />
            <span>Download Brochure (PDF)</span>
          </a>

          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-nav btn-whatsapp-nav"
          >
            <MessageCircle size={16} />
            <span>WhatsApp (+91 {DISPLAY_WHATSAPP})</span>
          </a>

          <a
            href="#site-visit"
            onClick={(e) => handleNavClick(e, "#site-visit")}
            className="btn-primary w-full !py-3 !text-xs flex items-center justify-center gap-2"
          >
            <Send size={15} />
            <span>Enquire Now</span>
          </a>
        </div>
      </aside>
    </>
  );
}
