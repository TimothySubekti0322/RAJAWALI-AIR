import React from "react";
import TextField from "@mui/material/TextField";

interface TextInputProps {
  label: string;
  id: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  textError: string;
}

const textInput: React.FC<TextInputProps> = ({
  label,
  id,
  placeholder,
  value,
  onChange,
  textError,
}) => {
  return (
    <>
      <div className="w-full lg:hidden">
        <TextField
          error
          id={
            textError !== "" ? "outlined-error-helper-text" : "outlined-required"
          }
          label={label}
          sx={{ marginTop: "1.5rem" }}
          fullWidth={true}
          value={value}
          onChange={onChange}
          helperText={textError}
        />
      </div>
      <div className="hidden w-full lg:flex-col lg:flex lg:mt-[1rem] 2xl:mt-[2rem]">
        <label htmlFor={id} className="text-base font-bold">
          {label}
        </label>
        <input
          type="text"
          name={id}
          id={id}
          className={`${
            textError !== "" &&
            "border-2 border-[#d32f2f] focus-visible:outline-none"
          } w-full px-3 py-3 mt-2 text-black bg-white rounded-lg`}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
        {textError !== "" && (
          <p className="text-[#d32f2f] text-xs font-semibold mt-1 lg:-mb-4 2xl:mb-0">
            {textError}
          </p>
        )}
      </div>
    </>
  );
};

export default textInput;
