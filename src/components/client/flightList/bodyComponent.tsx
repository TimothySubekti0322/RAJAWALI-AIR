import React, { useEffect, useState } from "react";
import FlightCard from "./flightCard";
import { RawFlightData } from "../../../components/client/flightList/flight.type";
import FlightDetail from "../flightDetail/FlightDetail.tsx";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { replaceDate } from "../../../utils/ticketList/ticketList.utils";
import type { DaysObject } from "../../../utils/ticketList/ticketList.utils";
import CircularProgress from "@mui/material/CircularProgress";

interface BodyComponentProps {
  flightData: RawFlightData[];
  arraysDate: DaysObject[];
  currentDate: number;
  departureDate: string;
  setNewDate: React.Dispatch<React.SetStateAction<string>>;
  loadingNewData: boolean;
  ticketSelected: boolean;
  setTicketSelected: React.Dispatch<React.SetStateAction<boolean>>;
}

const BodyComponent: React.FC<BodyComponentProps> = ({
  flightData,
  arraysDate,
  currentDate,
  departureDate,
  setNewDate,
  loadingNewData,
  ticketSelected,
  setTicketSelected,
}) => {
  const [selectedDate, setSelectedDate] = useState<number>(currentDate);
  const [openModal, setOpenModal] = useState<boolean>(false);

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
    const newDate = replaceDate(departureDate, date);
    setNewDate(newDate);
  };

  return (
    <>
      <div
        ref={sliderRef}
        className="grid w-full h-12 grid-cols-4 text-sm bg-white border-y-[1px] border-[#9E9E9E] keen-slider"
      >
        {/* Date Button */}
        {arraysDate.map((item, index) => (
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
        {loadingNewData && (
          <div className="flex flex-col items-center justify-center w-full h-full pt-[50%]">
            <CircularProgress size="3rem" />
            <div className="flex items-end">
              <p className="mt-12 text-[1rem] font-bold text-black">Loading</p>
              <span className="ml-1 -mb-[0.1rem] text-black loading loading-dots loading-xs"></span>
            </div>
          </div>
        )}
        {!loadingNewData && flightData.length == 0 && (
          <div className="flex flex-col items-center justify-center w-full h-full my-auto pt-[30%] 2xl:pt-[40%]">
            <img
              src="/images/no-flight.svg"
              alt="no flight"
              className="w-1/2"
            />
            <p className="mt-8 text-2xl font-bold text-black sm:text-xl">
              No Flight Found
            </p>
          </div>
        )}
        {!loadingNewData && flightData.length > 0 && (
          <>
            {/* Departure Header */}
            <p className="mt-4 font-bold text-black">Departure Schedule</p>

            <div className="flex flex-col w-full mt-4 gap-y-3">
              {flightData.map((flight) => (
                <>
                  <FlightCard
                    handleOpenModal={() => setOpenModal(true)}
                    flightData={flight}
                    ticketSelected={ticketSelected}
                    setTicketSelected={setTicketSelected}
                  />
                  {openModal && (
                    <FlightDetail
                      detailFlight={flight}
                      onClose={() => setOpenModal(false)}
                      ticketSelected={ticketSelected}
                      setTicketSelected={setTicketSelected}
                    />
                  )}
                </>
              ))}
            </div>
          </>
        )}
        {/* Fligth Card */}
      </div>
    </>
  );
};

export default BodyComponent;
