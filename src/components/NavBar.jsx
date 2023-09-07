import React from 'react'
import './NavBar.css'
import logo from "../assets/wjbetech-logo.png"

export const NavBar = () => {
  return (
    <div className='nav--bar'>
        <div className="nav--bar--left"><a href="/"><img id='wjbetech' src={logo} alt="" /></a></div>
        <div className="nav--bar--center">
          <ul>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
          </ul>
        </div>
        <div className="nav--bar--right"><i className='bx bxl-github'></i><i className='bx bxl-linkedin-square'></i></div>
    </div>
  )
}