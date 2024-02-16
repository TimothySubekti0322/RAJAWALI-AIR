import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import axios, { AxiosError } from "axios";
import API_URL from "../../assets/static/API";
import {
  adminLoginAtAdminPortal,
  clientLoginAtClientPortal,
  validateEmail,
} from "../../utils/auth/login.utils";

interface LoginProps {
  user: "admin" | "client";
}

interface AxiosLoginError {
  success: boolean;
  message: string;
  status: number;
}

const Login: React.FC<LoginProps> = ({ user }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // email and password
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [remember, setRemember] = useState<boolean>(false);

  // Error
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");

  // Loading
  const [loading, setLoading] = useState<boolean>(false);

  // Check Email and Password not null
  const EmailAndPasswordAvailable = (): boolean => {
    if (email == "") {
      setEmailError("Email is required");
      return false;
    } else {
      setEmailError("");
    }
    if (password == "") {
      setPasswordError("Password is required");
      return false;
    } else {
      setPasswordError("");
    }
    return true;
  };

  // check if email is valid
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    if (newEmail.trim() === "") {
      setEmailError("Email is required");
    } else if (!validateEmail(newEmail)) {
      setEmailError("Invalid email format");
    } else {
      setEmailError("");
    }
    console.log(emailError);
  };

  const handleLogin = async () => {
    console.log(remember);
    if (EmailAndPasswordAvailable()) {
      setLoading(true);
      const formData = {
        email: email,
        password: password,
      };
      try {
        console.log(formData);
        const response = await axios.post(
          `${API_URL}/v1/auth/signin`,
          formData
        );
        console.log(response);
        if (response.data.success) {
          // Check if it is in Correct Portal
          if (
            !adminLoginAtAdminPortal(user, response.data.data.roles[0].name) &&
            !clientLoginAtClientPortal(user, response.data.data.roles[0].name)
          ) {
            setEmailError("Email not found");
          } else {
            // Login Logic
            localStorage.setItem("token", response.data.data.accessToken);
            if (remember) {
              localStorage.setItem("rememberMe", "true");
              localStorage.setItem(
                "refreshToken",
                response.data.data.refreshToken
              );
            } else {
              localStorage.removeItem("rememberMe");
            }
            if (response.data.data.roles[0].name == "ROLE_ADMIN") {
              localStorage.setItem("role", "admin");
              window.location.href = "/dashboard/home";
            } else {
              window.location.href = "/";
            }
            setEmailError("");
            setPasswordError("");
          }
        }
      } catch (error) {
        const errorResponse = error as AxiosError;
        const errorData = errorResponse.response?.data as AxiosLoginError;
        if (errorData.message == "Password doesn't match!") {
          setPasswordError("Wrong Password");
        } else if (errorData.status == 404) {
          setEmailError("Email not found");
        }
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="flex flex-col w-screen min-h-screen px-6 py-6 lg:flex-row lg:max-h-screen lg:py-0 lg:px-0">
      <div className="flex items-center justify-between w-full lg:hidden">
        {/* Logo */}
        <img
          src="/images/login/rajawali-air-logo.svg"
          alt="rajawali air logo"
          className=""
        />
        <a
          href="/"
          className="text-[#1E90FF] font-semibold underline underline-offset-2 hover:text-[#0C70DD]"
        >
          Skip
        </a>
      </div>
      <div className="flex items-center justify-center w-full mt-4 lg:w-1/2 lg:mt-0">
        {/* Image */}
        <img
          src={`/images/login/login-${user}-logo.svg`}
          alt="login logo"
          className="w-2/3 bg-[#A4E0FF] rounded-full"
        />
      </div>
      {/* Input Section */}
      <div className="mt-4 lg:bg-[#1E90FF] lg:grow lg:px-16 lg:pt-6 lg:mt-0 lg:flex lg:flex-col lg:justify-center">
        <p className="text-[#0F53B7] font-bold text-lg sm:text-2xl lg:hidden">
          Login
        </p>
        <p className="hidden lg:block lg:text-[1.8rem] font-semibold 2xl:text-[2.5rem]">
          {user == "admin"
            ? "Welcome Back, Admin!"
            : "Hello, Welcome to Rajawali Air!"}
        </p>
        <p className={`hidden ${user == "client" && "lg:block"} `}>
          Sign in or sign up in just a few easy steps
        </p>
        {emailError == "" ? (
          <>
            <div className="w-full lg:hidden">
              <TextField
                id="outlined-required"
                label="Email"
                sx={{ marginTop: "1.5rem" }}
                fullWidth={true}
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="hidden w-full lg:flex-col lg:flex lg:mt-[1rem] 2xl:mt-[2rem]">
              <label htmlFor="email" className="text-base font-bold">
                Email or phone number
              </label>
              <input
                type="text"
                name="email"
                id="email"
                className="w-full px-3 py-3 mt-2 text-black bg-white rounded-lg"
                placeholder="Input Your Email"
                onChange={handleEmailChange}
                value={email}
              />
            </div>
          </>
        ) : (
          <>
            <div className="w-full lg:hidden">
              <TextField
                error
                id="outlined-error-helper-text"
                label="Email"
                sx={{ marginTop: "1.5rem" }}
                fullWidth={true}
                value={email}
                onChange={handleEmailChange}
                helperText={emailError}
              />
            </div>
            <div className="hidden w-full lg:flex-col lg:flex lg:mt-[1rem] 2xl:mt-[2rem]">
              <label htmlFor="email" className="text-base font-bold">
                Email or phone number
              </label>
              <input
                type="text"
                name="email"
                id="email"
                className="w-full px-3 py-3 mt-2 text-black bg-white rounded-lg border-2 border-[#d32f2f] focus-visible:outline-none"
                placeholder="Input Your Email"
                onChange={handleEmailChange}
                value={email}
              />
              <p className="text-[#d32f2f] text-xs font-semibold mt-1 lg:-mb-4 2xl:mb-0">
                {emailError}
              </p>
            </div>
          </>
        )}
        {passwordError == "" ? (
          <>
            <div className="w-full lg:hidden">
              <TextField
                id="outlined-required"
                type={showPassword ? "text" : "password"}
                label="Password"
                value={password}
                sx={{ marginTop: "1.5rem" }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                fullWidth={true}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setPassword(event.target.value);
                }}
              />
            </div>
            <div className="hidden w-full lg:flex-col lg:flex lg:mt-[1rem] 2xl:mt-[2rem]">
              <label htmlFor="password" className="text-base font-bold">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                className="w-full px-3 py-3 mt-2 text-black bg-white rounded-lg"
                placeholder="Input Your Password"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setPassword(event.target.value);
                }}
                value={password}
              />
            </div>
          </>
        ) : (
          <>
            <div className="w-full lg:hidden">
              <TextField
                error={true}
                helperText={passwordError}
                id="outlined-required"
                type={showPassword ? "text" : "password"}
                label="Password"
                value={password}
                sx={{ marginTop: "1.5rem" }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                fullWidth={true}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setPassword(event.target.value);
                }}
              />
            </div>
            <div className="hidden w-full lg:flex-col lg:flex lg:mt-[1rem] 2xl:mt-[2rem]">
              <label htmlFor="password" className="text-base font-bold">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                className="w-full px-3 py-3 mt-2 text-black bg-white rounded-lg border-2 border-[#d32f2f]"
                placeholder="Input Your Password"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setPassword(event.target.value);
                }}
                value={password}
              />
              <p className="text-[#d32f2f] text-xs font-semibold mt-1">
                {passwordError}
              </p>
            </div>
          </>
        )}

        <div className="flex items-center mt-6 lg:mt-2 gap-x-2 2xl:mt-8">
          <input
            type="checkbox"
            className="w-4 h-4 bg-white rounded-sm checkbox accent-white lg:block 2xl:w-6 2xl:h-6 2xl:rounded-md"
            onChange={() => setRemember(!remember)}
          />

          <label
            htmlFor="remember"
            className="text-xs text-black rounded lg:font-bold lg:text-white 2xl:text-sm"
          >
            Keep me Signed in
          </label>
        </div>
        <div className="flex justify-end w-full">
          <a
            href="#"
            className=" mt-6 font-bold text-[#1E90FF] text-end text-sm hover:text-[#0C70DD] lg:hidden"
          >
            Forgot Password?
          </a>
        </div>

        <button
          className="text-white bg-[#1E90FF] py-2 sm:py-4 sm:text-lg w-full mt-6 hover:bg-[#0C70DD] font-semibold rounded-md lg:bg-[#D2F1FF] lg:hover:bg-[#A0C0CC] lg:text-[#0F53B7] lg:py-2 lg:mt-4 2xl:mt-8 2xl:py-3"
          onClick={handleLogin}
        >
          {loading ? (
            <span className="loading loading-spinner loading-sm sm:loading-md"></span>
          ) : (
            "SIGN IN"
          )}
        </button>
        <div className="flex items-center justify-end mt-2 text-xs gap-x-1 2xl:text-base 2xl:mt-4">
          <p className="hidden text-white lg:block">Forgot Password?</p>
          <a href="#" className="font-bold text-white hover:text-[#CCCCCC]">
            Reset Password
          </a>
        </div>

        <div
          className={`flex items-center justify-center w-full mt-6 lg:mt-2 ${
            user == "admin" && "lg:hidden"
          }`}
        >
          <div className="border border-1 border-[#0F53B7] grow lg:hidden"></div>
          <div className="px-1 py-2 bg-white lg:bg-[#1E90FF]">
            <p className="text-sm text-black whitespace-nowrap sm:text-base lg:text-white 2xl:text-lg">
              Or Sign in with
            </p>
          </div>
          <div className="border border-1 border-[#0F53B7] grow lg:hidden"></div>
        </div>
        <div
          className={`${
            user == "admin" && "lg:hidden"
          } flex items-center justify-center w-full mt-6 gap-x-8 lg:mt-2 2xl:mt-4`}
        >
          <div>
            <img
              src="/images/login/google-logo.svg"
              alt="google logo"
              className="bg-[#ABE2FF] rounded-lg p-2 w-12 hover:bg-[#89C0DD] sm:w-16 lg:w-12 2xl:w-16"
            />
          </div>
          <div>
            <img
              src="/images/login/facebook-logo.svg"
              alt="facebook logo"
              className="bg-[#ABE2FF] rounded-lg p-2 w-12 hover:bg-[#89C0DD] sm:w-16 lg:w-12 2xl:w-16"
            />
          </div>
        </div>
        <div
          className={`${
            user == "admin" && "lg:hidden"
          } flex items-center justify-center w-full mt-6 mb-8 lg:mb-4 lg:mt-4 2xl:text-lg 2xl:mt-6`}
        >
          <p className="text-black lg:text-white">Don't have an account?</p>
          <a
            href="/register"
            className="text-[#1E90FF] ml-1 font-semibold underline underline-offset-1 hover:text-[#0C70DD] lg:text-white lg:font-bold lg:hover:text-[#CCCCCC]"
          >
            Register
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
