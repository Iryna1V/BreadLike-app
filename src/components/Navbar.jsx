import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import "../css/Navbar.css";
import { GiBread } from "react-icons/gi";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      <nav className="sticky">
        <a href="/" className="bread-title">
          BreadLike <GiBread className="icon-b" />
        </a>
        <div className={showMenu ? "menu mobile-menu" : "menu"}>
          <ul>
            <li>
              <a href="/"> Home </a>
            </li>
            <li>
              <a href="/about"> About the leaven </a>
            </li>
            <li>
              <a href="/types"> Bread types </a>
            </li>
            <li>
              <a href="/blog"> Blog </a>
            </li>
            <li>
              <a href="/contact"> Contact </a>
            </li>
          </ul>
        </div>
        <FaBars className="bar" onClick={() => setShowMenu(!showMenu)} />
      </nav>
    </div>
  );
}

export default Navbar;
