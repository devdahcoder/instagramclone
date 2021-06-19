import React from 'react';
import "./assets/style/index.css";
import Instagram from "./assets/images/instagram.svg";
import Logo from "./assets/images/logo.png";
import Home from "./assets/images/home.svg";
import Search from "./assets/images/search.svg";
import Direction from "./assets/images/direction.svg";
import Heart from "./assets/images/heart.svg";
import Send from "./assets/images/send.svg";
// import Profile from "./assets/images/download.png"
import ProfileImage from "../ProfileImage/ProfileImage";
import {Link} from "react-router-dom";



const Header = ({ profile }) => {
  return (
    <header className="main-header">
      <div className="main-header-display">
        <div className="main-logo">
          <Link to="/">
              <div className="display-logo">
                <div className="logo-div">
                  <img className="logo" src={Instagram} alt="" />
                </div>

                <div>
                  <img className="logo-font" src={Logo} alt="" />
                </div>
              </div>
          </Link>
        </div>

        <nav className="main-header-nav">
          <ul>
            <li>
              <Link to="/">
                  <button className="icon-btn">
                    <div>
                      <img className="icon" src={Home} alt="" />
                    </div>
                  </button>
              </Link>
            </li>
            <li>
                <button className="icon-btn">
                  <div>
                    <img className="icon" src={Search} alt="" />
                  </div>
                </button>
            </li>
            <li>
              <Link to="/explore">
                  <button className="icon-btn">
                    <div>
                      <img className="icon" src={Direction} alt="" />
                    </div>
                  </button>
              </Link>
            </li>
            <li>
              <Link to="/notification">
                  <button className="icon-btn">
                    <div>
                      <img className="icon" src={Heart} alt="" />
                    </div>
                  </button>
              </Link>
            </li>
          </ul>
        </nav>

        <div className="profile-logo">
          <Link to="/chat">
            <button className="icon-btn">
              <div>
                <img className="icon" src={Send} alt="" />
              </div>
            </button>
          </Link>

          <Link to="/profile" >
            <div className="profile-container">
              <ProfileImage profile={profile} />
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header
