import { Link } from "react-router-dom";
import Logo from "../Images/Home/logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">
        <img
          src={Logo}
          alt="Vondwe Woodwork & Joinery"
          className="navbar-logo"
        />
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/legacy">Legacy</Link>
        <Link to="/testimonials">Testimonials</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;