import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Home } from './pages/Home';
import { Single } from './pages/Single';
import { Write } from './pages/Write';
import { Settings } from './pages/Settings';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Contact } from './pages/Contact';

export default function App() {
  const loggedIn = false;
  return (
    <Router>
      <NavBar />
      <Routes>
        {/* home page */}
        <Route path="/" element={<Home />} />

        {/* contact page */}
        <Route path="/contact" element={<Contact />} />

        {/* view a single post */}
        <Route path="/post/:postId" element={<Single />} />

        {/* write a new post */}
        <Route path="/write" element={loggedIn ? <Write /> : <Login />} />

        {/* view user settings */}
        <Route path="/settings" element={loggedIn ? <Settings /> : <Login />} />

        {/* login page */}
        <Route path="/login" element={loggedIn ? <Home /> : <Login />} />

        {/* register page */}
        <Route path="/register" element={loggedIn ? <Home /> : <Register />} />
      </Routes>
    </Router>
  );
}
