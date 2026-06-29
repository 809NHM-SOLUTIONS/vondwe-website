import DiningTable from "../Images/Services/dining-table.png";
import FrontDoor from "../Images/Services/front-door.png";
import HeadboardBedYellow from "../Images/Services/headboard-bed-yellow.png";
import HeadboardSideTables from "../Images/Services/headboard-side-tables.png";
import KitchenCabinets1 from "../Images/Services/kitchen-cabinets-1.png";
import { Link } from "react-router-dom";






function Services() {
 const services = [
  {
    title: "Custom Furniture",
    image: DiningTable,
    text:
      "We design and craft custom dining tables, chairs, and furniture pieces tailored to complement your home, office, or commercial space.",
  },
  {
    title: "Kitchen Units",
    image: KitchenCabinets1,
    text:
      "Our custom kitchen units combine functionality, durability, and modern design to create beautiful and practical kitchen spaces.",
  },
  {
    title: "Bedroom Furniture",
    image: HeadboardBedYellow,
    text:
      "We manufacture high-quality bedroom furniture including custom beds, headboards, and matching furniture designed to suit your style.",
  },
  {
    title: "Headboards & Side Tables",
    image: HeadboardSideTables,
    text:
      "Enhance your bedroom with beautifully crafted headboards and side tables built with attention to detail and superior workmanship.",
  },
  {
    title: "Doors & Frames",
    image: FrontDoor,
    text:
      "We create and install premium wooden doors and frames that offer security, durability, and timeless elegance.",
  },
];
  

  return (
    <main className="services-page">
      <section className="services-hero">
        <p className="small-title">OUR SERVICES</p>
        <h1>Woodwork & Joinery Solutions</h1>
        <p>
          Vondwe Woodwork & Joinery Corporate offers quality custom woodwork
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