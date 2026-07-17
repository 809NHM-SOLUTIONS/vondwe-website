import { NavLink } from "react-router-dom";
import Logo from "../Images/Home/logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <NavLink to="/" className="navbar-logo-link">
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

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/testimonials">Testimonials</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;