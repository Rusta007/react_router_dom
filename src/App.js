import React from 'react'
import Home from './Component/Home'
import Contact from './Component/Contact'
import About from './Component/About'
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'

function App() {

    return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
      </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
    </Routes>
    </Router>
  )
}

export default App



/*
 portfolio

 home
 contact
 about
 gallery

react-router-dom
----------------
BrowserRouter => Grand parent component
Routes => Parent component
=> wrap all the child components
Route => child component

Link
=> anchor tag

lo
*/
