import React, { useEffect, useState } from "react";
import FlightCard from "./flightCard";
import { RawFlightData } from "../../../pages/client/TicketList";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import {
  replaceDate,
  extractDepartureDate,
} from "../../../utils/ticketList/ticketList.utils";
import type { DaysObject } from "../../../utils/ticketList/ticketList.utils";

interface BodyComponentProps {
  flightData: RawFlightData[];
  date: DaysObject[];
  currentDate: number;
  sourceAirportId: string;
  destAirportId: string;
  adultsNumber: string;
  childsNumber: string;
  infantsNumber: string;
  departureDate: string;
  classType: string;
}

const BodyComponent: React.FC<BodyComponentProps> = ({
  flightData,
  date,
  currentDate,
  sourceAirportId,
  destAirportId,
  adultsNumber,
  childsNumber,
  infantsNumber,
  departureDate,
  classType,
}) => {
  const [selectedDate, setSelectedDate] = useState<number>(currentDate);

  // Date Slider
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free",
    slides: {
      perView: 4,
    },
  });

  useEffect(() => {
    setSelectedDate(currentDate);
  }, [currentDate]);

  const handleChangeDate = (date: number) => {
    const extractedDate = extractDepartureDate(departureDate);
    const newDate = "departureDate=" + replaceDate(extractedDate, date) + "&";
    window.location.href = `/ticketList?${sourceAirportId}${destAirportId}${adultsNumber}${childsNumber}${infantsNumber}${newDate}${classType}`;
  };

  console.log(flightData);
  return (
    <>
      <div
        ref={sliderRef}
        className="grid w-full h-12 grid-cols-4 text-sm bg-white border-y-[1px] border-[#9E9E9E] keen-slider"
      >
        {/* Date Button */}
        {date.map((item, index) => (
          <button
            key={index}
            className={`${
              selectedDate == item.date
                ? "font-bold text-[#1E90FF]"
                : "text-black"
            } relative flex items-center justify-center keen-slider__slide number-slide${index}`}
            onClick={() => handleChangeDate(item.date)}
          >
            <p>
              {item.day}, {item.date}
            </p>
            {selectedDate == item.date && (
              <div className="absolute w-10 h-1 bg-[#1E90FF] rounded-t-lg bottom-0"></div>
            )}
          </button>
        ))}
      </div>
      {/* Inner Body Section */}
      <div className="w-full h-full px-4">
        {flightData.length == 0 ? (
          <div className="flex flex-col items-center justify-center w-full h-full my-auto pt-[30%]">
            <img
              src="/images/no-flight.svg"
              alt="no flight"
              className="w-1/2"
            />
            <p className="mt-8 text-2xl font-bold text-black sm:text-xl">
              No Flight Found
            </p>
          </div>
        ) : (
          <>
            {/* Departure Header */}
            <p className="mt-4 font-bold text-black">Departure Schedule</p>

            {/* Fligth Card */}
            <div className="flex flex-col w-full mt-4 gap-y-3">
              {flightData.map((flight) => (
                <FlightCard key={flight.id} flightData={flight} />
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default BodyComponent;
