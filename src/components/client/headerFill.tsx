import React from "react";
import { FaArrowLeft } from "react-icons/fa";

interface HeaderFillProps {
  title: string;
}

const HeaderFill: React.FC<HeaderFillProps> = ({ title }) => {
  return (
    <div className="relative flex items-center justify-center w-full h-full">
      <button
        className="absolute left-0"
        onClick={() => {
          window.location.href = "/";
        }}
      >
        <FaArrowLeft className="text-xl text-white" />
      </button>
      <div>{title}</div>
    </div>
  );
};

export default HeaderFill;
