import React from 'react'
import { NavBar } from './components/NavBar'
import { Home } from './pages/Home'
import { Single } from './pages/Single'
import { Write } from './pages/Write'
import { Settings } from './pages/Settings'

export default function App() {
  return (
    <div>
      <NavBar />
      <Settings />
    </div>
  )
}

