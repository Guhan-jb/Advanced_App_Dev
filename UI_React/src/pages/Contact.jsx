import React from 'react';
import { Telephone, GeoAlt, Envelope } from 'react-bootstrap-icons'; // Import Bootstrap icons

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.reload();
  };

  return (
    <div className="container mx-auto mt-10 flex justify-center items-center">
      <div className="max-w-lg flex-shrink-0">
        <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
        <form className="bg-gradient-to-b from-orange-200 to-white-500 rounded-lg shadow-lg p-6 bg-opacity-90" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
            <input type="email" id="email" name="email" placeholder="Your Email" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
            <textarea id="message" name="message" rows="2" placeholder="Your Message" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:bg-orange-600">Submit</button>
          </div>
        </form>
      </div>

      {/* Contact Info Boxes */}
      <div className="flex flex-col justify-center items-center ml-8">
        {/* Phone Number Box */}
        <div className="bg-orange-100 rounded-lg shadow-md p-4 cursor-pointer transition duration-300 hover:shadow-lg hover:bg-gray-100 mb-4">
          <div className="flex items-center mb-2">
            <Telephone size={24} className="text-orange-500 mr-2" />
            <span className="font-semibold">Phone Number</span>
          </div>
          <p className="text-gray-600">123-456-7890</p>
        </div>

        {/* Address Box */}
        <div className="bg-orange-100 rounded-lg shadow-md p-4 cursor-pointer transition duration-300 hover:shadow-lg hover:bg-gray-100 mb-4">
          <div className="flex items-center mb-2">
            <GeoAlt size={24} className="text-orange-500 mr-2" />
            <span className="font-semibold">Address</span>
          </div>
          <p className="text-gray-600">123 Street, City, Country</p>
        </div>

        {/* Email Box */}
        <div className="bg-orange-100 rounded-lg shadow-md p-4 cursor-pointer transition duration-300 hover:shadow-lg hover:bg-gray-100">
          <div className="flex items-center mb-2">
            <Envelope size={24} className="text-orange-500 mr-2" />
            <span className="font-semibold">Email</span>
          </div>
          <p className="text-gray-600">example@example.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
