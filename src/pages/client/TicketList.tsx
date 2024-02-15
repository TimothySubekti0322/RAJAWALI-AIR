import React, { useEffect, useState } from "react";
import { FiFilter } from "react-icons/fi";
import { MdOutlineSort } from "react-icons/md";
import HeaderLayout from "../../components/client/headerLayout";
import HeaderFill from "../../components/client/flightList/headerFill";
import BodyLayout from "../../components/client/bodyLayout";
import BodyComponent from "../../components/client/flightList/bodyComponent";
import axios from "axios";
import API_URL from "../../assets/static/API";
import CircularProgress from "@mui/material/CircularProgress";
import {
  getArrayOfDays,
  getDate,
  getDayAndDate,
  resourceAvailable,
  getAdultsNumberFromLocalStorage,
  getChildsNumberFromLocalStorage,
  getInfantsNumberFromLocalStorage,
  localStorageResourceAvailable,
  searchParamaterResourceAvailable,
} from "../../utils/ticketList/ticketList.utils";
import type { DaysObject } from "../../utils/ticketList/ticketList.utils";
import type { RawFlightData } from "../../components/client/flightList/flight.type";
import { initialData } from "../../components/client/flightList/flight.type";
import BookingProvider from "../../providers/LocalStorageProvider";

interface TicketListProps {
  indexTicket: number;
  ticketSelected: boolean;
  setTicketSelected: React.Dispatch<React.SetStateAction<boolean>>;
}

