import Search from "../Search/Search";

function Navigation({title}) {
  return <>
    <nav>
      <Search></Search>
      <h1>{title}</h1>
    </nav>
  </>;
}

export default Navigation;
