import { Link } from "react-router-dom";

import '../assets/css/nav.css';
import logo from '../assets/images/logo.png'

const Nav = () => {
  return (
    <div className="nav" >
      <div className="nav__items" >
        <Link className="nav__items__logo" to="/">
          <img src={logo} alt="logo" />
        </Link>
        <div className="nav__items__searchbar" ></div>
      </div>
      <div className="nav__bar-out" >
        <div className="nav__bar-out__bar-in"></div>
      </div>
    </div>
  )
}

export default Nav;