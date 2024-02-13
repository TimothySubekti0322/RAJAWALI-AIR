import xIcon from "../../../assets/images/x.png";
import arrowRight from "../../../assets/images/arrowRight.png";
import clockIcon from "../../../assets/images/Clock.png";
import TrackingLine from "./TrackingLine";
import FlightDetailCard from "./FlightDetailCard";
import groupIcon from "../../../assets/images/Group.png";
import {Airplane, AirportData} from "../../../assets/static/TableDataTypes.ts";
import {extractTimeFromDateString} from "../../../utils/DateFormater.ts";
import moment from "moment";
import {getDurationBetweenDates, saveFlightIdToLocalStorage} from "../../../utils/ticketList/ticketList.utils.ts";
import React from "react";

interface IFlightDetail {
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
interface FlightDetailProps {
  onClose: () => void;
  detailFlight: IFlightDetail;
  ticketSelected: boolean;
  setTicketSelected: React.Dispatch<React.SetStateAction<boolean>>;
}
const FlightDetail = ({ onClose, detailFlight, ticketSelected, setTicketSelected }: FlightDetailProps) => {
  // const navigate = useNavigate();
  // const handleOnClick = () => {
  //   localStorage.setItem("flightId", JSON.stringify(detailFlight.id));
  //   navigate(`/selectedFlight`);
  // }

  const handleOnClick = () => {
    saveFlightIdToLocalStorage(detailFlight.id);
    // navigate(`/selectedFlight`);
    setTicketSelected(!ticketSelected);
  };

  return (
      <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.5)", zIndex: 9999, display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div className={"rounded-md bg-white p-3 fixed top-[375px] flex flex-col justify-center items-center"} style={{ color: "black" }}>
          <div
              className={`absolute sm:w-[360px] mx-auto mt-0 min-h-[600px] bg-[white] flex flex-col justify-between rounded-lg`}
          >
            {/*<BodyComponent />*/}
            <div style={{ color: "black", padding: "15px" }}>
              <button onClick={onClose}>
                <img src={xIcon} alt={"x"} />
              </button>
              <br />
              <h2 className={"my-3"}>
                <b>Flight Detail</b>
              </h2>
              <div className={"flex w-full justify-between"}>
                <div>
                  <div className={"flex text-sm"}>
                    <div>
                      <h4>
                        <b>{detailFlight.sourceAirport.city}</b>
                      </h4>
                    </div>
                    <div>
                      <img src={arrowRight} alt="arrow" />
                    </div>
                    <div>
                      <b>{detailFlight.destinationAirport.city}</b>
                    </div>
                  </div>
                  <p className={"text-xs text-zinc-400"}>
                    {/*<b>Thursday, 25 jan 2024</b>*/}
                    <b>{moment(detailFlight.departureDate).format("dddd, DD MMM YYYY")}</b>
                  </p>
                </div>

                {/*Detail*/}
                <div
                    className={
                      "border border-2 items-center h-[28px] gap-1 border-slate-200 rounded-md flex justify-self-end"
                    }
                    style={{ padding: "6px" }}
                >
                  <div>
                    <img src={clockIcon} alt={"clock"} width={"16px"} />
                  </div>
                  <div className={"text-xs text-zinc-400"}>
                    {getDurationBetweenDates(detailFlight.departureDate, detailFlight.arrivalDate)}
                  </div>
                </div>
              </div>

              <div className={"flex mt-5 gap-3"}>
                <TrackingLine />
                <div className={"flex flex-col "}>
                  <p className={"text-sm font-medium text-black"}>
                    {detailFlight.sourceAirport.city} ({detailFlight.sourceAirport.cityCode}) | {extractTimeFromDateString(detailFlight.departureDate)}
                  </p>
                  <p className={"text-xs text-slate-500 mt-1"}>
                    {detailFlight.sourceAirport.name} | Terminal Domestic
                  </p>
                  <FlightDetailCard airplaneCode={detailFlight.airplane.airplaneCode} />
                  <p className={"text-sm font-medium text-black"}>
                    {detailFlight.destinationAirport.city} ({detailFlight.destinationAirport.cityCode})  | {extractTimeFromDateString(detailFlight.arrivalDate)}
                  </p>
                  <p className={"text-xs text-slate-500 mt-1"}>
                    {detailFlight.destinationAirport.name} | Terminal Domestic
                  </p>
                </div>
              </div>
            </div>

            {/*Price*/}
            <div>
              <div className={"flex items-center justify-between px-3 py-2"}>
                <div>
                  <p className={"text-black"}>
                    <strong>Total</strong>
                  </p>
                  <p className={"text-[#1E90FF]"}>
                    <strong>IDR {detailFlight.seatPrice.toLocaleString('id-ID')}</strong>
                  </p>
                </div>
                <button
                    className={
                      "btn btn-sm text-white border-0 bg-[#1E90FF] w-[30%] hover:bg-[#0C70DD]"
                    }
                    onClick={handleOnClick}
                >
                  Continue
                </button>
              </div>
              <div className={"h-[16px] bg-[#A4E0FF] items-center flex gap-1 px-3"}>
                <img src={groupIcon} alt={"point"} />
                <span className={"text-xs text-[#1E90FF] font-medium"}>
              <>Earn {detailFlight.points} Loyalty Points</>
            </span>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};
export default FlightDetail;
