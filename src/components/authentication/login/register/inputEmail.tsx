import React from "react";

interface InputEmailProps {
  title: string;
  inputID: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  description: string | boolean;
}

const InputEmail: React.FC<InputEmailProps> = ({
  title,
  inputID,
  placeholder,
  onChange,
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
        className="w-full rounded-lg border-2 border-[#B7B7B7] mt-2 py-2 px-2 bg-white text-black"
        placeholder={placeholder}
        onChange={onChange}
        required
      />
      <i className="mt-2 text-xs">{description}</i>
    </div>
  );
};

export default InputEmail;
