import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import "../css/Navbar.css";
import { GiBread } from "react-icons/gi";
import { Link } from "react-router-dom";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      <nav className="sticky">
        <Link to="/" className="bread-title">
          BreadLike <GiBread className="icon-b" />
        </Link>
        <div className={showMenu ? "menu mobile-menu" : "menu"}>
          <ul>
            <li>
              <Link to="/"> Home </Link>
            </li>
            <li>
              <Link to="/about"> About the leaven </Link>
            </li>
            <li>
              <Link to="/types"> Bread types </Link>
            </li>
            <li>
              <Link to="/blog"> Blog </Link>
            </li>
            <li>
              <Link to="/contact"> Contact </Link>
            </li>
          </ul>
        </div>
        <FaBars className="bar" onClick={() => setShowMenu(!showMenu)} />
      </nav>
    </div>
  );
}

export default Navbar;
