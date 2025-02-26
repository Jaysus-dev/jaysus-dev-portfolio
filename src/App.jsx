import React from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/footer/Footer'


function App() {
  return (
    <>
      <Navbar/>
        <Outlet/>
      <Footer/>
    </>
  )
}

export default App;