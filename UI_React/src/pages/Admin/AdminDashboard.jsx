import React from 'react';

const AdminDashboard = () => {
  // Dummy data for demonstration
  const totalStudents = 500;
  const totalCourses = 30;
  const totalInstitutes = 15;
  const totalRevenue = '$50,000';

  return (
    <div className="container mx-auto mt-[35vh] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
      {/* Box 1: Total Students */}
      <div className="bg-blue-500 text-white rounded-md p-6 flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-2">Total Students</h2>
        <p className="text-4xl font-bold">{totalStudents}</p>
      </div>

      {/* Box 2: Total Courses */}
      <div className="bg-blue-500 text-white rounded-md p-6 flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-2">Total Courses</h2>
        <p className="text-4xl font-bold">{totalCourses}</p>
      </div>

      {/* Box 3: Total Institutes */}
      <div className="bg-blue-500 text-white rounded-md p-6 flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-2">Total Institutes</h2>
        <p className="text-4xl font-bold">{totalInstitutes}</p>
      </div>

      {/* Box 4: Total Revenue */}
      <div className="bg-blue-500 text-white rounded-md p-6 flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-2">Total Revenue</h2>
        <p className="text-4xl font-bold">{totalRevenue}</p>
      </div>
    </div>
  );
};

export default AdminDashboard;
