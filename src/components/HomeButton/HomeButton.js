import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { resetPage } from "../../store/slice";

function HomeButton(){
  const dispatch = useDispatch();
  function clickHandler(){
    dispatch(resetPage());
  }
  return(<Link to='/' onClick={clickHandler}>Home</Link>)
}

export default HomeButton;