import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { getAllCourse } from '../Api';

const Coursesn = () => {
  const [search, setSearch] = useState('');
  const [links, setLinks] = useState([]);
  const [filteredLinks, setFilteredLinks] = useState([]);

  async function fetchData() {
    try {
      const Course = await getAllCourse();
      setLinks(Course.data);
      setFilteredLinks(Course.data); // Initially set filteredLinks to all links
    } catch (error) {
      console.error("Error fetching products", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    // Filter links based on search term
    const filtered = links.filter(link =>
      Object.values(link).some(value =>
        typeof value === 'string' && value.toLowerCase().includes(search.toLowerCase())
      )
    );
    setFilteredLinks(filtered);
  }, [search, links]);

  return (
    <div className='m-5'>
      <div className='flex flex-row items-center justify-center'>
        <input
          type="text"
          placeholder="Search Courses..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-1/4 p-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Display Courses */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredLinks.map((link, index) => (
          <div key={index} className="m-2 bg-white max-w-[300px] rounded-xl hover:bg-blue-500 hover:scale-110 duration-700 p-5 border-blue-500">
            <h4 className="py-2 text-gray-600 font-bold">{link.courseName}</h4>
            <p className="text-sm leading-7 text-black">Course name: {link.courseName}</p>
            <p className="text-sm leading-7 text-black">Course Description: {link.courseDescription}</p>
            <p className="text-sm leading-7 text-black">Course Duration: {link.courseDuration}</p>
            <p className="text-sm leading-7 text-black">Course Price: {link.coursePrice}</p>
            <div className="pt-5 pb-2 flex justify-center">
              <NavLink
                className="w-36 h-10 font-semibold rounded-md bg-indigo-100 hover:scale-90 duration-500"
                to={"/enroll"}
              >
                Click to register
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Coursesn;
