import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import API_URL from "../../assets/static/API";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const history = useNavigate();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);

//     try {
//       const response = await axios.post(
//         `${API_URL}/v1/auth/forgot-password/send-otp`,
//         { email }
//       );
//       if (response.data.success) {
//         setSuccess(true);
//         setError(null);
//         setTimeout(() => {
//             history(`/changepassword/${email}`);
//         }, 3000);
//       } else {
//         setError(response.data.message || "Failed to reset password.");
//         setSuccess(false);
//       }
//     } catch (err: any) {
//       if (err.response && err.response.data && err.response.data.message) {
//         setError(err.response.data.message);
//       } else {
//         setError("Failed to reset password.");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        `${API_URL}/v1/auth/forgot-password/send-otp`,
        { email }
      );
      if (response.data.success) {
        setSuccess(true);
        setError(null);
        // Redirect to ChangePassword with email as parameter
        history(`/changepassword/${email}`);
      } else {
        setError(response.data.message || "Failed to reset password.");
        setSuccess(false);
      }
    } catch (err: any) {
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError("Failed to reset password.");
      }
    } finally {
      setLoading(false);
    }
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
        <h2 className="text-3xl font-bold mb-2">Forgot Password</h2>
        <p className="text-white mr-1 mb-4">
          Please enter your email to reset your password.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="flex items-center justify-center space-x-8">
            <div className="flex flex-col items-center space-y-4">
              <div className="flex space-x-2">
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Enter your email"
                  className="border border-gray-300 p-2 rounded-md w-96 text-center text-black"
                />
              </div>
              <button
                type="submit"
                className="text-white bg-[#1E90FF] py-2 sm:py-4 sm:text-lg w-full mt-6 hover:bg-[#0C70DD] font-semibold rounded-md lg:bg-[#D2F1FF] lg:hover:bg-[#A0C0CC] lg:text-[#0F53B7] lg:py-2 lg:mt-4 2xl:mt-8 2xl:py-3"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Reset Email"}
              </button>
              {error && <p className="text-red-500 mt-2">{error}</p>}
              {success && (
                <p className="text-green-500 mt-2">
                  Reset email sent successfully!
                </p>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
