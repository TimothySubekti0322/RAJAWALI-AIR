import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
const SubscribeSection = () => {
  const [email, setEmail] = useState("");
  const subscribeHandler = () => {
    if (email === "") {
      toast.error("Email must be filled");
      return;
    }
    if (!isValidEmail(email)) {
      toast.error("Invalid email format");
      return;
    }
    toast.success("Subscribe Success");
  };
  return (
    <div className="w-full h-screen bg-white text-[#505050] border-t-4 border-[#1E90FF] flex items-center pl-16">
      {/* Left Section */}
      <Toaster />
      <div className="flex flex-col w-4/5">
        <p className="text-2xl font-bold 2xl:text-3xl">
          <span className="text-[#1E90FF]">Subscribe</span> to receive an
          exclusive personal deals!
        </p>
        <p className="mt-3 font-semibold">
          Sign-up to access for personalised recommendation and special offers
        </p>
        <div className="flex mt-6">
          <input
            type="text"
            placeholder="Enter your email address"
            className="bg-[#EDEDED] px-4 py-4 rounded-xl w-3/5 text-[#505050] font-semibold"
            onChange={(event) => setEmail(event.target.value)}
          />
          <button
            className="bg-[#1E90FF] hover:bg-[#0C70DD] ml-8 rounded-xl text-white py-2 px-16 font-bold"
            onClick={subscribeHandler}
          >
            Subscribe!
          </button>
        </div>
      </div>

      {/* Right Section */}
      <img
        src="/images/subscribe-section/ilustration.svg"
        alt="subscribe ilustration"
        className="max-h-screen grow"
      />
    </div>
  );
};

const isValidEmail = (email: string) => {
  // Regular expression for a valid email address
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  return emailRegex.test(email);
};

export default SubscribeSection;
