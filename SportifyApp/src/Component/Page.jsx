import React from "react";
import {  assets } from "../assets/assets";
import "../Style/Page.css";
const Page = () => {
  return (
    <div className="page-main">
      <div className="page-main-1">
        <div className="arrow-left">
          <img src={assets.left} alt="" id="left" />
          <img src={assets.right} alt="" id="right" />
        </div>
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
      <div className="page-main-01">
        <h2 id="fav">Your favourites Songs</h2>
      </div>
      <div className="page-main-2">
        <div className="page-main-2-1">
          <div id="rechert">
            <img src={assets.Rectangle} alt="" id="group_2" />
            <img src={assets.heart} alt="" id="heart" />
          </div>
          <p>Liked Songs</p>
        </div>
        <div className="page-main-2-2">
          <img src={assets.Group_1} alt="" id="group1" />
          <p>Netfix Playlist</p>
        </div>

        <div className="page-main-2-3">
          <img src={assets.Group_3} alt="" id="group3" />
          <p>K/ DA</p>
        </div>
        <div className="page-main-2-4">
          <img src={assets.Group11} alt="" id="group111" />
          <p>Liked Songs</p>
        </div>
        <div className="page-main-2-5">
          <img src={assets.Group_4} alt="" id="group111" />
          <p>Dance / Electronic Mix</p>
        </div>
        {/* <div></div> */}
      </div>
      <div>
        <h2 id="favv">Shows you might like</h2>
      </div>
      <div className="page-main-3">
        <div className="page-main-3-1">
          <div className="Album-item">
            <div className="AlbumItem-item">
              <img src={assets.Rectangle16} alt="" id="rect" />
              <p id="albumm">Weekly Motivatio...</p>
            </div>
          </div>
        </div>
        <div className="page-main-3-2">
          <div className="Album-item">
            <div className="AlbumItem-item">
              <img src={assets.Rectangle1} alt="" id="rect" />
              <p id="albumm">MEDITATION SELF</p>
            </div>
          </div>
        </div>
        <div className="page-main-3-3">
          <div className="Album-item">
            <div className="AlbumItem-item">
              <img src={assets.Rectangle2} alt="" id="rect" />
              <p id="albumm">Words beyond act...</p>
            </div>
          </div>
        </div>
        <div className="page-main-3-4">
          <div className="Album-item">
            <div className="AlbumItem-item">  
              <img src={assets.Rectangle3} alt="" id="rect" />
              <p id="albumm">The Alexa Show</p>
            </div>
          </div>
        </div>
        <div className="page-main-3-5">
          <div className="Album-item">
            <div className="AlbumItem-item">
              <img src={assets.Rectangle5} alt="" id="rect" />
              <p id="albumm">The Stories of Ma...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
