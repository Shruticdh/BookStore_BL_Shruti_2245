// import React from "react";
// import { Input } from "antd";
// import { UserOutlined, ShoppingCartOutlined } from "@ant-design/icons";
// import { FaBookOpen } from "react-icons/fa";


// export default function Navbar() {
//   return (
//     <div className="top-0 w-[100%] h-[60px] bg-[#A03037] fixed flex items-center px-6 z-100">
//       <div className="flex text-white  font-semibold ">
//       <FaBookOpen className="text-xl text-white mr-2 w-[31.5px] h-[23.71px] ml-30 " />
//       <span className=" items-left mt-[-5px] text-[20px]">Bookstore</span>
//       </div>

//       <div className="relative flex items-center bg-white h-[33px] w-[490px] px-3 rounded-sm ml-15   ">
//           <svg
//             className="w-5 h-5 text-gray-500"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 20 20"
//           >
//             <path
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
//             />
//           </svg>
//           <input
//             type="text"
//             placeholder="Search..."
//             className="ml-2 h-[33px] w-[490px]  bg-transparent focus:outline-none"
//           />
//         </div>
//       <div className="flex items-center space-x-6 text-white ">
//         <div className="flex flex-col items-center cursor-pointer ml-50">
//           <UserOutlined className="text-[15px]" />
//           <span className="text-[10px]">Profile</span>
//         </div>
//         <div className="flex flex-col items-center cursor-pointer ml-20">
//           <ShoppingCartOutlined className="text-[15px]" />
//           <span className="text-[10px]">Cart</span>
//         </div>
//       </div>
//     </div>
//   );
// }




import React , {useState} from "react";
import { Input } from "antd";
import { UserOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { FaBookOpen } from "react-icons/fa";


const Navbar: React.FC = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="top-0 w-[100%] h-[60px] bg-[#A03037] fixed flex items-center px-6 sm:px-6 md:px-10 lg:px-16 xl:px-20 z-100">
      <div className="flex text-white  font-semibold ">
      <FaBookOpen className="text-xl text-white mr-2 w-[31.5px] h-[23.71px]  ml-2 md:ml-6 lg:ml-10 xl:ml-15" />
      <span className=" items-left mt-[-5px] text-[20px] sm:text-[px] hidden sm:block">Bookstore</span>
      </div>

      <div className="relative flex items-center bg-white h-[33px] w-[490px]  sm:w-[150px] md:w-[250px] lg:w-[400px] xl:w-[500px] px-3 rounded-sm ml-5 md:ml-10 lg:ml-15 xl:ml-20">
          {!showSearch && (
        <svg
          className="w-5 h-5 text-gray-500 sm:block md:hidden cursor-pointer"
          onClick={() => setShowSearch(true)}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      )}

      {/* Search Input (Only shows when state is true OR on md & larger screens) */}
      {(showSearch || window.innerWidth >= 768) && (
        <input
          type="text"
          placeholder="Search..."
          className="ml-2 h-[33px] w-[490px] sm:w-[150px] bg-transparent focus:outline-none"
          onBlur={() => setShowSearch(false)} // Close input when user clicks outside
          autoFocus // Focus on input when opened
        />
      )} 
        </div>
      <div className="flex items-center space-x-6 text-white ">
        <div className="flex flex-col items-center cursor-pointer ml-8 md:ml-20 lg:ml-20 xl:ml-50">
          <UserOutlined className="text-[15px]" />
          <span className="text-[10px]">Profile</span>
        </div>
        <div className="flex flex-col items-center cursor-pointer ml-5 md:ml-15 lg:ml-15 xl:ml-20">
          <ShoppingCartOutlined className="text-[15px]" />
          <span className="text-[10px]">Cart</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;