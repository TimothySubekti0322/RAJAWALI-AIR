import React, { useState, useEffect } from "react";
import { numberToCurrency } from "../../../utils/NumberFormater";
import { FlightData } from "../flightList/flight.type";
import { getTotalPassengersFromLocalStorage } from "../../../utils/ticketList/ticketList.utils";

interface TicketTypeProps {
  type: string;
  flights: number;
  indexTicket: number;
  ticketSelected: boolean;
  setIndexTicket: React.Dispatch<React.SetStateAction<number>>;
  setTicketSelected: React.Dispatch<React.SetStateAction<boolean>>;
  flightData: FlightData;
}

const TicketType: React.FC<TicketTypeProps> = ({
  type,
  flights,
  indexTicket,
  ticketSelected,
  setIndexTicket,
  setTicketSelected,
  flightData,
}) => {
  const handleSelect = () => {
    if (flights == indexTicket) {
      setTicketSelected(!ticketSelected);
      window.location.href = "/fillDetailInformation";
    } else {
      setIndexTicket(indexTicket + 1);
      setTicketSelected(!ticketSelected);
    }
  };

  // Get Price
  const [price, setPrice] = useState<number>(
    localStorage.getItem("classType") == "ECONOMY"
      ? flightData.economySeatsPrice
      : flightData.firstSeatsPrice
  );

  // Re Render Flight Data
  useEffect(() => {
    setPrice(
      localStorage.getItem("classType") == "ECONOMY"
        ? flightData.economySeatsPrice
        : flightData.firstSeatsPrice
    );
  }, [flightData]);

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
          <p>
            {type == "Normal"
              ? numberToCurrency("IDR", price, true, false)
              : numberToCurrency("IDR", price + 100000, true, false)}
            /pax
          </p>
          <p className="mt-1">
            Total{" "}
            <span className="text-xs text-[#1E90FF] font-semibold">
              {type == "Normal"
                ? numberToCurrency(
                    "IDR",
                    price * getTotalPassengersFromLocalStorage(),
                    true,
                    false
                  )
                : numberToCurrency(
                    "IDR",
                    (price + 100000) * getTotalPassengersFromLocalStorage(),
                    true,
                    false
                  )}
            </span>
          </p>
          <p>
            Get{" "}
            <span className="text-[#1E90FF]">
              {flightData.points} Loyalty Points
            </span>
          </p>
        </div>
        <div>
          <button
            className="text-xs text-white bg-[#1E90FF] hover:bg-[#0C70DD] shadow-md rounded-md px-4 py-1"
            onClick={() => handleSelect()}
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketType;
