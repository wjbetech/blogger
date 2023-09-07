import React from 'react'
import './Header.css'
import headerImg from "../assets/header-desktop.png"

export const Header = () => {
  return (
    <div className='header'>
        <div className="header--title">
            <span className="header--title-sm">React & Node</span>
            <span className="header--title--lg">Blog</span>
        </div>
        <img 
            src={headerImg}
            alt="A marshy forest" 
            className="header--img" 
        />
    </div>
  )
}
