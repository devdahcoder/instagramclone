import React from 'react'
import "./assets/style/index.css"
import GridThree from "./assets/images/gridthree.svg"
import GridTwo from "./assets/images/gridtwo.svg"
import OptionLines from "./assets/images/options-lines.svg"
import Plus from "./assets/images/plus.svg";


const SideGrid = ({ handleClickToggle }) => {
  return (
    <div className="grid-nav">
      <ul className="grid-ul">
        <li className="grid-li">
          <div className="grid-link">
            <button>
              <img className="grid-image" src={GridThree} alt="" />
            </button>
          </div>
        </li>



        <li
          className="grid-li"
          onClick={handleClickToggle}
        >
          <div className="grid-link">
            <button>
              <img className="grid-image" src={GridTwo} alt="" />
            </button>
          </div>
        </li>



        <li className="grid-li">
          <div className="grid-link">
            <button>
              <img className="grid-image" src={OptionLines} alt="" />
            </button>
          </div>
        </li>


        <li className="grid-li">
          <a href="http://www.google.com" className="grid-link">
            <img
              style={{ height: "30px", width: "30px" }}
              className="grid-image"
              src={Plus}
              alt=""
            />
          </a>
      </li>
      </ul>
    </div>
  );
};

export default SideGrid
