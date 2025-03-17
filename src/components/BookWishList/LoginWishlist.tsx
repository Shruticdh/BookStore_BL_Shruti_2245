import React from "react";
import { useNavigate } from "react-router-dom";
import logo from '../../assets/Page-1.svg'

const LoginWishList: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 text-center">
      {/* Heading */}
      <h2 className="text-[25px] font-normal text-gray-900">PLEASE LOG IN</h2>
      <p className="text-gray-500 test-[15px] mt-1">Login to view items in your wishlist.</p>
      <br />
      <br />
      {/* Wishlist Icon */}
      <img src={logo} alt="Wishlist Icon" className="w-16 h-16 mx-auto" />

      {/* Login Button */}
      <button
        onClick={() => navigate("/")}
        className="mt-15 w-[127px] h-[33px] text-[12px] border border-[#A03037] text-[#A03037] font-semibold rounded-xs hover:bg-red-900 hover:text-white transition"
      >
        LOGIN/SIGNUP
      </button>
    </div>
  );
};

export default LoginWishList;