import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
