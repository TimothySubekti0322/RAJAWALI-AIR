import Radio from "@mui/material/Radio";
import React from "react";

interface PaymentOption {
  image: string;
  title: string;
}

interface PaymentOptionsProps {
  options: PaymentOption[];
  selectedValue: string;
  setSelectedValue: React.Dispatch<React.SetStateAction<string>>;
}

const PaymentOptions: React.FC<PaymentOptionsProps> = ({
  options,
  selectedValue,
  setSelectedValue,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
    console.log(selectedValue);
  };
  return (
    <div className="flex flex-col w-full gap-y-2">
      {options.map((option: PaymentOption) => (
        <div
          className="flex justify-between w-full px-4 py-3 bg-white rounded-lg shadow-md"
          key={option.title}
        >
          <div className="flex items-center">
            <img src={option.image} alt="bca logo" />
            <p className="ml-4 text-xs font-semibold">{option.title}</p>
          </div>
          <Radio
            checked={selectedValue === option.title}
            onChange={handleChange}
            value={option.title}
            name="radio-buttons"
            inputProps={{ "aria-label": "A" }}
            sx={{
              "& .MuiSvgIcon-root": {
                fontSize: 20,
              },
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default PaymentOptions;
