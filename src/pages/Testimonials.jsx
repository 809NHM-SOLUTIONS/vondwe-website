function Testimonials() {
  const testimonials = [
    {
      name: "Residential Client",
      project: "Kitchen Installation",
      text: "Vondwe delivered excellent workmanship. The kitchen units were beautifully finished and completed professionally.",
    },
    {
      name: "Business Client",
      project: "Office Furniture",
      text: "The office furniture was strong, modern, and perfectly fitted to our workspace. Great attention to detail.",
    },
    {
      name: "Homeowner",
      project: "Built-in Cupboards",
      text: "We are very happy with the built-in cupboards. The quality, design, and finishing exceeded our expectations.",
    },
  ];

  return (
    <main className="testimonials-page">
      <section className="testimonials-hero">
        <p className="small-title">CUSTOMER TESTIMONIALS</p>
        <h1>What Our Clients Say</h1>
        <p>
          Our reputation is built on quality craftsmanship, trusted service, and
          long-lasting relationships with our clients.
        </p>
      </section>

      <section className="testimonials-grid">
        {testimonials.map((item) => (
          <div className="testimonial-card" key={item.name}>
            <span>“</span>
            <p>{item.text}</p>
            <h3>{item.name}</h3>
            <h4>{item.project}</h4>
          </div>
        ))}
      </section>

      <section className="contact-cta">
        <h2>Ready To Start Your Project?</h2>
        <p>
          Let Vondwe Woodwork & Joinery  create something exceptional
          for your home or business.
        </p>
        <a href="/contact" className="hero-btn">
          CONTACT US
        </a>
      </section>
    </main>
  );
}

export default Testimonials;