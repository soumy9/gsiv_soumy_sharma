import { Link } from 'react-router-dom';
import Search from '../Search/Search';
import './Navigation.css';
import HomeButton from '../HomeButton/HomeButton';

function Navigation({ title }) {
  return (
    <>
      <nav className='navigation'>
        {title ? <h1>{title}</h1> : <Search />}
        <HomeButton />
      </nav>
    </>
  );
}

export default Navigation;
