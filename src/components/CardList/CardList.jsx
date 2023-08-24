import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMoviesList } from '../../thunks/moviesThunk';
import Card from '../Card/Card';

function CardList() {
  const dispatch = useDispatch();
  const moviesList = useSelector((state) => state.moviesList);
  console.log({ moviesList });

  useEffect(() => {
    dispatch(getMoviesList());
  }, [dispatch]);
  return (
    <div>
      {moviesList?.results?.map((movie) => {
        const {
          id,
          original_title: title,
          vote_average: rating,
          overview: description,
          poster_path: imageSrc,
        } = movie;
        return (
          <Card
            imageSrc={imageSrc}
            title={title}
            rating={rating}
            description={description}
            id={id}
            key={id}
          />
        );
      })}
    </div>
  );
}

export default CardList;
