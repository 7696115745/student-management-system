"use client";
import { useNavigate } from "react-router";
import { otpVerification } from "../../store/AuthSlice";
import { useDispatch } from "react-redux";
const Otp_Verification = () => {
  const navigator = useNavigate();
  const dispatch = useDispatch()
  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const { elements } = e.currentTarget;
    const otp = elements.user_otp0.value;
    const otp1 = elements.user_otp1.value;
    const otp2 = elements.user_otp2.value;
    const otp3 = elements.user_otp3.value;
    const otp4 = elements.user_otp4.value;
    const otp5 = elements.user_otp5.value;
    const optArray=[otp,otp1,otp2,otp3,otp4,otp5];
    const verified_account=localStorage.getItem('user')?.valueOf()
    const verified_otp=optArray.toString().split(",").join("")
     dispatch(otpVerification(verified_otp));
    const url = import.meta.env.VITE_APP_BACKEND_URL
    try {
      const res = await fetch(`${url}api/otp-verifcation`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({verified_otp,verified_account})
      })
      if (res.ok) {
        navigator("/reset-password")
       }
    }
    catch (error: any) {
      console.log(error.message)
    }
  }

  const handleResend = async () => {
    const url = import.meta.env.VITE_APP_BACKEND_URL;
    const user_account = localStorage.getItem("user")
    try {
      const res = await fetch(`${url}api/forgot-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ user_account })
      })
      if (res.ok) {
        navigator("/reset-password")
      }

    }
    catch (error: any) {
      console.log(error.message)
    }
  }

  return (
    <div className="font-inter bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="relative w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">

          {/* Header */}
          <div className="px-8 pt-8 pb-4 text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">OTP verification</h1>
            <p className="text-sm text-gray-500">
              Please enter the OTP (One-Time Password) sent to your registered email/phone number to complete your verification.
            </p>
          </div>

          {/* OTP Input Boxes */}
          <form onSubmit={handleSubmit}>
            <div className="px-8 pb-6">
              <div className="flex justify-between mb-4 gap-3">
                {Array(6)
                  .fill(0)
                  .map((_, index) => (
                    <input
                      key={index}
                      type="text"
                      maxLength={1}
                      className="w-12 h-12 border border-gray-300 rounded-lg text-center text-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                      id={`user_otp${index}`}
                      name={`user_otp${index}`}
                    />
                  ))}
              </div>

              {/* Countdown & Resend */}
              <div className="flex justify-between text-sm text-gray-500 mb-6">
                <span>
                  Remaining time:{" "}
                  <span className="text-blue-600 font-semibold"> </span>
                </span>
                <span>
                  Didn't get the code?{" "}
                  <button className="text-blue-600 hover:underline" onClick={handleResend}>Resend</button>
                </span>
              </div>

              {/* Buttons */}
              <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] text-[17px] mb-3">
                Verify
              </button>
              <button className="w-full bg-gradient-to-r from-red-600 to-blue-700 text-white py-3 px-4 rounded-lg font-semibold hover:from-red-400 hover:to-blue-800 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] text-[17px]" onClick={() => navigator("/forgot-password")}>
                Cancel
              </button>

            </div>
          </form>
        </div>
      </div>
    </div>

  );
};

export default Otp_Verification;
