import { useState } from 'react'
import './App.css'
import {Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './Page/Home'
import Dashboard from './Page/Dashboard'

function App() {
  return (
    <>
     <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route/>
      </Routes>
     </Router>
    </>
  )
}

export default App
