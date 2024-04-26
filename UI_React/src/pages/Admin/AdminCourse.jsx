import React, { useState, useEffect } from 'react';
import { Plus, PencilSquare, Trash } from 'react-bootstrap-icons';
import { addCourse, deleteCourse, getAllCourse, getCourseById, updateCourse } from '../../Api';
import { useNavigate } from 'react-router-dom';

// Add Course Form Component
const AddCourseForm = ({ isOpen, onClose, onSubmit, formData, onChange }) => {
  return (
    isOpen && (
      <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
        <form className="bg-white p-8 rounded-lg" onSubmit={onSubmit}>
          <h2 className="text-2xl font-bold mb-4">Add Course</h2>
          <input type="text" placeholder="Name" value={formData.CourseName} className="w-full border rounded-md mb-4 p-2" onChange={onChange} name="CourseName" />
          <input type="text" placeholder="Description" value={formData.courseDescription} className="w-full border rounded-md mb-4 p-2" onChange={onChange} name="courseDescription" />
          <input type="text" placeholder="Course Duration" value={formData.courseDuration} className="w-full border rounded-md mb-4 p-2" onChange={onChange} name="courseDuration" />
          <input type="text" placeholder="Course Price" value={formData.coursePrice} className="w-full border rounded-md mb-4 p-2" onChange={onChange} name="coursePrice" />
          <div className="flex justify-end">
            <button onClick={onClose} className="bg-gray-500 text-white py-2 px-4 rounded-md mr-2">Cancel</button>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">Save</button>
          </div>
        </form>
      </div>
    )
  );
};

// Edit Course Form Component
const EditCourseForm = ({ isOpen, onClose, onSubmit, formData, onChange }) => {
  return (
    isOpen && (
      <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
        <form className="bg-white p-8 rounded-lg" onSubmit={onSubmit}>
          <h2 className="text-2xl font-bold mb-4">Edit Course</h2>
          <input type="text" placeholder="Name" value={formData.courseName} className="w-full border rounded-md mb-4 p-2" onChange={onChange} name="courseName" />
          <input type="text" placeholder="Description" value={formData.courseDescription} className="w-full border rounded-md mb-4 p-2" onChange={onChange} name="courseDescription" />
          <input type="text" placeholder="Course Duration" value={formData.courseDuration} className="w-full border rounded-md mb-4 p-2" onChange={onChange} name="courseDuration" />
          <input type="text" placeholder="Course Price" value={formData.coursePrice} className="w-full border rounded-md mb-4 p-2" onChange={onChange} name="coursePrice" />
          <div className="flex justify-end">
            <button onClick={onClose} className="bg-gray-500 text-white py-2 px-4 rounded-md mr-2">Cancel</button>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">Save</button>
          </div>
        </form>
      </div>
    )
  );
};


const AdminCourses = () => {
  const [search, setSearch] = useState('');
  const [links, setLinks] = useState([]);
  const [filteredLinks, setFilteredLinks] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [addFormData, setAddFormData] = useState({
    courseName: '',
    courseDescription: '',
    courseDuration: '',
    coursePrice:'',
  });
  const [editFormData, setEditFormData] = useState({
    courseName: '',
    courseDescription: '',
    courseDuration: '',
    coursePrice:'',
  });
  const [editData, setEditData] = useState(null);
  const nav = useNavigate();

  // Fetch data from API
  const fetchData = async () => {
    try {
      const Course = await getAllCourse();
      setLinks(Course.data);
      setFilteredLinks(Course.data);
    } catch (error) {
      console.error("Error fetching Courses", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Filter Courses based on search term
  useEffect(() => {
    const filtered = links.filter(link =>
      Object.values(link).some(value =>
        typeof value === 'string' && value.toLowerCase().includes(search.toLowerCase())
      )
    );
    setFilteredLinks(filtered);
  }, [search, links]);

  // Handle form input changes for Add form
  const handleAddChange = (e) => {
    const { name, value } = e.target;
    setAddFormData({
      ...addFormData,
      [name]: value,
    });
  };

  // Handle form input changes for Edit form
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditFormData({
      ...editFormData,
      [name]: value,
    });
  };

  // Handle form submission for adding Course
  const handleAddSubmit = async (e) => {
    e.preventDefault();
    await addCourse(addFormData);
    setIsAddModalOpen(false);
    setAddFormData({
      courseName: '',
    courseDescription: '',
    courseDuration: '',
    coursePrice:'',
    });
    fetchData();
  };

  // Handle form submission for editing Course
  const handleEditSubmit = async (e) => {
    e.preventDefault();
    console.log(editData)
    console.log(editFormData);
    await updateCourse(editData.cid, editFormData);
    setIsEditModalOpen(false);
    setEditData(null);
    fetchData();
  };

  // Handle opening add Course modal
  const handleAdd = () => {
    setIsAddModalOpen(true);
  };

  // Handle opening edit Course modal
  const handleEdit = async (iid) => {
    setIsEditModalOpen(true);
    const Course = await getCourseById(iid);
    console.log(Course)
    setEditData(Course.data);
    // Use Course data directly to populate the form
    setEditFormData({
      courseName: Course.data.courseName,
      courseDescription: Course.data.courseDescription,
      courseDuration: Course.data.courseDuration,
      coursePrice:Course.data.coursePrice,

    });
  };
  
  // Handle deleting an Course
  const handleDelete = async (iid) => {
    await deleteCourse(iid);
    fetchData();
  };

  return (
    <div className='m-5'>
      {/* Add Course Button */}
      <div className='flex justify-end mb-4'>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600" onClick={handleAdd}>
          <Plus className="mr-2" size={20} />
          Add Course
        </button>
      </div>

      {/* Add Course Form */}
      <AddCourseForm
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSubmit={handleAddSubmit}
        formData={addFormData}
        onChange={handleAddChange}
      />

      {/* Edit Course Form */}
      <EditCourseForm
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onSubmit={handleEditSubmit}
        formData={editFormData}
        onChange={handleEditChange  }
      />

      {/* Display Courses */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredLinks.map((Course, index) => (
          <div key={index} className="m-2 bg-white max-w-[300px] rounded-xl hover:bg-green-500 hover:scale-110 duration-700 p-5 border-blue-500 relative">
           <p className="text-sm leading-7 text-black">Course name: {Course.courseName}</p>
            <p className="text-sm leading-7 text-black">Course Description: {Course.courseDescription}</p>
            <p className="text-sm leading-7 text-black">Course Duration: {Course.courseDuration}</p>
            <p className="text-sm leading-7 text-black">Course Price: {Course.coursePrice}</p>
            <div className="absolute top-0 right-0 flex items-center space-x-2">
              <button className="text-blue-500 hover:text-blue-700 focus:outline-none" onClick={() => handleEdit(Course.cid)}>
                <PencilSquare size={20} />
              </button>
              <button className="text-red-500 hover:text-red-700 focus:outline-none" onClick={() => handleDelete(Course.cid)}>
                <Trash size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminCourses;