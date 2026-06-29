function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>VONDWE WOODWORK & JOINERY CORPORATE</h3>

        <p>
          Building a legacy of quality craftsmanship, custom woodwork,
          and exceptional joinery solutions since 1965.
        </p>

        <div className="footer-details">
          <p>📞 +27 XX XXX XXXX</p>
          <p>📧 info@vondwewoodwork.co.za</p>
          <p>📍 South Africa</p>
        </div>

        <hr />

        <p className="copyright">
          © {new Date().getFullYear()} Vondwe Woodwork & Joinery Corporate.
          All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;