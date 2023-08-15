import React from "react"
// import { motion } from "framer-motion"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"

import Header from './components/Header'
import Footer from './components/Footer'

import Home from "./Pages/Home"
import Services from "./Pages/Services"
import Portfolios from "./Pages/Portfolios"
import PortfolioDetails from "./components/PortfolioDetails"

function App() {

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/portfolios" element={<Portfolios/>} />
        <Route path="/portfolio/:id" element={<PortfolioDetails/>} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App