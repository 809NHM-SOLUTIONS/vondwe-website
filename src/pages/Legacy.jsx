import Josias from "../Images/Legacy/josias-makungo.jpg";
import Billy from "../Images/Legacy/billy-makungo.jpg";
import Velelambeu from "../Images/Legacy/velelambeu-makungo.jpg";
import Rachel from "../Images/Legacy/rachel-makungo.jpg";

function Legacy() {
  return (
    <div className="legacy-page">

      <section className="legacy-hero">
        <h1>Our Legacy</h1>

       <p>
  Since 1965, Vondwe Woodwork & Joinery  has built a legacy
  of exceptional craftsmanship, trusted workmanship, and family values,
  proudly carried forward through three generations of the Makungo family.
</p>
      </section>

      <section className="legacy-timeline">

        <div className="legacy-card">
          <span>1965</span>
          <h2>The Beginning</h2>
          <p>
            Mr. Josias Nenweli Makungo founded the business,
            establishing a reputation for quality workmanship,
            integrity, and dedication.
          </p>
        </div>

        <div className="legacy-card">
          <span>SECOND GENERATION</span>
          <h2>Billy Makungo</h2>
          <p>
            Billy Makungo continued the family tradition,
            expanding the business while maintaining the
            high standards established by his father.
          </p>
        </div>

        <div className="legacy-card">
          <span>TODAY</span>
          <h2>Third Generation Leadership</h2>
          <p>
            The legacy continues as the third generation
            carries the vision forward, combining traditional
            craftsmanship with modern innovation.
          </p>
        </div>

      </section>

      {/* FAMILY SECTION */}

      <section className="legacy-family">

        <div className="legacy-heading">
          <span>THREE GENERATIONS OF LEADERSHIP</span>

          <h2>The Makungo Family Legacy</h2>

          <p>
            The strength of Vondwe Woodwork & Joinery  lies
            in the people who have dedicated their lives to preserving
            and growing the family legacy since 1965.
          </p>
        </div>

        <div className="family-grid">

          <div className="family-card">
  <img src={Josias} alt="Josias Makungo" />
  <h3>Josias Makungo</h3>
  <p>Founder • Established 1965</p>
</div>

<div className="family-card">
  <img src={Billy} alt="Billy Makungo" />
  <h3>Billy Makungo</h3>
  <p>Second Generation Leadership</p>
</div>

<div className="family-card">
  <img src={Velelambeu} alt="Velelambeu Makungo" />
  <h3>Velelambeu Makungo</h3>
  <p>Managing Director • Third Generation Leadership</p>
</div>

<div className="family-card">
  <img src={Rachel} alt="Rachel Makungo" />
  <h3>Rachel Makungo</h3>
<p>Marketing Manager</p>
</div>

               </div>

        <div className="legacy-quote">
          <p>
            "From the hands of our founder to the vision of future generations,
            our legacy is built on craftsmanship, integrity, and excellence."
          </p>
        </div>

      </section>

    


      <section className="home-panel dark-panel">
        <h2>A Family Legacy</h2>

        <p>
          What began as a small woodworking operation in 1965 has grown
          into a respected South African company built on family values,
          trust, and a passion for quality craftsmanship. Every generation
          has contributed to preserving and strengthening the legacy.
        </p>
      </section>

      <section className="home-panel">

        <h2>Values That Stand The Test Of Time</h2>

        <div className="home-grid">

          <div className="home-card">
            <h3>Craftsmanship</h3>
            <p>
              We take pride in delivering exceptional workmanship and
              attention to detail in every project.
            </p>
          </div>

          <div className="home-card">
            <h3>Integrity</h3>
            <p>
              Honesty, accountability, and professionalism remain at
              the heart of everything we do.
            </p>
          </div>

          <div className="home-card">
            <h3>Excellence</h3>
            <p>
              We continuously strive to exceed expectations through
              quality products and outstanding service.
            </p>
          </div>

        </div>

      </section>

      <section className="contact-cta">
        <h2>Building The Future While Honouring The Past</h2>

        <p>
          As we look ahead, we remain committed to preserving the
          craftsmanship and values that have defined Vondwe Woodwork &
          Joinery  since 1965.
        </p>
      </section>

    </div>
  );
}

export default Legacy;