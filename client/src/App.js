import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './view/Home/Home.js'
import AddTask from './view/AddTask/AddTask.js'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/> 
      <Route path='/add-task' element={<AddTask/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App