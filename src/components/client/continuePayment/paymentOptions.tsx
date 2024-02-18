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
    const handleChangeMethod = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(event.target.value);
        // console.log(selectedValue);
      };
      
  return (
    <div className="flex flex-col w-full gap-y-2">
      {options.map((option: PaymentOption) => (
        <div
          className="flex justify-between"
          key={option.title}
        >
          <div className="flex items-center">
            <img src={option.image} alt="bca logo" />
            <p className="ml-2 text-xs font-semibold">{option.title}</p>
          </div>
          <Radio
            checked={selectedValue === option.title}
            onChange={handleChangeMethod}
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
      <hr className="-mt-2"/>
    </div>
  );
};

export default PaymentOptions;
