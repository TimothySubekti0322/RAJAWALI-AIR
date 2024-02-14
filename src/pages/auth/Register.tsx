import { useState } from "react";
import TextInput from "../../components/authentication/register/textInput";
import TextInputError from "../../components/authentication/register/textInputError";
import { validateEmail } from "../../utils/auth/login.utils";
import {
  validatePassword,
  validatePhoneNumber,
  validateRegistrationDataNotNull,
} from "../../utils/auth/register.utils";
import PasswordInput from "../../components/authentication/register/passwordInput";
import PasswordInputError from "../../components/authentication/register/passwordInputError";
import axios, { AxiosError } from "axios";
import API_URL from "../../assets/static/API";

interface AxiosPasswordError {
  field: string;
  message: string;
}

interface AxiosRegisterError {
  data?: AxiosPasswordError[];
  success: boolean;
  message: string;
  status: number;
}

const Register = () => {
  // full name
  const [fullName, setFullName] = useState<string>("");
  const [fullNameError, setFullNameError] = useState<string>("");

  const handleFullNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFullName(event.target.value);
    if (event.target.value == "") {
      setFullNameError("Full Name is required");
    } else {
      setFullNameError("");
    }
  };

  // email
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    if (event.target.value == "") {
      setEmailError("Email is required");
    } else if (!validateEmail(event.target.value)) {
      setEmailError("Invalid Email");
    } else {
      setEmailError("");
    }
  };

  // phone number
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [phoneNumberError, setPhoneNumberError] = useState<string>("");

  const handlePhoneNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPhoneNumber(event.target.value);
    if (event.target.value == "") {
      setPhoneNumberError("Phone Number is required");
    } else if (!validatePhoneNumber(event.target.value)) {
      setPhoneNumberError("Invalid Phone Number");
    } else {
      setPhoneNumberError("");
    }
  };

  // password
  const [password, setPassword] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    if (event.target.value == "") {
      setPasswordError("Password is required");
    } else if (!validatePassword(event.target.value)) {
      setPasswordError(
        "Password must be at least 6 characters and maximum 40 characters"
      );
    } else {
      setPasswordError("");
    }
  };

  // confirm password
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [confirmPasswordError, setConfirmPasswordError] = useState<string>("");

  const handleConfirmPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(event.target.value);
    if (event.target.value == "") {
      setConfirmPasswordError("Confirm Password is required");
    } else if (event.target.value !== password) {
      setConfirmPasswordError("Password does not match");
    } else {
      setConfirmPasswordError("");
    }
  };

  // loading state
  const [loading, setLoading] = useState<boolean>(false);

  const handleRegister = async () => {
    if (
      validateRegistrationDataNotNull(
        fullName,
        "Full Name is required",
        setFullNameError
      ) &&
      validateRegistrationDataNotNull(
        email,
        "Email is required",
        setEmailError
      ) &&
      validateRegistrationDataNotNull(
        phoneNumber,
        "Phone Number is required",
        setPhoneNumberError
      ) &&
      validateRegistrationDataNotNull(
        password,
        "Password is required",
        setPasswordError
      ) &&
      validateRegistrationDataNotNull(
        confirmPassword,
        "Confirm Password is required",
        setConfirmPasswordError
      )
    ) {
      setLoading(true);
      const formData = {
        fullName: fullName,
        email: email,
        phoneNumber: phoneNumber,
        password: password,
        confirmationPassword: confirmPassword,
      };
      try {
        console.log(formData);
        const response = await axios.post(
          `${API_URL}/v1/auth/sign-up`,
          formData
        );
        if (response.data.success) {
          localStorage.setItem("email", email);
          window.location.href = "/verifyOTP";
        }
      } catch (error) {
        const errorResponse = error as AxiosError;
        const errorData = errorResponse.response?.data as AxiosRegisterError;
        if (errorData.message.slice(0, 4) == "Email") {
          setEmailError("Email has been registered");
        } else if (errorData.message.startsWith("Phone number")) {
          setPhoneNumberError("Phone Number has been registered");
        } else if (errorData.data) {
          if (errorData.data[0].field == "password") {
            setPasswordError(errorData.data[0].message);
          }
        }
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="flex flex-col w-screen min-h-screen px-6 py-6 lg:flex-row lg:max-h-screen lg:py-0 lg:px-0">
      <div className="flex items-center justify-center w-full mt-4 lg:w-1/2 lg:mt-0">
        {/* Image */}
        <img
          src={`/images/login/register-logo.svg`}
          alt="login logo"
          className="w-2/3 bg-[#A4E0FF] rounded-full"
        />
      </div>
      {/* Input Section */}
      <div className="mt-4 lg:bg-[#1E90FF] lg:grow lg:px-16 lg:pt-6 lg:mt-0 lg:flex lg:flex-col lg:justify-center">
        <p className="text-[#0F53B7] font-bold text-lg sm:text-2xl lg:hidden">
          Register Your Account
        </p>
        <p className="hidden lg:block lg:text-[1.8rem] font-semibold 2xl:text-[2.5rem]">
          Create new account
        </p>
        <div className="hidden w-full lg:flex gap-x-1">
          <p>Already have an account?</p>
          <a href="/login" className="font-bold">
            Sign in
          </a>
        </div>
        {fullNameError == "" ? (
          <TextInput
            label="Full Name"
            id="fullName"
            placeholder="Enter Your Name"
            value={fullName}
            onChange={handleFullNameChange}
          />
        ) : (
          <TextInputError
            label="Full Name"
            id="fullName"
            placeholder="Enter Your Name"
            value={fullName}
            onChange={handleFullNameChange}
            textError={fullNameError}
          />
        )}
        {emailError == "" ? (
          <TextInput
            label="Email"
            id="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={handleEmailChange}
          />
        ) : (
          <TextInputError
            label="Email"
            id="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={handleEmailChange}
            textError={emailError}
          />
        )}
        {phoneNumberError == "" ? (
          <TextInput
            label="Phone Number"
            id="phoneNumber"
            placeholder="Example: 081234567899"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
          />
        ) : (
          <TextInputError
            label="Phone Number"
            id="phoneNumber"
            placeholder="Example: 081234567899"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            textError={phoneNumberError}
          />
        )}
        {passwordError == "" ? (
          <PasswordInput
            label="Password"
            id="password"
            placeholder="Minimum 6 characters"
            value={password}
            onChange={handlePasswordChange}
          />
        ) : (
          <PasswordInputError
            label="Password"
            id="password"
            placeholder="Minimum 6 characters"
            value={password}
            onChange={handlePasswordChange}
            errorText={passwordError}
          />
        )}
        {confirmPasswordError == "" ? (
          <PasswordInput
            label="Confirm Password"
            id="confirmPassword"
            placeholder="Repeat your password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
        ) : (
          <PasswordInputError
            label="Confirm Password"
            id="confirmPassword"
            placeholder="Repeat your password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            errorText={confirmPasswordError}
          />
        )}
        <button
          className="text-white bg-[#1E90FF] py-2 sm:py-4 sm:text-lg w-full mt-6 hover:bg-[#0C70DD] font-semibold rounded-md lg:bg-[#D2F1FF] lg:hover:bg-[#A0C0CC] lg:text-[#0F53B7] lg:py-2 lg:mt-6 2xl:mt-8 2xl:py-3 lg:mb-8"
          onClick={handleRegister}
        >
          {loading ? (
            <span className="loading loading-spinner loading-sm sm:loading-md"></span>
          ) : (
            "SIGN UP"
          )}
        </button>
      </div>
    </div>
  );
};

export default Register;
