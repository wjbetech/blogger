import React from 'react'
import "./Home.css"
import { Header } from '../components/Header'
import { Posts } from "../components/Posts"
import { SideBar } from '../components/SideBar'

export const Home = () => {
  return (
    <div>
        <Header />
        <div className="home">
          <Posts />
          <SideBar />
        </div>
    </div>
  )
}
