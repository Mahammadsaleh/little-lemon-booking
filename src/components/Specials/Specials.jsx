import { Link } from 'react-router-dom';
import { specials } from '../../data';
import Card from '../Card/Card';
import './Specials.css';

const Specials = () => {
  return (
    <section id="menu" className="specials" aria-labelledby="specials-heading">
      <div className="container">
        <div className="specials__header">
          <div>
            <h2 id="specials-heading" className="section-title">
              This Week&apos;s Highlights
            </h2>
            <p className="section-subtitle">
              Rotating seasonal plates crafted by our kitchen — always fresh, always
              inspired by the Mediterranean coast.
            </p>
          </div>
          <Link to="/bookings" className="btn btn-outline specials__cta">
            View Full Menu
          </Link>
        </div>
        <div className="specials__grid" role="list">
          {specials.map((item) => (
            <div key={item.id} role="listitem">
              <Card {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specials;
