import { useEffect, useState } from "react";
import Logo from "../assets/images/logo/logo.png";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isTop, setIsTop] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 50) {
        setIsTop(false);
        if (currentScrollY < scrollPosition) {
          setShowNavbar(true);
        } else {
          setShowNavbar(false);
        }
      } else {
        setIsTop(true);
        setShowNavbar(true);
      }

      setScrollPosition(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollPosition]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  let navbarStyle = isTop ? "bg-transparent py-4" : "bg-white shadow py-6";
  let mobileMenuStyle = isMobileMenuOpen ? "left-0" : "-left-full";

  return (
    <>
      <nav
        className={`fixed w-full top-0 transition-all duration-300 z-10 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        } ${navbarStyle}`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <a href="">
              <img src={Logo} alt="Logo" className="w-28" />
            </a>
            <ul
              className={`fixed top-0 ${mobileMenuStyle} md:static flex flex-col md:flex-row gap-8 w-full md:w-auto h-dvh md:h-auto bg-white md:bg-transparent md:shadow-none shadow-lg transition-all duration-300 items-center justify-center uppercase font-semibold text-lg`}
            >
              <li>
                <a href="#home" onClick={() => setIsMobileMenuOpen(false)}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>
                  About
                </a>
              </li>
              <li>
                <a href="#client" onClick={() => setIsMobileMenuOpen(false)}>
                  Client
                </a>
              </li>
              <li>
                <a href="#gallery" onClick={() => setIsMobileMenuOpen(false)}>
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#testimonial"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Testimonial
                </a>
              </li>
            </ul>
            <button
              onClick={toggleMobileMenu}
              className="text-3xl md:hidden focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <i className="ri-close-line"></i>
              ) : (
                <i className="ri-menu-3-line"></i>
              )}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
