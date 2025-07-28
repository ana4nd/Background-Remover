import React from 'react'
import Home from './pages/Home'
import Results from './pages/Result'
import BuyCredits from './pages/BuyCredits'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='min-h-screen bg-slate-50'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/result' element={<Results />}/>
        <Route path='/buy' element={<BuyCredits />}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App