import { HardDrive } from 'lucide-react';
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import { LoginContext } from '../Context/LoginContext';

const ClientSignIn = () => {
   const [formData, setFormData] = useState({ email: "", password: "" });
  // const { setLogin, setToastMsg } = useContext(LoginContext);
  const [fail,setFail] = useState()
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.type]: e.target.value });
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser &&
      storedUser.email === formData.email &&
      storedUser.password === formData.password
    ) {
      localStorage.setItem("login", true);
      // setLogin(true);
      setFail(true)
      // setToastMsg("✅ Login successful!");
      navigate("/");
    } else {
      // setToastMsg("❌ Invalid credentials!");
      setFail(false)
    }
  };
  return (
    <div>
      <div id="root"> {/* Root container */}
  <div className="max-w-[1440px] mx-auto"> {/* Max width container */}
    <div className="min-h-screen bg-gradient-to-b from-[#f9f7f4] to-[#f1ece5] flex items-center justify-center p-4">
      {/* Full screen background with gradient and centered content */}

      <div className="absolute inset-0 opacity-10 pointer-events-none">
        {/* Decorative background element */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-[#D4AF37] mix-blend-multiply filter blur-3xl animate-pulse"></div>
      </div>

      <div className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100" style={{ opacity: 1, transform: "none" }}>
        {/* Card container */}

        <div className="bg-[#1C1C1C] p-6 text-center"> {/* Header section */}
          <h2 className="text-2xl font-light text-[#D4AF37] tracking-wide">AKOYA LUXURY LAUNDRY</h2> {/* Title */}
          <div className="mt-2 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div> {/* Divider line */}
          <p className="mt-2 text-gray-300 text-sm">Sign in to your account</p> {/* Subtitle */}
        </div>

        <div className="p-8"> {/* Form container */}
          {fail === false ? <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
            <p class="text-red-600 text-sm">Login failed. Please try again.</p>
            </div>:""}
          <form onSubmit={handleSubmit}> {/* Sign in form */}

            {/* Email field */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg> {/* Email icon */}
                </div>
                <input
                  id="email"
                  placeholder="your@email.com"
                  className="block w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition duration-200"
                  required
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                /> {/* Email input */}
              </div>
            </div>

            {/* Password field */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="password">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                  </svg> {/* Password icon */}
                </div>
                <input
                  id="password"
                  placeholder="••••••••"
                  className="block w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition duration-200"
                  required
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                /> {/* Password input */}
              </div>
            </div>

            {/* Remember me and forgot password */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <input id="remember" className="h-4 w-4 text-[#D4AF37] focus:ring-[#D4AF37] border-gray-300 rounded" type="checkbox" name="remember" />
                <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">Remember me</label>
              </div>
              <div className="text-sm">
                <a className="font-medium text-[#D4AF37] hover:text-yellow-600" href="/resetPass" data-discover="true">Forgot password?</a>
              </div>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-[#D4AF37] to-[#F1C232] hover:from-[#C9A227] hover:to-[#E0B82D] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D4AF37] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              tabIndex="0"
            >
              Sign in {/* Submit button text */}
            </button>
          </form>

          {/* Divider and new account link */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">New to AKOYA?</span>
              </div>
            </div>
            <div className="mt-6 text-center">
              <Link className="font-medium text-[#D4AF37] hover:text-yellow-600 border-b border-transparent hover:border-[#D4AF37] transition duration-200" to="/acount" data-discover="true">
                Create your account {/* Signup link */}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Toaster container */}
    <div id="_rht_toaster" style={{ position: "fixed", zIndex: 9999, inset: "16px", pointerEvents: "none" }}></div>
  </div>
</div>
{/* Logo  */}
<div className=" h-screen w-300 ml-5 z-10 fixed">
  <img
    src="https://files.bpcontent.cloud/2025/08/27/08/20250827084606-U4QV905Q.png"
    role="button"
    tabIndex="0"
    alt="Chatbot Button Image"
    draggable="false"
    className="h-15 w-15 rounded-full fixed bottom-5 right-6 cursor-pointer transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl"
    
  />
</div>

    </div>
  )
}

export default ClientSignIn
