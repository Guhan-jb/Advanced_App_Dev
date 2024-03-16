import React from 'react'
import Navbar from '../components/Public/Navbar'
import Footer from '../components/Public/Footer'
import { Outlet } from 'react-router-dom'

const Weblayout = () => {
  return (
    <>
        <div className='h-screen w-screen p-0 m-0 flex flex-col overflow-scroll'>
            <Navbar/>
            <div className='h-[80vh] relative overflow-y-scroll'>
                <Outlet/>
            </div>
            <Footer/>
         </div>
    </>
  )
}

export default Weblayout