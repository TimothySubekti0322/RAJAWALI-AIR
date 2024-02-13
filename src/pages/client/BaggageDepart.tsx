import { useState, useEffect } from "react";
import HeaderLayout from "../../components/client/headerLayout";
import HeaderFill from "../../components/client/headerFill";
import BodyLayout from "../../components/client/bodyLayout";
import FlightCard from "../../components/client/baggageDepart/flightCard";
import PassengerBaggage from "../../components/client/baggageDepart/passengerBaggage";
import { numberToCurrency } from "../../utils/NumberFormater";
import type { Passenger } from "../../assets/static/LocalStorage.type";
import { addTotalPriceToLocalStorage } from "../../utils/TotalPriceLocalStorage";
import BookingProvider from "../../providers/BookingProvider";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/900.css";
import {
  BaggageDepart,
  addBaggageAddOnsToLocalStorage,
  createInitialBaggageData,
} from "../../utils/bagageDepart/baggageDepart.utils";
import axios from "axios";
import { FlightData } from "../../components/client/flightList/flight.type";
import API_URL from "../../assets/static/API";
import CircularProgress from "@mui/material/CircularProgress";

const BaggageDepart = () => {
  // price
  const [price, setPrice] = useState<number>(0);

  // loading
  const [loading, setLoading] = useState<boolean>(true);

  // Flight Data
  const [flightData, setFlightData] = useState<FlightData[]>([]);

  const passengers: Passenger[] = JSON.parse(
    localStorage.getItem("passengers") as string
  );

  const handleSave = () => {
    addTotalPriceToLocalStorage(price);
    localStorage.setItem("baggagePrice", JSON.stringify(price));
    addBaggageAddOnsToLocalStorage(baggageData);
    window.location.href = "/travelAddOns";
  };

  const [baggageData, setBaggageData] = useState<BaggageDepart[]>(
    createInitialBaggageData()
  );

  const [selectedFlight, setSelectedFlight] = useState<number>(0);

  const changeAddOns = (passengerIndex: number, weight: number) => {
    const newBaggageData = [...baggageData];
    newBaggageData[selectedFlight].passangerBaggage[
      passengerIndex
    ].baggageAddOns = weight;
    setBaggageData(newBaggageData);
  };

  useEffect(() => {
    console.log(selectedFlight);
  }, [selectedFlight]);

  useEffect(() => {
    const fetchData = async (flightId: string) => {
      try {
        const response = await axios.get(`${API_URL}/v1/flights/${flightId}`);
        setFlightData((prevFlightData) => [
          ...prevFlightData,
          response.data.data,
        ]);
      } catch (e) {
        console.log(e);
      }
    };

    const fetchAllData = async () => {
      try {
        setLoading(true);
        // Assuming baggageData is an array
        await Promise.all(baggageData.map((item) => fetchData(item.flightId)));
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, []);

  return (
    <BookingProvider
      requiredItem={["passengers", "flightId", "flightDetailList"]}
    >
      <section
        className="w-full min-h-screen bg-[#f7f7f7] relative text-white"
        style={{ fontFamily: "Roboto" }}
      >
        <HeaderLayout>
          <HeaderFill title="Baggage For Depart" />
        </HeaderLayout>
        <BodyLayout paddingBottomSize="6rem">
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
              <div className="w-full px-4 pb-4">
                {baggageData?.map((item, index) => (
                  <FlightCard
                    key={index}
                    flightId={item.flightId}
                    flightData={flightData[index]}
                    selectedFlight={selectedFlight}
                    setSelectedFlight={setSelectedFlight}
                    index={index}
                  />
                ))}
                {passengers?.map((passenger, index) => (
                  <PassengerBaggage
                    key={index}
                    index={index}
                    numberOfFlight={baggageData.length}
                    flightSelected={selectedFlight}
                    title={`Passenger ${index + 1}`}
                    passenger={passenger}
                    price={price}
                    setPrice={setPrice}
                    selectedAddOns={
                      baggageData[selectedFlight].passangerBaggage[index]
                        .baggageAddOns
                    }
                    changeAddOns={changeAddOns}
                  />
                ))}
              </div>
            )}
          </div>
        </BodyLayout>

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
    </BookingProvider>
  );
};

export default BaggageDepart;
