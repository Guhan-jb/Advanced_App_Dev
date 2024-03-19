import React from 'react';
import { NavLink,useNavigate } from 'react-router-dom'; // Assuming you're using React Router for navigation
import { Book, Building, Columns } from 'react-bootstrap-icons'; // Import icons
import Logo from '/vite.svg'; // Import your SVG logo

const AdminSidebar = () => {
  const navigate = useNavigate();
  const handleLogOut = (e) => {
    e.preventDefault();
    localStorage.setItem('login','null')
    navigate("/");
  };

  return (
    <div className="bg-white shadow-lg h-screen text-blue-500 w-1/6 flex flex-col">
      <div className="p-4 flex items-center justify-center">
        <img src={Logo} alt="Logo" className="w-8 h-8 mr-2" />
        <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">Matrix</h1>
      </div>
      <p className="text-center text-xs text-blue-500 font-semibold mb-4">Admin</p>
      <div className="flex flex-col justify-center items-center">
        <NavLink to="/admin/dashboard" className="p-4 flex items-center hover:bg-gray-800">
          <Columns className="mr-2" size={20} />
          Dashboard
        </NavLink>
        <NavLink to="/admin/courses" className="p-4 flex items-center hover:bg-gray-800">
          <Book className="mr-2" size={20} />
          Courses
        </NavLink>
        <NavLink to="/admin/institutes" className="p-4 flex items-center hover:bg-gray-800">
          <Building className="mr-2" size={20} />
          Institutes
        </NavLink>
        <button 
            onClick={handleLogOut}
            className="text-blue-500 flex items-center px-3 py-2 rounded-md transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105 hover:text-white hover:bg-gradient-to-r from-blue-400 to-blue-600"
          >
            Logout
          </button>
      </div>
    </div>
  );
};

export default AdminSidebar;
