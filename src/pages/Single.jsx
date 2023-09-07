import React from 'react'
import "./Single.css"
import { SinglePost } from '../components/SinglePost'
import { SideBar } from '../components/SideBar'

export const Single = () => {
  return (
    <div className="single">
        <SinglePost />
        <SideBar />
    </div>
  )
}
