import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Images/Home/logo_1.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Close the mobile menu whenever a link is tapped
  const closeMenu = () => setIsOpen(false);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <NavLink to="/" className="navbar-logo-link" onClick={closeMenu}>
          <img
            src={Logo}
            alt="Vondwe Woodwork & Joinery"
            className="navbar-logo"
          />
        </NavLink>

        <div className="company-name">
          <h1>
            VONDWE WOODWORK
            <br />
            &amp;
            <br />
            JOINERY
          </h1>
        </div>
      </div>

      {/* Hamburger button — only visible on mobile via CSS */}
      <button
        className={`navbar-toggle ${isOpen ? "is-open" : ""}`}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`nav-links ${isOpen ? "is-open" : ""}`}>
        <NavLink to="/" onClick={closeMenu}>Home</NavLink>
        <NavLink to="/about" onClick={closeMenu}>About</NavLink>
        <NavLink to="/services" onClick={closeMenu}>Services</NavLink>
        <NavLink to="/projects" onClick={closeMenu}>Projects</NavLink>
        <NavLink to="/testimonials" onClick={closeMenu}>Testimonials</NavLink>
        <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
      </div>

      {/* Backdrop behind the mobile menu */}
      {isOpen && <div className="navbar-backdrop" onClick={closeMenu}></div>}
    </nav>
  );
}

export default Navbar;