"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => {
      window.removeEventListener("scroll", handleStickyNavbar);
    };
  }, []);

  // Submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const pathname = usePathname();

  return (
    <>
      <header
        className={`header left-0 top-0 z-40 flex w-full items-center ${
          sticky
            ? "dark:bg-gray-900/90 dark:shadow-sticky-dark fixed z-[9999] bg-white/90 shadow-md backdrop-blur-md transition"
            : "absolute bg-transparent"
        }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            {/* Enhanced Logo Section with Constant Animation */}
            <div className="w-60 max-w-full px-4 xl:mr-12">
              <Link
                href="/"
                className={`header-logo group block w-full transition-all duration-300 ${
                  sticky ? "py-5 lg:py-2" : "py-8"
                }`}
              >
                <div className="relative">
                  {/* Animated Gradient Border */}
                  <div className="absolute -inset-1 -z-10 rounded-lg bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] animate-gradient-shift opacity-80 blur-sm"></div>
                  
                  {/* Main Logo Container */}
                  <div className="relative z-10 overflow-hidden rounded-lg p-1">
                    {/* Constant Inner Glow */}
                    <div className="absolute inset-0 -z-10 rounded-md bg-gradient-to-br from-primary/20 to-secondary/20 opacity-60"></div>
                    
                    {/* Logo with Dual Animation */}
                    <div className="relative z-10 rounded-md bg-white/90 p-2 backdrop-blur-sm dark:bg-gray-900/90">
                      <div className="relative overflow-hidden rounded">
                        {/* Pulsing Background Animation */}
                        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/10 to-secondary/10 animate-pulse-slow"></div>
                        
                        <Image
                          src="/images/logo/logo.png"
                          alt="logo"
                          width={140}
                          height={30}
                          className="w-full dark:hidden transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
                          priority
                        />
                        <Image
                          src="/images/logo/logo.png"
                          alt="logo"
                          width={140}
                          height={30}
                          className="hidden w-full dark:block transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
                          priority
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover Glow Effect */}
                  <div className="absolute -bottom-2 -left-2 -right-2 -top-2 -z-20 rounded-lg bg-primary/20 opacity-0 blur-md transition-all duration-300 group-hover:opacity-100"></div>
                </div>
              </Link>
            </div>

            {/* Rest of the header code remains the same as previous version */}
            <div className="flex w-full items-center justify-between px-4">
              <div>
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  aria-expanded={navbarOpen ? "true" : "false"}
                  className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg p-3 ring-primary focus:ring-2 lg:hidden"
                >
                  <div className="relative h-6 w-6">
                    <span
                      className={`absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-dark transition-all duration-300 dark:bg-white ${
                        navbarOpen ? "top-1/2 rotate-45" : ""
                      }`}
                    />
                    <span
                      className={`absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-dark transition-all duration-300 dark:bg-white ${
                        navbarOpen ? "opacity-0" : ""
                      }`}
                    />
                    <span
                      className={`absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-dark transition-all duration-300 dark:bg-white ${
                        navbarOpen ? "top-1/2 -rotate-45" : ""
                      }`}
                    />
                  </div>
                </button>

                <nav
                  id="navbarCollapse"
                  className={`navbar absolute right-0 z-30 w-[280px] rounded-xl border border-gray-200 bg-white/95 shadow-2xl backdrop-blur-lg transition-all duration-300 dark:border-gray-700 dark:bg-gray-900/95 lg:visible lg:static lg:w-auto lg:border-none lg:bg-transparent lg:shadow-none lg:backdrop-blur-0 dark:lg:bg-transparent ${
                    navbarOpen
                      ? "visible top-full opacity-100"
                      : "invisible top-[120%] opacity-0"
                  }`}
                >
                  <ul className="block lg:flex lg:space-x-10">
                    {menuData.map((menuItem) => (
                      <li key={menuItem.id || menuItem.title} className="group relative">
                        {menuItem.path ? (
                          <Link
                            href={menuItem.path}
                            className={`relative flex py-2 text-base font-medium lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${
                              pathname === menuItem.path
                                ? "text-primary dark:text-white"
                                : "text-dark hover:text-primary dark:text-white/80 dark:hover:text-white"
                            }`}
                          >
                            {menuItem.title}
                            {pathname === menuItem.path && (
                              <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-primary lg:-bottom-0"></span>
                            )}
                          </Link>
                        ) : (
                          <>
                            <p
                              onClick={() => handleSubmenu(menuItem.id)}
                              className="flex cursor-pointer items-center justify-between py-2 text-base font-medium text-dark hover:text-primary dark:text-white/80 dark:hover:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6"
                            >
                              {menuItem.title}
                              <span className="pl-3">
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 25 24"
                                  className={`transform transition-transform duration-200 ${
                                    openIndex === menuItem.id ? "rotate-180" : ""
                                  }`}
                                >
                                  <path
                                    fill="currentColor"
                                    d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                                  />
                                </svg>
                              </span>
                            </p>
                            <div
                              className={`submenu relative left-0 top-full rounded-lg bg-white/95 p-4 shadow-lg transition-all duration-300 group-hover:opacity-100 dark:bg-gray-900/95 lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:opacity-0 lg:shadow-xl lg:backdrop-blur-lg lg:group-hover:visible lg:group-hover:top-full ${
                                openIndex === menuItem.id ? "block" : "hidden"
                              }`}
                            >
                              {menuItem.submenu.map((submenuItem) => (
                                <Link
                                  href={submenuItem.path}
                                  key={submenuItem.id || submenuItem.title}
                                  className="block rounded-lg py-2.5 px-4 text-sm font-medium text-dark transition-colors hover:bg-gray-100 hover:text-primary dark:text-white/80 dark:hover:bg-gray-800 dark:hover:text-white"
                                >
                                  {submenuItem.title}
                                </Link>
                              ))}
                            </div>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              <div className="flex items-center justify-end pr-16 lg:pr-0">
                <Link
                  href="/signin"
                  className="hidden px-6 py-2.5 text-base font-medium text-dark transition-colors hover:text-primary dark:text-white/80 dark:hover:text-white md:block"
                >
                  Sign In
                </Link>
                <Link
                  href="/signup"
                  className="ease-in-up hidden rounded-lg bg-gradient-to-r from-primary to-secondary px-6 py-2.5 text-base font-medium text-white shadow-lg shadow-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/50 md:block"
                >
                  Sign Up
                </Link>
                <div className="ml-4">
                  <ThemeToggler />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Add these to your global CSS or Tailwind config */}
      <style jsx global>{`
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 0.9; }
        }
        .animate-gradient-shift {
          animation: gradient-shift 6s ease infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};

export default Header;