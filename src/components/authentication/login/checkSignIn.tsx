import React from "react";

interface CheckSignInProps {
  inputID: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckSignIn: React.FC<CheckSignInProps> = ({
  inputID,
  onChange,
}) => {
  return (
    <div className="flex">
      <input
        type="checkbox"
        name={inputID}
        id={inputID}
        className="w-4 h-4 border border-white rounded bg-white focus:ring-3 focus:ring-primary-300"
        onChange={onChange}
      />
    </div>
  );
};

export default CheckSignIn;
