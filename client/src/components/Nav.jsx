import { Link, useHistory } from "react-router-dom";
import { useState } from "react";

import '../assets/css/nav.css';
import { find } from "../utilities/find.js";
import logo from '../assets/images/logo.png';

const Nav = (props) => {
  const [search, setSearch] = useState("");
  const history = useHistory();

  const handleFocus = (ev) => {
    ev.target.className = "nav__items__searchbar__focus";
  }

  const handleBlur = (ev) => {
    ev.target.className = "nav__items__searchbar";
  }

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const results = find(props.positions, search);
    props.setSearchResults(results);
    history.push("/search");
  }

  return (
    <div className="nav" >
      <div className="nav__items" >
        <Link className="nav__items__logo" to="/">
          <img src={logo} alt="logo" />
        </Link>
        <form onSubmit={handleSubmit} >
          <input 
            className="nav__items__searchbar" 
            type="search" 
            placeholder="Search"
            value={search}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={(ev) => setSearch(ev.target.value)}
          />
        </form>
      </div>
      <div className="nav__bar-out" >
        <div className="nav__bar-out__bar-in"></div>
      </div>
    </div>
  )
}

export default Nav;