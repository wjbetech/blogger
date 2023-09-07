import React from 'react'
import './Header.css'
import forest from "../assets/forest.png"

export const Header = () => {
  return (
    <div className='header'>
        <div className="header--title">
            <span className="header--title-sm">React & Node</span>
            <span className="header--title--lg">Blog</span>
        </div>
        <img 
            src={forest}
            alt="A marshy forest" 
            className="header--img" 
        />
    </div>
  )
}
