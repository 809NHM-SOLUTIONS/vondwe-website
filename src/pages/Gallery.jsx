import Headboard from "../Images/Gallery/luxury cream and coffee brown headboard w table.png";
import Pulpit from "../Images/Gallery/pulpit worshp.png";
import BedBase from "../Images/Gallery/queen size green head wood base w tables workshop.png";
import BarStools from "../Images/Gallery/red stool bar workshop.png";
import Kitchen from "../Images/Gallery/red velvet stools, kitchen.png";
import DisplayCabinet from "../Images/Gallery/whiteliquor displaycabinet dining room.png";


function Gallery() {
  const galleryItems = [
    {
      title: "Luxury Headboard",
      category: "Bedroom Furniture",
      image: Headboard,
    },
    {
      title: "Church Pulpit",
      category: "Church Furniture",
      image: Pulpit,
    },
    {
      title: "Queen Bed Base",
      category: "Bedroom Furniture",
      image: BedBase,
    },
    {
      title: "Bar Stools",
      category: "Custom Furniture",
      image: BarStools,
    },
    {
      title: "Kitchen Stools",
      category: "Kitchen Work",
      image: Kitchen,
    },
    {
      title: "Display Cabinet",
      category: "Custom Furniture",
      image: DisplayCabinet,
    },

  ];

  return (
    <main className="gallery-page">
      <section className="gallery-hero">
        <h1>Gallery</h1>
        <p>
          Explore a collection of Vondwe Woodwork & Joinery  projects,
          showcasing bedroom furniture, church furniture, kitchen work, and
          custom woodwork.
        </p>
      </section>

      <section className="gallery-categories">
        <span>All Projects</span>
        <span>Kitchen Work</span>
        <span>Bedroom Furniture</span>
        <span>Church Furniture</span>
        <span>Custom Furniture</span>
      </section>

      <section className="gallery-grid">
        {galleryItems.map((item) => (
          <div className="gallery-card" key={item.title}>
            <img src={item.image} alt={item.title} />

            <div className="gallery-card-content">
              <p>{item.category}</p>
              <h2>{item.title}</h2>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

export default Gallery;