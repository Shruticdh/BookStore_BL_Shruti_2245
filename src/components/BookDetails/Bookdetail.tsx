import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { books } from "../BookCrad/Books"; // Ensure the path is correct
import Img from "../../assets/Image 11.png"; // Sample image
import { AddToBag } from "../AddToBag/AddToBag";

const BookDetail: React.FC = () => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(0);

  const { id } = useParams<{ id: string }>();
  const book = books.find((b) => b.id === parseInt(id || "0"));

  const [mainImage, setMainImage] = useState(book?.image); // Store the selected image
  const [rating, setRating] = useState(0);
  const [selectedStars, setSelectedStars] = useState<boolean[]>(
    Array(5).fill(false)
  );

  const handleStarClick = (index: number) => {
    setSelectedStars((prev) => {
      const newStars = [...prev];
      newStars[index] = !newStars[index]; // Toggle the clicked star
      return newStars;
    });
  };

  if (!book) {
    return <div className="text-center mt-10 text-lg">Book not found.</div>;
  }
  const handleAddToWishlist = () => {
    const storedWishlist = localStorage.getItem("wishlist");
    const wishlist = storedWishlist ? JSON.parse(storedWishlist) : [];

    // Agar book pehle se wishlist me nahi hai, tab hi add karega
    if (!wishlist.some((item: any) => item.id === book.id)) {
      wishlist.push(book);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }
  };

  return (
    <div className="container w-[1110px] mx-auto mt-20 px-6 lg:px-16 ml-20">
      {/* Breadcrumb */}
      <div
        className="text-sm text-gray-500 "
        onClick={() => navigate(`/dashboard/books`)}
      >
        <span className="text-gray-500 hover:text-[black]"> Home / </span>
        <span className="text-black font-medium">Book({id})</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 mt-6">
        <div className="flex gap-4 relative">
          <div className="flex flex-col space-y-2">
            {[book.image, book.image2].map((img, index) => (
              <div
                key={index}
                className="relative w-[70px] h-[100px] border border-gray-300 cursor-pointer mt-2"
                onClick={() => setMainImage(img)} // Change main image on click
              >
                <img
                  src={img}
                  alt={`thumb-${index}`}
                  className="w-[60px] h-[80px] object-cover ml-1 mt-1 mb-2"
                />
              </div>
            ))}
          </div>

          {/* Main Image Container */}
          <div className="relative w-80 h-97 border border-gray-300">
            <img
              src={mainImage}
              alt={book.title}
              className="w-70 h-90 object-cover ml-5 mt-3 mb-6"
            />
          </div>

          {/* Buttons Inside Image */}
          <div className=" flex absolute w-full mt-[400px] ml-[90px]">
            {/* {quantity > 0 ? (
              <div className="flex flex-row items-center gap-1">
                <button
                  className="w-[30px] h-[30px] text-center bg-[#FAFAFA] border border-[#DBDBDB] rounded-[50%] cursor-pointer"
                  onClick={() => setQuantity(quantity - 1)}
                >
                  -
                </button>
                <span className="text-sm text-center w-[35px] h-[25px] border border-[#DBDBDB] px-3 ">{quantity}</span>
                <button
                  className=" w-[30px] h-[30px] text-center bg-[#FAFAFA] border border-[#DBDBDB] rounded-[50%] cursor-pointer"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div> */}
            {/* ) : (
              <button className="bg-[#A03037] text-center text-white w-[150px] h-[34px] text-sm font-medium hover:bg-red-900 "
              onClick={() => setQuantity(1)}>
                ADD TO BAG
              </button>
            )} */}

            {quantity > 0 ? (
              <AddToBag quantity={quantity} setQuantity={setQuantity} />
            ) : (
              <button
                className="bg-[#A03037] text-center text-white w-[150px] h-[34px] text-sm font-medium hover:bg-red-900"
                onClick={() => setQuantity(1)}
              >
                ADD TO BAG
              </button>
            )}

            <button
              className="bg-gray-700 text-center text-white w-[150px] h-[34px] text-sm font-medium hover:bg-gray-800 ml-4"
              onClick={() => handleAddToWishlist()}
            >
              ♥ WISHLIST
            </button>
          </div>
        </div>

        {/* Right Section: Book Details */}
        <div className="flex-1">
          <h1 className="text-2xl font-semibold">{book.title}</h1>
          <p className="text-gray-500 text-md mt-1">by {book.author}</p>

          {/* Rating and Reviews */}
          <div className="flex items-center mt-3 text=center">
            <span className="bg-[#388E3C] text=center text-white rounded-xs pt-1 pb-4 pr-1 pl-1 text-[10px] font-medium">
              {book.rating} ★
            </span>
            <span className="text-gray-500 text-sm ml-2">
              ({book.reviews} Reviews)
            </span>
          </div>

          {/* Pricing */}
          <div className="mt-3">
            <span className="text-2xl font-normal text-black">
              Rs. {book.price}
            </span>
            <span className="text-gray-500 line-through ml-3 text-md">
              Rs. {book.originalPrice}
            </span>
          </div>

          {/* Book Description */}
          <div className="mt-6">
            <div className="w-full border-b border-gray-300"></div>
            <h3 className="text-lg font-semibold mt-8">Book Detail</h3>
            <p className="text-gray-600 text-sm mt-1 leading-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat.Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Sed diam nonummy nibh euismod tincidunt ut laoreet dolore
              magna aliquam erat volutpat.
            </p>
          </div>
          <div className="w-full border-b border-gray-300 mt-9"></div>
          {/* Customer Feedback Section */}
          <div className=" mt-5">
            <h3 className="text-lg font-semibold">Customer Feedback</h3>

            <div className="w-[557px] h-[192px] bg-[#F5F5F5] rounded-sm ">
              <div className="flex flex-col gap-2 mt-3 ">
                <span className="text-gray-500 text-left ml-2">
                  Overall rating
                </span>
                <div className="flex ml-2  gap-4">
                  {selectedStars.map((isSelected, index) => (
                    <FaStar
                      key={index}
                      className={`text-lg cursor-pointer ${
                        isSelected ? "text-yellow-500" : "text-gray-300"
                      }`}
                      onClick={() => handleStarClick(index)}
                    />
                  ))}
                </div>
                <textarea
                  placeholder="Write your review"
                  className=" ml-2 w-[527px] h-[63px] mt-3 p-3  bg-[white] rounded-xs resize-none focus:ring-2 focus:ring-blue-300"
                  rows={3}
                ></textarea>
                <button className=" w-[76px] h-[24px] bg-[#3371B5]  ml-115 text-white text-center rounded-xs mt-3 hover:bg-blue-600">
                  Submit
                </button>
              </div>
            </div>

            {/* Sample Reviews */}
            <div className="mt-6 pt-4">
              <div className="flex items-center gap-2">
                <span className="text-gray-700 font-medium">Aniket Chile</span>
                <div className="flex">
                  {[...Array(3)].map((_, index) => (
                    <FaStar key={index} className="text-yellow-400" />
                  ))}
                  {[...Array(2)].map((_, index) => (
                    <FaStar key={index} className="text-gray-300" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 text-sm mt-1">
                Good product. Even though the translation could have been
                better, Chanakya's neeti are thought provoking. Chanakya has
                written on many different topics and his writings are succinct.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
