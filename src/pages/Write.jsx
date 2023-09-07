import React from 'react'
import "./Write.css"

export const Write = () => {
  return (
    <div className="write">
        <img 
            src="https://images.unsplash.com/photo-1595044426077-d36d9236d54a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGtleWJvYXJkfGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60"
            alt="A colorful keyboard" 
            className="file--img" 
        />
        <form className="write--form">
            <div className="write--form--group">
                <label htmlFor="file--input">
                    <i class='write--icon bx bx-plus' ></i>
                </label>
                <input 
                    type="file" 
                    id="file--input" 
                />
                <input 
                    type="text" 
                    id="text--input" 
                    placeholder="Title" 
                    className="write--input"
                    autoFocus={true}
                />
            </div>
            <div className="write--form--group">
                <textarea 
                    type="text" 
                    placeholder="Tell your story..."
                    className="write--input write--text"
                ></textarea>
            </div>
            <button className="write--submit">Publish</button>
        </form>
    </div>
  )
}
