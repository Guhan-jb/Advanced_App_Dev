import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Institutesn = () => {
  const [search, setSearch] = useState('');
  const [rating, setRating] = useState('');
  const [place, setPlace] = useState('');
  const [price, setPrice] = useState('');

  const links = [
    {
      name: 'Institute 1',
      rating: 4.5,
      place: 'Location 1',
      no_of_students: 100,
      button: '/Institutes',
    },
    {
      name: 'Institute 2',
      rating: 4.5,
      place: 'Location 1',
      no_of_students: 100,
      button: '/Institutes',
    },
    {
      name: 'Institute 3',
      rating: 4.5,
      place: 'Location 1',
      no_of_students: 100,
      button: '/Institutes',
    },
    {
      name: 'Institute 4',
      rating: 4.5,
      place: 'Location 1',
      no_of_students: 100,
      button: '/Institutes',
    },
    {
      name: 'Institute 5',
      rating: 4.5,
      place: 'Location 1',
      no_of_students: 100,
      button: '/Institutes',
    },
    
  ];

  // Filter Institutes based on search input, rating, place, and price
  const filteredInstitutes = links.filter(link =>
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
        placeholder="Search Institutes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-1/4 p-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      </div>

      {/* Filter Inputs */}
      {/* You can add select inputs for rating, place, and price here */}

      {/* Display Institutes */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredInstitutes.map((link, index) => (
          <div key={index} className="m-2 bg-white max-w-[300px] rounded-xl hover:bg-blue-500 hover:scale-110 duration-700 p-5 border-blue-500">
            <h4 className="py-2 text-gray-600 font-bold">{link.name}</h4>
            <p className="text-sm leading-7 text-black">Rating: {link.rating}</p>
            <p className="text-sm leading-7 text-black">Place: {link.place}</p>
            <p className="text-sm leading-7 text-black">Number of students: {link.no_of_students}</p>
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

export default Institutesn;