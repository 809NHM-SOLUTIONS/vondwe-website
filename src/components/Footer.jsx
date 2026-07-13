import { Link } from "react-router-dom";
import { FaWhatsapp, FaTiktok } from "react-icons/fa";

import Logo from "../Images/Home/logo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* BRAND */}
        <div className="footer-brand">
          <img
            src={Logo}
            alt="Vondwe Woodwork & Joinery"
            className="footer-logo"
          />

          <p className="footer-description">
            Three generations of craftsmanship, creating beautiful,
            durable woodwork designed to last.
          </p>

         <div className="footer-socials">
  <a
    href="https://wa.me/27703013274"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="WhatsApp"
  >
    <FaWhatsapp />
  </a>

  <a
    href="https://www.tiktok.com/@vondwe.woodwork.j5"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="TikTok"
  >
    <FaTiktok />
  </a>
</div>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-column">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/testimonials">Testimonials</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* SERVICES */}
        <div className="footer-column">
          <h3>Our Services</h3>

          <span>Kitchen Cabinets</span>
          <span>Built-in Wardrobes</span>
          <span>Custom Furniture</span>
          <span>Doors & Joinery</span>
          <span>Office Furniture</span>
        </div>

        {/* CONTACT */}
        <div className="footer-column footer-contact">
          <h3>Contact Us</h3>

          <div className="footer-contact-item">
            <span>LOCATION</span>
            <p>
              Number 16 R 523 Road
              <br />
              Vondwe Village, Vhembe
              <br />
              Limpopo, 0972
            </p>
          </div>

          <div className="footer-contact-item">
            <span>PHONE & WHATSAPP</span>
            <a href="https://wa.me/27703013274">
              +27 70 301 3274
            </a>
          </div>

          <div className="footer-contact-item">
            <span>EMAIL</span>
            <a href="mailto:info@vondwehoodwork.co.za">
              info@vondwehoodwork.co.za
            </a>
          </div>

          <Link to="/contact" className="footer-contact-button">
            Request a Quote
          </Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Vondwe Woodwork & Joinery. All Rights
          Reserved.
        </p>

        <span>Strong Roots. Skilled Hands. Lasting Legacy.</span>
      </div>
    </footer>
  );
}

export default Footer;