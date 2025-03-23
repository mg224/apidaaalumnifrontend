import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './index.css'
import PastRoles from './pages/PastRoles'
import Industry from './pages/Industry'
import GradYear from './pages/GradYear'
import Home from './pages/Home'
import Name from './pages/Name'
import { Navbar } from './components/Navbar'
import { MobileMenu } from './components/MobileMenu'

function App() {

  const [menuOpen, setMenuOpen] = useState(false)


  return (
    <>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/name" element={<Name />} />
        <Route path="/gradyear" element={<GradYear />} />
        <Route path="/pastroles" element={<PastRoles />} />
        <Route path="/industry" element={<Industry />} />
      </Routes>
    </>
  )
}

export default App
