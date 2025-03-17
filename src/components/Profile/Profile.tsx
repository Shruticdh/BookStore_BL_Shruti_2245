import React, { useState } from "react";

const ProfileForm: React.FC = () => {
  const [selectedAddressType, setSelectedAddressType] = useState<string>("Work");
  const [isEditing, setIsEditing] = useState(false);
  const [isEditingAddress, setIsEditingAddress] = useState(false);

  const handleSavePersonal = () => {
    setIsEditing(false);
  };

  const handleSaveAddress = () => {
    setIsEditingAddress(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 mt-20 ml-30">
      {/* Breadcrumb */}
      <p className="text-sm text-gray-500 mb-4">
        Home / <span className="text-[black]">Profile</span>
      </p>

      <div className="w-[512px] h-[336px] bg-white mt-5 ">
        <div className="flex gap-10 items-center mt-[-5px]">
          <h2 className="text-[18px] font-semibold text-[black]">
            Personal Details
          </h2>
          <button
            className="text-[#A03037] text-[12px] mt-2"
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? "Cancel" : "Edit"}
          </button>
          {isEditing && (
            <button 
            onClick={handleSavePersonal}
            className=" w-[90px] h-[30px] ml-[170px] text-[12px] text-center bg-[#3371B5] text-white rounded-xs">
              Save
            </button>
          )}
        </div>

        {/* Input Fields */}
        <div className="mt-4 space-y-4 mt-1">
          {["Full Name", "Email Id", "Password", "Mobile Number"].map(
            (label, index) => (
              <div key={index}>
                <label className="block text-sm font-medium text-gray-700 mt-3">
                  {label}
                </label>
                <input
                  type={label === "Password" ? "password" : "text"}
                  placeholder={`Enter ${label}`}
                  className={`w-[512px] h-[45px] p-2 border rounded-xs transition-all ${
                    isEditing
                      ? "border-[#E2E2E2] bg-white"
                      : "border-[#E2E2E2] bg-[#F5F5F5]"
                  }`}
                  readOnly={!isEditing}
                />
              </div>
            )
          )}
        </div>
      </div>

      {/* Address Details */}
      <div className="w-[512px] h-[336px] bg-white mt-15 ">
        <div className="flex justify-between items-center ">
          <h2 className="text-xl font-semibold text-gray-700">
            Address Details
          </h2>
          <button className="w-[123px] h-[29px] border border-[#A03037] text-[12px] text-[#A03037] rounded-xs">
            Add New Address
          </button>
        </div>

        {/* Address Section */}
        <div className="mt-2 space-y-4 ">
          <div className="flex gap-10 items-center mt-3">
            <h3 className="font-semibold text-black">1.WORK</h3>
            <button
              className="text-[#A03037] text-[12px] mt-[5px]"
              onClick={() => setIsEditingAddress(!isEditingAddress)}
            >
              {isEditingAddress ? "Cancel" : "Edit"}
            </button>
            {isEditingAddress && (
              <button 
              onClick={handleSaveAddress}
              className=" w-[90px] h-[30px] ml-[250px] text-[12px] text-center bg-[#3371B5] text-white rounded-xs">
                Save
              </button>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mt-2">Address</label>
            <textarea
              readOnly={!isEditingAddress}
              placeholder="Enter Address"
              className={`w-[512px] h-[82px] p-2 border rounded-xs transition-all ${
                isEditingAddress ? "border-[#E2E2E2] bg-white" : "border-[#E2E2E2] bg-[#F5F5F5]"
              }`}
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mt-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">City/Town</label>
              <input
                type="text"
                placeholder="Enter City"
                readOnly={!isEditingAddress}
                className={`w-[251px] h-[45px] p-2 border rounded-xs transition-all ${
                  isEditingAddress ? "border-[#E2E2E2] bg-white" : "border-[#E2E2E2] bg-[#F5F5F5]"
                }`}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">State</label>
              <input
                type="text"
                placeholder="Enter State"
                readOnly={!isEditingAddress}
                className={`w-[251px] h-[45px] p-2 border rounded-xs transition-all ${
                  isEditingAddress ? "border-[#E2E2E2] bg-white" : "border-[#E2E2E2] bg-[#F5F5F5]"
                }`}
              />
            </div>
          </div>

          {/* Address Type Radio Buttons */}
          <div className="mt-3">
            <p className="text-sm text-gray-700 font-semibold">Type</p>
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
                    className="w-4 h-4 border-2 border-gray-400 rounded-full flex items-center justify-center cursor-pointer"
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
      </div>
    </div>
  );
};

export default ProfileForm;
