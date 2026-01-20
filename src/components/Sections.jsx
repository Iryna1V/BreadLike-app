import React from "react";
import { Link } from "react-router-dom";
import "../css/Sections.css";

function Sections() {
  return (
    <div className="serv-section">
      <div className="el-section">
        <Link to="/about">
          <div className="element one">
            <h3 className="el-title">
              About the bread <br />
              on the leaven
            </h3>
          </div>
        </Link>

        <Link to="/types">
          <div className="element two">
            <h3 className="el-title">Bread types</h3>
          </div>
        </Link>

        <Link to="/blog">
          <div className="element three">
            <h3 className="el-title">
              Blog about bread
            </h3>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Sections;
