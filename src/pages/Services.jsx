import VintageBarStool from "../Images/Services/vintage-bar-stool.png";
import VelvetLuxuryHeadboardsWorkshop from "../Images/Services/velvet luxury headboards workshop.png";
import HeadboardBedYellow from "../Images/Services/headboard-bed-yellow.png";
import Wardrobes from "../Images/Services/wardrobes.png";
import WhiteFrontShelveWardrobe from "../Images/Services/white front shelve wardrobe.png";
import BanDoors from "../Images/Services/ban doors.png";
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
  title: "Wardrobes",
  image: Wardrobes,
  text:
    "We design and manufacture stylish, durable, and functional wardrobes that maximize storage while enhancing the beauty of your bedroom.",
},
  {
    title: "Doors & Frames",
    image: BanDoors,
    text:
      "We create and install premium wooden doors and frames that offer security, durability, and timeless elegance.",
  },
  {
    title: "Built-in Wardrobes",
    image: WhiteFrontShelveWardrobe,
    text:
      "We design and install stylish built-in wardrobes and shelving solutions that maximize storage while enhancing the beauty of your space.",
  },
];;
  

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