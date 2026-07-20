import VintageBarStool from "../Images/Services/vintage-bar-stool.png";
import VelvetLuxuryHeadboardsWorkshop from "../Images/Services/velvet luxury headboards workshop.png";
import HeadboardBedYellow from "../Images/Services/headboard-bed-yellow.png";
import Wardrobes from "../Images/Services/wardrobes.png";
import WhiteFrontShelveWardrobe from "../Images/Services/white front shelve wardrobe.png";
import BanDoors from "../Images/Services/ban doors.png";
import BrownWardrobe from "../Images/Services/brown wardrobe 1.png";
import WhiteWardrobe from "../Images/Services/white wardrobe.png";
import { Link } from "react-router-dom";






function Services() {
 const services = [
  {
    title: "Custom Furniture",
    image: VintageBarStool,
    text:
      "We design and craft custom dining tables, chairs, and furniture pieces tailored to complement your home, office, or commercial space.",
  },
  {
  title: "Luxury Headboards",
  image: VelvetLuxuryHeadboardsWorkshop,
  text:
    "We design and manufacture premium upholstered headboards in a variety of styles, colours, and finishes to bring comfort, elegance, and luxury to your bedroom.",
},
  {
    title: "Bedroom Furniture",
    image: HeadboardBedYellow,
    text:
      "We manufacture high-quality bedroom furniture including custom beds, headboards, and matching furniture designed to suit your style.",
  },
{
  title: "Brown Wardrobe",
  category: "Bedroom Storage",
  image: BrownWardrobe,
  text:
    "Our custom brown wardrobes are designed to provide stylish, spacious, and durable storage solutions. Built with quality materials and expert craftsmanship, they combine functionality with timeless elegance to complement any bedroom.",
},
  {
    title: "Doors & Frames",
    image: BanDoors,
    text:
      "We create and install premium wooden doors and frames that offer security, durability, and timeless elegance.",
  },
 {
  title: "White Wardrobe",
  category: "Bedroom Storage",
  image: WhiteWardrobe,
  text:
    "Our white wardrobes offer a clean, modern look while maximizing storage space. Designed with precision and high-quality finishes, they bring elegance, practicality, and long-lasting durability to your home.",
},
];
  

  return (
    <main className="services-page">
      <section className="services-hero">
        <p className="small-title">OUR SERVICES</p>
        <h1>Woodwork & Joinery Solutions</h1>
        <p>
          Vondwe Woodwork & Joinery  offers quality custom woodwork
          services for homes, offices, and businesses.
        </p>
      </section>

      <section className="services-list">
        {services.map((service, index) => (
          <div className="service-showcase" key={service.title}>
            <div className="service-showcase-img">
              <img src={service.image} alt={service.title} />
            </div>

            <div className="service-showcase-text">
  <span>0{index + 1}</span>
  <h2>{service.title}</h2>
  <p>{service.text}</p>
  <Link to="/contact">Request a Quote</Link>
</div>
          </div>
        ))}
      </section>
    </main>
  );
}

export default Services;