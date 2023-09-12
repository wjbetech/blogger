import React from 'react'
import './NavBar.css'
import logo from "../assets/wjbetech-logo.png"
import { Link } from 'react-router-dom'

export const NavBar = () => {
  const loggedIn = true;
  return (
    <div className='nav--bar'>
        <div className="nav--bar--left"><a href="https://github.com/wjbetech" target='_blank'><img id='wjbetech' src={logo} alt="" /></a></div>
        <div className="nav--bar--center">
          <ul>
            <li>
              <Link to="/" >HOME</Link>
            </li>
            <li>
              <Link to="/write" >WRITE</Link>  
            </li>
            <li>
              <Link to="/contact" >CONTACT</Link>
            </li>
            <li>
              <Link to={loggedIn ? "/" : "/login"} >{loggedIn ? "LOGOUT" : "LOGIN"}</Link>
            </li>
          </ul>
        </div>
        <div className="nav--bar--right">
          {loggedIn ? <a href="/settings" className="navbar--user--img">
            W
          </a> : 
          <a href="/register">REGISTER</a>}
        </div>
    </div>
  )
}
