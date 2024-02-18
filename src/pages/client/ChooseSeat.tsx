import { useState, useEffect } from "react";
import HeaderFill from "../../components/client/headerFill";
import HeaderLayout from "../../components/client/headerLayout";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import styles from "../../components/admin/layout/css/webScroll.module.css";
import {
  FlightPassengerSeat,
  Seat,
} from "../../utils/chooseSeat/chooseSeat.interface";
import {
  getSeatNumber,
  initFlightPassengerSeatData,
  saveFlightPassengerSeatData,
} from "../../utils/chooseSeat/chooseSeat.utils";
import { Passenger } from "../../assets/static/LocalStorage.type";
import FirstClassSeat from "../../components/client/chooseSeat/FirstClassSeat";
import axios from "axios";
import API_URL from "../../assets/static/API";
import CircularProgress from "@mui/material/CircularProgress";
import moment from "moment";
import { extractTimeFromDateString } from "../../utils/DateFormater";
import { getDurationBetweenDates } from "../../utils/ticketList/ticketList.utils";
import { numberToCurrency } from "../../utils/NumberFormater";

const ChooseSeat = () => {
  // loading
  const [loading, setLoading] = useState<boolean>(true);

  // seats
  const [seats, setSeats] = useState<Seat[]>([]);

  // departure date && arrival date
  const [departureDate, setDepartureDate] = useState<string>("");
  const [arrivalDate, setArrivalDate] = useState<string>("");

  // Price per Seat
  const [pricePerSeat, setPricePerSeat] = useState<number>(0);

  // Fetching Data
  useEffect(() => {
    const fetchData = async () => {
      setLoading(false);
      const flightId = JSON.parse(localStorage.getItem("flightId") as string);
      const classType = JSON.parse(localStorage.getItem("classType") as string);
      try {
        const response = await axios.get(
          `${API_URL}/v1/reservations/available-seats/${flightId[0]}/${classType}`
        );
        setSeats(response.data.data.seats);
        const response2 = await axios.get(
          `${API_URL}/v1/flights/${flightId[0]}`
        );
        console.log(response2.data.data);
        setDepartureDate(response2.data.data.departureDate);
        setArrivalDate(response2.data.data.arrivalDate);
        if (classType === "ECONOMY") {
          setPricePerSeat(response2.data.data.economySeatsPrice);
        } else if (classType === "BUSINESS") {
          setPricePerSeat(response2.data.data.businessSeatsPrice);
        } else if (classType === "FIRST") {
          setPricePerSeat(response2.data.data.firstSeatsPrice);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Selected Passenger
  const [selectedPassenger, setSelectedPassenger] = useState<number>(0);

  // Handle Select Passenger
  const handleSelectPassenger = (index: number) => {
    console.log(selectedPassenger);
    setSelectedPassenger(index);
  };

  // Slider Ref
  const [ref] = useKeenSlider<HTMLDivElement>({
    mode: "free-snap",
    slides: {
      perView: 2,
      spacing: 30,
    },
  });

  // passengers
  const passengers: Passenger[] = JSON.parse(
    localStorage.getItem("passengers") as string
  );

  // Flight
  const destinationAirport = JSON.parse(
    localStorage.getItem("destinationAirport") as string
  );
  const sourceAirport = JSON.parse(
    localStorage.getItem("sourceAirport") as string
  );

  // Selected Flight
  const [selectedFlightId, setSelectedFlightId] = useState<number>(0);

  /* Flight Passenger Seat -> [flightId: string; selectedSeat: string[]] */
  const [flightPassengerSeatData, setFlightPassengerSeatData] = useState<
    FlightPassengerSeat[]
  >(initFlightPassengerSeatData);

  // Selected Seat
  const handleSelectSeat = (seatNo: string) => {
    const newFlightPassengerSeatData: FlightPassengerSeat[] = [
      ...flightPassengerSeatData,
    ];
    newFlightPassengerSeatData[selectedFlightId].selectedSeat[
      selectedPassenger
    ] = seatNo;
    setFlightPassengerSeatData(newFlightPassengerSeatData);
  };

  // Save Function
  const handleSave = () => {
    saveFlightPassengerSeatData(flightPassengerSeatData);
    window.location.href = "/travelAddOns";
  };

  // Total Price
  const [price, setPrice] = useState<number>(
    flightPassengerSeatData[0].selectedSeat.filter((item) => item !== "")
      .length * pricePerSeat
  );

  // Update Total Price
  useEffect(() => {
    const nonEmpySeat = flightPassengerSeatData[0].selectedSeat.filter(
      (item) => item !== ""
    );
    setPrice(pricePerSeat * nonEmpySeat.length);
  }, [pricePerSeat, flightPassengerSeatData]);
  return (
    <section className="w-full min-h-screen bg-[#f7f7f7] relative overflow-auto">
      <HeaderLayout>
        <HeaderFill title="Choose Seat" />
      </HeaderLayout>

      {/* Body Component */}
      <div
        className={`w-full sm:w-[360px] mx-auto h-screen bg-[#E3EEFF] pt-[3.75rem]`}
        style={{ paddingBottom: "5rem" }}
      >
        <div className="flex flex-col w-full h-full">
          {loading ? (
            <div className="flex flex-col items-center justify-center w-full h-full pt-[50%]">
              <CircularProgress size="3rem" />
              <div className="flex items-end">
                <p className="mt-12 text-[1rem] font-bold text-black">
                  Loading
                </p>
                <span className="ml-1 -mb-[0.1rem] text-black loading loading-dots loading-xs"></span>
              </div>
            </div>
          ) : (
            <>
              {/* Passenger Card */}
              <div ref={ref} className="h-[7.5rem] pt-4 pl-6 keen-slider">
                {passengers.map((passenger: Passenger, index: number) => (
                  <button
                    key={index}
                    className={`${
                      selectedPassenger == index
                        ? "border-2 border-[#1E90FF] text-[#1E90FF]"
                        : "text-black"
                    } flex flex-col bg-white keen-slider__slide number-slide1 font-semibold py-4 rounded-lg px-4`}
                    onClick={() => handleSelectPassenger(index)}
                  >
                    <p className="text-xs">
                      Passenger {index + 1} ({passenger.ageType})
                    </p>
                    <p className="text-[0.625rem] mt-2">
                      {getSeatNumber(
                        seats,
                        flightPassengerSeatData[0].selectedSeat[index]
                      )}{" "}
                      ({numberToCurrency("IDR", pricePerSeat, true, false)})
                    </p>
                  </button>
                ))}
                <button
                  className={"invisible w-6 keen-slider__slide number-slide4"}
                ></button>
              </div>

              {/* Flight Card */}
              <div className="w-full px-6 mt-4">
                <button
                  className={`${
                    selectedFlightId == 0
                      ? "border-[#1E90FF]"
                      : "border-[#E0E0E0]"
                  } flex flex-col w-full px-4 py-4 bg-white rounded-lg shadow-md  border-2`}
                  onClick={() => setSelectedFlightId(0)}
                >
                  <div className="flex items-center text-black gap-x-2">
                    <img
                      src="/images/blue-rajawali-air-logo.svg"
                      alt="rajawali air logo"
                    />
                    <p className="text-xs font-semibold">
                      {sourceAirport[0].cityCode}
                    </p>
                    <img
                      src="/images/long-arrow.svg"
                      alt="long arrow"
                      className="w-4"
                    />
                    <p className="text-xs font-semibold">
                      {destinationAirport[0].cityCode}
                    </p>
                  </div>
                  <div className="flex items-center mt-2">
                    <p className="text-[#757575] text-[0.625rem]">
                      {moment(departureDate).format("DD MMM YYYY")},{" "}
                      {extractTimeFromDateString(departureDate)} -{" "}
                      {extractTimeFromDateString(arrivalDate)} |{" "}
                      {getDurationBetweenDates(departureDate, arrivalDate)}
                    </p>
                  </div>
                </button>
              </div>

              {/* Choose Seat */}
              <div className="flex items-center justify-around w-full px-4 py-2 mt-4 bg-white border-y-2 border-[#E0E0E0]">
                <div className="flex items-center gap-x-2">
                  <div className="w-7 h-7 bg-[#9E9E9E] rounded-sm"></div>
                  <p className="text-sm font-semibold text-black">
                    Not Available
                  </p>
                </div>
                <div className="flex items-center gap-x-2">
                  <div className="w-7 h-7 bg-[#1E90FF] rounded-sm"></div>
                  <p className="text-sm font-semibold text-black">Available</p>
                </div>
              </div>
              <div
                className={`overflow-y-scroll text-black bg-white grow ${styles.hideScroll}`}
                // style={{ minHeight: "165.333px" }}
              >
                <FirstClassSeat
                  seats={seats}
                  seatPerCol={2}
                  selectedSeat={
                    flightPassengerSeatData[selectedFlightId].selectedSeat
                  }
                  handleSelectSeat={handleSelectSeat}
                />
              </div>
            </>
          )}
        </div>
      </div>

      {/* Bottom navbar */}
      <div className="fixed left-0 right-0 bottom-0 mx-auto w-full sm:w-[360px] h-[5rem] px-4 bg-white border-[#1E90FF] border-t-2 rounded-t-sm flex justify-between items-center text-black">
        <div className="flex flex-col gap-y-1">
          <p className="text-sm font-semibold">Total</p>
          <p className="text-[#1E90FF] font-bold">
            {numberToCurrency("IDR", price, true, false)}
          </p>
        </div>
        <button
          className="bg-[#1E90FF] text-white font-semibold text-sm hover:bg-[#0C70DD] rounded-md py-[0.3rem] px-12 shadow-md"
          onClick={() => handleSave()}
        >
          Save
        </button>
      </div>
    </section>
  );
};

export default ChooseSeat;
