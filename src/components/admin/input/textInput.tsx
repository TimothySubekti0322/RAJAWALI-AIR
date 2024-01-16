import React from "react";

interface TextInputProps {
  title: string;
  inputID: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | undefined;
  description: string;
}

const TextInput: React.FC<TextInputProps> = ({
  title,
  inputID,
  placeholder,
  onChange,
  value,
  description,
}) => {
  return (
    <div className="flex flex-col w-full">
      <label htmlFor={inputID} className="text-xl font-bold">
        {title}
      </label>
      <input
        type="text"
        name={inputID}
        id={inputID}
        className="w-4/5 rounded-lg border-2 border-[#B7B7B7] mt-4 py-2 px-2"
        placeholder={placeholder}
        onChange={onChange}
        defaultValue={value}
      />
      <i className="mt-2 text-xs">{description}</i>
    </div>
  );
};

export default TextInput;