const TicketList: React.FC<TicketListProps> = ({
  indexTicket,
  ticketSelected,
  setTicketSelected,
}) => {
  // Query Params
  const searchParams = new URLSearchParams(window.location.search);

  // Data
  const [data, setData] = useState<RawFlightData[]>(initialData);

  // Date & Current Date
  const [arraysDate, setArraysDate] = useState<DaysObject[]>([]);
  const [date, setDate] = useState<string>("");
  const [currentDate, setCurrentDate] = useState<number>(0);
  const [newDate, setNewDate] = useState<string>("");

  // Loading
  const [loading, setLoading] = useState<boolean>(true);
  const [loadingNewData, setLoadingNewData] = useState<boolean>(false);

  // Error
  const [error, setError] = useState<boolean>(false);

  // Fetch Data From Local Storage
  const fetchDataFromLocalStorage = async () => {
    const sourceAirport = localStorage.getItem("sourceAirport");
    const sourceAirportId = sourceAirport
      ? `sourceAirportId=${
          JSON.parse(sourceAirport as string)[indexTicket].id
        }&`
      : "";

    const destAirport = localStorage.getItem("destinationAirport");
    const destAirportId = destAirport
      ? `destAirportId=${JSON.parse(destAirport as string)[indexTicket].id}&`
      : "";

    const adultsNumber = getAdultsNumberFromLocalStorage()
      ? `adultsNumber=${getAdultsNumberFromLocalStorage()}&`
      : "";

    const childsNumber = getChildsNumberFromLocalStorage()
      ? `childsNumber=${getChildsNumberFromLocalStorage()}&`
      : "";

    const infantsNumber = getInfantsNumberFromLocalStorage()
      ? `infantsNumber=${getInfantsNumberFromLocalStorage()}&`
      : "";

    const departureDate = localStorage.getItem("date")
      ? `departureDate=${
          JSON.parse(localStorage.getItem("date") as string)[indexTicket]
        }&`
      : "";

    const classType = localStorage.getItem("classType")
      ? `classType=${JSON.parse(localStorage.getItem("classType") as string)}`
      : "";

    // Set Date
    setArraysDate(getArrayOfDays(departureDate));
    setDate(JSON.parse(localStorage.getItem("date") as string)[indexTicket]);
    setCurrentDate(getDate(departureDate));

    const API = `${API_URL}/v1/flights/departures?${sourceAirportId}${destAirportId}${adultsNumber}${childsNumber}${infantsNumber}${departureDate}${classType}`;
    await fetchData(API);
  };

  // Fetch Data from search params
  const fetchDataFromSearchParams = async () => {
    try {
      const sourceAirportId = searchParams.get("sourceAirportId")
        ? `sourceAirportId=${searchParams.get("sourceAirportId")}&`
        : "";

      localStorage.setItem(
        "sourceAirportId",
        searchParams.get("sourceAirportId") as string
      );

      const destAirportId = searchParams.get("destAirportId")
        ? `destAirportId=${searchParams.get("destAirportId")}&`
        : "";

      localStorage.setItem(
        "destAirportId",
        searchParams.get("destAirportId") as string
      );

      const adultsNumber = searchParams.get("adultsNumber")
        ? `adultsNumber=${searchParams.get("adultsNumber")}&`
        : "";

      localStorage.setItem(
        "adultsNumber",
        searchParams.get("adultsNumber") as string
      );

      const infantsNumber = searchParams.get("infantsNumber")
        ? `infantsNumber=${searchParams.get("infantsNumber")}&`
        : "";

      localStorage.setItem(
        "infantsNumber",
        searchParams.get("infantsNumber") as string
      );

      const childsNumber = searchParams.get("childsNumber")
        ? `childsNumber=${searchParams.get("childsNumber")}&`
        : "";

      localStorage.setItem(
        "childsNumber",
        searchParams.get("childsNumber") as string
      );

      const departureDate = searchParams.get("departureDate")
        ? `departureDate=${searchParams.get("departureDate")}&`
        : "";

      localStorage.setItem("date", searchParams.get("departureDate") as string);

      const classType = searchParams.get("classType")
        ? `classType=${searchParams.get("classType")}`
        : "";

      localStorage.setItem(
        "classType",
        searchParams.get("classType") as string
      );

      // Set Date
      setArraysDate(getArrayOfDays(departureDate));
      setDate(searchParams.get("departureDate") as string);
      setCurrentDate(getDate(departureDate));

      const API = `${API_URL}/v1/flights/departures?${sourceAirportId}${destAirportId}${adultsNumber}${childsNumber}${infantsNumber}${departureDate}${classType}`;
      await fetchData(API);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  const fetchData = async (API: string) => {
    try {
      // const API = `${API_URL}/v1/flights/departures?${sourceAirportId}${destAirportId}${adultsNumber}${childsNumber}${infantsNumber}${departureDate}${classType}`;
      // console.log(API);
      const res = await axios.get(API);
      setData(res.data.data.content);
    } catch (error) {
      setError(true);
      console.log(error);
    } finally {
      setLoading(false);
      // console.log(data);
    }
  };

  useEffect(() => {
    const fetchingData = async () => {
      try {
        setLoading(true);
        if (localStorageResourceAvailable()) {
          // console.log("fetching data from local storage");
          await fetchDataFromLocalStorage();
        } else if (searchParamaterResourceAvailable()) {
          // console.log("fetching data from search params");
          await fetchDataFromSearchParams();
        }
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    if (!resourceAvailable()) {
      setError(true);
    } else {
      fetchingData();
    }
  }, []);

  // When Date is Changed
  useEffect(() => {
    const fetchNewData = async (API: string) => {
      try {
        await fetchData(API);
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setLoadingNewData(false);
      }
    };

    if (newDate !== "") {
      setLoadingNewData(true);
      const sourceAirport = localStorage.getItem("sourceAirport");
      const sourceAirportId = sourceAirport
        ? `sourceAirportId=${
            JSON.parse(sourceAirport as string)[indexTicket].id
          }&`
        : "";

      const destAirport = localStorage.getItem("destinationAirport");
      const destAirportId = destAirport
        ? `destAirportId=${JSON.parse(destAirport as string)[indexTicket].id}&`
        : "";

      const adultsNumber = getAdultsNumberFromLocalStorage()
        ? `adultsNumber=${getAdultsNumberFromLocalStorage()}&`
        : "";

      const childsNumber = getChildsNumberFromLocalStorage()
        ? `childsNumber=${getChildsNumberFromLocalStorage()}&`
        : "";

      const infantsNumber = getInfantsNumberFromLocalStorage()
        ? `infantsNumber=${getInfantsNumberFromLocalStorage()}&`
        : "";

      const departureDate = `departureDate=${newDate}&`;

      const classType = localStorage.getItem("classType")
        ? `classType=${JSON.parse(localStorage.getItem("classType") as string)}`
        : "";

      // Set Date
      setDate(JSON.parse(localStorage.getItem("date") as string)[indexTicket]);
      setCurrentDate(getDate(newDate));

      const API = `${API_URL}/v1/flights/departures?${sourceAirportId}${destAirportId}${adultsNumber}${childsNumber}${infantsNumber}${departureDate}${classType}`;
      fetchNewData(API);
    }
  }, [newDate]);

  return (
    <BookingProvider
      requiredItem={[
        "passengers",
        "sourceAirport",
        "destinationAirport",
        "date",
        "classType",
      ]}
    >
      {loading && !error && (
        <div className="flex flex-col items-center justify-center w-screen h-screen">
          <CircularProgress size="6rem" />
          <div className="flex items-end">
            <p className="mt-12 text-[1.5rem] font-bold text-black">Loading</p>
            <span className="ml-1 -mb-[0.1rem] text-black loading loading-dots loading-xs"></span>
          </div>
        </div>
      )}
      {!loading && !error && (
        <section className="w-full min-h-screen bg-[#f7f7f7] relative">
          <HeaderLayout>
            <HeaderFill
              departure={
                JSON.parse(localStorage.getItem("sourceAirport") as string)[
                  indexTicket
                ].city
                  ? JSON.parse(localStorage.getItem("sourceAirport") as string)[
                      indexTicket
                    ].city
                  : "Unknown"
              }
              departureCode={
                JSON.parse(localStorage.getItem("sourceAirport") as string)[
                  indexTicket
                ].cityCode
                  ? JSON.parse(localStorage.getItem("sourceAirport") as string)[
                      indexTicket
                    ].cityCode
                  : "UNK"
              }
              arrival={
                JSON.parse(
                  localStorage.getItem("destinationAirport") as string
                )[indexTicket].city
                  ? JSON.parse(
                      localStorage.getItem("destinationAirport") as string
                    )[indexTicket].city
                  : "Unknown"
              }
              arrivalCode={
                JSON.parse(
                  localStorage.getItem("destinationAirport") as string
                )[indexTicket].cityCode
                  ? JSON.parse(
                      localStorage.getItem("destinationAirport") as string
                    )[indexTicket].cityCode
                  : "UNK"
              }
              date={getDayAndDate(date)}
              child={getChildsNumberFromLocalStorage()}
              adult={getAdultsNumberFromLocalStorage()}
              infant={getInfantsNumberFromLocalStorage()}
              seatClass={
                localStorage.getItem("classType")
                  ? (localStorage.getItem("classType") as string)
                  : (searchParams.get("classType") as string)
              }
            />
          </HeaderLayout>

          {/* Body */}
          {/* <div className="w-full sm:w-[360px] mx-auto min-h-screen bg-[#E3EEFF] pt-[3.75rem] pb-20"></div> */}
          <BodyLayout paddingBottomSize="5rem">
            <BodyComponent
              flightData={data}
              arraysDate={arraysDate}
              currentDate={currentDate}
              departureDate={date}
              setNewDate={setNewDate}
              loadingNewData={loadingNewData}
              ticketSelected={ticketSelected}
              setTicketSelected={setTicketSelected}
            />
          </BodyLayout>

          {/* Bottom Navbar */}
          <div className="fixed left-0 right-0 bottom-0 mx-auto w-full sm:w-[360px] h-[3.8rem] bg-[#1E90FF] rounded-t-xl flex justify-center items-center gap-x-12">
            {/* Filter */}
            <button className="flex flex-col items-center gap-y-1 text-white hover:text-[#CCCCCC]">
              <FiFilter className="w-4 h-4 " />
              <p className="text-sm ">Filter</p>
            </button>
            {/* Sort */}
            <button className="flex flex-col items-center gap-y-1 text-white hover:text-[#CCCCCC]">
              <MdOutlineSort className="w-4 h-4" />
              <p className="text-sm">Sort</p>
            </button>
          </div>
        </section>
      )}
      {/* Error */}
      {!loading && error && (
        <div className="flex flex-col items-center justify-center w-screen h-screen bg-white">
          <img
            src="/images/something-went-wrong.jpg"
            className="w-1/2 sm:w-1/3"
            alt="something went wrong"
          />
          <p className="md:-mt-6 xl:-mt-12 font-bold text-black text-[1.5rem] md:text-[2rem] 2xl:text-[3rem]">
            Something Went Wrong
          </p>
          <button
            className="bg-[#1E90FF] mt-4 md:mt-6 xl:mt-8 2xl:mt-12 sm:w-1/3 py-4 rounded-xl hover:bg-[#0C70DD] font-bold text-sm sm:text-base sm:px-0 px-6"
            onClick={() => (window.location.href = "/")}
          >
            Go To Home Page
          </button>
        </div>
      )}
    </BookingProvider>
  );
};

export default TicketList;
