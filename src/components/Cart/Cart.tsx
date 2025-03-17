import React, { useState } from "react";
import Image from "../../assets/Image 11.png";
import { MapPin } from "lucide-react";
import { AddToBag } from "../AddToBag/AddToBag";

const Cart: React.FC = () => {
  const [quantity, setQuantity] = useState(1);
  const [showCustomerDetails, setShowCustomerDetails] = useState(false);
  const [selectedAddressType, setSelectedAddressType] = useState(""); // Radio button state
  const [showOrderSummary, setShowOrderSummary] = useState(false);

  return (
    <div className="flex flex-col items-center bg-white ml-[-200px]">
      {/* Cart Section */}
      <div className="bg-white  mt-20 ml-[-675px]">
        {/* Breadcrumb */}
        <p className="text-sm text-gray-500 mb-2">
          Home /<span className="text-black font-medium">My Cart</span>
        </p>
      </div>

      <div className="w-[774px] h-[251px] bg-white border border-gray-300 p-4 mt-[30px]">
        <div className="flex justify-between items-center">
          <h2 className=" ml-[20px] text-[18px] font-semibold">My cart (1)</h2>
          <div className="w-[275px] h-[40px] relative inline-block  border border-[#DCDCDC] rounded-xs">
            <select className="ml-[30px] mt-[8px] text-[14px] text-center">
              <option>Use current location</option>
            </select>
            <MapPin
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-[#A03037] "
              size={18}
            />
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
        <div className="flex items-center gap-2 mt-[-40px] ml-[165px]">
          <AddToBag quantity={quantity} setQuantity={setQuantity} />
          <span className="text-[12px] text-[#0A0102] ml-[15px]">Remove</span>
        </div>
      </div>

       <div
        className="w-[774px] min-h-[60px] bg-white border border-gray-300 mt-4 cursor-pointer p-4 transition-all "
        onClick={() => setShowCustomerDetails(!showCustomerDetails)}
      >
        <div className="flex justify-between items-center ml-[20px]"> 
        <h2 className="text-[18px] font-semibold text-gray-600">
          {showCustomerDetails ? "Customer Details" : "Address Details"}
        </h2>
        </div>

        {showCustomerDetails && (
          <div className=" w-[774px] h-[430px] ml-[40px]"
          onClick={(e) => e.stopPropagation()}>
             <div 
             className="w-[150px] h-[35px] relative inline-block text-center  border border-[#A03037] rounded-xs ml-[500px] mt-[-10px]"
             >
          <button className="text-[#A03037] text-[12px] text-center mt-[-10px]">
            Add New Address
          </button>
        </div>
            <div className="grid grid-cols-2 gap-4 mb-10 mt-5">
              <div>
                <label className="block text-black text-sm font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-[251px] h-[45px] border border-[#DCDCDC] p-2 rounded-xs "
                />
              </div>
              <div>
                <label className="block text-black text-sm font-medium ml-[-130px]">
                  Mobile Number
                </label>
                <input
                  type="text"
                  className="w-[251px] h-[45px] border border-[#DCDCDC] p-2 rounded-xs ml-[-130px]"
                />
              </div>
            </div>
            <div className="mt-5">
              <label className="block text-black text-sm font-medium">
                Address
              </label>
              <textarea
                className=" w-[514px] h-[82px] border border-[#DCDCDC] p-2 rounded-xs "
                readOnly
              ></textarea>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4 mt-5">
              <div>
                <label className="block text-black text-sm font-medium">
                  City/Town
                </label>
                <input
                  type="text"
                  className="w-[251px] h-[45px] border border-[#DCDCDC] p-2 rounded-xs"
                  readOnly
                />
              </div>
              <div>
                <label className="block text-black text-sm font-medium ml-[-130px]">
                  State
                </label>
                <input
                  type="text"
                  className="w-[251px] h-[45px] border border-[#DCDCDC] p-2 rounded-xs ml-[-130px]"
                  readOnly
                />
              </div>
            </div>
            <div className="mb-4">
  <p className="text-gray-700 font-semibold mt-5">Type</p> 
  <div className="flex gap-30 mt-2 ">
    {["Home", "Work", "Other"].map((type) => (
      <label key={type} className="flex items-center cursor-pointer">
        <input
          type="radio"
          name="addressType"
          value={type}
          checked={selectedAddressType === type}
          onChange={() => setSelectedAddressType(type)}
          className="hidden"
        />
        <span
          className={`w-4 h-4 border-2 border-gray-400 rounded-full flex items-center justify-center cursor-pointer`}
          onClick={() => setSelectedAddressType(type)} 
        >
          {selectedAddressType === type && (
            <span className="w-2 h-2 bg-[#A03037] rounded-full"></span>
          )}
        </span>
        <span className="ml-2 cursor-pointer" onClick={() => setSelectedAddressType(type)}>
          {type}
        </span>
      </label>
    ))}
  </div>
</div>

          </div>
        )}
      </div> 

      <div
        className="w-[774px] min-h-[60px] bg-white border border-gray-300 p-4 mt-2  cursor-pointer "
        onClick={() => setShowOrderSummary(!showOrderSummary)}
      >
        <h2 className="text-lg font-semibold ml-[20px]">Order Summary</h2>

        {showOrderSummary && (
          <div className="mt-4 ml-[20px] mt-7 w-[774px] h-[237px]"
          onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center gap-4">
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
              <div className="mt-4 flex justify-end ml-[250px] mt-[150px]">
              <button className="bg-[#3371B5] text-white text-center h-[35px] w-[150px]">
                CHECKOUT
              </button>
            </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
