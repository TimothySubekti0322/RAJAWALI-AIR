const FlightDetailCard = () => {
  return (
    <div className="w-full p-4 mt-6 text-black bg-white rounded-lg shadow-md">
      <p className="text-[#757575] text-sm font-semibold">
        Thursday, 31 January 2024
      </p>
      <div className="grid grid-flow-col grid-rows-5 gap-x-2">
        <div className="flex flex-col items-center justify-center col-span-1 row-span-1">
          <p className="text-sm font-semibold text-black">08:15</p>
          <p className="text-[0.625rem] text-[#757575]">25 Jan</p>
        </div>
        <div className="invisible col-span-1 row-span-3"></div>
        <div className="flex flex-col items-center justify-center col-span-1 row-span-1">
          <p className="text-sm font-semibold text-black">09:05</p>
          <p className="text-[0.625rem] text-[#757575]">25 Jan</p>
        </div>

        {/* Image Line */}
        <div className="col-span-1 row-span-5 pt-4">
          <img
            src="/images/line-decoration.svg"
            alt="line decoration"
            className="h-[16rem] max-[360px]:h-[18.5rem]"
          />
        </div>

        <div className="flex flex-col justify-center col-span-3 row-span-1">
          <p className="text-[0.75rem] text-black font-semibold">
            Yogyakarta (YIA)
          </p>
          <p className="text-[0.625rem] text-[#757575] ">
            Yogyakarta International Airport | Terminal Domestic
          </p>
        </div>
        <div className="col-span-3 row-span-3">
          <div className="flex flex-col w-full px-3 py-3 border-2 border-black rounded-xl gap-y-2">
            <div className="grid grid-flow-col grid-rows-4 gap-x-2">
              <div className="row-span-2">
                <img
                  src="/images/blue-rajawali-air-logo.svg"
                  alt="rajawali air Logo"
                  className="col-span-1 mx-auto"
                />
              </div>

              <div className="flex items-center justify-center row-span-1">
                <div className="bg-[#EDEDED] rounded-lg px-2 py-1 col-span-1 flex items-center justify-center">
                  <img src="/images/suitcase.svg" alt="suitcase Icon" />
                </div>
              </div>

              <div className="flex items-center justify-center row-span-1 pt-2">
                <div className="bg-[#EDEDED] rounded-lg px-2 py-1 col-span-1 flex items-center justify-center">
                  <img src="/images/culinary.svg" alt="culinary Icon" />
                </div>
              </div>

              <div className="flex flex-col text-[0.625rem] font-semibold col-span-9  row-span-2">
                <p className="text-black">Rajawali Air</p>
                <p className="text-[#757575]">RW-225 | Economy | 1h 50m </p>
                <p className="text-[#757575]">Direct Flight</p>
              </div>
              <div className="flex flex-col text-[0.625rem] text-[#757575] font-semibold col-span-9 justify-center">
                <p className="">Cabin Baggage 7 Kg</p>
                <p className="">Baggage 20 kg</p>
              </div>
              <div className="flex flex-col justify-center pt-2">
                <p className="text-[0.625rem] text-[#757575] font-semibold col-span-9">
                  In-flight meals
                </p>
              </div>
            </div>

            <p className="text-[#1E90FF] text-[0.625rem] mt-1">
              See more facilities
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center col-span-3 row-span-1">
          <p className="text-[0.75rem] text-black font-semibold">
            Balikpapan (BPN)
          </p>
          <p className="text-[0.625rem] text-[#757575] ">
            Sepinggan | Terminal Domestic
          </p>
        </div>
      </div>
    </div>
  );
};

export default FlightDetailCard;
