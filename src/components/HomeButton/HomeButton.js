import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { resetPage } from "../../store/slice";
import HomeIcon from '@mui/icons-material/Home';
function HomeButton(){
  const dispatch = useDispatch();
  function clickHandler(){
    dispatch(resetPage());
  }
  return(<Link to='/' onClick={clickHandler}><HomeIcon style={{ fontSize: 35 }} color="primary"/></Link>)
}

export default HomeButton;