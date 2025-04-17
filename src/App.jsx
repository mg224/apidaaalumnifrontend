import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import { Navbar } from './components/Navbar'
import { MobileMenu } from './components/MobileMenu'
import Search from './pages/Search'

function App() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </>
  )
}

export default App
