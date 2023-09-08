import React from 'react'
import './NavBar.css'
import logo from "../assets/wjbetech-logo.png"

export const NavBar = () => {
  return (
    <div className='nav--bar'>
        <div className="nav--bar--left"><a href="/"><img id='wjbetech' src={logo} alt="" /></a></div>
        <div className="nav--bar--center">
          <ul>
            <li><a href="/">HOME</a></li>
            <li><a href="/about">ABOUT</a></li>
            <li><a href="/contact">CONTACT</a></li>
            <li><a href="/login">LOGIN</a></li>
          </ul>
        </div>
        <div className="nav--bar--right">
          <i className='bx bxl-github'></i>
          <i className='bx bxl-linkedin-square'></i>
          <a href="/settings" className="navbar--user--img">
            W
          </a>
        </div>
    </div>
  )
}
