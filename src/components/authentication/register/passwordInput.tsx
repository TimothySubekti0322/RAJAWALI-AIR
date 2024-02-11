import React, { useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import { Visibility, VisibilityOff } from "@mui/icons-material";

interface PasswordInputProps {
  label: string;
  id: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  label,
  id,
  placeholder,
  value,
  onChange,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div className="w-full lg:hidden">
        <TextField
          id="outlined-required"
          type={showPassword ? "text" : "password"}
          label={label}
          value={value}
          sx={{ marginTop: "1.5rem" }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          fullWidth={true}
          onChange={onChange}
        />
      </div>
      <div className="hidden w-full lg:flex-col lg:flex lg:mt-[1rem] 2xl:mt-[2rem]">
        <label htmlFor={id} className="text-base font-bold">
          {label}
        </label>
        <input
          type={showPassword ? "text" : "password"}
          name={id}
          id={id}
          className="w-full px-3 py-3 mt-2 text-black bg-white rounded-lg"
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
      </div>
    </>
  );
};

export default PasswordInput;
