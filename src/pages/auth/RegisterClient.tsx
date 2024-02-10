import axios from "axios";
import { useState } from "react";
import InputName from "../../components/authentication/login/register/inputName";
import InputEmail from "../../components/authentication/login/register/inputEmail";
import InputPassword from "../../components/authentication/login/register/inputPassword";
import InputCheckPassword from "../../components/authentication/login/register/inputCheckPassword";
import { Link, useNavigate} from "react-router-dom"; 
import API_URL from "../../assets/static/API";

const apiURL = `${API_URL}/v1/auth/sign-up`;

interface RegistrationForm {
  fullName: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmationPassword: string;
}

const RegisterClient = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const [registrationForm, setRegistrationForm] = useState<RegistrationForm>({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmationPassword: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setRegistrationForm({ ...registrationForm, [name]: value });
  };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);

//     try {
//       // Kirim data sesuai dengan struktur yang diharapkan oleh API
//       const res = await axios.post(apiURL, {
//         fullName: registrationForm.fullName,
//         email: registrationForm.email,
//         phoneNumber: registrationForm.phoneNumber,
//         password: registrationForm.password,
//         confirmationPassword: registrationForm.confirmationPassword
//       });
//       if (res.data.status === 200) {
//         setSuccess(true);
//       } else {
//         setError("Registration failed. Please try again.");
//       }
//     } catch (err) {
//       setError("Registration failed. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

  const history = useNavigate();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await axios.post(apiURL, {
        fullName: registrationForm.fullName,
        email: registrationForm.email,
        phoneNumber: registrationForm.phoneNumber,
        password: registrationForm.password,
        confirmationPassword: registrationForm.confirmationPassword
      });

      if (res.data.success) {
        setSuccess(true);
        setError(null); // Clear any previous error message
        
        // Redirect to verification page
        history(`/verifikasi/${registrationForm.email}`);
      } else {
        setError(res.data.message || "Registration failed. Please try again.");
        setSuccess(false);
      }
    } catch (err: any) {
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError("Registration failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  

  return (
    <div className="flex text-white bg-white">
      <div className="w-[45%] relative p-8">
        <img
          src="/images/login/login-client-logo.svg"
          alt="login Background"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-1 flex-col px-20 justify-center bg-[#1E90FF] h-[100%]">
        <h2 className="text-3xl font-bold mt-20">Create new account</h2>
        <div className="flex w-full mt-3 mb-3">
          <p className="text-white mr-1">Already have an account?</p>
          <Link
            to="/login"
            className="text-white ml-1 font-semibold hover:text-[#fffff]"
          >
            Sign in
          </Link>
        </div>
        <form onSubmit={handleSubmit}>
          <InputName
            title="Full Name"
            inputID="fullName"
            placeholder="Enter your full name"
            onChange={handleInputChange}
            description={false}
          />
          <InputEmail
            title="Email"
            inputID="email"
            placeholder="Enter your email"
            onChange={handleInputChange}
            description={false}
          />
          <InputName
            title="Phone Number"
            inputID="phoneNumber"
            placeholder="Enter your phone number"
            onChange={handleInputChange}
            description={false}
          />
          <InputPassword
            title="Password"
            inputID="password"
            placeholder="Enter your password"
            onChange={handleInputChange}
            description={false}
          />
          <InputCheckPassword
            title="Confirm Password"
            inputID="confirmationPassword"
            placeholder="Confirm your password"
            onChange={handleInputChange}
            description={false}
          />
          <button
            type="submit"
            className="text-white bg-[#1E90FF] py-2 sm:py-4 sm:text-lg w-full mt-6 hover:bg-[#0C70DD] font-semibold rounded-md lg:bg-[#D2F1FF] lg:hover:bg-[#A0C0CC] lg:text-[#0F53B7] lg:py-2 lg:mt-4 2xl:mt-8 2xl:py-3"
            disabled={loading}
          >
            {loading ? "Registering..." : "SIGN UP"}
          </button>
        </form>
        {error && <p className="text-red-500 mt-4">{error}</p>}
        {success && <p className="text-green-500 mt-4">Registration successful!</p>}
        <div className="flex items-center justify-center w-full mt-6">
          {/* <div className="border border-1 border-[#0F53B7] grow"></div> */}
          <div className=" bg-white lg:bg-[#1E90FF]">
            <p className="text-sm text-white whitespace-nowrap ">
              Or Sign up with
            </p>
          </div>
          {/* <div className="border border-1 border-[#0F53B7] grow lg:hidden"></div> */}
        </div>
        <div className="flex items-center justify-center w-full mt-5 gap-x-8 mb-5">
          <div>
            <img
              src="/images/login/google-logo.svg"
              alt="google logo"
              className="bg-[#ABE2FF] rounded-lg p-2 w-12 hover:bg-[#89C0DD]"
            />
          </div>
          <div>
            <img
              src="/images/login/facebook-logo.svg"
              alt="facebook logo"
              className="bg-[#ABE2FF] rounded-lg p-2 w-12 hover:bg-[#89C0DD]"
            />
          </div>
        </div>
        {/* <div className="flex items-center justify-center w-full mt-6">
          <p className="text-black">Already have an account?</p>
          <Link
            to="/login"
            className="text-[#1E90FF] ml-1 font-semibold underline hover:text-[#0C70DD]"
          >
            Sign in
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default RegisterClient;
