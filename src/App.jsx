import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import { Dashboard } from './components/Dashboard'
import { Landing } from './components/Landing'

function App() {
  

  return (
    <div>
    <div style={{backgroundColor:'black',color:"white"}}>this is style</div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Dashboard></Dashboard>} />
      <Route path='/landing' element={<Landing></Landing>} />
    </Routes>
    
    </BrowserRouter>
    </div>
  )
}

export default App
