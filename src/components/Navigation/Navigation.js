import { Link } from 'react-router-dom';
import Search from '../Search/Search';
import './Navigation.css';

function Navigation({ title }) {
  return (
    <>
      <nav className='navigation'>
        {title ? <h1>{title}</h1> : <Search></Search>}
        <Link to='/'>Home</Link>
      </nav>
    </>
  );
}

export default Navigation;
