import React, { useEffect } from "react";
import BaggageOption from "./baggageOption";
import type { Passenger } from "../../../assets/static/LocalStorage.type";
import { generateArrayWithValue } from "../../../utils/bagageDepart/baggageDepart.utils";

interface PassengerBaggageProps {
  index: number;
  numberOfFlight: number;
  flightSelected: number;
  title: string;
  passenger: Passenger;
  price: number;
  setPrice: React.Dispatch<React.SetStateAction<number>>;
  selectedAddOns: number | undefined;
  changeAddOns: (passengerIndex: number, weight: number) => void;
}
const PassengerBaggage: React.FC<PassengerBaggageProps> = ({
  index,
  numberOfFlight,
  flightSelected,
  title,
  passenger,
  price,
  setPrice,
  selectedAddOns,
  changeAddOns,
}) => {
  const [baggageSelected, setBaggageSelected] = React.useState<
    number | undefined
  >(selectedAddOns);
  const [currentPrice, setCurrentPrice] = React.useState<number[]>(
    generateArrayWithValue(numberOfFlight, 0)
  );
  const handleClicked = (weight: number, newPrice: number) => {
    setPrice(price - currentPrice[flightSelected] + newPrice);
    const newPriceArray = [...currentPrice];
    newPriceArray[flightSelected] = newPrice;
    setCurrentPrice(newPriceArray);
    changeAddOns(index, weight);
  };
  useEffect(() => {
    setBaggageSelected(selectedAddOns);
  }, [selectedAddOns]);
  return (
    <div className="w-full mt-4">
      <p className="text-sm font-bold text-black ">
        {title} ({passenger.ageType})
      </p>
      <div className="grid grid-cols-3 gap-4 mt-4">
        <BaggageOption
          baggageSelected={baggageSelected}
          weight={0}
          price={0}
          handleClick={handleClicked}
        />
        <BaggageOption
          baggageSelected={baggageSelected}
          weight={5}
          price={250000}
          handleClick={handleClicked}
        />
        <BaggageOption
          baggageSelected={baggageSelected}
          weight={10}
          price={500000}
          handleClick={handleClicked}
        />
        <BaggageOption
          baggageSelected={baggageSelected}
          weight={20}
          price={1000000}
          handleClick={handleClicked}
        />
        <BaggageOption
          baggageSelected={baggageSelected}
          weight={30}
          price={1500000}
          handleClick={handleClicked}
        />
        <BaggageOption
          baggageSelected={baggageSelected}
          weight={40}
          price={2000000}
          handleClick={handleClicked}
        />
      </div>
    </div>
  );
};

export default PassengerBaggage;
