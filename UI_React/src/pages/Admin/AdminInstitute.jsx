import React, { useState } from 'react';
import { Plus, PencilSquare, Trash } from 'react-bootstrap-icons'; // Import Bootstrap icons

const AdminInstitutes = () => {
  const [search, setSearch] = useState('');
  const [rating, setRating] = useState('');
  const [place, setPlace] = useState('');
  const [studentCount, setStudentCount] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editedInstitute, setEditedInstitute] = useState(null);

  const institutes = [
    {
      name: 'Institute 1',
      place: 'Location 1',
      studentCount: 200,
      rating: 4.5,
      email: 'institute1@example.com',
      phoneNumber: '123-456-7890',
    },
    {
      name: 'Institute 2',
      place: 'Location 2',
      studentCount: 150,
      rating: 4.2,
      email: 'institute2@example.com',
      phoneNumber: '987-654-3210',
    },
    // Add more institutes as needed
  ];

  // Filter institutes based on search input, rating, place, student count, email, and phone number
  const filteredInstitutes = institutes.filter(institute =>
    institute.name.toLowerCase().includes(search.toLowerCase()) &&
    (rating === '' || institute.rating >= parseFloat(rating)) &&
    (place === '' || institute.place.toLowerCase() === place.toLowerCase()) &&
    (studentCount === '' || institute.studentCount >= parseInt(studentCount)) &&
    (email === '' || institute.email.toLowerCase().includes(email.toLowerCase())) &&
    (phoneNumber === '' || institute.phoneNumber.includes(phoneNumber))
  );

  // Function to delete an institute
  const handleDelete = (index) => {
    // Implement delete functionality here
    console.log(`Delete institute at index ${index}`);
  };

  // Function to handle edit popup
  const handleEdit = (index) => {
    setEditedInstitute(filteredInstitutes[index]);
    setIsEditModalOpen(true);
  };

  // Function to save edited institute
  const saveEditedInstitute = () => {
    // Implement save functionality here
    console.log('Edited institute:', editedInstitute);
    setIsEditModalOpen(false);
  };

  // Function to add a new institute
  const handleAdd = () => {
    setIsAddModalOpen(true);
  };

  // Function to save added institute
  const saveAddedInstitute = () => {
    // Implement save functionality here
    console.log('Added institute:', editedInstitute);
    setIsAddModalOpen(false);
  };

  return (
    <div className='m-5'>
      {/* Add Institute Button */}
      <div className='flex justify-end mb-4'>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600" onClick={handleAdd}>
          <Plus className="mr-2" size={20} />
          Add Institute
        </button>
      </div>

      {/* Edit Popup */}
      {isEditModalOpen && editedInstitute && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Edit Institute</h2>
            <input type="text" value={editedInstitute.name} onChange={(e) => setEditedInstitute({ ...editedInstitute, name: e.target.value })} className="w-full border rounded-md mb-4 p-2" />
            <input type="text" value={editedInstitute.place} onChange={(e) => setEditedInstitute({ ...editedInstitute, place: e.target.value })} className="w-full border rounded-md mb-4 p-2" />
            <input type="text" value={editedInstitute.rating} onChange={(e) => setEditedInstitute({ ...editedInstitute, rating: e.target.value })} className="w-full border rounded-md mb-4 p-2" />
            <input type="text" value={editedInstitute.studentCount} onChange={(e) => setEditedInstitute({ ...editedInstitute, studentCount: e.target.value })} className="w-full border rounded-md mb-4 p-2" />
            <input type="text" value={editedInstitute.email} onChange={(e) => setEditedInstitute({ ...editedInstitute, email: e.target.value })} className="w-full border rounded-md mb-4 p-2" />
            <input type="text" value={editedInstitute.phoneNumber} onChange={(e) => setEditedInstitute({ ...editedInstitute, phoneNumber: e.target.value })} className="w-full border rounded-md mb-4 p-2" />
            <div className="flex justify-end">
              <button onClick={() => setIsEditModalOpen(false)} className="bg-gray-500 text-white py-2 px-4 rounded-md mr-2">Cancel</button>
              <button onClick={saveEditedInstitute} className="bg-blue-500 text-white py-2 px-4 rounded-md">Save</button>
            </div>
          </div>
        </div>
      )}

      {/* Add Institute Popup */}
      {isAddModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Add Institute</h2>
            <input type="text" placeholder="Name" className="w-full border rounded-md mb-4 p-2" />
            <input type="text" placeholder="Place" className="w-full border rounded-md mb-4 p-2" />
            <input type="text" placeholder="Rating" className="w-full border rounded-md mb-4 p-2" />
            <input type="text" placeholder="Student Count" className="w-full border rounded-md mb-4 p-2" />
            <input type="text" placeholder="Email" className="w-full border rounded-md mb-4 p-2" />
            <input type="text" placeholder="Phone Number" className="w-full border rounded-md mb-4 p-2" />
            <div className="flex justify-end">
              <button onClick={() => setIsAddModalOpen(false)} className="bg-gray-500 text-white py-2 px-4 rounded-md mr-2">Cancel</button>
              <button onClick={saveAddedInstitute} className="bg-blue-500 text-white py-2 px-4 rounded-md">Save</button>
            </div>
          </div>
        </div>
      )}

      {/* Display Institutes */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredInstitutes.map((institute, index) => (
          <div key={index} className="m-2 bg-white max-w-[300px] rounded-xl hover:bg-green-500 hover:scale-110 duration-700 p-5 border-blue-500 relative">
            <h4 className="py-2 text-gray-600 font-bold">{institute.name}</h4>
            <p className="text-base leading-7 text-black">Place: {institute.place}</p>
            <p className="text-sm leading-7 text-black">Rating: {institute.rating}</p>
            <p className="text-sm leading-7 text-black">Student Count: {institute.studentCount}</p>
            <p className="text-sm leading-7 text-black">Email: {institute.email}</p>
            <p className="text-sm leading-7 text-black">Phone Number: {institute.phoneNumber}</p>
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
};

export default AdminInstitutes;
