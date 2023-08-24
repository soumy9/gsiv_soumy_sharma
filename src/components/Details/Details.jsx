import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../../thunks/moviesThunk';
import { getHHMM } from '../../utils';
import { getImageSrc, imageSize } from '../Card/Card';
import './Details.css';

function Details() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const movieDetails = useSelector((state) => state.movieDetails);
  const {
    original_title: title,
    vote_average: rating,
    runtime: length,
    year,
    overview: description,
    poster_path: imageSrc,
  } = movieDetails;
  useEffect(() => {
    dispatch(getMovieDetails({ id }));
  }, [dispatch, id]);
  console.log({ movieDetails });
  return (
    <div className='details'>
      <img src={getImageSrc(imageSrc, imageSize.large)} alt={title} />
      <div>
        <h3>{title}</h3>
        <span>({rating})</span>
        <div>
          <span>{year}</span>
          <span>{getHHMM(length)}</span>
          {/* <span>{director}</span> */}
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Details;
