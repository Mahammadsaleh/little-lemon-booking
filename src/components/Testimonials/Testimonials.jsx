import { testimonials } from '../../data';
import { FaStar } from 'react-icons/fa';
import './Testimonials.css';

const StarRating = ({ count }) => (
  <div className="stars" role="img" aria-label={`${count} out of 5 stars`}>
    {Array.from({ length: count }, (_, i) => (
      <FaStar key={i} className="stars__icon" aria-hidden="true" />
    ))}
  </div>
);

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="testimonials"
      aria-labelledby="testimonials-heading"
    >
      <div className="container">
        <h2 id="testimonials-heading" className="section-title">
          What Our Guests Are Saying
        </h2>
        <p className="section-subtitle testimonials__intro">
          Real stories from neighbors, food lovers, and families who make Little Lemon
          part of their Chicago routine.
        </p>
        <div className="testimonials__grid" role="list">
          {testimonials.map(({ id, name, handle, rating, quote, avatar }) => (
            <article key={id} className="testimonial" role="listitem">
              <StarRating count={rating} />
              <blockquote className="testimonial__quote">
                <p>&ldquo;{quote}&rdquo;</p>
              </blockquote>
              <footer className="testimonial__author">
                <img
                  src={avatar}
                  alt=""
                  className="testimonial__avatar"
                  loading="lazy"
                />
                <div>
                  <cite className="testimonial__name">{name}</cite>
                  <span className="testimonial__handle">{handle}</span>
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
