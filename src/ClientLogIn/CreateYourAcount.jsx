import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CreateYourAcount = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const navigate = useNavigate();

  const isStrongPassword = (password) =>
    /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(password);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    let newErrors = {};

    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (!isStrongPassword(formData.password)) {
      newErrors.password =
        "Password must contain uppercase, number & special character";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!formData.phoneNumber)
      newErrors.phoneNumber = "Phone number is required";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    localStorage.setItem("user", JSON.stringify(formData));
    alert("Signup successful! Please login now.");
    navigate("/login");
    console.log(formData);
    
  };
  const inputClass = (field) =>
    `block w-full pl-10 pr-4 py-3 border rounded-lg transition duration-200
    ${
      errors[field] && submitted
        ? "border-red-500 focus:ring-red-500 focus:border-red-500"
        : "block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition duration-200"
    }`;

  return (
    <div className="max-w-[1440px] mx-auto">
    <div className="min-h-screen bg-gradient-to-b from-[#f9f7f4] to-[#f1ece5] flex items-center justify-center p-4">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full bg-[#D4AF37] mix-blend-multiply filter blur-3xl animate-pulse"></div>
        </div>
      <div className="w-[420px] max-w-md bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">

        {/* Header */}
        <div className="bg-[#1C1C1C] p-6 text-center">
          <h2 className="text-2xl font-light text-[#D4AF37] tracking-wide">
            AKOYA LUXURY LAUNDRY
          </h2>
          <div className="mt-2 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
          <p className="mt-2 text-gray-300 text-sm">
            Create your premium account
          </p>
        </div>

        {/* Form */}
        <div className="p-8">
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                        </svg> {/* User icon */}
                      </div>
                <input
                
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  className={inputClass("name")}
                  value={formData.name}
                  onChange={handleChange}
                />
                {/* </div>  */}
              </div>
              {errors.name && submitted && (
                <p className="mt-1 text-sm text-red-600">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg> {/* Email icon */}
                </div>
                <input
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  className={inputClass("email")}
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              {errors.email && submitted && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                         </svg> {/* Password icon */}
                </div>
                <input
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  className={inputClass("password")}
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>

              {formData.password && isStrongPassword(formData.password) && (
                <p className="mt-1 text-sm text-green-600">Strong Password</p>
              )}

              {errors.password && submitted && (
                <p className="mt-1 text-sm text-red-600">{errors.password}</p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg> {/* Check icon */}
                </div>
                <input
                  name="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                  className={inputClass("confirmPassword")}
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </div>
              {errors.confirmPassword && submitted && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                WhatsApp Phone Number
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                        </svg> {/* WhatsApp icon */}
                </div>
                <input
                  name="phoneNumber"
                  type="tel"
                  placeholder="+1234567890"
                  className={inputClass("phoneNumber")}
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </div>
              <p className="mt-1 text-xs text-gray-500">Enter your full WhatsApp number with country code (e.g., +1234567890)</p>
              {errors.phoneNumber && submitted && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.phoneNumber}
                </p>
              )}
            </div>
            <div className="flex items-center mt-1"><input id="terms" class="h-4 w-4 text-[#D4AF37] focus:ring-[#D4AF37] border-gray-300 rounded" type="checkbox"/>
            <label for="terms" class="ml-2 block text-sm text-gray-700">I agree to the <a href="#" class="text-[#D4AF37] hover:underline">terms and conditions</a></label></div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 mt-6 rounded-lg text-white bg-gradient-to-r from-[#D4AF37] to-[#F1C232]"
            >
              Create Account
            </button>
          </form>

          <div className="mt-6 text-center text-sm">
            <p className="text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="font-medium text-[#D4AF37]">
                Sign in
              </Link>
            </p>
          </div>
        </div>
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
  );
};

export default CreateYourAcount;
