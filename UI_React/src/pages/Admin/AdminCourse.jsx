import React, { useState } from 'react';
import { PlusSquare, PencilSquare, Trash } from 'react-bootstrap-icons'; // Import Bootstrap icons

const AdminCourses = () => {
  const [search, setSearch] = useState('');
  const [rating, setRating] = useState('');
  const [place, setPlace] = useState('');
  const [price, setPrice] = useState('');
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editedCourse, setEditedCourse] = useState(null);
  const [addedCourse, setAddedCourse] = useState({
    name: '',
    school: '',
    rating: '',
    place: '',
    price: '',
  });

  const courses = [
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
  const filteredCourses = courses.filter(course =>
    course.name.toLowerCase().includes(search.toLowerCase()) &&
    (rating === '' || course.rating >= parseFloat(rating)) &&
    (place === '' || course.place.toLowerCase() === place.toLowerCase()) &&
    (price === '' || course.price === price)
  );

  // Function to delete a course
  const handleDelete = (index) => {
    // Implement delete functionality here
    console.log(`Delete course at index ${index}`);
  };

  // Function to handle edit popup
  const handleEdit = (index) => {
    setEditedCourse(filteredCourses[index]);
    setIsEditModalOpen(true);
  };

  // Function to save edited course
  const saveEditedCourse = () => {
    // Implement save functionality here
    console.log('Edited course:', editedCourse);
    setIsEditModalOpen(false);
  };

  // Function to add a new course
  const handleAdd = () => {
    setIsAddModalOpen(true);
  };

  // Function to save added course
  const saveAddedCourse = () => {
    // Implement save functionality here
    console.log('Added course:', addedCourse);
    setIsAddModalOpen(false);
  };

  return (
    <div className='m-5'>
      {/* Add Course Button */}
      <div className='flex justify-end mb-4'>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600" onClick={handleAdd}>
          <PlusSquare className="mr-2" size={20} /> Add Course
        </button>
      </div>

      {/* Edit Popup */}
      {isEditModalOpen && editedCourse && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Edit Course</h2>
            <input type="text" placeholder="Name" value={editedCourse.name} onChange={(e) => setEditedCourse({ ...editedCourse, name: e.target.value })} className="w-full border rounded-md mb-4 p-2" />
            <input type="text" placeholder="School" value={editedCourse.school} onChange={(e) => setEditedCourse({ ...editedCourse, school: e.target.value })} className="w-full border rounded-md mb-4 p-2" />
            <input type="text" placeholder="Rating" value={editedCourse.rating} onChange={(e) => setEditedCourse({ ...editedCourse, rating: e.target.value })} className="w-full border rounded-md mb-4 p-2" />
            <input type="text" placeholder="Place" value={editedCourse.place} onChange={(e) => setEditedCourse({ ...editedCourse, place: e.target.value })} className="w-full border rounded-md mb-4 p-2" />
            <input type="text" placeholder="Price" value={editedCourse.price} onChange={(e) => setEditedCourse({ ...editedCourse, price: e.target.value })} className="w-full border rounded-md mb-4 p-2" />
            <div className="flex justify-end">
              <button onClick={() => setIsEditModalOpen(false)} className="bg-gray-500 text-white py-2 px-4 rounded-md mr-2">Cancel</button>
              <button onClick={saveEditedCourse} className="bg-orange-500 text-white py-2 px-4 rounded-md">Save</button>
            </div>
          </div>
        </div>
      )}

      {/* Add Course Popup */}
      {isAddModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Add Course</h2>
            <input type="text" placeholder="Name" value={addedCourse.name} onChange={(e) => setAddedCourse({ ...addedCourse, name: e.target.value })} className="w-full border rounded-md mb-4 p-2" />
            <input type="text" placeholder="School" value={addedCourse.school} onChange={(e) => setAddedCourse({ ...addedCourse, school: e.target.value })} className="w-full border rounded-md mb-4 p-2" />
            <input type="text" placeholder="Rating" value={addedCourse.rating} onChange={(e) => setAddedCourse({ ...addedCourse, rating: e.target.value })} className="w-full border rounded-md mb-4 p-2" />
            <input type="text" placeholder="Place" value={addedCourse.place} onChange={(e) => setAddedCourse({ ...addedCourse, place: e.target.value })} className="w-full border rounded-md mb-4 p-2" />
            <input type="text" placeholder="Price" value={addedCourse.price} onChange={(e) => setAddedCourse({ ...addedCourse, price: e.target.value })} className="w-full border rounded-md mb-4 p-2" />
            <div className="flex justify-end">
              <button onClick={() => setIsAddModalOpen(false)} className="bg-gray-500 text-white py-2 px-4 rounded-md mr-2">Cancel</button>
              <button onClick={saveAddedCourse} className="bg-blue-500 text-white py-2 px-4 rounded-md">Save</button>
            </div>
          </div>
        </div>
      )}

      {/* Display Courses */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredCourses.map((course, index) => (
          <div key={index} className="m-2 bg-white max-w-[300px] rounded-xl hover:bg-green-500 hover:scale-110 duration-700 p-5 border-blue-500 relative">
            <h4 className="py-2 text-gray-600 font-bold">{course.name}</h4>
            <p className="text-base leading-7 text-black font-semibold">{course.school}</p>
            <p className="text-sm leading-7 text-black">Rating: {course.rating}</p>
            <p className="text-sm leading-7 text-black">Place: {course.place}</p>
            <p className="text-sm leading-7 text-black">Price: {course.price}</p>
            <div className="absolute top-0 right-0 flex items-center space-x-2">
              <button className="text-blue-500 hover:text-blue-700 focus:outline-none" onClick={() => handleEdit(index)}>
                <PencilSquare size={20} />
              </button>
              <button className="text-red-500 hover:text-red-700 focus:outline-none" onClick={() => handleDelete(index)}>
                <Trash size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminCourses;
