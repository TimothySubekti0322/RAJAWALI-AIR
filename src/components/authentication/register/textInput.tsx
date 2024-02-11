import React from "react";
import TextField from "@mui/material/TextField";

interface TextInputProps {
  label: string;
  id: string
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: React.FC<TextInputProps> = ({label, id, placeholder, value, onChange}) => {
  return (
    <>
      <div className="w-full lg:hidden">
        <TextField
          id="outlined-required"
          label={label}
          sx={{ marginTop: "1.5rem" }}
          fullWidth={true}
          value={value}
          onChange={onChange}
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
          className="w-full px-3 py-3 mt-2 text-black bg-white rounded-lg"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default TextInput;
