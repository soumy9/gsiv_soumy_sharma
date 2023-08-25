import { useDispatch } from 'react-redux';
import { searchMovie } from '../../store/thunks/moviesThunk';
import { setSearch } from '../../store/slice';

function Search() {
  const dispatch = useDispatch();
  function searchHandler(e) {
    e.preventDefault();
    // dispatch(resetPage());
    dispatch(setSearch({isSearch: true, searchQuery: e.target.search.value}));
    dispatch(searchMovie({ query: e.target.search.value }));
  }
  return (
    <form onSubmit={searchHandler}>
      <input type='text' name='search' />
    </form>
  );
}

export default Search;
