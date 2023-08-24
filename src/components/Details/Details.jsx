import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../../thunks/moviesThunk';
import { getHHMM } from '../../utils';

function Details() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const movieDetails = useSelector((state) => state.movieDetails);
  const {original_title:title, vote_average:rating,runtime:length,year,overview:description,poster_path:imageSrc} = movieDetails;
  useEffect(() => {
    dispatch(getMovieDetails({ id }));
  }, [dispatch, id]);
  console.log({ movieDetails });
  return (
    <div>
      <picture>
        <source srcSet={imageSrc} />
      </picture>
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
