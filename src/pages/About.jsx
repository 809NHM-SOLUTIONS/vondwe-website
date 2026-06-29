import JosiasMakungo from "../Images/About/josias-makungo.png";

function About() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <p className="small-title">ABOUT VONDWE</p>
        <h1>Three Generations of Quality Craftsmanship</h1>
        <p>
          Vondwe Woodwork & Joinery Corporate is built on a legacy that began in
          1965, combining family values, skilled workmanship, and modern joinery
          solutions.
        </p>
      </section>

      <section className="about-story">
        <div className="about-story-text">
          <p className="small-title">OUR STORY</p>
          <h2>A Legacy Since 1965</h2>
          <p>
  Vondwe Woodwork & Joinery Corporate was founded in 1965 by
  Mr. Josias Nenweli Makungo, a skilled craftsman whose passion
  for woodworking laid the foundation for a business built on
  quality, integrity, and dedication.
</p>

<p>
  What began as a small family workshop has grown into a trusted
  South African woodworking and joinery company. Through three
  generations, we have preserved traditional craftsmanship while
  embracing innovation to deliver exceptional woodwork and
  joinery solutions.
</p>
          
        </div>

        <div className="about-image-container">
          <div>
            <h3 className="founder-name">
  Mr. Josias Nenweli Makungo
</h3>

<p className="founder-title">
  Founder • Established 1965
</p>

<img
  src={JosiasMakungo}
  alt="Mr Josias Nenweli Makungo"
  className="about-founder-image"
/>
          </div>
        </div>
      </section>

      <section className="about-values">
        <div>
          <h3>Mission</h3>
          <p>
            To deliver high-quality custom woodwork and joinery solutions that
            bring beauty, function, and long-lasting value to every space.
          </p>
        </div>

        <div>
          <h3>Vision</h3>
          <p>
            To become a trusted name in quality woodwork, custom furniture, and
            joinery solutions across South Africa.
          </p>
        </div>

        <div>
          <h3>Values</h3>
          <p>
            Craftsmanship, integrity, reliability, customer care, and commitment
            to excellence.
          </p>
        </div>
      </section>
    </main>
  );
}

export default About;