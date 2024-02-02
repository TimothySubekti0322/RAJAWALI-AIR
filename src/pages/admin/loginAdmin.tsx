/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import { useState } from "react";
import Cookies from "universal-cookie";
import InputEmail from "../../components/authentication/login/inputEmail";
import InputPassoword from "../../components/authentication/login/inputPassword";
import CheckSignIn from "../../components/authentication/login/checkSignIn";

interface Form {
    email: string;
    password: string;
    rememberMe: boolean;
}

const LoginAdmin = () => {
    const [loading, setLoading] = useState(false);
    const [emailError, setEmailError] = useState<boolean>(false);
    const [passwordError, setPasswordError] = useState<boolean>(false);

    //Handle form
    const [form, setForm] = useState<Form>({
        email: "",
        password: "",
        rememberMe: false,
    });

    const handleRememberMe = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, rememberMe: !form.rememberMe });
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    //handle submit
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        try {
          const res = await axios.post("/api/auth/", form);
          console.log(res.data);
          if (res.data.status === 200) {
            console.log(res.data);
            const cookies = new Cookies();
            if (res.data.rememberMe) {
              cookies.set("token", res.data.token, {
                path: "/",
                expires: new Date(Date.now() + 12096e5),
              });
              cookies.set("payload", res.data.payload, {
                path: "/",
                expires: new Date(Date.now() + 12096e5),
              });
            } else {
              cookies.set("token", res.data.token, { path: "/" });
              cookies.set("payload", res.data.payload, { path: "/" });
            }
            setEmailError(false);
            setPasswordError(false);
          } else if (res.data.status === 404) {
            setEmailError(true);
          } else if (res.data.status === 401) {
            setPasswordError(true);
          }
        } catch (err) {
          console.log(err);
        } finally {
          setLoading(false);
        }
      };

    return(
        <div className="w-screen h-screen flex bg-white text-white">
            <div className="w-[45%] relative">
                <img
                    src="/images/loginAdmin.svg"
                    alt="login Background"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Form Section */}
            <div className="flex flex-1 flex-col px-12  justify-center bg-[#1E90FF]">
            <form onSubmit={handleSubmit}>
              <div className="px-6">
                <p className="hidden py-5 sm:block text-3xl font-bold ">
                      Welcome Back, Admin!
                  </p>

                  {/* email */}
                  <div className="flex flex-col sm:mt-10 ">
                    <InputEmail
                      title="Email or Phone Number"
                      inputID="email"
                      placeholder="Input your email or phone number"
                      onChange={handleInputChange}
                      description={emailError && "Email not registered"}
                    />
                  </div>
    
                  {/* Password input */}
                  <div className="flex flex-col mt-8 sm:mt-10">
                    <InputPassoword
                      title="Password"
                      inputID="password"
                      placeholder="Input your password"
                      onChange={handleInputChange}
                      description={passwordError && "Password incorrect"}
                    />
                  </div>
    
                  {/* remember me */}
                  <div className="flex items-center h-5 mt-8 sm:mt-10">
                    <CheckSignIn
                      inputID="rememberMe"
                      onChange={handleRememberMe}
                    />
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="rememberMe"
                      >
                        Keep me signed in
                      </label>
                    </div>
                  </div>
    
                  {/* Submit button */}
                  <button
                    type="submit"
                    className="w-full py-3 bg-[#D2F1FF] mt-8 rounded-md text-[#0F53B7] font-bold sm:mt-10"
                  >
                    {loading ? (
                      <div className="flex flex-row gap-x-2 justify-center items-center">
                        <span className="loading loading-spinner loading-sm md:loading-md"></span>
                        <p className="text-sm md:text-base">Loading</p>
                      </div>
                    ) : (
                      "SIGN IN"
                    )}
                  </button>  
                </div>   
            </form>
            </div>

        </div>
    )
}

export default LoginAdmin