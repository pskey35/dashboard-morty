import React from 'react'
import {Route, Routes} from 'react-router-dom'
import LoginPage from './pages/Login'
import HomePage from './pages/Home'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Routes>
      <Route path='/' element={<LoginPage/>}/>
      <Route path='/home' element={<HomePage/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
  )
}

export default App