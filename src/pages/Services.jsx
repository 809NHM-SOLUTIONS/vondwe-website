import VintageBarStool from "../Images/Services/vintage-bar-stool.png";
import VelvetLuxuryHeadboardsWorkshop from "../Images/Services/velvet luxury headboards workshop.png";
import HeadboardBedYellow from "../Images/Services/headboard-bed-yellow.png";
import BanDoors from "../Images/Services/ban doors.png";
import BrownWardrobe from "../Images/Services/brown wardrobe 1.png";
import WhiteWardrobe from "../Images/Services/white wardrobe.png";
import { Link } from "react-router-dom";






function Services() {
 const services = [
  {
    title: "Harvest Dining Set(Annah's Collection)",
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
    title: "The Solstice Bed",
    image: HeadboardBedYellow,
    text:
      "Inspired by sunshine and warmth. This bed is bold, modern, and almost regal with its geometric headboard.",
  },
{
  title: "The Billy Legacy Wardrobe",
  category: "Bedroom Storage",
  image: BrownWardrobe,
  text:
    "Named in honour of Billy Makungo—the foundation of the Vondwe legacy—the Billy Legacy Wardrobe represents strength, craftsmanship, and enduring family values. Featuring a timeless design with spacious compartments and elegant drawers, this wardrobe is crafted to serve generations to come. Just as Billy laid the foundation for the family business, this piece is built to stand the test of time, bringing beauty, functionality, and heritage into every home.",
},
  {
    title: "THE JOSIAS COLLECTION (Opening Doors Since 1965)",
    image: BanDoors,
    text:
      "Honouring the founder whose hands built more than furniture—they built a legacy. The Josias Collection celebrates six decades of craftsmanship through a distinguished range of handcrafted doors designed to welcome generations to come. Every Door Opens a Legacy.",
  },
 {
  title: "The Aurora Wardrobe (Billy's Collection)",
  category: "Bedroom Storage",
  image: WhiteWardrobe,
  text:
    "Featuring a clean modern aesthetic with integrated drawers and a central mirror, The Aurora Wardrobe brings elegance and functionality to any bedroom.",
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