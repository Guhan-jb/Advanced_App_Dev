import React, { useState, useEffect } from 'react';
import { Plus, PencilSquare, Trash } from 'react-bootstrap-icons';
import { addInstitute, deleteInstitute, getAllInstitute, getInstituteById, updateInstitute } from '../../Api';
import { useNavigate } from 'react-router-dom';

// Add Institute Form Component
const AddInstituteForm = ({ isOpen, onClose, onSubmit, formData, onChange }) => {
  return (
    isOpen && (
      <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
        <form className="bg-white p-8 rounded-lg" onSubmit={onSubmit}>
          <h2 className="text-2xl font-bold mb-4">Add Institute</h2>
          <input type="text" placeholder="Name" value={formData.instituteName} className="w-full border rounded-md mb-4 p-2" onChange={onChange} name="instituteName" />
          <input type="text" placeholder="Place" value={formData.instituteLocation} className="w-full border rounded-md mb-4 p-2" onChange={onChange} name="instituteLocation" />
          <input type="text" placeholder="Phone Number" value={formData.phone} className="w-full border rounded-md mb-4 p-2" onChange={onChange} name="phone" />
          <div className="flex justify-end">
            <button onClick={onClose} className="bg-gray-500 text-white py-2 px-4 rounded-md mr-2">Cancel</button>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">Save</button>
          </div>
        </form>
      </div>
    )
  );
};

// Edit Institute Form Component
const EditInstituteForm = ({ isOpen, onClose, onSubmit, formData, onChange }) => {
  return (
    isOpen && (
      <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
        <form className="bg-white p-8 rounded-lg" onSubmit={onSubmit}>
          <h2 className="text-2xl font-bold mb-4">Edit Institute</h2>
          <input type="text" placeholder="Name" value={formData.instituteName} className="w-full border rounded-md mb-4 p-2" onChange={onChange} name="instituteName" />
          <input type="text" placeholder="Place" value={formData.instituteLocation} className="w-full border rounded-md mb-4 p-2" onChange={onChange} name="instituteLocation" />
          <input type="text" placeholder="Phone Number" value={formData.phone} className="w-full border rounded-md mb-4 p-2" onChange={onChange} name="phone" />
          <div className="flex justify-end">
            <button onClick={onClose} className="bg-gray-500 text-white py-2 px-4 rounded-md mr-2">Cancel</button>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">Save</button>
          </div>
        </form>
      </div>
    )
  );
};


const AdminInstitutes = () => {
  const [search, setSearch] = useState('');
  const [links, setLinks] = useState([]);
  const [filteredLinks, setFilteredLinks] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [addFormData, setAddFormData] = useState({
    instituteName: '',
    instituteLocation: '',
    phone: '',
  });
  const [editFormData, setEditFormData] = useState({
    instituteName: '',
    instituteLocation: '',
    phone: '',
  });
  const [editData, setEditData] = useState(null);
  const nav = useNavigate();

  // Fetch data from API
  const fetchData = async () => {
    try {
      const institute = await getAllInstitute();
      setLinks(institute.data);
      setFilteredLinks(institute.data);
    } catch (error) {
      console.error("Error fetching institutes", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Filter institutes based on search term
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

  // Handle form submission for adding institute
  const handleAddSubmit = async (e) => {
    e.preventDefault();
    await addInstitute(addFormData);
    setIsAddModalOpen(false);
    setAddFormData({
      instituteName: '',
      instituteLocation: '',
      phone: '',
    });
    fetchData();
  };

  // Handle form submission for editing institute
  const handleEditSubmit = async (e) => {
    e.preventDefault();
    console.log(editData)
    console.log(editFormData);
    await updateInstitute(editData.iid, editFormData);
    setIsEditModalOpen(false);
    setEditData(null);
    fetchData();
  };

  // Handle opening add institute modal
  const handleAdd = () => {
    setIsAddModalOpen(true);
  };

  // Handle opening edit institute modal
  const handleEdit = async (iid) => {
    setIsEditModalOpen(true);
    const institute = await getInstituteById(iid);
    setEditData(institute.data);
    // Use institute data directly to populate the form
    setEditFormData({
      instituteName: institute.data.instituteName,
      instituteLocation: institute.data.instituteLocation,
      phone: institute.data.phone,
    });
  };
  
  // Handle deleting an institute
  const handleDelete = async (iid) => {
    await deleteInstitute(iid);
    fetchData();
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

      {/* Add Institute Form */}
      <AddInstituteForm
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSubmit={handleAddSubmit}
        formData={addFormData}
        onChange={handleAddChange}
      />

      {/* Edit Institute Form */}
      <EditInstituteForm
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onSubmit={handleEditSubmit}
        formData={editFormData}
        onChange={handleEditChange  }
      />

      {/* Display Institutes */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredLinks.map((institute, index) => (
          <div key={index} className="m-2 bg-white max-w-[300px] rounded-xl hover:bg-green-500 hover:scale-110 duration-700 p-5 border-blue-500 relative">
            <h4 className="py-2 text-gray-600 font-bold">{institute.instituteName}</h4>
            <p className="text-base leading-7 text-black">Place: {institute.instituteLocation}</p>
            <p className="text-sm leading-7 text-black">Phone Number: {institute.phone}</p>
            <div className="absolute top-0 right-0 flex items-center space-x-2">
              <button className="text-blue-500 hover:text-blue-700 focus:outline-none" onClick={() => handleEdit(institute.iid)}>
                <PencilSquare size={20} />
              </button>
              <button className="text-red-500 hover:text-red-700 focus:outline-none" onClick={() => handleDelete(institute.iid)}>
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