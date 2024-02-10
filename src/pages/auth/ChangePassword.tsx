// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import API_URL from "../../assets/static/API";

// const ChangePassword = () => {
//   const [email, setEmail] = useState("");
//   const [otpCode, setOtpCode] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [success, setSuccess] = useState(false);
//   const history = useNavigate();

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);

//     const requestData = { email, otpCode, newPassword };
//     console.log("Data yang dikirim:", requestData);

//     try {
//       const response = await axios.post(
//         `${API_URL}/v1/auth/forgot-password`,
//         { email, otpCode, newPassword }
//       );
//       if (response.data.success) {
//         setSuccess(true);
//         setError(null);
//         setTimeout(() => {
//           history("/login");
//         }, 3000);
//       } else {
//         setError(response.data.message || "Failed to change password.");
//         setSuccess(false);
//       }
//     } catch (err: any) {
//       if (err.response && err.response.data && err.response.data.message) {
//         setError(err.response.data.message);
//       } else {
//         setError("Failed to change password.");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex text-white bg-white h-screen">
//       <div className="w-1/2 relative p-8">
//         <img
//           src="/images/login/login-client-logo.svg"
//           alt="login Background"
//           className="object-cover w-full h-full"
//         />
//       </div>
//       <div className="flex flex-1 flex-col px-20 justify-center bg-[#1E90FF]">
//         <h2 className="text-3xl font-bold mb-2">Change Password</h2>
//         <p className="text-white mr-1 mb-4">
//           Please enter the OTP and your new password to change your password.
//         </p>
//         <form onSubmit={handleSubmit}>
//           <div className="flex items-center justify-center space-x-8">
//             <div className="flex flex-col items-center space-y-4">
//               <div className="flex flex-col space-y-2">
//                 <input
//                   type="text"
//                   value={otpCode}
//                   onChange={(e) => setOtpCode(e.target.value)}
//                   placeholder="Enter OTP"
//                   className="border border-gray-300 p-2 rounded-md w-96 text-center text-black"
//                 />
//                 <input
//                   type="password"
//                   value={newPassword}
//                   onChange={(e) => setNewPassword(e.target.value)}
//                   placeholder="Enter New Password"
//                   className="border border-gray-300 p-2 rounded-md w-96 text-center text-black"
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="text-white bg-[#1E90FF] py-2 sm:py-4 sm:text-lg w-full mt-6 hover:bg-[#0C70DD] font-semibold rounded-md lg:bg-[#D2F1FF] lg:hover:bg-[#A0C0CC] lg:text-[#0F53B7] lg:py-2 lg:mt-4 2xl:mt-8 2xl:py-3"
//                 disabled={loading}
//               >
//                 {loading ? "Changing..." : "Change Password"}
//               </button>
//               {error && <p className="text-red-500 mt-2">{error}</p>}
//               {success && (
//                 <p className="text-green-500 mt-2">Password changed successfully!</p>
//               )}
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ChangePassword;


import React, { useState, } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import API_URL from "../../assets/static/API";

const ChangePassword = () => {
    const { email } = useParams();
//   const [email, setEmail] = useState("");
  const [otpCode, setOtpCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const history = useNavigate();
//   const location = useLocation();

//   useEffect(() => {
//     const searchParams = new URLSearchParams(location.search);
//     const emailFromQuery = searchParams.get("email");
//     if (emailFromQuery) {
//       setEmail(emailFromQuery);
//     }
//   }, [location.search]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const requestData = { email, otpCode, newPassword };
    console.log("Data yang dikirim:", requestData);

    try {
      const response = await axios.post(
        `${API_URL}/v1/auth/forgot-password`,
        { email, otpCode, newPassword }
      );
      if (response.data.success) {
        setSuccess(true);
        setError(null);
        setTimeout(() => {
          history("/login");
        }, 3000);
      } else {
        setError(response.data.message || "Failed to change password.");
        setSuccess(false);
      }
    } catch (err: any) {
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError("Failed to change password.");
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
        <h2 className="text-3xl font-bold mb-2">Change Password</h2>
        <p className="text-white mr-1 mb-4">
          Please enter the OTP and your new password to change your password.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="flex items-center justify-center space-x-8">
            <div className="flex flex-col items-center space-y-4">
              <div className="flex flex-col space-y-2">
                <input
                  type="text"
                  value={otpCode}
                  onChange={(e) => setOtpCode(e.target.value)}
                  placeholder="Enter OTP"
                  className="border border-gray-300 p-2 rounded-md w-96 text-center text-black"
                />
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Enter New Password"
                  className="border border-gray-300 p-2 rounded-md w-96 text-center text-black"
                />
              </div>
              <button
                type="submit"
                className="text-white bg-[#1E90FF] py-2 sm:py-4 sm:text-lg w-full mt-6 hover:bg-[#0C70DD] font-semibold rounded-md lg:bg-[#D2F1FF] lg:hover:bg-[#A0C0CC] lg:text-[#0F53B7] lg:py-2 lg:mt-4 2xl:mt-8 2xl:py-3"
                disabled={loading}
              >
                {loading ? "Changing..." : "Change Password"}
              </button>
              {error && <p className="text-red-500 mt-2">{error}</p>}
              {success && (
                <p className="text-green-500 mt-2">Password changed successfully!</p>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
