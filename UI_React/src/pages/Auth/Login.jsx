import React, { useState } from 'react';
import { Envelope, Lock } from 'react-bootstrap-icons'; // Importing Bootstrap icons

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Check password strength
    if (name === 'password') {
      const strength = checkPasswordStrength(value);
      setPasswordStrength(strength);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation logic
    const errors = {};
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      errors.email = 'Invalid email format';
      setShowPopup(true); // Show popup for invalid email
    }
    if (!formData.password) {
      errors.password = 'Password is required';
      setShowPopup(true); // Show popup for empty password
    } else {
      const strength = checkPasswordStrength(formData.password);
      if (strength === 'Weak') {
        errors.password = 'Password strength is weak';
        setShowPopup(true); // Show popup for weak password
      }
    }
    setErrors(errors);

    // If there are no errors, submit the form
    if (Object.keys(errors).length === 0) {
      // Submit logic here
      console.log('Form submitted:', formData);
    }
  };

  // Function to validate email format
  const isValidEmail = (email) => {
    // Regular expression for email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  // Function to check password strength
  const checkPasswordStrength = (password) => {
    // Basic password strength validation
    if (password.length < 6) {
      return 'Weak';
    }
    return 'Strong';
  };

  return (
    <div className="max-w-md mx-auto mt-10 flex flex-col p-4 rounded-md text-black bg-white shadow-md">
      <div className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">Welcome back to <span className="text-[#f35415]">App</span></div>
      <div className="text-sm font-normal mb-4 text-center text-[#1e0e4b]">Log in to your account</div>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <div className="block relative"> 
          <label htmlFor="email" className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Email</label>
          <input type="text" id="email" name="email" value={formData.email} onChange={handleChange} className={`rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0 ${errors.email ? 'border-red-500' : ''}`} />
          {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
        </div>
        <div className="block relative"> 
          <label htmlFor="password" className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Password</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className={`rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0 ${errors.password ? 'border-red-500' : ''}`} />
          {errors.password && <span className="text-red-500 text-xs">{errors.password}</span>}
        </div>
        {passwordStrength && <div className="text-sm text-gray-500">{`Password Strength: ${passwordStrength}`}</div>}
        <div>
          <a href="#" className="text-sm text-[#f35415]">Forgot your password?</a>
        </div>
        <button type="submit" className="bg-[#f35415] w-max mx-auto px-6 py-2 rounded text-white text-sm font-normal">Submit</button>
      </form>
      <div className="text-sm text-center mt-[1.6rem]">Don’t have an account yet? <a href="#" className="text-sm text-[#f35415]">Sign up for free!</a></div>
      {showPopup && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-4 rounded-md">
            <p className="text-red-500">Invalid email format! Please enter a valid email address.</p>
            <button className="bg-[#f35415] text-white px-4 py-2 rounded-md mt-4" onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
