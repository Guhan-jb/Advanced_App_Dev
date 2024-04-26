import React, { useState, useEffect } from 'react';
import { Plus, PencilSquare, Trash } from 'react-bootstrap-icons'; // Import Bootstrap icons
import { addInstitute, deleteInstitute, getAllInstitute } from '../../Api';
import { useNavigate } from 'react-router-dom';

const AdminInstitutes = () => {
  const [search, setSearch] = useState('');
  const [links, setLinks] = useState([]);
  const [filteredLinks, setFilteredLinks] = useState([]);
  const nav=useNavigate()
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    instituteName: '',
    instituteLocation:'',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   await addInstitute(formData).then(setIsAddModalOpen(false))
    nav("/admin/institutes")
  };
  const fetchData=async(e)=> {
    try {
      const institute = await getAllInstitute();
      setLinks(institute.data);
      setFilteredLinks(institute.data); // Initially set filteredLinks to all links
    } catch (error) {
      console.error("Error fetching institutes", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {

    const filtered = links.filter(link =>
      Object.values(link).some(value =>
        typeof value === 'string' && value.toLowerCase().includes(search.toLowerCase())
      )
    );
    setFilteredLinks(filtered);
  }, [search, links]);

  const handleAdd = () => {
    setIsAddModalOpen(!isAddModalOpen);
  };

  const handleEdit = (index) => {
    // Placeholder for edit functionality
    console.log("Edit function for index:", index);
  };

  const handleDelete = async(index) => {
    const res= await deleteInstitute(index).then(console.log("Delete function for index:", index));
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

      {/* Add Institute Popup */}
      {isAddModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
          <form className="bg-white p-8 rounded-lg" onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold mb-4">Add Institute</h2>
            <input
  type="text"
  placeholder="Name"
  value={formData.instituteName}
  className="w-full border rounded-md mb-4 p-2"
  onChange={(e) => setFormData({ ...formData, instituteName: e.target.value })}
/>

<input
  type="text"
  placeholder="Place"
  value={formData.instituteLocation}
  className="w-full border rounded-md mb-4 p-2"
  onChange={(e) => setFormData({ ...formData, instituteLocation: e.target.value })}
/>

<input
  type="text"
  placeholder="Phone Number"
  value={formData.phone}
  className="w-full border rounded-md mb-4 p-2"
  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
/>
            <div className="flex justify-end">
              <button onClick={() => setIsAddModalOpen(false)} className="bg-gray-500 text-white py-2 px-4 rounded-md mr-2">Cancel</button>
              <button onClick={()=>handleSubmit} className="bg-blue-500 text-white py-2 px-4 rounded-md">Save</button>
            </div>
          </form>
        </div>
      )}

      {/* Display Institutes */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredLinks.map((institute, index) => (
          <div key={index} className="m-2 bg-white max-w-[300px] rounded-xl hover:bg-green-500 hover:scale-110 duration-700 p-5 border-blue-500 relative">
            <h4 className="py-2 text-gray-600 font-bold">{institute.instituteName}</h4>
            <p className="text-base leading-7 text-black">Place: {institute.instituteLocation}</p>
            <p className="text-sm leading-7 text-black">Phone Number: {institute.phone}</p>
            <div className="absolute top-0 right-0 flex items-center space-x-2">
              <button className="text-blue-500 hover:text-blue-700 focus:outline-none" onClick={() => handleEdit(index)}>
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
