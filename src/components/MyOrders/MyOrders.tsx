import React, { useState } from "react";
import Image from "../../assets/Image 11.png";

const MyOrders: React.FC = () => {
  return (
    <div className="flex flex-col h-full items-center bg-white ml-[-200px] mb-116px">
      {/* Cart Section */}
      <div className="bg-white  mt-20 ml-[-675px]">
        {/* Breadcrumb */}
        <p className="text-sm text-gray-500 mb-2">
          Home /<span className="text-black font-medium">Orders</span>
        </p>
      </div>

      <div className="w-[774px] h-[251px] bg-white border border-gray-300 p-4 mt-[30px]">
        <div className="flex justify-between items-center">
          <h2 className=" ml-[20px] text-[18px] font-semibold">My Orders(1)</h2>
          <div className="w-[275px] h-[40px] relative inline-block  border border-[#DCDCDC] rounded-xs">
          </div>
        </div>
        <div className="flex items-center gap-4 mt-4 ml-[20px]">
          <img
            src={Image}
            alt="Book Cover"
            className="w-25 h-33 object-cover"
          />
          <div className="mt-[-50px] ml-[30px]">
            <h3 className="text-[14px] font-semibold mb-[10px]">
              Don't Make Me Think
            </h3>
            <p className="text-[10px] text-gray-600 mt-[5px]">by Steve Krug</p>
            <p className="text-[15px] font-bold text-black-600 mt-[5px]">
              Rs. 1500{" "}
              <span className="text-[9px] text-[#9D9D9D] line-through">
                2000
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
