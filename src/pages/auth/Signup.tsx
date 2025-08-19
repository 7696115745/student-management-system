import { FaEnvelope, FaLock, FaPhoneAlt, FaUser } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";
import { Link, useNavigate } from "react-router";
import { signup } from '../../store/AuthSlice'
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const url = import.meta.env.VITE_APP_BACKEND_URL
  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const { elements } = e.currentTarget;
    const user_name = elements.name.value;
    const user_email = elements.email.value;
    const user_number = Number(elements.mobile.value);
    const user_role = elements.role.value;
    const user_password = elements.password.value;
     const dispatchData=dispatch(signup(user_name, user_email, user_number, user_role, user_password))
console.log("dispatchData----",dispatchData)
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex = /^\d{10}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    const textRegex = /^[a-zA-Z][a-zA-Z0-9_]{5,19}$/;
     if (!emailRegex.test(user_email) && user_email !== "") {
      toast.error("Invalid email address")
    }
    else if (!phoneRegex.test(JSON.stringify(user_number)) && user_number>0) {
      toast.error("Invalid phone number")
    }
    else if (!passwordRegex.test(user_password) && user_password !== "") {
      toast.error("Password must contain at least one uppercase letter, one lowercase letter, and one number, and must be at least 8 characters long.")
    }
    else if (!textRegex.test(user_name,) && user_name !== ""
    || !textRegex.test(user_role,)  && user_role !== "") {
      toast.error("Name and Role must contain only letters")
    }
    else{

    try {

      const res = await fetch(`${url+dispatchData.type}`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dispatchData.payload)
      })
      if (res.ok) {
        res.json();
        navigate('/sign-in');
      }
    }
    catch (error: any) {
      console.log(error.message)
    }
  }
     }

  return (
    <div className="font-inter bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen flex items-center justify-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
      </div>

      {/* Login Container */}
      <div className="relative w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          {/* Header */}
          <div className="px-8 pt-8 pb-6 text-center">

            <h1 className="text-2xl font-bold text-gray-900 mb-2">Create your account</h1>
          </div>

          {/* Login Form UI */}
          <form className="px-8 pb-8" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-lg font-medium text-gray-700 mb-2">
                Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg transition-all duration-200 pl-11 bg-gray-50 focus:bg-white placeholder:font-medium"
                  placeholder="Enter your name"
                  name="name"
                  id="name"
                />
                <FaUser className="fas fa-envelope absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" size={17} />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-lg font-medium text-gray-700 mb-2">
                Email address
              </label>
              <div className="relative">
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg transition-all duration-200 pl-11 bg-gray-50 focus:bg-white placeholder:font-medium"
                  placeholder="Enter your email"
                  name="email"
                  id="email"
                />
                <FaEnvelope className="fas fa-envelope absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" size={17} />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-lg font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <div className="relative">
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg transition-all duration-200 pl-11 bg-gray-50 focus:bg-white placeholder:font-medium"
                  placeholder="Enter your phone number"
                  name="mobile"
                  id="mobile"
                />
                <FaPhoneAlt className="fas fa-envelope absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" size={17} />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-lg font-medium text-gray-700 mb-2">
                User Role
              </label>
              <div className="relative">
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg transition-all duration-200 pl-11 bg-gray-50 focus:bg-white placeholder:font-medium"
                  placeholder="Enter your phone number"
                  name="role"
                  id="role"
                />
                <FaPhoneAlt className="fas fa-envelope absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" size={17} />
              </div>
            </div>


            <div className="mb-6">
              <label className="block text-lg font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg transition-all duration-200 pl-11 pr-11 bg-gray-50 focus:bg-white placeholder:font-medium"
                  placeholder="Enter your password"
                  name="password"
                  id="password"
                />
                <FaLock className="fas fa-lock absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" size={17} />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <FaEye className="fas fa-eye text-sm" size={20} />
                </button>
              </div>
            </div>

            <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] text-[17px] ">
              Signup
            </button>
          </form>
          <ToastContainer />

        </div>

        {/* Sign Up Link */}
        <div className="text-center mt-6">
          <p className="text-[15px] text-gray-600">
            Already have an account?
            <Link to="/sign-in" className="text-blue-600 hover:text-blue-700 font-semibold transition-colors ml-1">
              Signin
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
