import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero__overlay" aria-hidden="true" />
      <div className="hero__content container">
        <p className="hero__eyebrow">Family-owned since 2010</p>
        <h1 id="hero-heading" className="hero__title">
          Little Lemon
        </h1>
        <p className="hero__location">Chicago</p>
        <p className="hero__tagline">
          Where Mediterranean warmth meets Chicago soul — handcrafted plates, seasonal
          ingredients, and a dining room that feels like home.
        </p>
        <Link to="/bookings" className="btn btn-primary hero__cta">
          Book Your Table
        </Link>
      </div>
    </section>
  );
};

export default Hero;
