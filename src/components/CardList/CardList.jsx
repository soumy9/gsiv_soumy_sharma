import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nextPage } from '../../store/slice';
import CircularProgress from '@mui/material/CircularProgress';
import { getMoviesList, searchMovie } from '../../store/thunks/moviesThunk';
import Card from '../Card/Card';
import './CardList.css';

function CardList() {
  const dispatch = useDispatch();
  const moviesList = useSelector((state) => state.moviesList);
  const isSearch = useSelector((state) => state.isSearch);
  console.log('outside',{isSearch});
  const searchQuery = useSelector((state) => state.searchQuery);
  const isLoading = useSelector(state=>state.isLoading);
  console.log({ moviesList,isLoading });
  const pageEnd = useRef();
  const isResultEnd = useSelector(state=>state.isResultEnd);
  // const timeoutCbRef = useRef(null);
  
  useEffect(() => {
    let tempRef;
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1,
    };
    function cb() {
      if(isResultEnd){
        return;
      }
      dispatch(nextPage());
      console.log('inside',{isSearch});
      if(isSearch) {
        dispatch(searchMovie({query:searchQuery}));
      } else {
        dispatch(getMoviesList());
      }
      // console.log('here', timeoutCbRef.current);
      // if(timeoutCbRef.current){
      //   return;
      // }
      // timeoutCbRef.current = setTimeout(() => {
      //   console.log('Page end reached');
      //   timeoutCbRef.current = null;
      // }, 1000);
    }
    const observer = new IntersectionObserver(cb, options);
    observer.observe(pageEnd.current);
    tempRef = pageEnd.current;
    return () => {
      observer.unobserve(tempRef);
    };
  }, [dispatch, isSearch, searchQuery, isResultEnd]);

  // useEffect(() => {
  //   dispatch(getMoviesList());
  // }, [dispatch]);
  return (
    <>
      {isSearch ? <h2>Showing results for "{searchQuery}"</h2> : null}
      <div className='card-list__container'>
        {moviesList?.map((movie) => {
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
      <div ref={pageEnd} className='observer'></div>
      <div className='loader'>
        {isLoading ? <CircularProgress disableShrink={true} /> : null}
      </div>
    </>
  );
}

export default CardList;
