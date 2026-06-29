import KiddiesHeadboards from "../Images/Projects/kiddies-headboards.png";
import LuxuryHeadboards from "../Images/Projects/luxury-headboards.png";
import PulpitsBenches from "../Images/Projects/pulpits-benches.png";
import SchoolDesk2 from "../Images/Projects/school-desk2.png";
import TableAndChairs from "../Images/Projects/table-and-chairs.jpg";
import BarnDoorsGallery from "../Images/Projects/vondwe-barn-doors-gallery.png";

function Projects() {
  const projects = [
    {
      title: "Kiddies Headboards",
      category: "Bedroom Furniture",
      image: KiddiesHeadboards,
      description:
        "Custom-made kiddies headboards designed with comfort, creativity, and quality finishing.",
    },
    {
      title: "Luxury Headboards",
      category: "Bedroom Furniture",
      image: LuxuryHeadboards,
      description:
        "Elegant luxury headboards crafted to bring style and a premium finish to bedroom spaces.",
    },
    {
      title: "Pulpits and Benches",
      category: "Church Furniture",
      image: PulpitsBenches,
      description:
        "Strong and beautifully crafted pulpits and benches for churches, halls, and community spaces.",
    },
    {
      title: "School Desks",
      category: "School Furniture",
      image: SchoolDesk2,
      description:
        "Durable school desks built for learning environments with practical and long-lasting design.",
    },
    {
      title: "Table and Chairs",
      category: "Custom Furniture",
      image: TableAndChairs,
      description:
        "Custom tables and chairs designed for homes, dining spaces, offices, and business use.",
    },
    {
      title: "Barn Doors",
      category: "Doors & Joinery",
      image: BarnDoorsGallery,
      description:
        "Stylish wooden barn doors crafted with precision, durability, and timeless character.",
    },
  ];

  return (
    <main className="projects-page">
      <section className="projects-hero">
        <h1>Our Projects</h1>
        <p>
          View some of our completed woodwork and joinery projects, crafted with
          quality, care, and attention to detail.
        </p>
      </section>

      <section className="project-categories">
        <span>Custom Furniture</span>
        <span>Bedroom Furniture</span>
        <span>Doors & Joinery</span>
        <span>School Furniture</span>
        <span>Church Furniture</span>
      </section>

      <section className="projects-grid-page">
        {projects.map((project) => (
          <div className="project-card-page" key={project.title}>
            <img src={project.image} alt={project.title} />

            <div className="project-card-content">
              <p>{project.category}</p>
              <h2>{project.title}</h2>
              <span>{project.description}</span>
            </div>
          </div>
        ))}
      </section>

      <section className="featured-project">
        <div
          className="featured-project-img"
          style={{
            backgroundImage: `linear-gradient(rgba(35, 34, 34, 0.2), rgba(35, 34, 34, 0.2)), url(${LuxuryHeadboards})`,
          }}
        ></div>

        <div className="featured-project-text">
          <h2>Quality Craftsmanship in Every Project</h2>

          <p>
            Every project we complete reflects our commitment to strong
            materials, neat finishing, and reliable workmanship. From custom
            bedroom furniture to doors, tables, benches, and school furniture,
            we build pieces that are made to last.
          </p>

          <a href="/contact" className="hero-btn">
            START YOUR PROJECT
          </a>
        </div>
      </section>
    </main>
  );
}

export default Projects;