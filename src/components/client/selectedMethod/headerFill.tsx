import React from "react";
import { FaArrowLeft } from "react-icons/fa";

interface HeaderFillProps {
  bank: string;
  orderID: string;
}

const HeaderFill: React.FC<HeaderFillProps> = ({ bank, orderID }) => {
  return (
    <>
      <button
        onClick={() => {
          window.history.back();
        }}
      >
        <FaArrowLeft className="text-xl text-white" />
      </button>
      <div className="flex flex-col ml-4 gap-y-1">
        <div className="flex items-center text-sm gap-x-2">
          <p className="font-semibold">{bank}</p>
        </div>
        <div className="flex items-center text-[10px] gap-x-1">
          <p>Order ID</p>
          <p>:</p>
          <p>{orderID}</p>
        </div>
      </div>
    </>
  );
};

export default HeaderFill;
