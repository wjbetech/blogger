import React from 'react'
import "./Posts.css"
import { Post } from './Post'

export const Posts = () => {

  return (
    <div className="posts">
      <Post className="Post" />
      <Post className="Post" />
      <Post className="Post" />
    </div>
  )
}
