import React from "react";
import "../Style/Nav_Bar.css";
import { assets } from "../assets/assets";
import '../Style/Page.css'

const Nav_Bar = () => {
  return (
    <>
      <div className="Nav_bar">
        <div className="Nav_bar-1">
            <img src={assets.left} alt="" id="left" />
            <img src={assets.right} alt="" id="right"/>
        </div>
        <div className="Nav_bar-2">
            <input type="text" name="" id="textt" placeholder="Artists, songs, or podcasts" />
        </div>
        <div className="Nav_bar-3">
          <div className="login">
            <div>
              <img src={assets.Group11} alt="" id="group11" />
            </div>
            <p>Rani</p>
            <div>
              <button id="button-login">
                <img src={assets.down} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav_Bar;
