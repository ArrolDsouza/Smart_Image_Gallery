import { useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import Gallery from './components/Gallery/Gallery'
import { Routes, Route } from 'react-router-dom'
import AboutUs from "./components/AboutUs"

import './App.css'

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        
      </Routes>
      
    </>
  )
}

export default App
