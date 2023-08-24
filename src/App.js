import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Details from './components/Details/Details';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/details/:id' element={<Details />} />
      <Route path='*' element={'<p>Page not found<p/>'} />
    </Routes>
  );
}

export default App;
