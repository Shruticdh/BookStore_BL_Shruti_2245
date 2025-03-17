import React from "react";
// import { ImRocket } from "react-icons/im";
import './Books'

interface BookProps {
  book: {
    id: number;
    title: string;
    author: string;
    price: number;
    image: string;
    originalPrice: number;
    rating: number;
    reviews: number;
    outOfStock: boolean;
  };
  onClick?: () => void; 
}

const BookCard: React.FC<BookProps> = ({ book , onClick}) => {
  return (
    <div>
    <div className="w-[235px] h-[275px] p-[-1px] bg-gray-300 border border-gray-300 rounded-xs flex flex-col items-center "
    onClick={onClick}
    >
      <div className="w-[233px] h-[170px] bg-[#F5F5F5] flex justify-center items-center">
      <img src={book.image} alt={book.title} className="w-[105px] h-[135px] object-cover" />
      </div>

      <div className="bg-white w-[233px] h-[110px] p-3">
      <h3 className="text-[14px] font-semibold mt- text-left">{book.title}</h3>
      <p className="text-gray-500 text-[10px] ">{book.author}</p>  
      <div className="flex flex-col justify-between w-full">
      <div><span 
      // className=" text-white text-[9px] rounded-xs bg-[#388E3C] p-[3px]"
      className="bg-[#388E3C] text=center text-white rounded-xs pt-1 pb-4 pr-1 pl-1 text-[10px] font-medium"
       >{book.rating}★</span>
      </div>
     <span className="text-gray-500 text-[10px] ml-[30px] mt-[-18px]">({book.reviews})</span>
      <div className="mt-[1px]"><span className="text-[black] text-[12px] mr-[150px]">₹{book.price}</span>
      <span className="text-[#878787] line-through ml-[-145px] text-[10px]">Rs. {book.originalPrice}</span>
      </div>
        {/* {book.outOfStock ? (
          <span className="text-red-500 text-sm">Out of Stock</span>
        ) : (
          <button className="bg-blue-500 text-white px-2 py-1 rounded text-sm">Buy</button>
        )} */}
      </div>
      </div>
    </div>
    </div>
  );
};

export default BookCard;
