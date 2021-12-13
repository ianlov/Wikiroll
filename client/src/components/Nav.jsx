import { Link } from "react-router-dom";

import '../assets/css/nav.css';
import logo from '../assets/images/logo.png'

const Nav = () => {
  const handleFocus = (ev) => {
    ev.target.className = "nav__items__searchbar__focus"
  }

  const handleBlur = (ev) => {
    ev.target.className = "nav__items__searchbar";
  }

  return (
    <div className="nav" >
      <div className="nav__items" >
        <Link className="nav__items__logo" to="/">
          <img src={logo} alt="logo" />
        </Link>
        <input 
          className="nav__items__searchbar" 
          type="search" placeholder="Search" 
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>
      <div className="nav__bar-out" >
        <div className="nav__bar-out__bar-in"></div>
      </div>
    </div>
  )
}

export default Nav;