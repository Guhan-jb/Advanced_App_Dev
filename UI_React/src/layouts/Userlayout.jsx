import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Public/Footer'
import UserNav from '../components/Shared/UserNav'

const Userlayout = () => {
  return (
    <>
    <div className='h-screen w-screen p-0 m-0 flex flex-col overflow-scroll'>
            <UserNav/>
            <div className='h-[90vh] relative overflow-y-scroll'>
                <Outlet/>
            </div>
            <Footer/>
         </div>
    </>
  )
}

export default Userlayout