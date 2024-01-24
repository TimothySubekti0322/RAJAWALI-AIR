import React from "react";
import { numberToCurrency } from "../../../utils/NumberFormater";
interface BaggageOptionProps {
  baggageSelected: number | undefined;
  weight: number;
  price: number;
  handleClick: (weight: number, newPrice: number) => void;
}

const BaggageOption: React.FC<BaggageOptionProps> = ({
  baggageSelected,
  weight,
  price,
  handleClick,
}) => {
  return (
    <button
      className={`border-2 ${
        weight == baggageSelected
          ? "border-[#1E90FF] text-[#1E90FF]"
          : "border-[#E0E0E0] text-black"
      } flex flex-col items-center justify-center rounded-lg shadow-md bg-white font-[600] py-1 gap-y-1`}
      onClick={() => handleClick(weight, price)}
    >
      <p className="text-sm">{weight} Kg</p>
      <p className="text-xs">{numberToCurrency("IDR", price, true, false)}</p>
    </button>
  );
};

export default BaggageOption;
