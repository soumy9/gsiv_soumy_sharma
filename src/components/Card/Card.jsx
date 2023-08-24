import { Link } from "react-router-dom";
export const imageResourcePath = 'https://image.tmdb.org/t/p/w';
export const imageSizeSmall = 200;
function Card({ imageSrc, title, rating, description, id }) {
  return (
    <Link to={`/details/${id}`}>
      <img src={`${imageResourcePath}${imageSizeSmall}${imageSrc}`} alt={title} />
      <h3>{title}</h3>
      <span>{rating}</span>
      <p>{description}</p>
    </Link>
  );
}

export default Card;
