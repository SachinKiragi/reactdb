import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Create from './pages/Create'
import Read from './pages/Read'
import Delete from './pages/Delete'
import Update from './pages/Update'
import Home from './pages/Home'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/create' element={<Create/>}/>
          <Route path='/read' element={<Read/>}/>
          <Route path='/delete' element={<Delete/>}/>
          <Route path='/update' element={<Update/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App