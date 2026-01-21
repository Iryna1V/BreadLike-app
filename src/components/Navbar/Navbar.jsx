import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import "./Navbar.css";
import { GiBread } from "react-icons/gi";
import { Link } from "react-router-dom";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const closeMenu = () => setShowMenu(false);

  return (
    <div>
      <nav className="sticky">
        <Link to="/" className="bread-title" onClick={closeMenu}>
          BreadLike <GiBread className="icon-b" />
        </Link>
        <div className={showMenu ? "menu mobile-menu" : "menu"}>
          <ul>
            <li>
              <Link to="/" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={closeMenu}>
                About the leaven
              </Link>
            </li>
            <li>
              <Link to="/types" onClick={closeMenu}>
                Bread types
              </Link>
            </li>
            <li>
              <Link to="/blog" onClick={closeMenu}>
                Blog
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={closeMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <FaBars className="bar" onClick={() => setShowMenu(!showMenu)} />
      </nav>
    </div>
  );
}

export default Navbar;
