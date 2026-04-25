import React from "react";
import { Link, useLocation } from "react-router-dom";
import { assets } from "../assets/assets";
import { useClerk, UserButton } from "@clerk/clerk-react";
import { useAppContext } from "../context/AppContext";
import { BRAND, THEME } from "../config/theme";

const BookIcon = () => (
  <svg
    className="w-4 h-4 text-gray-700"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4"
    />
  </svg>
);

const ReviewIcon = () => (
  <svg
    className="w-4 h-4 text-gray-700"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M9 11.5a3 3 0 1 0-3-3 3 3 0 0 0 3 3Zm0 0c-2.21 0-4 1.343-4 3v1.5h8V14.5c0-1.657-1.79-3-4-3Zm8 6.5 2-2m0 0-2-2m2 2H13m5-8h-5m5 4h-3"
    />
  </svg>
);

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Rooms", path: "/rooms" },
    { name: "Experience", path: "/experience" },
    { name: "Reviews", path: "/reviews" },
    { name: "About", path: "/about" },
  ];

  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const { openSignIn } = useClerk();
  const location = useLocation();

  const { user, navigate, isAdmin } = useAppContext();

  React.useEffect(() => {
    if (location.pathname !== "/") {
      setIsScrolled(true);
      return;
    } else {
      setIsScrolled(false);
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${
        isScrolled
          ? "bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4"
          : "py-4 md:py-6"
      }`}
    >
      {/* Logo with Dynamic Brand */}
      <Link to="/" className="flex items-center gap-3">
        {BRAND.logo ? (
          <img
            src={BRAND.logo}
            alt={BRAND.name}
            className={`h-9 ${isScrolled ? "invert opacity-80" : ""}`}
            onError={(e) => { e.target.style.display = 'none'; }}
          />
        ) : (
          <div 
            className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg ${
              isScrolled ? 'text-white' : 'text-white'
            }`}
            style={{ backgroundColor: isScrolled ? THEME.colors.primary : 'rgba(255,255,255,0.2)' }}
          >
            {BRAND.name.charAt(0)}
          </div>
        )}
        <span className={`hidden lg:block font-semibold text-lg ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
          {BRAND.name}
        </span>
      </Link>

      {/* desktop nav */}
      <div className="hidden md:flex items-center gap-4 lg:gap-8">
        {navLinks.map((link, i) => (
          <Link
            key={i}
            to={link.path}
            className={`group flex flex-col gap-0.5 ${
              isScrolled ? "text-gray-700" : "text-white"
            }`}
          >
            {link.name}
            <div
              className={`${
                isScrolled ? "bg-gray-700" : "bg-white"
              } h-0.5 w-0 group-hover:w-full transition-all duration-300`}
            />
          </Link>
        ))}

        {user && isAdmin && (
          <button
            className={`border px-4 py-1 text-sm font-light rounded-full cursor-pointer ${
              isScrolled ? "text-black border-gray-700" : "text-white border-white"
            } transition-all hover:bg-white/10`}
            onClick={() => navigate("/admin")}
          >
            Admin Dashboard
          </button>
        )}
      </div>

      {/* desktop right */}
      <div className="hidden md:flex items-center gap-4">
        <img
          src={assets.searchIcon}
          alt="search"
          className={`${isScrolled && "invert"} h-7 transition-all duration-500`}
        />

        {user && (
          <UserButton>
            <UserButton.MenuItems>
              <UserButton.Action
                label="My Bookings"
                labelIcon={<BookIcon />}
                onClick={() => navigate("/my-bookings")}
              />
              <UserButton.Action
                label="My Reviews"
                labelIcon={<ReviewIcon />}
                onClick={() => navigate("/my-reviews")}
              />
            </UserButton.MenuItems>
          </UserButton>
        )}
      </div>

      {/* mobile menu button */}
      <div className="flex items-center gap-3 md:hidden">
        {user && (
          <UserButton>
            <UserButton.MenuItems>
              <UserButton.Action
                label="My Bookings"
                labelIcon={<BookIcon />}
                onClick={() => navigate("/my-bookings")}
              />
              <UserButton.Action
                label="My Reviews"
                labelIcon={<ReviewIcon />}
                onClick={() => navigate("/my-reviews")}
              />
            </UserButton.MenuItems>
          </UserButton>
        )}
        <img
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          src={assets.menuIcon}
          alt="menu"
          className={`${isScrolled && "invert"} h-4`}
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4"
          onClick={() => setIsMenuOpen(false)}
        >
          <img src={assets.closeIcon} alt="close-menu" className="h-5" />
        </button>

        {navLinks.map((link, i) => (
          <Link key={i} to={link.path} onClick={() => setIsMenuOpen(false)}>
            {link.name}
          </Link>
        ))}
        
        {user && isAdmin && (
          <Link to="/admin" onClick={() => setIsMenuOpen(false)}>
            Admin Dashboard
          </Link>
        )}
      </div>

      {!user && (
        <button
          onClick={openSignIn}
          className="text-white px-8 py-2.5 rounded-full transition-all duration-500 hidden md:block hover:opacity-90"
          style={{ 
            backgroundColor: isScrolled ? THEME.colors.primary : 'rgba(255,255,255,0.2)',
            backdropFilter: isScrolled ? 'none' : 'blur(8px)'
          }}
        >
          Login
        </button>
      )}
    </nav>
  );
};

export default Navbar;
