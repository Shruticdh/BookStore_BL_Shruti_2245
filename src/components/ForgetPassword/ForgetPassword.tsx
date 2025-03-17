import React from "react";
import { FaBookOpen } from "react-icons/fa";

const ForgotPassword: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <div className="top-0 w-[100%] h-[60px] bg-[#A03037] fixed flex items-center px-6 z-100">
      <div className="flex text-white  font-semibold ">
        <FaBookOpen className="text-xl text-white ml-30 mr-2 w-[31.5px] h-[23.71px]" />
        <span className=" items-left mt-[-5px] text-[20px]">Bookstore</span>
        </div>
    </div>

      {/* Main Content */}
      <h2 className=" mt-[30px] text-[25px] font-semibold">Forgot Your Password?</h2>
      <div className="w-full max-w-[424px] h-[350px] mt-5 bg-[white] rounded-xs" >
        <p className="text-gray-600 mt-8 text-center ">
          Enter your email address and we'll send you <br /> a link to reset your password.
        </p>

        {/* Form */}
        <div className=" justify-center items-center mt-6 p-6 w-96">
          <label className="block text-gray-700 text-sm font-medium mb-2 text-left ml-[34px]">Email Id</label>
          <input
            type="email"
            className="w-[292px] h-[35px]  ml-[34px] rounded-xs border border-[#E2E2E2] p-2 focus:outline-none focus:ring-2 focus:ring-red-500 "
          />

          <button className="w-[292px] h-[37px] bg-[#A03037] ml-[34px] text-white rounded-xs mt-4 hover:bg-red-800">
            Reset Password
          </button>
          <div className="w-[424px] h-[100px] bg-[#E4E4E4] mt-4 p-4 ml-[-24px] flex justify-center items-center create-account-container">
          <button className=" text-black font-semibold mt-[-20px]">CREATE ACCOUNT</button>
        </div>
        </div>    
      </div>
    </div>
  );
};

export default ForgotPassword;