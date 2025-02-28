import React from 'react'
import '../Style/NavBar.css'
import { assets } from '../assets/assets'

const NavBar = () => {
  return (
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
  )
}

export default NavBar