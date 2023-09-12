import React from 'react'
import "./Login.css"

export const Login = () => {
  return (
    <div className="login">
        <form className="login--form">
          <h1>Login</h1>
            <label htmlFor="">Email:</label>
            <input type="text" placeholder='your-email@gmail.com' />
            <label htmlFor="">Password:</label>
            <input type="email" placeholder='*******' />
            <button className="login--button">Login</button>
            <span>Not a member yet?</span>
            <button className="login--register"><a href="/register">Register</a></button>
        </form>
    </div>
  )
}
