import KiddiesHeadboards from "../Images/Projects/kiddies-headboards.png";
import PulpitsBenches from "../Images/Projects/pulpits-benches.png";
import SchoolDesk2 from "../Images/Projects/school-desk2.png";
import WoodEyeStand from "../Images/Projects/eyestand in shop display.png";
import BlackOpenCloset from "../Images/Projects/black open plan closet.png";
//import FloatingTvStand from "../Images/Projects/floating tv stand lounge.png";


import Headboard from "../Images/Gallery/luxury cream and coffee brown headboard w table.png";
import Pulpit from "../Images/Gallery/pulpit worshp.png";
import BarStools from "../Images/Gallery/red stool bar workshop.png";
import Kitchen from "../Images/Gallery/red velvet stools, kitchen.png";
import DisplayCabinet from "../Images/Gallery/whiteliquor displaycabinet dining room.png";
import StoolBar from "../Images/Gallery/stool bar.png";
import VintageBarTable from "../Images/Gallery/vintage bar stoll and vin table.png";
import VintageBarTable2 from "../Images/Gallery/vintage bar stool and vin table 2.png";
import EyeStandDisplay from "../Images/Gallery/eyestand in shop display.png";
import FittedLiquorDisplay from "../Images/Gallery/fitted liquor display.png";
import FloatingTvStand from "../Images/Gallery/floating tv stand lounge.png";
import GreyChestDrawer from "../Images/Gallery/grey chest of drawer 2.png";
import GreyChestDrawerWorkshop from "../Images/Gallery/grey chest of drawer workshop.png";
import LongWoodTvCabinet from "../Images/Gallery/long wood tv cabinet longe workshop.png";
import LongWoodTvCabinetLounge from "../Images/Gallery/long wood tv cabinet longe.png";
import BlueCreamHeadboard from "../Images/Gallery/luxury blue and cream headboard.png";
import CreamCoffeeHeadboardBedroom from "../Images/Gallery/luxury cream and coffee brown headboard w table bedroom.png";
import CommercialReceptionBench from "../Images/Gallery/commercial reception bench.png";
import DiningSetLounge from "../Images/Gallery/dining set in lounge.png";
import ElegantLiquorDisplay from "../Images/Gallery/elegant liquor display.png";
import WhiteShelveWardrobe from "../Images/Gallery/white front shelve wardrobe.png";
import VintageCoffeeTable2 from "../Images/Gallery/vintage coffe table 2.png";
import BathroomHolder from "../Images/Gallery/bathroomholder.png";
import BlackOpenPlanCloset from "../Images/Gallery/black open plan closet.png";
import MultiColourBarStools from "../Images/Projects/multi colour stools.png";

function Projects() {
  const projects = [
    {
      title: "Kiddies Headboards",
      category: "Bedroom Furniture",
      image: KiddiesHeadboards,
      
        
    },
  {
  title: "Wood Eye Stand",
  category: "Custom Display Furniture",
  image: WoodEyeStand,
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
  title: "Black Open Closet",
  category: "Built-in Wardrobes",
  image: BlackOpenCloset,
},
    {
  title: "Floating TV Stand",
  category: "Living Room Furniture",
  image: FloatingTvStand,
},
{
  title: "Wooden Bar Stool",
  category: "Custom Furniture",
  image: StoolBar,
},
{
  title: "Vintage Bar Table and Stools",
  category: "Custom Furniture",
  image: VintageBarTable,
},
{
  title: "Vintage Bar Table Set",
  category: "Custom Furniture",
  image: VintageBarTable2,
},

  ];

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
  title: "Multi Colour Bar Stools",
  image: MultiColourBarStools,
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
{
  title: "Dining Set",
  image: DiningSetLounge,
},
{
  title: "Fitted Liquor Display",
  category: "Display Furniture",
  image: FittedLiquorDisplay,
},
{
  title: "Minimalist Open Closet",
  image: BlackOpenPlanCloset,
},

{
  title: "Black Chest of Drawers",
  category: "Bedroom Furniture",
  image: GreyChestDrawer,
},
{
  title: "Black Chest of Drawers",
  category: "Bedroom Furniture",
  image: GreyChestDrawerWorkshop,
},
{
  title: "Long Wooden TV Cabinet",
  category: "Living Room Furniture",
  image: LongWoodTvCabinet,
},
{
  title: "Long Wooden TV Cabinet",
  category: "Living Room Furniture",
  image: LongWoodTvCabinetLounge,
},
{
  title: "Luxury Blue and Cream Headboard",
  category: "Bedroom Furniture",
  image: BlueCreamHeadboard,
},
{
  title: "Luxury Cream and Coffee Headboard",
  category: "Bedroom Furniture",
  image: CreamCoffeeHeadboardBedroom,
},
{
  title: "Commercial Reception Bench",
  category: "Commercial Furniture",
  image: CommercialReceptionBench,
},
{
  title: "Dining Set",
  category: "Dining Room Furniture",
  image: DiningSetLounge,
},
{
  title: "Elegant Liquor Display",
  category: "Display Furniture",
  image: ElegantLiquorDisplay,
},

{
  title: "White Shelved Wardrobe",
  category: "Bedroom Furniture",
  image: WhiteShelveWardrobe,
},
{
  title: "Vintage Coffee Table",
  category: "Living Room Furniture",
  image: VintageCoffeeTable2,
},
{
  title: "Bathroom Holder",
  category: "Bathroom Furniture",
  image: BathroomHolder,
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
<section className="premium-project">
  <img
    src={BlackOpenPlanCloset}
    alt="Custom open plan wooden closet"
    className="premium-project-image"
  />

  <div className="premium-project-overlay"></div>

  <div className="premium-project-content">
    <p className="premium-small-title">OUR CRAFTSMANSHIP</p>

    <h2>
      Built with Skill.
      <br />
      Made to Last.
    </h2>

    <p className="premium-description">
      From custom wardrobes to luxury bedroom finishes, every piece is built
      with careful detail, strong materials, and timeless workmanship.
    </p>

    
  </div>
</section>

      <section className="project-gallery-section">
        <div className="project-gallery-heading">
          <p className="small-title">PROJECT GALLERY</p>
          <h2>More of Our Work</h2>
          <p>
            Explore more completed woodwork and joinery pieces, showcasing our
            attention to detail, strong materials, and quality finishing.
          </p>
        </div>

        <div className="gallery-grid">
          {galleryItems.map((project) => (
            <div className="gallery-card" key={project.title}>
              <img src={project.image} alt={project.title} />

              <div className="gallery-card-content">
                <p>{project.category}</p>
                <h2>{project.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </section>

<section className="gallery-bottom-cta">
  <p>READY TO CREATE SOMETHING UNIQUE?</p>

  <h2>Let’s Bring Your Vision to Life</h2>

  <span>
    From custom furniture to complete woodwork projects, we are ready to build
    something made especially for you.
  </span>

  <a href="/contact" className="hero-btn">
    START YOUR PROJECT
  </a>
</section>

    </main>
  );
}

export default Projects;