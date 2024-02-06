import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

interface RadioButtonProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const RadioButton: React.FC<RadioButtonProps> = ({ value, setValue }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
    console.log(value);
  };

  return (
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel
          value="MAN"
          control={
            <Radio
              sx={{
                "& .MuiSvgIcon-root": {
                  fontSize: 18,
                },
              }}
            />
          }
          label={<p className="text-xs">Mr.</p>}
        />
        <FormControlLabel
          value="WOMAN"
          control={
            <Radio
              sx={{
                "& .MuiSvgIcon-root": {
                  fontSize: 18,
                  marginLeft: "0.75rem",
                },
              }}
            />
          }
          label={<p className="text-xs">Mrs.</p>}
        />
      </RadioGroup>
    </FormControl>
  );
};

export default RadioButton;
