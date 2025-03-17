// import React, { useState } from "react";
// import Img from '../../assets/onlineshopping.png'
// import { useNavigate } from "react-router-dom";

// const Signup: React.FC = () => {
//     const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     password: "",
//     mobileNumber: "",
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Form Data:", formData);
//   };

//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-300 ">
//       <div className="flex bg-grey shadow-lg rounded-lg overflow-hidden w-3/6">
//         {/* Left Side */}
//         <div className="w-[624px]  h-[391px] flex flex-col items-center justify-center p-8 bg-gray-100">
//           <img
//             src={Img}
//             alt="Online Book Shopping"
//             className="w-[245px] h-[245px] mt- mb-10 ml-[-280px]"
//           />
//           <h6 className="text-[18px] ml-[-285px] font-semibold mt-8">ONLINE BOOK SHOPPING</h6>
//         </div>

//         {/* Right Side */}
//         <div className="w-[389px] h-[245px] p-13 absolute shadow-sm rounded-sm top-[-42px] left-[53%] transform -translate-x-1/2 bg-white shadow-lg z-10 mt-32 ml-45 h-[425px] flex flex-col justify-center" >
//           <div className="flex justify-between mb-4  mt-[-65px] ">
//             <button
//             onClick={() => navigate("/")}  
//              className="text-xl font-semibold text-gray-400">LOGIN</button>
//             <button 
//             onClick={() => navigate("/signup")}
//              className="text-xl font-bold text-black border-b-2 border-red-500">SIGNUP</button>
//           </div>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4 mt-4">
//                 <span className="text-xs">Full Name</span>
//               <input
//                 type="text"
//                 name="fullName"
//                 value={formData.fullName}
//                 onChange={handleChange}
//                 className="w-full p-1 border border-gray-300 rounded focus:outline-none focus:border-red-500"
//               />
//             </div>
//             <div className="mb-4 mt-3">
//             <span className="text-xs">Email Id</span>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full p-1 border border-gray-300 rounded focus:outline-none focus:border-red-500"
//               />
//             </div>
//             <div className="mb-4 relative mt-3">
//             <span className="text-xs">Password</span>
//               <input
//                 type="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="w-full p-1 border border-gray-300 rounded focus:outline-none focus:border-red-500"
//               />
//             </div>
//             <div className="mb-4 mt-3">
//             <span className="text-xs">Mobile Number</span>
//               <input
//                 type="text"
//                 name="mobileNumber"
//                 value={formData.mobileNumber}
//                 onChange={handleChange}
//                 className="w-full p-1 border border-gray-300 rounded focus:outline-none focus:border-red-500"
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full h-[37px] text-center text-white bg-red-800 rounded hover:bg-red-1000 mt-6"
//               onClick={() => navigate(`/dashboard/books`)}
//             >
//               Signup
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;



import React, { useState } from "react";
import Img from '../../assets/onlineshopping.png';
import { useNavigate } from "react-router-dom";
import { signupApiCall } from "../../Services/UserService/UserService";
import toast from 'react-hot-toast';

const Signup: React.FC = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    mobileNumber: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    password: "",
    mobileNumber: "",
  });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
  const mobileRegex = /^[0-9]{10}$/;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear error on change
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let valid = true;
    let newErrors = { fullName: "", email: "", password: "", mobileNumber: "" };

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required";
      valid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Enter a valid email";
      valid = false;
    }
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
      valid = false;
    } else if (!passwordRegex.test(formData.password)) {
      newErrors.password = "Must contain 1 uppercase, 1 number, 1 special char, 8+ chars";
      valid = false;
    }
    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = "Mobile number is required";
      valid = false;
    } else if (!mobileRegex.test(formData.mobileNumber)) {
      newErrors.mobileNumber = "Enter a valid 10-digit mobile number";
      valid = false;
    }

    setErrors(newErrors);
    if (!valid) return;

    try {
      const res = await signupApiCall({
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password,
        mobileNumber: formData.mobileNumber,
      });

      if (res) {
        console.log("User signed up successfully:", res);
        toast.success("SignUp Successful");
        navigate("/");
      } else {
        setErrors({ ...errors, email: "Email already exists. Try a different email." });
      }
    } catch (err) {
      console.log("Signup failed:", err);
      toast.error("Signup failed. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-300">
      <div className="flex bg-grey shadow-lg rounded-lg overflow-hidden w-3/6">
        {/* Left Side */}
        <div className="w-[624px] h-[391px] flex flex-col items-center justify-center p-8 bg-gray-100">
          <img src={Img} alt="Online Book Shopping" className="w-[245px] h-[245px] mt- mb-10 ml-[-280px]" />
          <h6 className="text-[18px] ml-[-285px] font-semibold mt-8">ONLINE BOOK SHOPPING</h6>
        </div>

        {/* Right Side */}
        <div className="w-[389px] p-13 absolute shadow-sm rounded-sm top-[-42px] left-[53%] transform -translate-x-1/2 bg-white shadow-lg z-10 mt-32 ml-45 h-[480px] flex flex-col justify-center">
          <div className="flex justify-between mb-4 mt-[-65px]">
            <button onClick={() => navigate("/")} className="text-xl font-semibold text-gray-400">LOGIN</button>
            <button onClick={() => navigate("/signup")} className="text-xl font-bold text-black border-b-2 border-red-500">SIGNUP</button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4 mt-4">
              <span className="text-xs">Full Name</span>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className={`w-full p-1 border ${errors.fullName ? "border-red-500" : "border-gray-300"} rounded focus:outline-none`}
              />
              {errors.fullName && <p className="text-red-500 text-xs">{errors.fullName}</p>}
            </div>
            <div className="mb-4 mt-3">
              <span className="text-xs">Email Id</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-1 border ${errors.email ? "border-red-500" : "border-gray-300"} rounded focus:outline-none`}
              />
              {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
            </div>
            <div className="mb-4 relative mt-3">
              <span className="text-xs">Password</span>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full p-1 border ${errors.password ? "border-red-500" : "border-gray-300"} rounded focus:outline-none`}
              />
              {errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}
            </div>
            <div className="mb-4 mt-3">
              <span className="text-xs">Mobile Number</span>
              <input
                type="text"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                className={`w-full p-1 border ${errors.mobileNumber ? "border-red-500" : "border-gray-300"} rounded focus:outline-none`}
              />
              {errors.mobileNumber && <p className="text-red-500 text-xs">{errors.mobileNumber}</p>}
            </div>
            <button
              type="submit"
              className="w-full h-[37px] text-center text-white bg-red-800 rounded hover:bg-red-1000 mt-6"
            >
              Signup
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;


