import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="hidden lg:flex fixed bottom-24 right-7 z-40 w-11 h-11 bg-primary/90 text-white rounded-full items-center justify-center shadow-lg hover:bg-accent transition-all duration-200"
      aria-label="Scroll to top"
    >
      <ChevronUp size={20} />
    </button>
  );
}
