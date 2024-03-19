import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
const Contact=lazy(()=>import( './pages/Contact'))
const Login=lazy(()=>import('./pages/Auth/Login'))
const Register=lazy(()=>import('./pages/Auth/Register'))
import AdminLayout from './layouts/AdminLayout'
const Userlayout=lazy(() =>import( './layouts/Userlayout'))
import Loader from './components/Loader'
const Courses =lazy(()=>import('./pages/Courses'))
const About =lazy(()=>import('./pages/About'))
const Profile =lazy (()=>import('./pages/Profile'))
const UserHome=lazy(()=>import('./pages/UserHome'))
const Institute=lazy(()=>import('./pages/Institute'))
const CourseEnroll =lazy(()=>import('./pages/CourseEnroll'))
import AdminSidebar from './components/Admin/AdminSidebar'
const AdminDashboard=lazy(()=>import('./pages/Admin/AdminDashboard'))
const AdminCourses =lazy(()=>import('./pages/Admin/AdminCourse'))
const AdminInstitutes =lazy(()=> import('./pages/Admin/AdminInstitute'))
import PrivateRoute from './components/PrivateRoute'
const Error404= lazy (()=>import('./pages/Error404'))
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Suspense fallback={<Loader />}>
    <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='/register' element={<Register />}/>
      <Route element={<PrivateRoute />} >
      <Route element={<AdminLayout />}>
        <Route path='/sidebar' element={<AdminSidebar />}/>
        <Route path='/admin/dashboard' element={<AdminDashboard />}/>
        <Route path='/admin/courses' element={<AdminCourses />}/>
        <Route path='/admin/institutes' element={<AdminInstitutes />}/>
      </Route>
      <Route element={<Userlayout />}> 
        <Route path='/user' element={<UserHome />} /> 
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/courses' element={<Courses />}/>
        <Route path='/institutes' element={<Institute />}/>
        <Route path='/enroll' element={<CourseEnroll />}/>
        <Route path='/user/profile' element={<Profile />} /> 
      </Route>
      </Route>
      <Route path='*' element={<Error404 />}/>
    </Routes>
      </Suspense>
    </BrowserRouter>
    
    </>
  )
}

export default App
