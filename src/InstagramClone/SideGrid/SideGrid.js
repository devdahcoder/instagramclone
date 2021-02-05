import React from 'react'
import "./assets/style/index.css"
import GridThree from "./assets/images/gridthree.svg"
import GridTwo from "./assets/images/gridtwo.svg"
import OptionLines from "./assets/images/options-lines.svg"
import Plus from "./assets/images/plus.svg"
const SideGrid = ({ handleClickToggle }) => {
  return (
    <div className="grid-nav">
      <ul className="grid-ul">
        <li className="grid-li">
          <div className="grid-link">
            <img className="grid-image" src={GridThree} alt="" />
          </div>
        </li>
        <li
          className="grid-li"
          onClick={handleClickToggle}
        >
          <div className="grid-link">
            <img className="grid-image" src={GridTwo} alt="" />
          </div>
        </li>
        <li className="grid-li">
          <div className="grid-link">
            <img className="grid-image" src={OptionLines} alt="" />
          </div>
        </li>
      </ul>

      <div className="grid-li last-child">
        <a href="http://www.google.com" className="grid-link">
          <img
            style={{ height: "30px" }}
            className="grid-image"
            src={Plus}
            alt=""
          />
        </a>
      </div>
    </div>
  );
};

export default SideGrid
