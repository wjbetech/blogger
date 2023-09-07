import React from 'react'
import { NavBar } from './components/NavBar'
import { Home } from './pages/Home'
import { Single } from './pages/Single'
import { Write } from './pages/Write'

export default function App() {
  return (
    <div>
      <NavBar />
      <Write />
    </div>
  )
}

