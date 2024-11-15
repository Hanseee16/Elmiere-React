import { useState, useEffect } from "react";
import Logo from "../assets/images/logo/logo.png";

const TestNavbar = () => {
  const [toggleNavbar, setToggleNavbar] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`bg-color-background-light dark:bg-color-background-dark fixed w-full top-0 z-10 transition-all duration-300 ease-in-out ${
          isScrolled ? "shadow-md" : "shadow-none"
        }`}
      >
        <div
          className={`container mx-auto ${
            isScrolled
              ? "px-4 md:px-6 lg:px-8 py-4 md:py-6"
              : "px-4 md:px-6 lg:px-8 py-3 md:py-5"
          }  flex justify-between items-center`}
        >
          <div>
            <a href="">
              <img
                src={Logo}
                alt="Logo"
                className={`w-20 md:w-24 ${darkMode ? "invert" : ""}`}
              />
            </a>
          </div>

          <div className="hidden lg:block">
            <ul className="flex items-center gap-12 uppercase text-base font-semibold text-color-secondary-text-light dark:text-color-secondary-text-dark">
              <li>
                <a
                  href=""
                  className="hover:text-color-primary-text-light dark:hover:text-color-primary-text-dark transition-all"
                >
                  home
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="hover:text-color-primary-text-light dark:hover:text-color-primary-text-dark transition-all"
                >
                  about
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="hover:text-color-primary-text-light dark:hover:text-color-primary-text-dark transition-all"
                >
                  client
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="hover:text-color-primary-text-light dark:hover:text-color-primary-text-dark transition-all"
                >
                  gallery
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="hover:text-color-primary-text-light dark:hover:text-color-primary-text-dark transition-all"
                >
                  testimonial
                </a>
              </li>
            </ul>
          </div>
          <div className="flex gap-3 items-center text-xl">
            <i
              className={
                darkMode
                  ? "ri-sun-fill cursor-pointer text-color-secondary-text-light dark:text-color-secondary-text-dark hover:text-color-primary-text-light dark:hover:text-color-primary-text-dark transition-all"
                  : "ri-moon-fill cursor-pointer text-color-secondary-text-light dark:text-color-secondary-text-dark hover:text-color-primary-text-light dark:hover:text-color-primary-text-dark transition-all"
              }
              onClick={() => setDarkMode(!darkMode)}
            ></i>
            <i
              className={`${
                toggleNavbar
                  ? "ri-close-line cursor-pointer text-color-secondary-text-light dark:text-color-primary-text-dark"
                  : "ri-menu-3-line cursor-pointer text-color-secondary-text-light dark:text-color-primary-text-dark"
              } lg:hidden`}
              onClick={() => setToggleNavbar(!toggleNavbar)}
            ></i>
          </div>
        </div>
        <div className={toggleNavbar ? "block" : "hidden"}>
          <ul className="flex flex-col justify-center items-center h-screen gap-20 px-4 text-center uppercase font-semibold text-color-primary-text-light dark:text-color-primary-text-dark">
            <li>
              <a
                href=""
                className="hover:text-color-primary-text-light dark:hover:text-color-primary-text-dark transition-all"
              >
                home
              </a>
            </li>
            <li>
              <a
                href=""
                className="hover:text-color-primary-text-light dark:hover:text-color-primary-text-dark transition-all"
              >
                about
              </a>
            </li>
            <li>
              <a
                href=""
                className="hover:text-color-primary-text-light dark:hover:text-color-primary-text-dark transition-all"
              >
                client
              </a>
            </li>
            <li>
              <a
                href=""
                className="hover:text-color-primary-text-light dark:hover:text-color-primary-text-dark transition-all"
              >
                gallery
              </a>
            </li>
            <li>
              <a
                href=""
                className="hover:text-color-primary-text-light dark:hover:text-color-primary-text-dark transition-all"
              >
                testimonial
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default TestNavbar;
