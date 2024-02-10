import React, { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import API_URL from "../../assets/static/API";

const apiURL = `${API_URL}/v1/auth/enable-user`;

const VerifikasiClient = () => {
  const { email } = useParams();
  const history = useNavigate();
  const [resendLoading, setResendLoading] = useState(false);
  const [resendError, setResendError] = useState<string | null>(null);
  const [verificationSuccess, setVerificationSuccess] = useState(false);
  const [otp, setOtp] = useState<string[]>(Array(6).fill("")); // state for saving otp

  const handleResendCode = async () => {
    try {
      setResendLoading(true);
      setResendError(null);
      const res = await axios.post(apiURL, { email });
      // Handle response accordingly
      setResendLoading(false);
      // give error messasge
    } catch (error: any) {
      setResendError("Failed to resend code. Please try again.");
      setResendLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const requestData = { email, otpCode: otp.join("") };
      console.log("Data yang dikirim ke server:", requestData); 
      const res = await axios.post(apiURL, { email, otpCode: otp.join("") });
      // Handle response accordingly
      if (res.data.success) {
        setVerificationSuccess(true);
        // Show success message for 3 seconds
        setTimeout(() => {
          // Redirect to login page upon successful verification
          history("/login");
        }, 3000);
      } else {
        // Handle if verification fails
        setResendError(res.data.message || "Verification failed. Please try again.");
      }
    } catch (error: any) {
      // Handle other errors
      if (error.response && error.response.data && error.response.data.message) {
        setResendError(error.response.data.message);
      } else {
        setResendError("Verification failed. Please try again.");
      }
    }
  };
  

  const handleInputChange = (index: number, value: string) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  return (
    <div className="flex text-white bg-white h-screen">
      <div className="w-1/2 relative p-8">
        <img
          src="/images/login/login-client-logo.svg"
          alt="login Background"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-1 flex-col px-20 justify-center bg-[#1E90FF]">
        <h2 className="text-3xl font-bold mb-2">Verification Page</h2>
        <p className="text-white mr-1 mb-4">
          Enter the verification code that has been sent to your email
        </p>
        <form onSubmit={handleSubmit}>
          <div className="flex items-center justify-center space-x-8">
            <div className="flex flex-col items-center space-y-4">
              <div className="flex space-x-2">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength={1}
                    value={digit}
                    placeholder="0"
                    className="border border-gray-300 p-2 rounded-md w-12 text-center text-black"
                    style={{
                      width: "79px",
                      height: "98px",
                      borderRadius: "10px",
                      border: "3px",
                    }}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                  />
                ))}
              </div>
              <button
                className="bg-blue-500 px-4 py-2 rounded-md mt-4"
                onClick={handleResendCode}
                disabled={resendLoading}
              >
                {resendLoading ? "Resending..." : "Resend Code"}
              </button>
              {resendError && (
                <p className="text-red-500 mt-2">{resendError}</p>
              )}
              <button
                type="submit"
                className="text-white bg-[#1E90FF] py-2 sm:py-4 sm:text-lg w-full mt-6 hover:bg-[#0C70DD] font-semibold rounded-md lg:bg-[#D2F1FF] lg:hover:bg-[#A0C0CC] lg:text-[#0F53B7] lg:py-2 lg:mt-4 2xl:mt-8 2xl:py-3"
                disabled={verificationSuccess}
              >
                VERIFY
              </button>
              {verificationSuccess && (
                <p className="text-green-500 mt-2">Verification successful!</p>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VerifikasiClient;
