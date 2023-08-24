import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMoviesList } from '../../thunks/moviesThunk';

function CardList() {
  const dispatch = useDispatch();
  const moviesList = useSelector(state=>state.moviesList);
  console.log({moviesList});

  useEffect(() => {
    dispatch(getMoviesList());
  }, [dispatch]);
  return <div></div>;
}

export default CardList;
