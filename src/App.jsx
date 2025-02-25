import React from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import About from './pages/about'


function App() {
  return (
    <>
    <Navbar/>
    <main className="main">
      <About/>
    </main> 
    </>
  )
}

export default App;