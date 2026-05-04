import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface NavItem {
  label: string;
  href?: string;
  exact?: boolean;
  children?: { label: string; href: string }[];
}

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const media = window.matchMedia(query);
    setMatches(media.matches);
    const listener = (event: MediaQueryListEvent) => setMatches(event.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query]);
  return matches;
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const whatsappGroupLink = "https://chat.whatsapp.com/B7gWbAkEL3gLYSi89tHVrZ";

  // 1. Scroll Lock Logic
  useEffect(() => {
    if (isOpen && isMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen, isMobile]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems: NavItem[] = [
    { label: "Home", href: "/", exact: true },
    { label: "About", href: "/about" },
    {
      label: "Summit",
      children: [
        { label: "Programme", href: "/programme" },
        { label: "Speakers", href: "/speakers" },
      ],
    },
    {
      label: "Insights",
      children: [
        { label: "Agenda", href: "/agenda" },
        { label: "Advisory", href: "/advisory" },
        { label: "Blogs", href: "/blogs" },
        { label: "Sponsors", href: "/sponsors" },
        { label: "Events", href: "/events" },
      ],
    },
  ];

  const isActive = (href: string, exact: boolean = false) => {
    if (exact) return location.pathname === href;
    return location.pathname.startsWith(href) && href !== "/";
  };

  const isAdvisoryPage = location.pathname === "/advisory";

  const getLogoPath = () => {
    if (isMobile && isOpen) return "/images/company_logo.png";
    if (scrolled || isAdvisoryPage) return "/images/company_logo.png";
    return "/images/company_logo_white.png";
  };

  return (
    <nav
      className={`fixed w-full z-[1000] transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="shrink-0 z-[1001]">
            <NavLink to="/" className="block">
              <img
                src={getLogoPath()}
                alt="Logo"
                className="md:w-40 w-24 h-auto transition-all duration-300"
              />
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center space-x-10">
            {navItems.map((item) => {
              const hasChildren = !!item.children;
              const active = item.href
                ? isActive(item.href, item.exact)
                : false;

              return (
                <div key={item.label} className="relative group py-2">
                  {item.href ? (
                    <NavLink
                      to={item.href}
                      className={`text-[12px] tracking-[0.2em] uppercase font-medium transition-all duration-300 ${
                        active
                          ? "text-emerald-500"
                          : scrolled || isAdvisoryPage
                            ? "text-gray-700"
                            : "text-white"
                      }`}
                    >
                      {item.label}
                    </NavLink>
                  ) : (
                    <button
                      className={`flex items-center gap-1 text-[12px] tracking-[0.2em] uppercase font-medium transition-all duration-300 ${
                        scrolled || isAdvisoryPage
                          ? "text-gray-700 hover:text-emerald-600"
                          : "text-white hover:text-emerald-300"
                      }`}
                    >
                      {item.label}
                      <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
                    </button>
                  )}

                  {active && (
                    <motion.div
                      layoutId="navIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-emerald-500"
                    />
                  )}

                  {hasChildren && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-48 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden py-2 px-1">
                        {item.children?.map((child) => (
                          <NavLink
                            key={child.href}
                            to={child.href}
                            className={({ isActive: cActive }) => `
                              block px-4 py-2.5 text-[11px] tracking-widest uppercase rounded-lg transition-colors
                              ${cActive ? "bg-emerald-50 text-emerald-700 font-bold" : "text-gray-600 hover:bg-gray-50 hover:text-emerald-600"}
                            `}
                          >
                            {child.label}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Desktop Community Button */}
          <div className="hidden md:block">
            <a
              href={whatsappGroupLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 text-[.8rem] py-2.5 bg-[#11766E] text-white font-semibold rounded-lg transition-all duration-300 hover:bg-emerald-800 hover:shadow-md hover:translate-y-px active:translate-y-0 inline-block"
            >
              Join Our Community
            </a>
          </div>

          {/* 2. Reintegrated Hamburger Menu */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-10 h-10 z-[1001] focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6">
              <span
                className={`absolute h-0.5 w-6 transition-all duration-300 ${
                  isOpen
                    ? "rotate-45 translate-y-0 bg-gray-800"
                    : `-translate-y-2 ${scrolled || isAdvisoryPage ? "bg-gray-800" : "bg-white"}`
                }`}
              ></span>
              <span
                className={`absolute h-0.5 w-6 transition-all duration-300 ${
                  isOpen
                    ? "opacity-0"
                    : `opacity-100 ${scrolled || isAdvisoryPage ? "bg-gray-800" : "bg-white"}`
                }`}
              ></span>
              <span
                className={`absolute h-0.5 w-6 transition-all duration-300 ${
                  isOpen
                    ? "-rotate-45 translate-y-0 bg-gray-800"
                    : `translate-y-2 ${scrolled || isAdvisoryPage ? "bg-gray-800" : "bg-white"}`
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-[1000] flex flex-col p-8 pt-32 overflow-y-auto"
          >
            {navItems.map((item) => (
              <div
                key={item.label}
                className="mb-6 border-b border-gray-50 pb-4"
              >
                {item.href ? (
                  <NavLink
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-2xl font-light tracking-widest uppercase text-gray-900"
                  >
                    {item.label}
                  </NavLink>
                ) : (
                  <div className="space-y-4">
                    <p className="text-[10px] tracking-[0.4em] font-black text-emerald-600 uppercase">
                      {item.label}
                    </p>
                    <div className="flex flex-col space-y-4 pl-2">
                      {item.children?.map((child) => (
                        <NavLink
                          key={child.href}
                          to={child.href}
                          onClick={() => setIsOpen(false)}
                          className="text-xl font-light tracking-widest uppercase text-gray-700"
                        >
                          {child.label}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Mobile Community Button */}
            <div className="mt-auto py-6">
              <a
                href={whatsappGroupLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-4 bg-emerald-700 text-white text-center text-[12px] tracking-widest uppercase font-bold rounded-xl shadow-lg"
              >
                Join Our Community
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Nav;
