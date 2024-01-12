import React, { FC } from "react";

interface TextInputProps {
  title: string;
  inputID: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | undefined;
  description: string;
  inputColor?: string;
}

const TextInput: FC<TextInputProps> = ({
  title,
  inputID,
  placeholder,
  onChange,
  value,
  description,
  inputColor,
}) => {
  const inputStyle = {
    backgroundColor: inputColor || 'white',
  };

  return (
    <div className="flex flex-col mb-2">
      <label htmlFor={inputID} className="font-bold text-xl">
        {title}
      </label>
      <input
        type="text"
        name={inputID}
        id={inputID}
        className="w-2/5 h-8 rounded-md border-2 border-[#1E90FF] mt-2"
        placeholder={placeholder}
        onChange={onChange}
        defaultValue={value}
        style={inputStyle}
      />
      <i className="text-xs mt-2">{description}</i>
    </div>
  );
};

export default TextInput;