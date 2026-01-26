import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

interface NavItem {
  label: string;
  href: string;
  exact?: boolean;
}

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Your WhatsApp group link - REPLACE THIS WITH YOUR ACTUAL LINK
  const whatsappGroupLink = "https://chat.whatsapp.com/B7gWbAkEL3gLYSi89tHVrZ";

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Nav items
  const navItems: NavItem[] = [
    { label: "Home", href: "/", exact: true },
    { label: "About", href: "/about" },
    { label: "Advisory", href: "/advisory" },
    { label: "Agenda", href: "/agenda" },
    { label: "Events", href: "/events" },
    { label: "Blogs", href: "/blogs" },
    { label: "Sponsors", href: "/sponsors" },
  ];

  // Check if a nav item is active
  const isActive = (href: string, exact: boolean = false) => {
    if (exact) {
      return location.pathname === href;
    }
    return location.pathname.startsWith(href) && href !== "/";
  };
  const isAdvisoryPage = location.pathname === "/advisory";

  // Determine which logo to show
  const getLogoPath = (isMobileMenu: boolean = false) => {
    // In mobile menu, always show colored logo
    if (isMobileMenu) {
      return "/images/company_logo.png";
    }

    // In desktop: white logo when not scrolled, colored logo when scrolled
    return scrolled || isAdvisoryPage
      ? "/images/company_logo.png"
      : "/images/company_logo_white.png";
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="shrink-0 z-50">
            <NavLink to="/" className="block">
              <div
                className={`transition-all duration-300 ${
                  scrolled ? "w-32" : "w-40"
                } overflow-hidden flex items-center justify-center`}
              >
                <img
                  src={getLogoPath()}
                  alt="Cranfield Africa Impact Summit"
                  className="w-full h-auto object-contain"
                  onError={(e) => {
                    // Fallback in case the logo doesn't exist
                    const img = e.target as HTMLImageElement;
                    if (img.src.includes("_white")) {
                      img.src = "/images/company_logo.png";
                    }
                  }}
                />
              </div>
            </NavLink>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center space-x-12">
            {navItems.map((item) => {
              const active = isActive(item.href, item.exact);
              return (
                <NavLink
                  key={item.label}
                  to={item.href}
                  className="relative font-medium transition-all duration-300 group"
                >
                  <span
                    className={`transition-colors duration-300 ${
                      active
                        ? "text-emerald-800 font-semibold"
                        : scrolled || isAdvisoryPage
                          ? "text-gray-700 hover:text-emerald-700"
                          : "text-white hover:text-emerald-200"
                    }`}
                  >
                    {item.label}
                  </span>
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
                      active
                        ? "w-full bg-emerald-600"
                        : "w-0 bg-emerald-400 group-hover:w-full"
                    }`}
                  ></span>
                </NavLink>
              );
            })}
          </div>

          {/* WhatsApp Group Button - Desktop */}
          <div className="hidden md:block">
            <a
              href={whatsappGroupLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 text-[.8rem] py-2.5 bg-[#11766E] text-white font-semibold rounded-full transition-all duration-300 hover:bg-emerald-800 hover:shadow-md hover:translate-y-px active:translate-y-0 inline-block"
            >
              Join Our Community
            </a>
          </div>

          {/* Mobile menu button with animated hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden relative w-10 h-10 transition-all duration-300 focus:outline-none z-50 rounded-md ${
              scrolled
                ? "text-gray-700 hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            }`}
            aria-label="Toggle menu"
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6">
              <span
                className={`absolute h-0.5 w-6 transform transition-all duration-300 ${
                  isOpen
                    ? "rotate-45 translate-y-0 bg-gray-700"
                    : scrolled || isAdvisoryPage
                      ? "-translate-y-2 bg-gray-700"
                      : "-translate-y-2 bg-white"
                }`}
              ></span>
              <span
                className={`absolute h-0.5 transform transition-all duration-300 ${
                  isOpen
                    ? "opacity-0 w-0"
                    : scrolled || isAdvisoryPage
                      ? "opacity-100 w-6 bg-gray-700"
                      : "opacity-100 w-6 bg-white"
                }`}
              ></span>
              <span
                className={`absolute h-0.5 w-6 transform transition-all duration-300 ${
                  isOpen
                    ? "-rotate-45 translate-y-0 bg-gray-700"
                    : scrolled || isAdvisoryPage
                      ? "translate-y-2 bg-gray-700"
                      : "translate-y-2 bg-white"
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden fixed top-0 left-0 w-full h-screen bg-white/95 backdrop-blur-lg pt-20 px-6 overflow-hidden animate-fadeIn z-40">
            <div className="flex flex-col space-y-1">
              {navItems.map((item, index) => {
                const active = isActive(item.href, item.exact);
                return (
                  <NavLink
                    key={item.label}
                    to={item.href}
                    className={`relative px-4 py-3 text-lg font-medium transition-all duration-300 rounded-lg ${
                      active
                        ? "bg-emerald-50 text-emerald-800"
                        : "text-gray-800 hover:bg-gray-50"
                    }`}
                    onClick={() => setIsOpen(false)}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <span className="relative z-10">{item.label}</span>
                    {active && (
                      <span className="absolute right-4 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-emerald-600 rounded-full"></span>
                    )}
                  </NavLink>
                );
              })}

              {/* WhatsApp Group Button Mobile */}
              <div className="px-4 py-3 mt-4">
                <a
                  href={whatsappGroupLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 bg-[#2E6932] text-white font-semibold text-center rounded-lg transition-all duration-300 hover:bg-emerald-800"
                >
                  Join Our Community
                </a>
              </div>

              {/* Logo in mobile menu - Always use colored logo */}
              <div className="px-4 py-6 mt-4 border-t border-gray-100 flex justify-center">
                <NavLink to="/" onClick={() => setIsOpen(false)}>
                  <div className="w-48 overflow-hidden flex items-center justify-center">
                    <img
                      src="/images/company_logo.png"
                      alt="Cranfield Africa Impact Summit"
                      className="w-full h-auto object-contain"
                      onError={(e) => {
                        // Fallback in case colored logo doesn't exist
                        const img = e.target as HTMLImageElement;
                        img.src = "/images/company_logo_white.png";
                      }}
                    />
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </nav>
  );
};

export default Nav;
