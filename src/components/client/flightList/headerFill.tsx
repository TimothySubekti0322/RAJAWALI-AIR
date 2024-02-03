import React from "react";
import { FaArrowLeft, FaLongArrowAltRight } from "react-icons/fa";

interface HeaderFillProps {
  departure: string;
  departureCode: string;
  arrival: string;
  arrivalCode: string;
  date: string;
  child: number;
  adult: number;
  infant: number;
  seatClass: string;
}

const HeaderFill: React.FC<HeaderFillProps> = ({
  departure,
  departureCode,
  arrival,
  arrivalCode,
  date,
  child,
  adult,
  infant,
  seatClass,
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
        <div className="flex items-center text-xs gap-x-2">
          <p className="font-bold">
            {departure} ({departureCode})
          </p>
          <FaLongArrowAltRight className="text-white" />
          <p className="font-bold ">
            {arrival} ({arrivalCode})
          </p>
        </div>
        <div className="flex items-center text-[10px] gap-x-1">
          <p>{date}</p>
          <p>|</p>
          <p>{child > 0 ? `${child} Child` : ""}</p>
          <p>{adult > 0 ? `${adult} Adult` : ""}</p>
          <p>{infant > 0 ? `${infant} Infant` : ""}</p>
          <p>|</p>
          <p>{seatClass} Class</p>
        </div>
      </div>
    </>
  );
};

export default HeaderFill;
