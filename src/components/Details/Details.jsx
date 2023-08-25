import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../../store/thunks/moviesThunk';
import { getHHMM } from '../../utils';
import { getImageSrc, imageSize } from '../Card/Card';
import './Details.css';
import Navigation from '../Navigation/Navigation';

function Details() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const movieDetails = useSelector((state) => state.movieDetails);
  const {
    original_title: title,
    vote_average: rating,
    runtime: length,
    release_date:year,
    overview: description,
    poster_path: imageSrc,
  } = movieDetails;
  useEffect(() => {
    dispatch(getMovieDetails({ id }));
  }, [dispatch, id]);
  console.log({ movieDetails });
  return (
    <>
      <Navigation title='Movie Details' />
      <div className='details'>
        <img src={getImageSrc(imageSrc, imageSize.large)} alt={title} />
        <div>
          <div className='details__title'>
            <h3>{title}</h3>
            <span className='details__rating'>({rating})</span>
          </div>
          <div className='details__description details__stats'>
            <span>{year?.slice(0,4)}</span>
            <span>|</span>
            <span>{getHHMM(length)}</span>
            {/* <span>{director}</span> */}
          </div>
          <p className='details__description'>Description: {description}</p>
        </div>
      </div>
    </>
  );
}

export default Details;
