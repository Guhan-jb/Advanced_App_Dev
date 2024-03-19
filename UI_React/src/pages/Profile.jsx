import React, { useState } from 'react';

const Profile = () => {
  // Dummy user data (replace with actual user data)
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    phoneNumber: '123-456-7890',
  });

  // Dummy registration data (replace with actual registration data)
  const [registration, setRegistration] = useState({
    courseName: 'Chess coourse 1',
    institutionName: 'Chess academy',
    location: 'Coimbatore, India',
  });

  // Dummy function to handle password change (replace with actual logic)
  const handleChangePassword = () => {
    // Add logic to handle password change here
    alert('Password changed successfully');
  };

  return (
    <div className="container mx-auto mt-10">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center mb-8">User Profile</h1>
        <div className="mb-4">
          <p className="block text-gray-700 font-bold mb-2">Name</p>
          <p className="text-gray-800">{user.name}</p>
        </div>
        <div className="mb-4">
          <p className="block text-gray-700 font-bold mb-2">Email</p>
          <p className="text-gray-800">{user.email}</p>
        </div>
        <div className="mb-4">
          <p className="block text-gray-700 font-bold mb-2">Phone Number</p>
          <p className="text-gray-800">{user.phoneNumber}</p>
        </div>
        <div className="text-center mb-8">
          <button onClick={handleChangePassword} className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md focus:outline-none focus:shadow-outline">Change Password</button>
        </div>
      </div>

      <div className="max-w-md mx-auto mt-8 bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-bold mb-4">Registration Details</h2>
        <div className="mb-4">
          <p className="block text-gray-700 font-bold mb-2">Course Name</p>
          <p className="text-gray-800">{registration.courseName}</p>
        </div>
        <div className="mb-4">
          <p className="block text-gray-700 font-bold mb-2">Institution Name</p>
          <p className="text-gray-800">{registration.institutionName}</p>
        </div>
        <div className="mb-4">
          <p className="block text-gray-700 font-bold mb-2">Location</p>
          <p className="text-gray-800">{registration.location}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
