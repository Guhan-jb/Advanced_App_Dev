import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import Weblayout from './layouts/Weblayout'
import Events from './pages/Events'
import About from './pages/About'
import Courses from './pages/Courses'
import Instructors from './pages/Instructors'
import Blog from './pages/Blog'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route element={<Weblayout />}>
      <Route path='/' element={<Home />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/register' element={<Register />}/>
      <Route path='/events' element={<Events />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/courses' element={<Courses />}/>
      <Route path='/instructors' element={<Instructors />}/>
      <Route path='/blog' element={<Blog />}/>



      </Route>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App