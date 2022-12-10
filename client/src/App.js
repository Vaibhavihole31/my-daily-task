import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './view/Home/Home.js'
import AddTask from './view/AddTask/AddTask.js'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/> 
      <Route path='/add-task' element={<AddTask/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App