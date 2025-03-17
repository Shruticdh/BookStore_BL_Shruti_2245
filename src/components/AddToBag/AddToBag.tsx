import React from "react";

interface AddToBagProps {
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
}

const AddToBag: React.FC<AddToBagProps> = ({ quantity, setQuantity }) => {
  return (
    <div className="flex flex-row items-center gap-1">
      <button
        className="w-[30px] h-[30px] text-center bg-[#FAFAFA] border border-[#DBDBDB] rounded-[50%] cursor-pointer"
        onClick={() => setQuantity(quantity - 1)}
      >
        -
      </button>
      <span className="text-sm text-center w-[35px] h-[25px] border border-[#DBDBDB] px-3">
        {quantity}
      </span>
      <button
        className="w-[30px] h-[30px] text-center bg-[#FAFAFA] border border-[#DBDBDB] rounded-[50%] cursor-pointer"
        onClick={() => setQuantity(quantity + 1)}
      >
        +
      </button>
    </div>
  );
};

export { AddToBag };
