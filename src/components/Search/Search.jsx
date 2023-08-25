import { useDispatch } from 'react-redux';
import { searchMovie } from '../../store/thunks/moviesThunk';
import { setSearch } from '../../store/slice';
import SearchIcon from '@mui/icons-material/Search';
import './Search.css';

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
      <label className='search-icon-container' form='search'>
        <SearchIcon style={{ fontSize: 30, color: '#9f9f9f' }} className='search-icon'/>
      </label>
      <input type='text' name='search' id='search' />
    </form>
  );
}

export default Search;
