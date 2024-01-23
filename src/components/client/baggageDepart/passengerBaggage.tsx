import React from "react";
import BaggageOption from "./baggageOption";

interface PassengerBaggageProps {
  title: string;
  price: number;
  setPrice: React.Dispatch<React.SetStateAction<number>>;
}
const PassengerBaggage: React.FC<PassengerBaggageProps> = ({
  title,
  price,
  setPrice,
}) => {
  const [baggageSelected, setBaggageSelected] = React.useState<
    number | undefined
  >(undefined);
  const [currentPrice, setCurrentPrice] = React.useState<number>(0);
  const handleClicked = (weight: number, newPrice: number) => {
    setBaggageSelected(weight);
    setPrice(price - currentPrice + newPrice);
    setCurrentPrice(newPrice);
  };
  return (
    <div className="w-full mt-4">
      <p className="text-sm font-bold text-black ">{title} (Adult)</p>
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
          price={2000000}
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
