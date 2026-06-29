import KitchenCabinets2 from "../Images/Gallery/kitchen-cabinets2.png";
import KitchenUnits from "../Images/Gallery/kitchen-units.png";
import LuxuryHeadboards from "../Images/Gallery/luxury-headboards.png";
import PulpitsBenches from "../Images/Gallery/pulpits-benches.png";
import SchoolDesk2 from "../Images/Gallery/school-desk2.png";
import TableAndChairs from "../Images/Gallery/table-and-chairs.jpg";
import BarnDoorsGallery from "../Images/Gallery/vondwe-barn-doors-gallery.png";
import Wardrobes from "../Images/Gallery/wardrobes.png";
import WoodBedBases from "../Images/Gallery/wood-bed-bases.png";

function Gallery() {
  const galleryItems = [
    {
      title: "Kitchen Cabinets",
      category: "Kitchen Work",
      image: KitchenCabinets2,
    },
    {
      title: "Kitchen Units",
      category: "Kitchen Work",
      image: KitchenUnits,
    },
    {
      title: "Luxury Headboards",
      category: "Bedroom Furniture",
      image: LuxuryHeadboards,
    },
    {
      title: "Pulpits and Benches",
      category: "Church Furniture",
      image: PulpitsBenches,
    },
    {
      title: "School Desks",
      category: "School Furniture",
      image: SchoolDesk2,
    },
    {
      title: "Table and Chairs",
      category: "Custom Furniture",
      image: TableAndChairs,
    },
    {
      title: "Barn Doors",
      category: "Doors & Joinery",
      image: BarnDoorsGallery,
    },
    
    {
      title: "Wardrobes",
      category: "Built-in Cupboards",
      image: Wardrobes,
    },
    {
      title: "Wood Bed Bases",
      category: "Bedroom Furniture",
      image: WoodBedBases,
    },
  ];

  return (
    <main className="gallery-page">
      <section className="gallery-hero">
        <h1>Gallery</h1>
        <p>
          Explore a collection of Vondwe Woodwork & Joinery Corporate projects,
          showcasing kitchens, bedroom furniture, doors, school furniture,
          church furniture, and custom woodwork.
        </p>
      </section>

      <section className="gallery-categories">
        <span>All Projects</span>
        <span>Kitchens</span>
        <span>Bedroom Furniture</span>
        <span>Doors & Joinery</span>
        <span>Custom Furniture</span>
        <span>School Furniture</span>
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