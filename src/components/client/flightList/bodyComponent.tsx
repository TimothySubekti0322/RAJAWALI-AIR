import React, { useState } from "react";
import FlightCard from "./flightCard";
import { RawFlightData } from "../../../pages/client/TicketList";
import FlightDetail from "../flightDetail/FlightDetail.tsx";

interface BodyComponentProps {
  flightData: RawFlightData[],
}

const BodyComponent: React.FC<BodyComponentProps> = ({ flightData }) => {
  const [selectedDate, setSelectedDate] = useState<number>(1);
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <>
      <div className="grid w-full h-12 grid-cols-4 text-sm bg-white border-y-[1px] border-[#9E9E9E]">
        <button
          className={`${
            selectedDate == 1 ? "font-bold text-[#1E90FF]" : "text-black"
          } relative flex items-center justify-center `}
          onClick={() => setSelectedDate(1)}
        >
          <p>Thu, 25</p>
          {selectedDate == 1 && (
            <div className="absolute w-10 h-1 bg-[#1E90FF] rounded-t-lg bottom-0"></div>
          )}
        </button>
        <button
          className={`${
            selectedDate == 2 ? "font-bold text-[#1E90FF]" : "text-black"
          } relative flex items-center justify-center `}
          onClick={() => setSelectedDate(2)}
        >
          <p>Fri, 26</p>
          {selectedDate == 2 && (
            <div className="absolute w-10 h-1 bg-[#1E90FF] rounded-t-lg bottom-0"></div>
          )}
        </button>
        <button
          className={` ${
            selectedDate == 3 ? "font-bold text-[#1E90FF]" : "text-black"
          } relative flex items-center justify-center`}
          onClick={() => setSelectedDate(3)}
        >
          <p>Sat, 27</p>
          {selectedDate == 3 && (
            <div className="absolute w-10 h-1 bg-[#1E90FF] rounded-t-lg bottom-0"></div>
          )}
        </button>
        <button
          className={`${
            selectedDate == 4 ? "font-bold text-[#1E90FF]" : "text-black"
          } relative flex items-center justify-center `}
          onClick={() => setSelectedDate(4)}
        >
          <p>Sun, 28</p>
          {selectedDate == 4 && (
            <div className="absolute w-10 h-1 bg-[#1E90FF] rounded-t-lg bottom-0"></div>
          )}
        </button>
      </div>

      {/* Inner Body Section */}
      <div className="w-full px-4">
        {/* Departure Header */}
        <p className="mt-4 font-bold text-black">Departure Schedule</p>

        {/* Fligth Card */}
        <div className="flex flex-col w-full mt-4 gap-y-3">
          {flightData.map((flight) => (
              <>
                <FlightCard handleOpenModal={() => setOpenModal(true)} flightData={flight} />
                {openModal && (
                    <FlightDetail detailFlight={flight} onClose={() => setOpenModal(false)}  />
                )}
              </>

          ))}
          {/* <FlightCard />
          <FlightCard />
          <FlightCard />
          <FlightCard />
          <FlightCard /> */}
        </div>
      </div>
    </>
  );
};

export default BodyComponent;
