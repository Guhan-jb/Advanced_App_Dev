import React from 'react';
import { NavLink } from 'react-router-dom';

const CourseEnroll = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-3/4 h-3/4">
        <form className="bg-white shadow-md rounded px-8 pb-8 mb-4">
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-gray-700 text-sm font-bold mb-2">
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              placeholder="First Name"
              className="input-field"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-gray-700 text-sm font-bold mb-2">
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              placeholder="Last Name"
              className="input-field"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="gender" className="block text-gray-700 text-sm font-bold mb-2">
              Gender
            </label>
            <select name="gender" id="gender" className="input-field">
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="fatherName" className="block text-gray-700 text-sm font-bold mb-2">
              Father's Name
            </label>
            <input
              id="fatherName"
              type="text"
              placeholder="Father's Name"
              className="input-field"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block text-gray-700 text-sm font-bold mb-2">
              Phone Number
            </label>
            <input
              id="phoneNumber"
              type="tel"
              placeholder="Phone Number"
              className="input-field"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="alternatePhoneNumber" className="block text-gray-700 text-sm font-bold mb-2">
              Alternate Phone Number
            </label>
            <input
              id="alternatePhoneNumber"
              type="tel"
              placeholder="Alternate Phone Number"
              className="input-field"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email Address"
              className="input-field"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="age" className="block text-gray-700 text-sm font-bold mb-2">
              Age
            </label>
            <input
              id="age"
              type="number"
              placeholder="Age"
              className="input-field"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Address Information
            </label>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="House No."
                className="input-field"
              />
              <input
                type="text"
                placeholder="Street Name"
                className="input-field"
              />
              <input
                type="text"
                placeholder="Area Name"
                className="input-field"
              />
              <input
                type="text"
                placeholder="Pincode"
                className="input-field"
              />
              <input
                type="text"
                placeholder="State"
                className="input-field"
              />
              <input
                type="text"
                placeholder="Nationality"
                className="input-field"
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <NavLink
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              to={"/user"}
            >
              Submit
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CourseEnroll;