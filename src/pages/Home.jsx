import HeroImage from "../Images/Home/kitchen-cab.png";
import RedVelvetBarStools from "../Images/Home/red-velvet-bar-stools.png";
import QueenSizeGreenBed from "../Images/Home/queen-size-green-bed.png";
import KitchenCabinetInstallation from "../Images/Home/kitchen-cabinet-instalation.png";

function Home() {
  return (
    <>
    {/* HERO BANNER */}
<section
  className="hero"
  style={{
    backgroundImage: `url(${HeroImage})`,
  }}
>

  <div className="hero-overlay">
    <div className="hero-left">
  
      

      <p>
        Building a legacy of quality craftsmanship, custom woodwork, and
        exceptional joinery solutions since 1965.
      </p>

      <div className="hero-btn-container">
  <a href="/projects" className="hero-btn">
    EXPLORE OUR PROJECTS
  </a>
</div>
      
    </div>

    
  </div>
</section>

      

      {/* THREE GENERATIONS */}
      <section className="generations">
        <div className="gen-text">
          <p className="small-title">THREE GENERATIONS</p>

          <h2>
            A Legacy Passed Down
            <br />
            Through Generations
          </h2>

          <p>
            From a small workshop in 1965 to a trusted name today, our family
            continues to uphold the values of quality, integrity, and
            craftsmanship.
          </p>
        </div>

        <div className="gen-stats">
          <div className="stat">
            <h3>60+</h3>
            <p>YEARS OF EXPERIENCE</p>
          </div>

<div className="stat">
  <h3>QUALITY</h3>
  <p>CRAFTED TO LAST</p>
</div>
        </div>
      </section>

      {/* COMPANY INTRODUCTION */}
      <section className="home-panel">
        <p className="small-title">COMPANY INTRODUCTION</p>

        <h2>Craftsmanship Built on Quality and Trust</h2>

        <p>
          Vondwe Woodwork & Joinery  is a proudly South African
          woodworking company built on a foundation of craftsmanship, integrity,
          and excellence. Since 1965, we have delivered custom woodwork
          solutions that combine traditional skills with modern innovation.
        </p>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="home-panel dark-panel">
        <p className="small-title">SERVICES OVERVIEW</p>

        <h2>Our Woodwork Services</h2>

        <div className="home-grid">
          <div className="home-card">Custom Furniture</div>
          <div className="home-card">Kitchen Units</div>
          <div className="home-card">Built-in Cupboards</div>
          <div className="home-card">Doors & Frames</div>
          <div className="home-card">Office Furniture</div>
          <div className="home-card">Repairs & Maintenance</div>
        </div>
      </section>
{/* FEATURED PROJECTS */}
<section className="home-panel">
  <p className="small-title">FEATURED PROJECTS</p>

  <h2>Our Recent Work</h2>

  <div className="projects-gallery">
    <div className="project-item">
      <img src={RedVelvetBarStools} alt="Red Velvet Bar Stools" />
      <h3>The Ruby Bar Stool</h3>
      <p>Designed to bring warmth and sophistication to modern kitchens and entertainment spaces, The Ruby Bar Stool combines comfort with timeless craftsmanship.</p>
      <br></br>
    </div>

    <div className="project-item">
      <img src={QueenSizeGreenBed} alt="Queen Size Green Bed" />
      <h3>Vondwe Signature Bed</h3>
      <p>Designed for those who believe their bedroom should feel like a royal retreat.</p>
      <br></br>
    </div>

    <div className="project-item">
      <img
        src={KitchenCabinetInstallation}
        alt="Kitchen Cabinet Installation"
      />
      <h3>Kitchen Cabinet Installation</h3>
      <p>Built with precision and installed with care by Vondwe Woodwork & Joinery, every detail reflects a commitment to quality, heritage, and intentional living. From family breakfasts to festive celebrations and  cherished moments.</p>
      <br></br>
    </div>
  </div>
</section>

      {/* WHY CHOOSE US */}
      <section className="home-panel dark-panel">
        <p className="small-title">WHY CHOOSE US</p>

        <h2>Why Clients Choose Vondwe</h2>

        <div className="home-grid">
          <div className="home-card">
            <h3>60+ Years Experience</h3>
            <p>Decades of proven craftsmanship and trusted service.</p>
          </div>

          <div className="home-card">
            <h3>Quality Craftsmanship</h3>
            <p>Every project is completed with detail, care, and precision.</p>
          </div>

          <div className="home-card">
            <h3>Custom Solutions</h3>
            <p>We design and build according to each client’s needs.</p>
          </div>
        </div>
      </section>

      {/* CUSTOMER TESTIMONIALS */}
      <section className="home-panel">
        <p className="small-title">CUSTOMER TESTIMONIALS</p>

        <h2>What Our Clients Say</h2>

        <blockquote>
          “Excellent workmanship and professional service. The quality exceeded
          our expectations.”
        </blockquote>
      </section>

      {/* CONTACT CTA */}
      <section className="contact-cta">
        <h2>Ready To Start Your Project?</h2>

        <p>
          Contact Vondwe Woodwork & Joinery  today and let us bring
          your vision to life.
        </p>

        <a href="/contact" className="hero-btn">
          GET A FREE QUOTATION
        </a>
      </section>
    </>
  );
}

export default Home;