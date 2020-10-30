import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [isclick, setClick] = useState(false);
  const handleClick = () => setClick(!isclick);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <div className="navbar"> 
        <NavLink to="/"  className="navbar-logo" onClick={closeMobileMenu}>
          DeepDiveAnime
        </NavLink>
        <div className="menu-icon" onClick={handleClick}>
          {isclick ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={isclick ? "nav-menu mobile" : "nav-menu"}>
          <li className="nav-item">
            <NavLink 
              to="/" 
              activeClassName="is-active"  
              exact={true} 
              className="nav-links" 
              onClick={closeMobileMenu}>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/movies"
              exact={true}
              activeClassName="is-active"
              className="nav-links"
              onClick={closeMobileMenu}>
                Movies
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/tvshows"
              exact={true}
              activeClassName="is-active"
              className="nav-links"
              onClick={closeMobileMenu}>
                TvShows
            </NavLink>
          </li>
        </ul>  
      </div> 
    </>
  );
}

export default Navbar;
