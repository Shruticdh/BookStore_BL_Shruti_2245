import React from "react";
import BookCard from "../BookCrad/BookCard";
import { Pagination } from "antd";
import {books} from '../BookCrad/Books'
import { useNavigate } from "react-router-dom";

const BooksContainer: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto mt-[100px] w-[1022px] ml-2 md:ml-15 lg:ml-25 xl:ml-35 ">
      <span className=" sm:text-[15px] md:text-[25px] ml-25 md:ml-0 lg:ml-0 xl:ml-0 lg:text-[25px] xl:text-[25px]">Books</span>
      <span className="text-[12px] text-[#9D9D9D] ">(128 items)</span>
      <div className="relative w-[161px]  ml-[70px] md:ml-[62%] lg:ml-[63%] xl:ml-[88%] bg-[#FFFFFF]  mt-10 md:-mt-8 lg:-mt-8 xl:-mt-8 ">
        <select className="w-[161px] h-[30px] text-[12px] mb-10 border border-gray-300 rounded-xs py-1 pl-2 text-gray-700 focus:outline-none focus:ring-2 z-0">
          <option value="relevance">Sort by relevance</option>
          <option value="price">Sort by price</option>
          <option value="rating">Sort by rating</option>
        </select>
      </div>
      <div className=" md:w-[80%] lg:w-[82%] xl:w-[107%] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-4 lg:gap-3 xl:gap-2 mt-10 ml-8  md:ml-[40px] lg:ml-[0px] xl:ml-[0px]">
        {books.map((book) => (
          <BookCard 
          key={book.id}
          book={book}
          onClick={() => navigate(`/dashboard/books/${book.id}`)}
           />
        ))}
      </div>
      <div className="mt-[80px] flex justify-center items-center ml-[-700px] md:ml-[-150px] lg:ml-[-250px] xl:ml-[0px]">
        <Pagination defaultCurrent={6} total={500} />
      </div>
    </div>
  );
};

export default BooksContainer;
