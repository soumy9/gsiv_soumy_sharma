function Card({ imageSrc, title, rating, description }) {
  return (
    <div>
      <picture>
        <source srcset={imageSrc} />
      </picture>
      <h3>{title}</h3>
      <span>{rating}</span>
      <p>{description}</p>
    </div>
  );
}

export default Card;
