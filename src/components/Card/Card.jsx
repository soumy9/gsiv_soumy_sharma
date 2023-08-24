import { Link } from 'react-router-dom';

import './Card.css';

export const imageResourcePath = 'https://image.tmdb.org/t/p/w';
export const imageSize = { small: 200, large: 300 };
export function getImageSrc(imageSrc, size) {
  return `${imageResourcePath}${size}${imageSrc}`;
}
function Card({ imageSrc, title, rating, description, id }) {
  return (
    <div className='card'>
      <Link to={`/details/${id}`}>
        <div className='card__container'>
          <div className='card__image-container'><img className='card__image' src={getImageSrc(imageSrc, imageSize.small)} alt={title} /></div>
          <div className='card__details'>
            <h3>{title}</h3>
            <span>{rating}</span>
            <p className='card__description'>{description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Card;
