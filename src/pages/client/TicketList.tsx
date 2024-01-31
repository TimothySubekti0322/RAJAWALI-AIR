import { useEffect, useState } from "react";
import { FiFilter } from "react-icons/fi";
import { MdOutlineSort } from "react-icons/md";
import HeaderLayout from "../../components/client/headerLayout";
import HeaderFill from "../../components/client/flightList/headerFill";
import BodyLayout from "../../components/client/bodyLayout";
import BodyComponent from "../../components/client/flightList/bodyComponent";
import axios from "axios";
import API_URL from "../../assets/static/API";
import { AirportData, Airplane } from "../../assets/static/TableDataTypes";
import CircularProgress from "@mui/material/CircularProgress";
import {
  getArrayOfDays,
  getDate,
  extractDepartureDate,
  getDayAndDate,
} from "../../utils/ticketList/ticketList.utils";
import type { DaysObject } from "../../utils/ticketList/ticketList.utils";

export interface RawFlightData {
  id: string;
  sourceAirport: AirportData;
  destinationAirport: AirportData;
  airplane: Airplane;
  departureDate: string;
  arrivalDate: string;
  classType: string;
  seatPrice: number;
  totalPrice: number;
  discount: number;
  availableSeats: number;
  createdAt: string;
  updatedAt: string;
  points: number;
}

const initialData: RawFlightData[] = [
  {
    id: "",
    sourceAirport: {
      id: "",
      name: "",
      country: "",
      city: "",
      cityCode: "",
    },
    destinationAirport: {
      id: "",
      name: "",
      country: "",
      city: "",
      cityCode: "",
    },
    airplane: {
      id: "",
      airplaneCode: "",
    },
    departureDate: "",
    arrivalDate: "",
    classType: "",
    seatPrice: 0,
    totalPrice: 0,
    discount: 0,
    availableSeats: 0,
    createdAt: "",
    updatedAt: "",
    points: 0,
  },
];

const TicketList = () => {
  // Query Params
  const searchParams = new URLSearchParams(window.location.search);
  const sourceAirportId = searchParams.get("sourceAirportId")
    ? `sourceAirportId=${searchParams.get("sourceAirportId")}&`
    : "";
  const destAirportId = searchParams.get("destAirportId")
    ? `destAirportId=${searchParams.get("destAirportId")}&`
    : "";
  const adultsNumber = searchParams.get("adultsNumber")
    ? `adultsNumber=${searchParams.get("adultsNumber")}&`
    : "";
  const infantsNumber = searchParams.get("infantsNumber")
    ? `infantsNumber=${searchParams.get("infantsNumber")}&`
    : "";
  const childsNumber = searchParams.get("childsNumber")
    ? `childsNumber=${searchParams.get("childsNumber")}&`
    : "";
  const departureDate = searchParams.get("departureDate")
    ? `departureDate=${searchParams.get("departureDate")}&`
    : "";
  const classType = searchParams.get("classType")
    ? `classType=${searchParams.get("classType")}`
    : "";

  // Data
  const [data, setData] = useState<RawFlightData[]>(initialData);

  // Date & Current Date
  const [date, setDate] = useState<DaysObject[]>([]);
  const [currentDate, setCurrentDate] = useState<number>(0);

  // Loading
  const [loading, setLoading] = useState<boolean>(true);

  // Error
  const [error, setError] = useState<boolean>(false);

  // API
  const API = `${API_URL}/v1/flights/departures?${sourceAirportId}${destAirportId}${adultsNumber}${childsNumber}${infantsNumber}${departureDate}${classType}`;

  const fetchData = async () => {
    try {
      const res = await axios.get(API);
      setData(res.data.data.content);
      if (res.data.data.content.length > 0) {
        setDate(getArrayOfDays(res.data.data.content[0].departureDate));
        setCurrentDate(getDate(res.data.data.content[0].departureDate));
      } else {
        setDate(getArrayOfDays(departureDate));
        setCurrentDate(getDate(departureDate));
      }
    } catch (error) {
      setError(true);
      console.log(error);
    } finally {
      setLoading(false);
      console.log(data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
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
              departure="Yogyakarta"
              departureCode="YIA"
              arrival="Balikpapan"
              arrivalCode="BPN"
              date={getDayAndDate(extractDepartureDate(departureDate))}
              passenger={2}
              seatClass={classType.split("=")[1].replace("&", "")}
            />
          </HeaderLayout>

          {/* Body */}
          {/* <div className="w-full sm:w-[360px] mx-auto min-h-screen bg-[#E3EEFF] pt-[3.75rem] pb-20"></div> */}
          <BodyLayout paddingBottomSize="5rem">
            <BodyComponent
              flightData={data}
              date={date}
              currentDate={currentDate}
              sourceAirportId={sourceAirportId}
              destAirportId={destAirportId}
              adultsNumber={adultsNumber}
              childsNumber={childsNumber}
              infantsNumber={infantsNumber}
              departureDate={departureDate}
              classType={classType}
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
    </>
  );
};

export default TicketList;
