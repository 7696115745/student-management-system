import { FaEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router";
import { useDispatch} from "react-redux";
import { forgetPassword } from "../../store/AuthSlice";
 const Forget_Password = () => {
const dispatch=useDispatch()
  const navigator = useNavigate();
  const url=import.meta.env.VITE_APP_BACKEND_URL
  const handleSubmit=async(e:any)=>{
  e.preventDefault()
    const { elements } = e.currentTarget;
const user_account=elements.user_account.value;
 dispatch(forgetPassword(user_account));
try{
  const res= await fetch(`${url}api/forgot-password`,{
    method:'POST',
    headers:{
      'Content-Type': 'application/json'
    },
    body:JSON.stringify({user_account})
  })
  if(res.ok){
    console.log(`OTP Send to ${user_account}`)
    navigator("/otp-verification")
    localStorage.setItem("user",user_account)
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

            <h1 className="text-2xl font-bold text-gray-900 mb-2">Forgot your account</h1>
          </div>

          {/* Login Form UI */}
          <form onSubmit={handleSubmit}>
          <div className="px-8 pb-8">

            <div className="mb-4">
              <label className="block text-lg font-medium text-gray-700 mb-2">
                Email address
              </label>
              <div className="relative">
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg transition-all duration-200 pl-11 bg-gray-50 focus:bg-white placeholder:font-medium"
                  placeholder="Enter your email or phone number"
                  name="user_account"
                  id="user_account"
                />
                <FaEnvelope className="fas fa-envelope absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" size={17} />
              </div>
            </div>

            <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] text-[17px] mb-3 ">
              Forgot Password
            </button>
            <button type="submit" className="w-full bg-gradient-to-r from-red-600 to-blue-700 text-white py-3 px-4 rounded-lg font-semibold hover:from-red-400 hover:to-blue-800 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] text-[17px]" onClick={() => navigator("/sign-in")}>
              Cancel
            </button>
          </div>
          </form>

        </div>

      </div>
    </div>
  );
};

export default Forget_Password;
