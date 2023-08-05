import React from "react"
// import { motion } from "framer-motion"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"

import Header from './components/Header'
import Footer from './components/Footer'

import Home from "./Pages/Home"
import Services from "./Pages/Services"

function App() {

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/services" element={<Services/>} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App