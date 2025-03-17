import React from "react";
import Img from "../../assets/OrderPlace.png"

const OrderPlaced: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-[White] mt-10">
      {/* Success Message */}
      <div className="text-center">
        <img
          src={Img}
          alt="Success"
          className="w-60 mx-auto"
        />
        {/* <h1 className="text-2xl font-semibold mt-4">Order Placed Successfully</h1> */}
        <p className="mt-2 text-[18px] text-gray-600">
          Hurray!!! Your order is confirmed
          <br />
          The order ID is <strong>#123456</strong>. Save the order ID for further communication.
        </p>
      </div>

      {/* Contact Information */}
      <div className="w-full max-w-[751px] min-h-[115px] mt-6 border border-[#DCDCDC] bg-[#FAFAFA] rounded-xs">
        <div className=" w-full max-w-[751px] h-[42px] grid grid-cols-3 text-center font-semibold p-2 text-[12px] text-[#333232]">
          <p>Email us</p>
          <p>Contact us</p>
          <p>Address</p>
          <div className="w-[750px] ml-[-8px] border-b border-[#DCDCDC] my-4"></div>
        </div>
        <div className="grid grid-cols-3 text-[12px] text-[#333232] text-center p-4">
  <p className="border-r min-h-[72px] mt-[-16px] border-[#DCDCDC] text-center">admin@<br></br>bookstore.com</p>
  <p className="border-r min-h-[72px] mt-[-16px] border-[#DCDCDC]  text-center">+91 8163475881</p>
  <p className=" mt-[-14px] text-center">
    42, 14th Main, 15th Cross, Sector 4, Opp to BDA Complex, near Kumarakom
    restaurant, HSR Layout, Bangalore 560034
  </p>
</div>

      </div>

      {/* Continue Shopping Button */}
      <button className="w-[200px] h-[35px] mt-6 bg-[#3371B5] text-center text-white rounded-xs hover:bg-blue-700">
        CONTINUE SHOPPING
      </button>
    </div>
  );
};

export default OrderPlaced;
