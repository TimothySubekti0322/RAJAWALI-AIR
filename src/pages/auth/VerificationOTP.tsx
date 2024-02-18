import { useState } from "react";
import API_URL from "../../assets/static/API";
import VerifyOtpBox from "../../components/authentication/verifyOTP/verifyOtpBox";
import axios, { AxiosError } from "axios";
import toast, { Toaster } from "react-hot-toast";
import BookingProvider from "../../providers/LocalStorageProvider";

interface AxiosRegisterError {
  success: boolean;
  message: string;
  status: number;
}

const VerificationOTP = () => {
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);

  const handleVerify = async () => {
    const formData = {
      email: localStorage.getItem("email") as string,
      otpCode: otp.join(""),
    };
    console.log(formData);
    try {
      const response = await axios.post(
        `${API_URL}/v1/auth/enable-user`,
        formData
      );
      if (response.data.success) {
        toast.success("Account Created Successfully");
        setTimeout(() => {
          window.location.href = "/login";
        }, 1000);
      }
    } catch (error) {
      const errorResponse = error as AxiosError;
      const errorData = errorResponse.response?.data as AxiosRegisterError;
      toast.error(errorData.message);
      //   if(errorData.message === "OTP is expired!") {
      //     toast.error("OTP is expired!");
      //   }
    }
  };
  return (
    <BookingProvider requiredItem={["email"]}>
      <div className="flex flex-col w-screen min-h-screen px-6 py-6 lg:flex-row lg:max-h-screen lg:py-0 lg:px-0">
        <Toaster />
        <div className="flex items-center justify-center w-full mt-4 lg:w-1/2 lg:mt-0">
          {/* Image */}
          <img
            src={`/images/verificationOTP-logo.svg`}
            alt="verification OTP logo"
            className="w-2/3"
          />
        </div>
        {/* Input Section */}
        <div className="mt-4 lg:bg-[#1E90FF] lg:grow lg:px-16 lg:pt-6 lg:mt-0 lg:flex lg:flex-col lg:justify-center">
          <p className="text-[#0F53B7] font-bold text-xl sm:text-2xl lg:text-white mt-4 lg:mt-0">
            Verification
          </p>
          <p className="mt-2 text-black lg:text-white">
            Enter the verification code that has been sent to your email
          </p>
          <div className="w-full mt-4 lg:mt-12">
            <VerifyOtpBox otp={otp} setOtp={setOtp} />
          </div>
          <div className="flex w-full lg:justify-end">
            <button className="text-[#1E90FF] hover:text-[#0C70DD] underline underline-offset-2 lg:text-white lg:hover:text-[#DDDDDD] lg:no-underline mt-6 cursor-pointer">
              Resend Code
            </button>
          </div>
          <button
            className="w-full text-white bg-[#1E90FF] hover:bg-[#0B60CC] rounded-lg py-4 mt-[4.5rem] lg:bg-[#D2F1FF] lg:hover:bg-[#A0C0CC] font-bold lg:text-[#0F53B7] lg:mt-24"
            onClick={handleVerify}
          >
            Verify
          </button>
        </div>
      </div>
    </BookingProvider>
  );
};

export default VerificationOTP;
