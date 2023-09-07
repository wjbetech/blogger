import React from 'react'
import "./Post.css"

export const Post = () => {
  return (
    <div className="post">
        <img 
            src="https://images.unsplash.com/photo-1634206332775-3da1b8b3c73c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNjb3R0aXNoJTIwZm9sZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60" 
            alt="" 
            className="post--img" 
        />
        <div className="post--info">
            <div className="post--cats">
                <span className="post--cat">Cats</span>
                <span className="post--cat">Games</span>
            </div>
            <span className="post--title">
                Lorem ipsum dolor sit amet consectetur.
            </span>
            <hr />
            <span className="post--date">
                1 hr ago.
            </span>
        </div>
    </div>
  )
}
