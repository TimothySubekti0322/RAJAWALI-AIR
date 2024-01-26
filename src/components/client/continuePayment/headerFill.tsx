import React from "react";
import { FaArrowLeft } from "react-icons/fa";

interface HeaderFillProps {
  method: string;
  orderID: string;
}

const HeaderFill: React.FC<HeaderFillProps> = ({
  method,
  orderID,
}) => {
  return (
    <>
      <button
        onClick={() => {
          window.location.href = "/";
        }}
      >
        <FaArrowLeft className="text-xl text-white" />
      </button>
      <div className="flex flex-col ml-4 gap-y-1">
        <div className="flex items-center text-sm gap-x-2">
          <p className="font-semibold">
            {method}
          </p>
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
