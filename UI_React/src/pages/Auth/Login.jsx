import React, { useState } from 'react';
import { toast,ToastContainer } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { userLogin,getUserbyId } from '../../Api';
import BackgroundGif from '/mat.gif';
const Login = () => {
  const nav = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please fill in all fields.");
      return;
    }
    const logincred={email,password}
      const cred=await userLogin(logincred)
      console.log(cred)
      localStorage.setItem('Token',cred.data.accessToken)
    if(((cred.status) === 200))
    {  
    toast.success("Sign in successful!");
    const getuid = (cred.data.uid); 
    localStorage.setItem('uid',getuid)
    if(cred.data.role==="Admin")
    {
      nav("/admin/dashboard")
    }
    else{
    nav("/user");
    }
  }
    
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative">
      {/* Background GIF */}
      <img src={BackgroundGif} alt="Background" className="absolute inset-0 object-cover w-full h-full z-0" style={{ filter: 'brightness(0.8)' }} />

      <div className="max-w-md mx-auto p-4 rounded-md text-black bg-white bg-opacity-90 shadow-md z-10">
        <div className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">Welcome back to <span className="text-[#f35415]">Our App</span></div>
        <div className="text-sm font-normal mb-4 text-center text-[#1e0e4b]">Log in to your account</div>
        <form className="flex flex-col gap-3" onSubmit={handleSignIn}>
          <div className="block relative"> 
            <label htmlFor="email" className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Email</label>
            <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0" />
          </div>
          <div className="block relative"> 
            <label htmlFor="password" className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Password</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0" />
          </div>
          <div>
            <a href="#" className="text-sm text-[#f35415]">Forgot your password?</a>
          </div>
          {error && <div className="text-red-500 text-sm">{error}</div>}
          <button type="submit" className="bg-[#f35415] w-max mx-auto px-6 py-2 rounded text-white text-sm font-normal">Submit</button>
        </form>
        <div className="text-sm text-center mt-[1.6rem]">Don’t have an account yet? <Link to="/register" className="text-sm text-[#f35415]">Sign up for free!</Link></div>
      </div>
      <ToastContainer
          position="bottom-right"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
    </div>
  );
}

export default Login;
