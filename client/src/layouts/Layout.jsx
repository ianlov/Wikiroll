import '../assets/css/layout.css';

import Nav from "../components/Nav.jsx";
import github from "../assets/images/GitHub_logo.png";

import { Link } from "react-router-dom";

const Layout = (props) => {
  return (
    <div>
      <Nav 
        setSearchResults={props.setSearchResults} 
        positions={props.positions}
      />
      {props.children}
      {window.location.href.includes("position") ? 
      <div className="create-link-container">
        <h3>Can't find what you're looking for?</h3>
        <Link 
          to="/create"
          className="create-link-container__button"
        >
          Create
        </Link>
      </div> : null }
      <footer>
        <a href="https://github.com/ianlov/Wikiroll" ><img src={github} alt="github" /></a>
      </footer>
    </div>
  )
}

export default Layout;