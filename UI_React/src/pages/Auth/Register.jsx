import React, { useState } from 'react'; // Import useState
import { Link,useNavigate } from 'react-router-dom'; // Import Link from react-router-dom
import BackgroundGif from '/mat.gif';
import { userRegister } from '../../Api';
const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    const nav=useNavigate()
    if (!name || !email || !password || !confirmPassword || !phone || !address) {
    
      return;
    }

    if (password !== confirmPassword) {
   
      return;
    }

    const signup = { name, email, password, phone, address };

    const cred = await userRegister(signup);

    if (cred.data === "User registered successfully" && cred.status === 200) {
      
      const getuid = cred.data.uid;
      console.log(getuid);
      nav("/")

    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <img src={BackgroundGif} alt="Background" className="absolute inset-0 object-cover w-full h-full" style={{ filter: 'brightness(0.8)' }} />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="max-w-md mx-auto p-4 bg-white bg-opacity-90 rounded-md text-black shadow-md">
          <div className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">Create an Account on <span className="text-[#f35415]">Our App</span></div>
          <div className="text-sm font-normal mb-4 text-center text-[#1e0e4b]">Register to get started</div>
          <form className="flex flex-col gap-3" onSubmit={handleRegister}>
            <div className="block relative"> 
              <label htmlFor="name" className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Full Name</label>
              <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0" />
            </div>
            <div className="block relative"> 
              <label htmlFor="email" className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Email</label>
              <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0" />
            </div>
            <div className="block relative"> 
              <label htmlFor="password" className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Password</label>
              <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0" />
            </div>
            <div className="block relative"> 
              <label htmlFor="confirmPassword" className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Confirm Password</label>
              <input type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0 z-10" />
            </div>
            <div className="block relative"> 
              <label htmlFor="phone" className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Phone</label>
              <input type="text" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0" />
            </div>
            <div className="block relative"> 
              <label htmlFor="address" className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Address</label>
              <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0" />
            </div>
            <button type="submit" className="bg-[#f35415] w-max mx-auto px-6 py-2 rounded text-white text-sm font-normal z-10">Register</button>
          </form>
          <div className="text-sm text-center mt-[1.6rem] z-10">Already have an account? <Link to="/" className="text-sm text-[#f35415]">Log in here</Link></div>
        </div>
      </div>
    </div>
  );
}

export default Register;
