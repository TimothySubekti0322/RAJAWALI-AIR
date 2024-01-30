import React from "react";
import HeaderLayout from "../../components/client/headerLayout";
import HeaderFill from "../../components/client/headerFill";
import BodyLayout from "../../components/client/bodyLayout";
import FlightCard from "../../components/client/baggageDepart/flightCard";
import PassengerBaggage from "../../components/client/baggageDepart/passengerBaggage";
import { numberToCurrency } from "../../utils/NumberFormater";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/900.css";

const BaggageDepart = () => {
  const [price, setPrice] = React.useState<number>(0);
  return (
    <section
      className="w-full min-h-screen bg-[#f7f7f7] relative text-white"
      style={{ fontFamily: "Roboto" }}
    >
      <HeaderLayout>
        <HeaderFill title="Baggage For Depart" />
      </HeaderLayout>
      <BodyLayout paddingBottomSize="0">
        <div className="relative w-full h-full">
          {/* Inner Section */}
          <div className="w-full px-4 pt-4">
            <FlightCard />
            <PassengerBaggage
              title="Passenger 1"
              price={price}
              setPrice={setPrice}
            />
            <PassengerBaggage
              title="Passenger 2"
              price={price}
              setPrice={setPrice}
            />
          </div>
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
          onClick={() => (window.location.href = "/travelAddOns")}
        >
          Save
        </button>
      </div>
    </section>
  );
};

export default BaggageDepart;
