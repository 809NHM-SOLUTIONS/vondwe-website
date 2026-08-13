import { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  FaTiktok,
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa6";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zsk6ack",
        "template_job0ubg",
        form.current,
        "yCgjOQgw92EUzEWMg"
      )
      .then(
        () => {
          alert("Enquiry sent successfully!");

          if (form.current) {
            form.current.reset();
          }
        },
        (error) => {
          console.error("EmailJS error:", error);
          alert("Failed to send enquiry. Please try again.");
        }
      );
  };

  return (
    <main className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <p className="small-title">CONTACT US</p>

        <h1>Let Us Build Something Exceptional Together</h1>

        <p>
          Whether you need custom furniture, kitchen units, built-in cupboards,
          office furniture, or joinery solutions, we are ready to help.
        </p>
      </section>

      {/* Contact Section */}
      <section className="contact-container">
        <div className="contact-info">
          <h2>Get In Touch</h2>

          {/* Phone */}
          <div className="contact-item">
            <h3>Phone and WhatsApp</h3>
            <p>+27 70 301 3274</p>
            <p>+27 76 065 0762 (Ralinala)</p>
            <p>+27 73 796 4888 (Makungo)</p>
          </div>

          {/* Email */}
          <div className="contact-item">
            <h3>Email</h3>
            <p>info@vondwewoodworks.co.za</p>
            <p>RachelM@vondwewoodworks.co.za</p>
            <p>MakungoV@vondwewoodworks.co.za</p>
          </div>

          {/* Address */}
          <div className="contact-item">
            <h3>Business Address</h3>

            <p>
              Number 16 R523 Road
              <br />
              Vondwe Village, Vhembe
              <br />
              Limpopo, 0972
            </p>
          </div>

          {/* Social Media */}
          <div className="contact-socials">
            <a
              href="https://wa.me/27760650762"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>

            <a
              href="https://www.instagram.com/vondwewoodwork?utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.facebook.com/share/1HV58Aji8Z/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook />
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

        {/* Contact Form */}
        <div className="contact-form-container">
          <h2>Request a Quote</h2>

          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <input
              type="text"
              name="user_name"
              placeholder="Full Name"
              required
            />

            <input
              type="email"
              name="user_email"
              placeholder="Email Address"
              required
            />

            <input
              type="tel"
              name="user_phone"
              placeholder="Phone Number"
            />

            <input
              type="text"
              name="service"
              placeholder="Service Required"
            />

            <textarea
              name="message"
              rows="6"
              placeholder="Tell us about your project..."
              required
            />

            <button type="submit">SEND ENQUIRY</button>
          </form>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="contact-bottom-cta">
        <h2>Quality Craftsmanship Since 1965</h2>

        <p>
          Contact Vondwe Woodwork and Joinery today and let us bring your
          vision to life with quality workmanship and professional service.
        </p>
      </section>
    </main>
  );
}

export default Contact;