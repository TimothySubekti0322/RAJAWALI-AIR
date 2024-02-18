import React from "react";
import { FaChevronRight } from "react-icons/fa6";
import { numberToCurrency } from "../../../utils/NumberFormater";

interface HistoryCardProps {
  reservationId: string;
  price: number;
  date: string;
  time: string;
  status: string;
}

const HistoryCard: React.FC<HistoryCardProps> = ({
  reservationId,
  price,
  date,
  time,
  status,
}) => {
  return (
    <div className="flex flex-col w-full px-3 py-1 bg-white rounded-lg shadow-md">
      <div className="flex items-center justify-between mt-3">
        <div>
          <div className="flex items-center text-sm font-bold text-black gap-x-2">
            <img
              src="/images/blue-rajawali-air-logo.svg"
              alt="rajawali air logo"
            />
            <p className="">{reservationId}</p>
          </div>

          <p className="text-[#1E90FF] font-semibold text-sm mt-2">
            {numberToCurrency("IDR", price, true, true)}
          </p>
          <p className="text-[#757575] text-[0.625rem] mt-1">
            {date} {time}
          </p>
        </div>
        <button className="bg-[#EDEDED] p-[0.25rem] rounded-[8px]">
          <FaChevronRight className="text-sm text-black" />
        </button>
      </div>

      <hr className="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700"></hr>

      {/* Purchase Schedule */}
      <div className="flex items-center justify-between mb-2">
        <div
          className={`${status == "Purchase Successful" && "bg-[#18AF5E]"} ${
            status == "Waiting for Payment" && "bg-[#0F53B7]"
          } ${status == "Purchase Pending" && "bg-[#F1A025]"} ${
            status == "Purchase Canceled" && "bg-[#CB3A31]"
          } text-[#FFFFFF] rounded-lg text-[0.625rem] 2xl:text-xs py-[0.3rem] px-2`}
        >
          {status}
        </div>
      </div>
    </div>
  );
};

export default HistoryCard;
