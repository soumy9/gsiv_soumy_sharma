import Search from '../Search/Search';
import './Navigation.css';

function Navigation({ title }) {
  return (
    <>
      <nav className='navigation'>
        {title ? <h1>{title}</h1> : <Search></Search>}
        <button>Home</button>
      </nav>
    </>
  );
}

export default Navigation;
