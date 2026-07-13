import JosiasMakungo from "../Images/About/josias-makungo.png";


import Josias from "../Images/Legacy/josias-makungo.jpg";
import Billy from "../Images/Legacy/billy-makungo.jpg";
import Velelambeu from "../Images/Legacy/velelambeu-makungo.jpg";
import Rachel from "../Images/Legacy/rachel-makungo.jpg";
import OfficeManager from "../Images/About/Staff/Nzimeni Ralinale, office manager.png";
import TeamPhoto from "../Images/About/Staff/the team 1.png";

function About() {

  const staffMembers = [
  {
    name: "Nzimeni Ralinale",
    role: "Office Manager",
    image: OfficeManager,
  },
  {
    name: "Vondwe Team",
    role: "Woodwork & Joinery Team",
    image: TeamPhoto,
  },
];

  return (
    <main className="about-page">
      <section className="about-hero">
        <p className="small-title">ABOUT VONDWE</p>
        <h1>Three Generations of Quality Craftsmanship</h1>
        <p>
          Vondwe Woodwork & Joinery  is built on a legacy that began in
          1965, combining family values, skilled workmanship, and modern joinery
          solutions.
        </p>
      </section>

      <section className="about-story">
        <div className="about-story-text">
          <p className="small-title">OUR STORY</p>
          <h2>A Legacy Since 1965</h2>

          <p>
            Vondwe Woodwork & Joinery  was founded in 1965 by
            Mr. Josias Nenweli Makungo, a skilled craftsman whose passion for
            woodworking laid the foundation for a business built on quality,
            integrity, and dedication.
          </p>

          <p>
            What began as a small family workshop has grown into a trusted South
            African woodworking and joinery company. Through three generations,
            we have preserved traditional craftsmanship while embracing
            innovation to deliver exceptional woodwork and joinery solutions.
          </p>
        </div>

        <div className="about-image-container">
          <div>
            <h3 className="founder-name">Mr. Josias Nenweli Makungo</h3>

            <p className="founder-title">Founder • Established 1965</p>

            <img
              src={JosiasMakungo}
              alt="Mr Josias Nenweli Makungo"
              className="about-founder-image"
            />
          </div>
        </div>
      </section>

      <section className="legacy-timeline">
        <div className="legacy-card">
          <span>1965</span>
          <h2>The Beginning</h2>
          <p>
            Mr. Josias Nenweli Makungo founded the business, establishing a
            reputation for quality workmanship, integrity, and dedication.
          </p>
        </div>

        <div className="legacy-card">
          <span>SECOND GENERATION</span>
          <h2>Billy Makungo</h2>
          <p>
            Billy Makungo continued the family tradition, expanding the business
            while maintaining the high standards established by his father.
          </p>
        </div>

        <div className="legacy-card">
          <span>TODAY</span>
          <h2>Third Generation Leadership</h2>
          <p>
            The legacy continues as the third generation carries the vision
            forward, combining traditional craftsmanship with modern innovation.
          </p>
        </div>
      </section>

      <section className="legacy-family">
        <div className="legacy-heading">
          <span>THREE GENERATIONS OF LEADERSHIP</span>

          <h2>The Makungo Family Legacy</h2>

          <p>
            The strength of Vondwe Woodwork & Joinery  lies in the
            people who have dedicated their lives to preserving and growing the
            family legacy since 1965.
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

<section className="staff-section">
  <div className="staff-heading">
    <p className="small-title">MEET OUR TEAM</p>
    <h2>The People Behind Our Craftsmanship</h2>
    <p>
      Our team combines skill, dedication, and experience to deliver quality
      woodwork and joinery projects with pride.
    </p>
  </div>

  <div className="staff-grid">
    {staffMembers.map((member) => (
      <div className="staff-card" key={member.name}>
        <img src={member.image} alt={member.name} />
        <div className="staff-card-content">
          <h3>{member.name}</h3>
          <p>{member.role}</p>
        </div>
      </div>
    ))}
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