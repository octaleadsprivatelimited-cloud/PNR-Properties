import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen((prev) => !prev);
  const closeMenu = () => setOpen(false);

  const renderLinks = (direction = "row") => (
    <nav className={`flex ${direction === "column" ? "flex-col space-y-4 md:space-y-6" : "items-center gap-6 md:gap-8"}`}>
      {navItems.map((item) => (
        <NavLink
          key={item.label}
          to={item.to}
          onClick={closeMenu}
          className={`font-medium uppercase tracking-[0.2em] text-brand/80 transition-colors duration-300 hover:text-brand ${direction === "column" ? "text-base md:text-sm" : "text-sm"}`}
        >
          {item.label}
        </NavLink>
      ))}
      <NavLink
        to="/contact"
        onClick={closeMenu}
        className={`rounded-full border border-brand font-semibold uppercase tracking-[0.2em] text-brand transition-all duration-300 hover:bg-brand hover:text-white ${direction === "column" ? "px-6 py-2.5 text-base md:px-5 md:py-2 md:text-sm" : "px-5 py-2 text-sm"}`}
      >
        Enquire Now
      </NavLink>
    </nav>
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur shadow-sm">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-2.5 md:px-7 md:py-3">
        <NavLink to="/" className="flex items-center gap-3 -ml-5 md:-ml-7">
          <span className="text-lg font-semibold uppercase tracking-[0.1em] text-brand md:text-xl">PNR Properties</span>
        </NavLink>
        <div className="hidden lg:block text-brand">{renderLinks()}</div>
        <button
          className="text-2xl text-brand lg:hidden"
          type="button"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {open ? <HiX /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>
      {open && (
        <div className="border-t border-brand/10 bg-white px-6 pb-10 pt-6 text-brand shadow-lg lg:hidden">
          {renderLinks("column")}
        </div>
      )}
    </header>
  );
};

export default Navbar;

