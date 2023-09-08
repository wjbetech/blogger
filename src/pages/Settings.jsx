import React from 'react'
import "./Settings.css"
import { SideBar } from '../components/SideBar'

export const Settings = () => {
  return (
    <div className="settings--page">
        <div className="settings--wrapper">
            <div className="settings--title">
                <span className="settings--update--title">Update Information</span>
                <span className="settings--delete--title">Delete Account</span>
            </div>
            <form action="" className="settings--form">
                <label>Profile Picture:</label>
                <div className="settings--profilepic">
                    <img 
                        src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60" 
                        alt="An open laptop" 
                        className='settings--profile--image'
                    />
                    <label htmlFor="file--input">
                    <i class='bx bx-upload' ></i>
                    </label>
                    <input 
                        type="file"
                        id="file--input"
                    />
                </div>
                <div className="settings--info">
                    <label>Username:</label>
                    <input type="text" placeholder='Your name' />
                    <label>Email:</label>
                    <input type="email" placeholder='your-email@gmail.com' />
                    <label>Password:</label>
                    <input type="password" placeholder='******' />
                    <button className="settings--submit">Update</button>
                </div>
            </form>
        </div>
        <SideBar />
    </div>
  )
}
