import React from 'react'
import AdminSidebar from '../components/Admin/AdminSidebar'
import Footer from '../components/Public/Footer'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <div className='h-screen w-screen p-0 m-0 flex overflow-hidden'>
      {/* Admin Sidebar */}
      <AdminSidebar />

      {/* Outlet Content */}
      <div className='flex-grow flex flex-col overflow-y-scroll'>
        <div className='px-4 py-2'> {/* Add padding to the content */}
          <Outlet />
        </div>
       
      </div>
    </div>
  )
}

export default AdminLayout
