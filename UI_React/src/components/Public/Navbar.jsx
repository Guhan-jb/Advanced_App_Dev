import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  HouseDoor,
  Envelope,
  PersonCircle,
  Calendar2Check,
  Book,
  People,
} from 'react-bootstrap-icons'; // Importing Bootstrap icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const links = [
    
    {
      name: 'Home',
      path: '/',
      icon: <HouseDoor size={20} />,
    },
    {
      name: 'Services',
      path: '#',
      icon: <Calendar2Check size={20} />,
      children: [
        {
          name: 'Events',
          path: '/events',
          icon: <Calendar2Check size={20} />,
        },
        {
          name: 'Courses',
          path: '/courses',
          icon: <Book size={20} />,
        },
        {
          name: 'Instructors',
          path: '/instructors',
          icon: <People size={20} />,
        },
      ],
    },
    {
      name: 'Contact',
      path: '/contact',
      icon: <Envelope size={20} />,
    },
    
    {
      name: 'Login',
      path: '/login',
      icon: <PersonCircle size={20} />,
    },
  ];

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-orange-600 font-extrabold text-4xl text-sm">Matrix</div>
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-white"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            )}
          </svg>
        </button>
        <div className={`md:flex items-center space-x-4 ${isOpen ? 'block' : 'hidden'}`}>
          {links.map((link, index) =>
            link.children ? (
              <div key={index} className="relative">
                <button
                  onClick={() => toggleMenu(index)}
                  className="text-orange-500 flex items-center hover:bg-orange-300 px-3 py-2 rounded-md transition-all duration-300 ease-in-out"
                >
                  {link.icon}
                  <span className="ml-2 text-sm">{link.name}</span>
                </button>
                {isOpen === index && (
                  <div className="absolute mt-2 bg-white shadow-lg rounded-md py-2 w-32">
                    {link.children.map((child, childIndex) => (
                      <NavLink
                        key={childIndex}
                        to={child.path}
                        activeClassName="font-bold"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                        onClick={toggleMenu}
                      >
                        <div className="flex items-center">
                          {child.icon}
                          <span className="ml-2 text-sm">{child.name}</span>
                        </div>
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={index}
                to={link.path}
                activeClassName="shadow-md font-bold"
                className="text-orange-500 flex items-center hover:bg-orange-300 px-3 py-2 rounded-md transition-all duration-300 ease-in-out"
              >
                {link.icon}
                <span className="ml-2 text-sm">{link.name}</span>
              </NavLink>
            )
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
