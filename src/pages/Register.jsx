import React from 'react'
import "./Register.css"

export const Register = () => {
  return (
    <div className="register">
        <form className="register--form">
        <h1>Register</h1>
            <label htmlFor="">Email:</label>
            <input type="text" placeholder='your-email@gmail.com' />
            <label htmlFor="">Password:</label>
            <input type="email" placeholder='*******' />
            <button className="register--button">Register</button>
        </form>
    </div>
  )
}
