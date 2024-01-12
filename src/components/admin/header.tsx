import { useState } from "react";
import { FaRegBell } from "react-icons/fa";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import Avatar from "@mui/material/Avatar";

const Header = () => {
  const [chevronDown, setChevronDown] = useState(true);

  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    window.location.href = "/login";
  };
  return (
    <>
      <div className="flex flex-row items-center justify-between">
        <span className="text-[#1E90FF] text-lg font-bold">Hallo!</span>
        <p className="ml-2 text-base font-medium">Admin</p>
      </div>
      <div className="flex gap-x-4">
        <button className="bg-[#A4E0FF] p-2 rounded-full">
          <FaRegBell className="w-5 h-5 text-[#1E90FF] font-bold" />
        </button>
        <Avatar
          alt="Placeholder"
          src="/images/avatar.jpeg"
          sx={{ height: "2.25rem", width: "2.25rem" }}
        />

        <button
          className="p-0 bg-white border-0 focus:outline-none"
          onClick={() => setChevronDown(!chevronDown)}
        >
          {chevronDown ? (
            <FaChevronDown className="w-4 h-4 font-bold text-black cursor-pointer" />
          ) : (
            <FaChevronUp className="w-4 h-4 font-bold text-black cursor-pointer" />
          )}
        </button>
      </div>

      {/* Signout Button */}
      {!chevronDown && (
        <button
          className="absolute right-0 flex justify-center h-10 bg-white border-[#C2C2C2] rounded-md outline-none border-1 w-32 -bottom-10 focus:outline-none hover:bg-[#BA2920] hover:text-white"
          onClick={logoutHandler}
        >
          Log Out
        </button>
      )}
    </>
  );
};

export default Header;
