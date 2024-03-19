import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Courses = () => {
  const [search, setSearch] = useState('');
  const [rating, setRating] = useState('');
  const [place, setPlace] = useState('');
  const [price, setPrice] = useState('');

  const links = [
    {
      name: 'Course 1',
      school: 'School 1',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro est numquam ipsa consequatur provident fugiat quaerat cupiditate temporibus cum?',
      rating: 4.5,
      place: 'Location 1',
      price: '$100',
      button: '/courses',
    },
    {
      name: 'Course 2',
      school: 'School 1',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro est numquam ipsa consequatur provident fugiat quaerat cupiditate temporibus cum?',
      rating: 4.5,
      place: 'Location 1',
      price: '$100',
      button: '/courses',
    },
    {
      name: 'Course 3',
      school: 'School 1',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro est numquam ipsa consequatur provident fugiat quaerat cupiditate temporibus cum?',
      rating: 4.5,
      place: 'Location 1',
      price: '$100',
      button: '/courses',
    },
    {
      name: 'Course 4',
      school: 'School 1',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro est numquam ipsa consequatur provident fugiat quaerat cupiditate temporibus cum?',
      rating: 4.5,
      place: 'Location 1',
      price: '$100',
      button: '/courses',
    },
    {
      name: 'Course 5',
      school: 'School 1',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro est numquam ipsa consequatur provident fugiat quaerat cupiditate temporibus cum?',
      rating: 4.5,
      place: 'Location 1',
      price: '$100',
      button: '/courses',
    },
  ];

  // Filter courses based on search input, rating, place, and price
  const filteredCourses = links.filter(link =>
    link.name.toLowerCase().includes(search.toLowerCase()) &&
    (rating === '' || link.rating >= parseFloat(rating)) &&
    (place === '' || link.place.toLowerCase() === place.toLowerCase()) &&
    (price === '' || link.price === price)
  );

  return (
    <div className='m-5'>
      <div className='flex flex-row  items-center justify-center'>
      <input
        type="text"
        placeholder="Search courses..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-1/4 p-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      </div>

      {/* Filter Inputs */}
      {/* You can add select inputs for rating, place, and price here */}

      {/* Display Courses */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredCourses.map((link, index) => (
          <div key={index} className="m-2 bg-white max-w-[300px] rounded-xl hover:bg-blue-500 hover:scale-110 duration-700 p-5 border-blue-500">
            <h4 className="py-2 text-gray-600 font-bold">{link.name}</h4>
            <p className="text-base leading-7 text-black font-semibold">{link.school}</p>
            <p className="text-sm leading-7 text-black">Rating: {link.rating}</p>
            <p className="text-sm leading-7 text-black">Place: {link.place}</p>
            <p className="text-sm leading-7 text-black">Price: {link.price}</p>
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

export default Courses;