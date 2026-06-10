import './Card.css';

const Card = ({ image, name, price, description, badge }) => {
  return (
    <article className="card">
      <div className="card__image-wrap">
        <img src={image} alt={name} className="card__image" loading="lazy" />
        {badge && <span className="card__badge">{badge}</span>}
      </div>
      <div className="card__body">
        <div className="card__header">
          <h3 className="card__title">{name}</h3>
          <span className="card__price" aria-label={`Price ${price}`}>
            {price}
          </span>
        </div>
        <p className="card__description">{description}</p>
      </div>
    </article>
  );
};

export default Card;
