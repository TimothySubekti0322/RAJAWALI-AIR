import React, { useRef } from "react";
import { isDigit } from "../../../utils/auth/verifyOTP.utils";

interface VerifyOtpBoxProps {
  otp: string[];
  setOtp: React.Dispatch<React.SetStateAction<string[]>>;
}

const VerifyOtpBox: React.FC<VerifyOtpBoxProps> = ({ otp, setOtp }) => {
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  const handleOtpChange = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (isDigit(e.key)) {
      const newOTP = [...otp];
      newOTP[index] = e.key;
      setOtp(newOTP);
      if (otp[index + 1] === "") {
        inputRefs.current[index + 1]?.focus();
      }
    } else if (e.key == "Backspace") {
      if (otp[index] === "") {
        inputRefs.current[index - 1]?.focus();
        otp[index - 1] = "";
        return setOtp([...otp]);
      }
      const newOTP = [...otp];
      newOTP[index] = "";
      setOtp(newOTP);
    }
  };

  return (
    <div className="flex items-center justify-center w-full gap-x-4 lg:gap-x-6">
      {Array.from({ length: 6 }).map((_, index) => (
        <input
          key={index}
          ref={(ref) => (inputRefs.current[index] = ref)}
          className={`w-1/6 lg:w-14 h-[4.5rem] border-[#A4E0FF] bg-white focus:outline-none lg:bg-[#D2F1FF] border-b-4 lg:border-2 lg:border-[#0F53B7] lg:rounded-lg text-center text-black font-semibold text-xl`}
          value={otp[index]}
          onKeyDown={(e) => handleOtpChange(e, index)}
        />
      ))}
    </div>
  );
};

export default VerifyOtpBox;
