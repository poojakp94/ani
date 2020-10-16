import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
// import { Button } from "../Button/Button.js";
import "./Navbar.css";
import { IconContext } from "react-icons/lib";
function Navbar() {
  const [isclick, setClick] = useState(false);
  // const [button, setButton] = useState(true);

  const handleClick = () => setClick(!isclick);
  const closeMobileMenu = () => setClick(false);

  // const showButton = () => {
  //   if (window.innerWidth <= 960) {
  //     setButton(false);
  //   } else {
  //     setButton(true);
  //   }
  // };

  // window.addEventListener("resize", showButton);
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              DeepDiveAnime
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {isclick ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={isclick ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/movies"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Movies
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/tvshows"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  TvShows
                </Link>
              </li>
              {/* <li className="nav-btn">
                {button ? (
                  <Link to="/signup" className="btn-link">
                    <Button buttonStyle="btn--outline">Know More</Button>
                  </Link>
                ) : (
                  <Link
                    to="/signup"
                    className="btn-link"
                    onClick={closeMobileMenu}
                  >
                    <Button buttonStyle="btn--outline" buttonSize="btn--mobile">
                      Know More
                    </Button>
                  </Link>
                )}
              </li> */}
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
