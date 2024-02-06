import React, { useState, useEffect } from "react";
import HeaderLayout from "../../components/client/headerLayout";
import { FaArrowLeft } from "react-icons/fa";
import BodyLayout from "../../components/client/bodyLayout";
import { FaArrowRightLong } from "react-icons/fa6";
import FlightDetailCard from "../../components/client/selectedFlight/flightDetailCard";
import TicketType from "../../components/client/selectedFlight/ticketType";
import { initialFlightData } from "../../components/client/flightList/flight.type";
import axios from "axios";
import API_URL from "../../assets/static/API";
import CircularProgress from "@mui/material/CircularProgress";
import {
  getAdultsNumberFromLocalStorage,
  getChildsNumberFromLocalStorage,
  getInfantsNumberFromLocalStorage,
} from "../../utils/ticketList/ticketList.utils";
import { FlightData } from "../../components/client/flightList/flight.type";
import BookingProvider from "../../providers/BookingProvider";

interface SelectedFlightProps {
  flights: number;
  indexTicket: number;
  ticketSelected: boolean;
  setIndexTicket: React.Dispatch<React.SetStateAction<number>>;
  setTicketSelected: React.Dispatch<React.SetStateAction<boolean>>;
  flightId: string;
}

const SelectedFlight: React.FC<SelectedFlightProps> = ({
  flights,
  indexTicket,
  ticketSelected,
  setIndexTicket,
  setTicketSelected,
  flightId,
}) => {
  // Flight Data
  const [flightData, setFlightData] = useState<FlightData>(initialFlightData);

  // Loading
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch flight data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}/v1/flights/${flightId}`);
        setFlightData(response.data.data);
      } catch (error) {
        console.error("Error fetching flight data: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  console.log(flightData);

  const handleBackButton = () => {
    setTicketSelected(!ticketSelected);
  };

  return (
    <BookingProvider requiredItem={["passengers", "flightId", "classType"]}>
      <section
        className="w-full min-h-screen bg-[#f7f7f7] relative text-white"
        style={{ fontFamily: "Roboto" }}
      >
        <HeaderLayout>
          <div className="relative flex items-center justify-center w-full h-full">
            <button
              className="absolute left-0"
              onClick={() => handleBackButton()}
            >
              <FaArrowLeft className="text-xl text-white" />
            </button>
            <div className="text-white">Your Selected Flight</div>
          </div>
        </HeaderLayout>
        <BodyLayout paddingBottomSize="1.5rem">
          <div className="relative w-full h-full">
            {loading && (
              <div className="flex flex-col items-center justify-center w-full h-full pt-[50%]">
                <CircularProgress size="3rem" />
                <div className="flex items-end">
                  <p className="mt-12 text-[1rem] font-bold text-black">
                    Loading
                  </p>
                  <span className="ml-1 -mb-[0.1rem] text-black loading loading-dots loading-xs"></span>
                </div>
              </div>
            )}
            {!loading && (
              <div className="w-full px-4 pt-4">
                <div className="flex items-center text-sm font-bold text-black gap-x-2">
                  <p>{flightData.sourceAirport.city}</p>
                  <FaArrowRightLong className="text-base" />
                  <p>{flightData.destinationAirport.city}</p>
                </div>
                <div className="flex gap-x-1">
                  <p className="text-xs text-[#757575] mt-2">
                    {getChildsNumberFromLocalStorage()
                      ? `${getChildsNumberFromLocalStorage()} Child`
                      : ``}
                  </p>
                  <p className="text-xs text-[#757575] mt-2">
                    {getAdultsNumberFromLocalStorage()
                      ? `| ${getAdultsNumberFromLocalStorage()} Adult`
                      : ``}
                  </p>
                  <p className="text-xs text-[#757575] mt-2">
                    {getInfantsNumberFromLocalStorage()
                      ? `| ${getInfantsNumberFromLocalStorage()} Infant`
                      : ``}
                  </p>
                </div>
                <FlightDetailCard flightData={flightData} />
                <p className="mt-6 font-bold text-black">
                  Select Your Ticket Type
                </p>
                <div className="flex flex-col w-full mt-4 gap-y-4">
                  <TicketType
                    type="Normal"
                    flights={flights}
                    indexTicket={indexTicket}
                    ticketSelected={ticketSelected}
                    setIndexTicket={setIndexTicket}
                    setTicketSelected={setTicketSelected}
                    flightData={flightData}
                  />
                  <TicketType
                    type="Safe"
                    flights={flights}
                    indexTicket={indexTicket}
                    ticketSelected={ticketSelected}
                    setIndexTicket={setIndexTicket}
                    setTicketSelected={setTicketSelected}
                    flightData={flightData}
                  />
                </div>
              </div>
            )}
          </div>
        </BodyLayout>
      </section>
    </BookingProvider>
  );
};

export default SelectedFlight;
