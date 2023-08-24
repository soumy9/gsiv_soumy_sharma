import { Link } from "react-router-dom";

function Card({ imageSrc, title, rating, description, id }) {
  return (
    <Link to={`/details/${id}`}>
      <picture>
        <source srcSet={imageSrc} />
      </picture>
      <h3>{title}</h3>
      <span>{rating}</span>
      <p>{description}</p>
    </Link>
  );
}

export default Card;
