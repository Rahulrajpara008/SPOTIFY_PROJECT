import React from "react";
import "../Style/SideBar.css";
import { assets } from "../assets/assets";
const SideBar = () => {
  return (
    <div className="sidebar-main">
      <div className="sidebar-main-1">
        <img src={assets.Spotify_logo} alt="" id="logo" />
      </div>
      <div className="sidebar-main-2">
        <div className="sidebar-main-2-1">
          <img src={assets.fi_ss_home} alt="" id="home" />
          <p>Home</p>
        </div>

        <div className="sidebar-main-2-2">
          <img src={assets.fi_rs_search} alt="" id="search" />
          <p>Search</p>
        </div>

        <div className="sidebar-main-2-3">
          <img src={assets.library} alt="" id="lib" />
          <p id="libb"> Your Library</p>
        </div>
      </div>
      <div className="sidebar-main-3">
        <div className="sidebar-main-3-1">
          <img src={assets.fi_ss_plus_small} alt="" id="plus" />
          <p>Create Playlist </p>
        </div>
        <div className="sidebar-main-3-2">
          <img src={assets.Group_2} alt="" id="group2" />
          <p>Liked Songs </p>
        </div>
        <div className="sidebar-main-3-3">
          <img src={assets.gg} alt="" id="gg" />
          <p>Your Episodes</p>
        </div>

        <div className="sidebar-main-4">
          <div className="sidebar-main-4-1">
            <img src={assets.gg} alt="" id="gg" />
            <p>Your Episodes</p>
          </div>
          <div className="sidebar-main-4-2">
            <img src={assets.Group_4} alt="" id="group01" />
            <p>Dance / Electronic</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
