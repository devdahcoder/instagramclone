import React from 'react'
import "./assets/style/index.css"
import "../../styles/global.css"
import GridThree from "./assets/images/gridthree.svg"
import GridTwo from "./assets/images/gridtwo.svg"
import OptionLines from "./assets/images/options-lines.svg"
import Plus from "./assets/images/plus.svg";


const SideGrid = ({ handleClickToggle }) => {
  return (
    <div className="grid-nav">
      <ul className="grid-ul">
        



        <li className="grid-li">
          <div className="svg-button-container grid-link">
            <button className="svg-button">
              <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 359 359"><path d="M96 0H13C7.5 0 3 4.5 3 10v83c0 5.5 4.5 10 10 10h83c5.5 0 10-4.5 10-10V10C106 4.5 101.5 0 96 0zM87 84H23V20h64V84z"/><path d="M221 0h-83c-5.5 0-10 4.5-10 10v83c0 5.5 4.5 10 10 10h83c5.5 0 10-4.5 10-10V10C231 4.5 226.5 0 221 0zM212 84h-64V20h64V84z"/><path d="M96 126H13c-5.5 0-10 4.5-10 10v83c0 5.5 4.5 10 10 10h83c5.5 0 10-4.5 10-10v-83C106 130.5 101.5 126 96 126zM87 209H23v-63h64V209z"/><path d="M221 126h-83c-5.5 0-10 4.5-10 10v83c0 5.5 4.5 10 10 10h83c5.5 0 10-4.5 10-10v-83C231 130.5 226.5 126 221 126zM212 209h-64v-63h64V209z"/><path d="M346 0h-83c-5.5 0-10 4.5-10 10v83c0 5.5 4.5 10 10 10h83c5.5 0 10-4.5 10-10V10C356 4.5 351.5 0 346 0zM337 84h-64V20h64V84z"/><path d="M346 126h-83c-5.5 0-10 4.5-10 10v83c0 5.5 4.5 10 10 10h83c5.5 0 10-4.5 10-10v-83C356 130.5 351.5 126 346 126zM337 209h-64v-63h64V209z"/><path d="M96 256H13c-5.5 0-10 4.5-10 10v83c0 5.5 4.5 10 10 10h83c5.5 0 10-4.5 10-10v-83C106 260.5 101.5 256 96 256zM87 340H23v-64h64V340z"/><path d="M221 256h-83c-5.5 0-10 4.5-10 10v83c0 5.5 4.5 10 10 10h83c5.5 0 10-4.5 10-10v-83C231 260.5 226.5 256 221 256zM212 340h-64v-64h64V340z"/><path d="M346 256h-83c-5.5 0-10 4.5-10 10v83c0 5.5 4.5 10 10 10h83c5.5 0 10-4.5 10-10v-83C356 260.5 351.5 256 346 256zM337 340h-64v-64h64V340z"/></svg>
            </button>
          </div>
        </li>



        <li className="grid-li">
          <div className="svg-button-container grid-link">
            <button className="svg-button">
              <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 270 270"><path d="M114 0H10C4.5 0 0 4.5 0 10v104c0 5.5 4.5 10 10 10h104c5.5 0 10-4.5 10-10V10C124 4.5 119.5 0 114 0zM104 104H20V20h84V104z"/><path d="M260 0H156c-5.5 0-10 4.5-10 10v104c0 5.5 4.5 10 10 10h104c5.5 0 10-4.5 10-10V10C270 4.5 265.5 0 260 0zM250 104h-84V20h84V104z"/><path d="M114 146H10c-5.5 0-10 4.5-10 10v104c0 5.5 4.5 10 10 10h104c5.5 0 10-4.5 10-10V156C124 150.5 119.5 146 114 146zM104 250H20v-84h84V250z"/><path d="M260 146H156c-5.5 0-10 4.5-10 10v104c0 5.5 4.5 10 10 10h104c5.5 0 10-4.5 10-10V156C270 150.5 265.5 146 260 146zM250 250h-84v-84h84V250z"/></svg>
            </button>
          </div>
        </li>



        <li className="grid-li">
          <div className="svg-button-container grid-link">
            <button className="svg-button">
              <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 460.1 460.1"><path d="M40 69.7C17.9 69.7 0 87.6 0 109.7c0 22.1 17.9 40 40 40 22.1 0 40-17.9 40-40C80 87.6 62.1 69.7 40 69.7z"/><path d="M40 190C17.9 190 0 207.9 0 230c0 22.1 17.9 40 40 40 22.1 0 40-17.9 40-40C80 207.9 62.1 190 40 190z"/><path d="M40 310.4C17.9 310.4 0 328.3 0 350.4c0 22.1 17.9 40 40 40 22.1 0 40-17.9 40-40C80 328.3 62.1 310.4 40 310.4z"/><path d="M430 79.6H145.4c-16.6 0-30.1 13.5-30.1 30.1 0 16.6 13.5 30.1 30.1 30.1h284.6c16.6 0 30.1-13.5 30.1-30.1C460.1 93.1 446.6 79.6 430 79.6z"/><path d="M430 199.9H145.4c-16.6 0-30.1 13.5-30.1 30.1 0 16.6 13.5 30.1 30.1 30.1h284.6c16.6 0 30.1-13.5 30.1-30.1C460.1 213.4 446.6 199.9 430 199.9z"/><path d="M430 320.3H145.4c-16.6 0-30.1 13.5-30.1 30.1 0 16.6 13.5 30.1 30.1 30.1h284.6c16.6 0 30.1-13.5 30.1-30.1C460.1 333.8 446.6 320.3 430 320.3z"/></svg>
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
