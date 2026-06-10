import './About.css';

const About = () => {
  return (
    <section id="about" className="about" aria-labelledby="about-heading">
      <div className="container about__grid">
        <div className="about__images">
          <img
            src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=500&h=400&fit=crop"
            alt="Chefs Marco and Adrian preparing dishes in the Little Lemon kitchen"
            className="about__img about__img--primary"
            loading="lazy"
          />
          <img
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=500&h=400&fit=crop"
            alt="Guests enjoying dinner on the Little Lemon patio"
            className="about__img about__img--secondary"
            loading="lazy"
          />
        </div>
        <div className="about__content">
          <h2 id="about-heading" className="section-title">
            Our Story
          </h2>
          <p className="about__location">Little Lemon — Chicago</p>
          <p>
            Little Lemon is a family-run Mediterranean restaurant tucked into the heart
            of Chicago. Brothers Marco and Adrian grew up around a table filled with
            olive oil, fresh herbs, and stories passed down through generations.
          </p>
          <p>
            After years cooking alongside their grandmother in Sicily, they brought those
            traditions to the Midwest — honoring classic recipes while adding a playful,
            modern edge. From wood-fired flatbreads to citrus-kissed desserts, every dish
            reflects their belief that great food should feel both familiar and surprising.
          </p>
          <p>
            Whether you&apos;re stopping by for a quick lunch or settling in for a long
            evening with friends, you&apos;ll find warm hospitality, thoughtfully sourced
            ingredients, and a space designed for connection.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
