import '../assets/css/layout.css';

import Nav from "../components/Nav.jsx";
import github from "../assets/images/GitHub_logo.png";

const Layout = (props) => {
  return (
    <div>
      <Nav 
        setSearchResults={props.setSearchResults} 
        positions={props.positions}
      />
      {props.children}
      <footer>
        <a href="https://github.com/ianlov/Wikiroll" ><img src={github} alt="github" /></a>
      </footer>
    </div>
  )
}

export default Layout;