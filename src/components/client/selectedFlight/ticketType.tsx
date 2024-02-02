import React from "react";
import { numberToCurrency } from "../../../utils/NumberFormater";
import {useNavigate} from "react-router-dom";

interface TicketTypeProps {
  type: string;
}

const TicketType: React.FC<TicketTypeProps> = ({ type }) => {
    const navigate = useNavigate();
  const price: number = 2358400;
  return (
    <div className="bg-white text-[#505050] rounded-lg shadow-md py-4 px-4">
      <p className="text-sm font-bold text-black">
        {type == "Normal" ? "Normal" : "Safe"}
      </p>
      <div className="flex mt-2">
        <div className="w-[1rem] flex items-center justify-center">
          <img
            src="/images/selected-flight/calendar-edit.svg"
            alt="calendar edit icon"
            className=""
          />
        </div>
        <p className="grow text-[0.625rem] pl-1">Reschedule Available</p>
      </div>
      <div className={`${type == "Safe" ? "text-[#18AF5E]" : ""} flex mt-1`}>
        <div className={`w-[1rem] flex items-center justify-center `}>
          <img
            src={`/images/selected-flight/${
              type == "Normal" ? "money" : "money-green"
            }.svg`}
            alt="money icon"
            className=""
          />
        </div>
        <p className="grow text-[0.625rem] pl-1">
          {type == "Normal"
            ? "Refundable up to 75%"
            : "100% Refund From Original Ticket Price"}
        </p>
      </div>
      <div
        className={`text-[#18AF5E] flex mt-1 ${type == "Normal" && "hidden"}`}
      >
        <div className={`w-[1rem] flex items-center justify-center `}>
          <img
            src="/images/selected-flight/insurance-hand.svg"
            alt="money icon"
            className=""
          />
        </div>
        <p className="grow text-[0.625rem] pl-1">Travel Insurance</p>
      </div>
      {/* Lower Section */}
      <div className="flex items-center justify-between w-full mt-4">
        <div className="flex flex-col text-[0.5rem]">
          <p>IDR 1.179.200/pax</p>
          <p className="mt-1">
            Total{" "}
            <span className="text-xs text-[#1E90FF] font-semibold">
              {type == "Normal"
                ? numberToCurrency("IDR", price, true, false)
                : numberToCurrency("IDR", price + 200000, true, false)}
            </span>
          </p>
          <p>
            Get <span className="text-[#1E90FF]">10000 Loyalty Points</span>
          </p>
        </div>
        <div>
          <button
            className="text-xs text-white bg-[#1E90FF] hover:bg-[#0C70DD] shadow-md rounded-md px-4 py-1"
            onClick={() => navigate("/fillDetailInformation")
            }
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketType;
