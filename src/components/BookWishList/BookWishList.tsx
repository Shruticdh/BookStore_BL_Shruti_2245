// import React, { useEffect, useState } from "react";
// import { books } from "../BookCrad/Books";

// const BookList = () => {
//   const [wishlist, setWishlist] = useState<{ id: number; title: string; author: string; price: number; image: string; originalPrice: number }[]>([]);

//   useEffect(() => {
//     const storedWishlist = localStorage.getItem("wishlist");
//     if (storedWishlist) {
//       setWishlist(JSON.parse(storedWishlist));
//     }
//   }, []);

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-semibold mb-4">My Wishlist</h1>
//       <div className="grid gap-4">
//         {wishlist.length > 0 ? (
//           wishlist.map((book) => (
//             <div key={book.id} className="flex p-4 border rounded-lg shadow-sm bg-white">
//               <img src={book.image} alt={book.title} className="w-24 h-32 object-cover" />
//               <div className="ml-4">
//                 <h2 className="text-lg font-semibold">{book.title}</h2>
//                 <p className="text-gray-500">by {book.author}</p>
//                 <p className="text-lg font-bold mt-2">
//                   Rs. {book.price}
//                   <span className="text-gray-400 line-through ml-2">Rs. {book.originalPrice}</span>
//                 </p>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="text-gray-500">No books in wishlist.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default BookList;


import React, { useEffect, useState } from "react";

const BookList = () => {
  const [wishlist, setWishlist] = useState<
    { id: number; title: string; author: string; price: number; image: string; originalPrice: number }[]
  >([]);

  useEffect(() => {
    const storedWishlist = localStorage.getItem("wishlist");
    if (storedWishlist) {
      setWishlist(JSON.parse(storedWishlist));
    }
  }, []);

  const handleRemove = (id: number) => {
    const updatedWishlist = wishlist.filter((book) => book.id !== id);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  return (
    <div className="p-6 mt-20 ml-[-110px] md:ml-[-80px] lg:ml-[-40px] xl:ml-[0px]">
       <div
        className="flex text-sm text-gray-500 ml-30"
        // onClick={() => navigate(`/dashboard/books`)}
      >
        <span className="text-gray-500 hover:text-[black]"> Home / </span>
        <h1 className=" mb-4">My Wishlist <span className="text-gray-500">({wishlist.length.toString().padStart(2, "0")})</span>
      </h1>
      </div>
      <div className="md:w-[630px] lg:w-[805px] xl:w-[1055px] border border-[#E4E4E4] ml-30 mt-10"
        style={{ minHeight: "200px", height: wishlist.length * 120 + 150 + "px" }}>
        <div className="lg:w-[805px] xl:w-[1055px] h-[55px] bg-[#F5F5F5] border border-[#E4E4E4] rounded-xs ">
        <h1 className=" text-[18px] font-semibold mb-4 ml-12 mt-[12px]">My Wishlist
           <span className="text-gray-500">({wishlist.length.toString().padStart(2, "0")})</span>
           </h1>
        </div>
          <div className="space-y-4 p-4">
          {wishlist.length > 0 ? (
            wishlist.map((book, index) => (
              <div key={book.id}>
                {/* Separator line before each book except first one */}
                {index !== 0 && <div className="lg:w-[805px] xl:w-[1055px] ml-[-16px] border-b border-gray-300 my-4"></div>} 
                <div className="flex items-center bg-white mt-3 ml-2 md:ml=8 lg:ml-8 xl:ml-8">
                  <img src={book.image} alt={book.title} className="w-20 h-28 object-cover rounded.xs" />
                  <div className="ml-4 flex-grow">
                    <h2 className="text-[18px] font-semibold">{book.title}</h2>
                    <p className="text-gray-500 text-[12px]">by {book.author}</p>
                    <p className="text-[15px] font-bold text-[black] mt-2">
                      Rs. {book.price}{" "}
                      <span className="text-[12px] text-gray-400 line-through ml-2">Rs. {book.originalPrice}</span>
                    </p>
                  </div>
                  <button
                    onClick={() => handleRemove(book.id)}
                    className="p-2 text-gray-500 hover:text-red-500 transition"
                  >
                    🗑️
                  </button>
                </div>
              </div>
          ))
        ) : (
          <p className="text-gray-500">No books in wishlist.</p>
        )}
      </div>
      </div>
    </div>
  );
};

export default BookList;

