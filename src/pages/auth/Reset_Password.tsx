"use client"
import { FaLock } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";
// import { useNavigate } from "react-router";
 const Reset_Password = () => {
//  const navigator=useNavigate()
  const handleSubmit=async(e:any)=>{
  e.preventDefault()
    const { elements } = e.currentTarget;
const reset_password=elements.reset_password.value;
const verified_account=localStorage.getItem('user')?.valueOf()

 try{
  const url=import.meta.env.VITE_APP_BACKEND_URL
  const res= await fetch(`${url}api/reset-password`,{
    method:'POST',
    headers:{
      'Content-Type': 'application/json'
    },
    body:JSON.stringify({reset_password,verified_account})
  })
  if(res.ok){
    //  navigator("/sign-in")
    // localStorage.removeItem("user")
  }
}
catch(error:any){
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

            <h1 className="text-2xl font-bold text-gray-900 mb-2">Chnage Your Password</h1>
           </div>

          {/* Login Form UI */}
          <form onSubmit={handleSubmit}>
          <div className="px-8 pb-8">
             

            <div className="mb-6">
              <label className="block text-lg font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg transition-all duration-200 pl-11 pr-11 bg-gray-50 focus:bg-white placeholder:font-medium"
                  placeholder="Enter your password"
                  name="reset_password"
                  id="reset_password"
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
                  <div className="mb-6">
              <label className="block text-lg font-medium text-gray-700 mb-2">
               Confirm Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg transition-all duration-200 pl-11 pr-11 bg-gray-50 focus:bg-white placeholder:font-medium"
                  placeholder="Enter your confirm password"
                  name="confirm-password"
                  id="confirm-password"
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

            <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] text-[17px] ">
              Change Password
            </button>
          </div> 
          </form>        
        </div>  
      </div>
    </div>
  );
};

export default Reset_Password;
