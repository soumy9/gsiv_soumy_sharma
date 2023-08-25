import './App.css';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Details from './components/Details/Details';
import { ThemeProvider, createTheme } from '@mui/material';
import { lime, purple } from '@mui/material/colors';

const theme = createTheme({
  // palette: {
  //   primary: lime,
  //   secondary: purple,
  // },
  palette: {
    primary: {
      main: '#000',
      // light: will be calculated from palette.primary.main,
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: '#E0C2FF',
      light: '#F5EBFF',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#47008F',
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='base'>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/details/:id' element={<Details />} />
          <Route path='*' element={'<p>Page not found<p/>'} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
