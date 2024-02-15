import { FaChevronRight, FaClock } from "react-icons/fa";
import CountDown, { CountdownProps } from "./countDown";
import {FlightData} from "../../../assets/static/TableDataTypes.ts";
import {extractTimeFromDateString} from "../../../utils/DateFormater.ts";
import moment from "moment";

interface ISelectedCardProps {
    flightData: FlightData
}

const selectedCard = ({flightData} : ISelectedCardProps) => {
  const initialCountdown: CountdownProps = {
    initialHours: 2,
    initialMinutes: 59,
    initialSeconds: 59,
  };

  return (
    <div className="flex flex-col w-full px-4 py-3 bg-white rounded-lg shadow-md">
      {/* Logo and Flight */}
      <div className="flex items-center font-semibold">
        <img
          src="/images/blue-rajawali-air-logo.svg"
          alt="Blue Rajawali Logo"
        />
        <div className="flex items-center gap-x-3 ml-2">
          <div className="flex flex-col items-center">
            <p className="text-xs font-semibold text-black 2xl:text-sm">
                {flightData.sourceAirport.cityCode}
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div>
              <img src="/images/long-arrow.svg" alt="long arrow" />
            </div> 
          </div>
          <div className="flex flex-col items-center">
            <p className="text-xs font-semibold text-black 2xl:text-sm">
                {flightData.destinationAirport.cityCode}
            </p>
          </div>
        </div>
        <div>
        
        </div>
      </div>

      <div className="flex justify-between text-[10px] text-[#757575]">
      <div>
        <p className="mt-2">{moment(flightData.departureDate).format("DD MMM YYYY")},
            {extractTimeFromDateString(flightData.departureDate)} -
            {extractTimeFromDateString(flightData.arrivalDate)}
        </p>
        <p className="mt-1">{JSON.parse(localStorage.getItem("classType") as string)} | Direct Flight</p>
      </div>
      <button className="p-[0.25rem] rounded-[8px]">
          <FaChevronRight className="text-sm text-black" />
        </button>
      </div>

      {/* Time Complete Payment */}
      <div className="flex justify-center py-2 mt-3 bg-[#D2F1FF] -mx-4 -mb-3 rounded-b-lg">
        <div className="flex">
            <FaClock className="text-[#1E90FF] mr-2"/>
            <p className="text-[#1E90FF] text-xs font-semibold">Complete Payment</p>
        </div>
        <div className="flex">
            <CountDown {...initialCountdown}/>
        </div>
      </div>
    </div>
  )
}

export default selectedCard
