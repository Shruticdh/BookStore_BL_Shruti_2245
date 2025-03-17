// import React, { useState } from "react";
// import Img from '../../assets/onlineshopping.png'
// import { useNavigate } from "react-router-dom";

// const Login: React.FC = () => {
//   const navigate = useNavigate();

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
//     <div className="flex bg-grey shadow-lg rounded-lg overflow-hidden w-3/6">
//         {/* Left Side */}
//         <div className="w-[624px]  h-[391px]  flex-col items-center justify-center p-8 bg-gray-100">
//           <img
//             src={Img}
//             alt="Online Book Shopping"
//             className="w-[245px] h-[245px] mt-7 mb-10 ml-4.5"
//           />
//           <h2 className="text-[18px] ml-8 font-semibold mt-8">ONLINE BOOK SHOPPING</h2>
//         </div>

//         {/* Right Side */}
//         {/* <div className="w-1/4 p-15 absolute top-[-30px] left-[50%] transform -translate-x-1/2 bg-white shadow-lg z-10 mt-49 ml-40 h-105 min-h-[250px] flex flex-col justify-center   bg-white shadow-lg rounded-lg "> */}
//         <div className="w-[389px] h-[245px] p-13 absolute shadow-sm rounded-sm top-[-42px] left-[53%] transform -translate-x-1/2 bg-white shadow-lg z-10 mt-32 ml-45 h-[425px] flex flex-col justify-center " >
     
//           <button className="flex justify-between mt-[-65px] " >
//             <button
//             onClick={() => navigate("/")}  
//             className="text-xl font-bold text-black border-b-2 border-red-500" >LOGIN</button>

//             <button
//             onClick={() => navigate("/signup")}
//              className="text-xl font-semibold text-gray-400">
//               SIGNUP
//             </button>
//           </button>
//           <form onSubmit={handleSubmit}>
//             <div className="mt-5">
//             <span className="text-xs">Email Id</span>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full p-1 border border-gray-300 rounded focus:outline-none focus:border-red-500"
//               />
//             </div>
//             <div className="mt-5 relative">
//             <span className="text-xs">Password</span>
//               <input
//                 type="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="w-full p-1 border border-gray-300 rounded focus:outline-none focus:border-red-500"
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full h-[37px] text-center text-white bg-[#A03037] rounded-xs mt-7 hover:bg-red-900  "
//               onClick={() => navigate(`/dashboard/books`)}
//             >
//               Login
//             </button>

//             <div className="mb-4 relative mt-7">
//             <div className="flex items-center my-4">
//               <div className="w-full border-b border-gray-300"></div>
//               <span className="px-4 text-gray-500 text-sm">OR</span>
//               <div className="w-full border-b border-gray-300"></div>
//             </div>
//             </div>

//             <div className="flex gap-10  mt-7 ">
//               <button
//                 type="submit"
//                 className="w-full  h-[37px] text=[12px] text-center text-white bg-[#4266B2] rounded hover:bg-blue-900 "
//               >
//                 Facebook
//               </button>

//               <button
//                 type="submit"
//                 className="w-full h-[37px] text=[12px] text-center text-white bg-[#E4E4E4] rounded hover:bg-gray-700 "
//               >
//                 Google
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;




import React, { useState } from "react";
import Img from "../../assets/onlineshopping.png";
import { useNavigate } from "react-router-dom";
import { loginApiCall } from "../../Services/UserService/UserService"; // Import API call function
import { toast } from "react-toastify";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let valid = true;
    let newErrors = { email: "", password: "" };

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
      valid = false;
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const response = await loginApiCall({
        email: formData.email,
        password: formData.password,
      });

      if (response) {
        // Store token in localStorage
        localStorage.setItem("token", response.token);
        toast.success("Login Successful!");

        navigate("/dashboard/books"); // Navigate to books page
      } else {
        toast.error("Invalid email or password.");
      }
    } catch (error: any) {
      console.error("Login failed:", error);
      toast.error(error.message || "Login failed. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-300">
      <div className="flex bg-grey shadow-lg rounded-lg overflow-hidden w-3/6">
        {/* Left Side */}
        <div className="w-[624px] h-[391px] flex-col items-center justify-center p-8 bg-gray-100">
          <img
            src={Img}
            alt="Online Book Shopping"
            className="w-[245px] h-[245px] mt-7 mb-10 ml-4.5"
          />
          <h2 className="text-[18px] ml-8 font-semibold mt-8">
            ONLINE BOOK SHOPPING
          </h2>
        </div>

        {/* Right Side */}
        <div className="w-[389px] h-[245px] p-13 absolute shadow-sm rounded-sm top-[-42px] left-[53%] transform -translate-x-1/2 bg-white shadow-lg z-10 mt-32 ml-45 h-[425px] flex flex-col justify-center">
          <button className="flex justify-between mt-[-65px]">
            <button
              onClick={() => navigate("/")}
              className="text-xl font-bold text-black border-b-2 border-red-500"
            >
              LOGIN
            </button>

            <button
              onClick={() => navigate("/signup")}
              className="text-xl font-semibold text-gray-400"
            >
              SIGNUP
            </button>
          </button>
          <form onSubmit={handleSubmit}>
            <div className="mt-5">
              <span className="text-xs">Email Id</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-1 border border-gray-300 rounded focus:outline-none focus:border-red-500"
              />
              {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
            </div>
            <div className="mt-5 relative">
              <span className="text-xs">Password</span>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-1 border border-gray-300 rounded focus:outline-none focus:border-red-500"
              />
              {errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}
            </div>

            <button
              type="submit"
              className="w-full h-[37px] text-center text-white bg-[#A03037] rounded-xs mt-7 hover:bg-red-900"
            >
              Login
            </button>

            <div className="mb-4 relative mt-7">
              <div className="flex items-center my-4">
                <div className="w-full border-b border-gray-300"></div>
                <span className="px-4 text-gray-500 text-sm">OR</span>
                <div className="w-full border-b border-gray-300"></div>
              </div>
            </div>

            <div className="flex gap-10 mt-7">
              <button
                type="button"
                className="w-full h-[37px] text-[12px] text-center text-white bg-[#4266B2] rounded hover:bg-blue-900"
              >
                Facebook
              </button>

              <button
                type="button"
                className="w-full h-[37px] text-[12px] text-center text-white bg-[#E4E4E4] rounded hover:bg-gray-700"
              >
                Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
