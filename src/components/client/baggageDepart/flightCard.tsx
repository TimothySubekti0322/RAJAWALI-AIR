import React from "react";
import BookingProvider from "../../../providers/BookingProvider";
import { FlightData } from "../flightList/flight.type";
import moment from "moment";
import { getDurationBetweenDates } from "../../../utils/ticketList/ticketList.utils";

interface FLightCardProps {
  flightId: string;
  flightData: FlightData;
  selectedFlight: number;
  setSelectedFlight: React.Dispatch<React.SetStateAction<number>>;
  index: number;
}

const FLightCard: React.FC<FLightCardProps> = ({
  flightId,
  flightData,
  selectedFlight,
  setSelectedFlight,
  index,
}) => {
  console.log(flightId);
  const handleClicked = () => {
    setSelectedFlight(index);
  };
  return (
    <BookingProvider requiredItem={["passengers", "flightId"]}>
      <button
        className={`flex flex-col w-full px-4 py-4 bg-white rounded-lg shadow-md mt-4 ${
          index == selectedFlight && "border-2 border-[#1E90FF]"
        }`}
        onClick={handleClicked}
      >
        <div className="flex items-center text-sm font-bold text-black gap-x-2">
          <img
            src="/images/blue-rajawali-air-logo.svg"
            alt="rajawali air logo"
          />
          <p className="">{flightData.sourceAirport.cityCode}</p>
          <img
            src="/images/long-arrow.svg"
            alt="long arrow"
            className="w-4 h-2 "
          />
          <p className="">{flightData.destinationAirport.cityCode}</p>
        </div>
        <p className="text-[#757575] text-xs mt-2">
          {moment(flightData.departureDate).format("DD MMM YYYY, HH:mm")} -{" "}
          {moment(flightData.arrivalDate).format("HH:mm")}
        </p>
        <p className="text-[#757575] text-xs mt-1">
          {getDurationBetweenDates(
            flightData.departureDate,
            flightData.arrivalDate
          )}
        </p>
        <p className="text-[#18AF5E] text-xs mt-2">
          Free baggage 20kg per passenger
        </p>
      </button>
    </BookingProvider>
  );
};

export default FLightCard;
