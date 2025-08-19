import { BsGithub } from "react-icons/bs";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import { signIn } from "../../store/AuthSlice";
 import { useDispatch } from "react-redux";

const Sign_in = () => {
    const dispatch = useDispatch();
  const navigate = useNavigate()
  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const { elements } = e.currentTarget;
     const user_email = elements.email.value;
     const user_password = elements.password.value;
    dispatch(signIn(user_email, user_password))
    try {
      const url=import.meta.env.VITE_APP_BACKEND_URL;
      
      const res = await fetch(`${url}api/sign-in`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({user_email, user_password })
      })
      if (res.ok) {
        res.json();
         navigate('/');
      }
    }
    catch (error: any) {
      console.log(error.message)
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

            <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome back</h1>
            <p className="text-gray-600 text-lg ">Sign in to your account to continue</p>
          </div>
<form onSubmit={handleSubmit}>
          {/* Login Form UI */}
          <div className="px-8 pb-8">
            <div className="mb-4">
              <label className="block text-lg font-medium text-gray-700 mb-2">
                Email address
              </label>
              <div className="relative">
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg transition-all duration-200 pl-11 bg-gray-50 focus:bg-white placeholder:font-medium"
                  placeholder="Enter your email"
                  name="email"
                  id="email"
                />
                <FaEnvelope className="fas fa-envelope absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" size={17}/>
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
                  <FaEye className="fas fa-eye text-sm" size={20}/> 
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between mb-6">
              <label className="flex items-center">
                <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded" />
                <span className="ml-2 text-[15px] text-gray-600">Remember me</span>
              </label>
              <Link to="/forgot-password" className="text-[16px] font-semibold text-blue-600 hover:text-blue-700 transition-colors">
                Forgot password?
              </Link>
            </div>

            <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] text-[17px] ">
              Sign in
            </button>
          </div>
          </form>

          {/* Divider */}
          <div className="px-8 pb-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-[14px]">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>
          </div>

          {/* Social Buttons */}
          <div className="px-8 pb-8">
            <div className="grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-semibold text-gray-700 bg-white hover:bg-gray-50 transition-colors">
                <FcGoogle className="fab fa-github mr-2 text-gray-900" size={22}/>

                Google
              </button>
              <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-semibold text-gray-700 bg-white hover:bg-gray-50 transition-colors">
                <BsGithub className="fab fa-github mr-2 text-gray-900" size={22}/>
                GitHub
              </button>
            </div>
          </div>
        </div>

        {/* Sign Up Link */}
        <div className="text-center mt-6">
          <p className="text-[15px] text-gray-600">
            Don&#39;t have an account?
            <Link to="/signup" className="text-blue-600 hover:text-blue-700 font-semibold transition-colors ml-1">
              Sign up for free
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sign_in;
