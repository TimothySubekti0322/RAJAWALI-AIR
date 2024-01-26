import { FaChevronDown } from "react-icons/fa6";

const FlightCard = () => {
  return (
    <button
      className="flex flex-col w-full px-4 py-3 bg-white rounded-lg shadow-md "
      onClick={() => (window.location.href = "/selectedFlight")}
    >
      {/* Logo and RW225 */}
      <div className="flex items-center">
        <img
          src="/images/blue-rajawali-air-logo.svg"
          alt="Blue Rajawali Logo"
        />
        <p className="text-[#757575] text-[0.625rem] 2xl:text-xs ml-2">
          RW225, RW752
        </p>
      </div>

      {/* Time and Price */}
      <div className="flex items-start justify-between w-full mt-5">
        {/* Time */}
        <div className="flex items-center gap-x-3">
          <div className="flex flex-col items-center">
            <p className="mt-3 text-xs font-semibold text-black 2xl:text-sm">
              08:15
            </p>
            <p className="text-[#757575] text-[0.5rem] 2xl:text-[0.625rem]">
              YIA
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[#757575] text-[0.5rem] 2xl:text-[0.625rem]">
              1h 50m
            </p>
            <div>
              <img src="/images/long-arrow.svg" alt="long arrow" />
            </div>
            <p className="text-[#757575] text-[0.5rem] 2xl:text-[0.625rem]">
              Direct
            </p>
          </div>
          <div className="flex flex-col items-center mt-3">
            <p className="text-xs font-semibold text-black 2xl:text-sm">
              09:05
            </p>
            <p className="text-[#757575] text-[0.5rem] 2xl:text-[0.625rem]">
              BPN
            </p>
          </div>
        </div>

        {/* Price */}
        <div className="flex flex-col items-end">
          <div className="flex items-center mt-2">
            <p className="text-[#1E90FF] font-semibold">IDR 1.179.200/</p>
            <p className="text-xs text-[#757575]">pax</p>
          </div>
          <div className="flex mt-[0.1rem] gap-x-1">
            <img
              src="/images/loyalty-point-logo.svg"
              alt="loyalty point logo"
            />
            <p className="text-[0.625rem] text-[#757575] font-semibold">
              10000 Loyalty Points
            </p>
          </div>
        </div>
      </div>

      {/* Facility icon */}
      <div className="flex mt-4 gap-x-4">
        <div className="py-1 px-[0.35rem] bg-[#EDEDED] rounded-md">
          <img src="/images/suitcase.svg" alt="" />
        </div>
        <div className="py-1 px-[0.35rem] bg-[#EDEDED] rounded-md">
          <img src="/images/culinary.svg" alt="" />
        </div>
      </div>

      {/* Reschedule & Chevron Down */}
      <div className="flex items-center justify-between w-full mt-3">
        <div className="text-[#1E90FF] bg-[#D2F1FF] rounded-lg text-[0.625rem] 2xl:text-xs py-1 px-2">
          Reschedule & Refund Options
        </div>
        <button className="bg-[#EDEDED] p-[0.25rem] rounded-[8px]">
          <FaChevronDown className="text-sm text-black" />
        </button>
      </div>
    </button>
  );
};

export default FlightCard;
