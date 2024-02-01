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
import moment from "moment";

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
  const sourceAirportId = searchParams.get("sourceAirportId");
  const destAirportId = searchParams.get("destAirportId");
  const adultsNumber = searchParams.get("adultsNumber");
  const departureDate = searchParams.get("departureDate");
  const classType = searchParams.get("classType");

  // Data
  const [data, setData] = useState<RawFlightData[]>(initialData);

  // Loading
  const [loading, setLoading] = useState<boolean>(true);

  // Error
  const [error, setError] = useState<boolean>(false);

  // Get data from Local Storage
  const sourceAirport = JSON.parse(localStorage.getItem("sourceAirport") as string);
  const destAirport = JSON.parse(localStorage.getItem("destinationAirport") as string);
  const date = JSON.parse(localStorage.getItem("date") as string);
  const classTypeLs = JSON.parse(localStorage.getItem("classType") as string);
  const passengersLs = JSON.parse(localStorage.getItem("passengers") as string);

  // Open Modal

  // const sourceAirportId =
  //   "sourceAirportId=7cca5acf-75d9-478b-b921-f14d72e7116e&";
  // const destAirportId = "destAirportId=b4d9b11a-24b1-4af2-a374-b66f711a75a4&";
  // const adultsNumber = "adultsNumber=1&";
  // const departureDate = "departureDate=2024-04-24&";
  // const classType = "classType=FIRST";
  const API = `${API_URL}/v1/flights/departures?${
    sourceAirportId && `sourceAirportId=${sourceAirportId}&`
  }${destAirportId && `destAirportId=${destAirportId}&`}${
    adultsNumber && `adultsNumber=${adultsNumber}&`
  }${departureDate && `departureDate=${departureDate}&`}${
    classType && `classType=${classType}`
  }`;
  console.log(API);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(API);
        setData(res.data.data.content);
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

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
              departure={sourceAirport.city}
              departureCode={sourceAirport.cityCode}
              arrival={destAirport.city}
              arrivalCode={destAirport.cityCode}
              // date="Thu, 25 Jan"
              date={moment(date).format("ddd, DD MMM YYYY")}
              passenger={passengersLs.length}
              seatClass={classTypeLs}
            />
          </HeaderLayout>

          {/* Body */}
          {/* <div className="w-full sm:w-[360px] mx-auto min-h-screen bg-[#E3EEFF] pt-[3.75rem] pb-20"></div> */}
          <BodyLayout paddingBottomSize="5rem">
            <BodyComponent flightData={data} />
          </BodyLayout>
          {/*<FlightDetail id={"1"} onClose={() => console.log("close")}  />*/}
          {/* Bottom Navbar */}
          {/*{openModal && (*/}
          {/*    <FlightDetail detailFlight={} onClose={() => setOpenModal(false)}  />*/}
          {/*)}*/}
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
