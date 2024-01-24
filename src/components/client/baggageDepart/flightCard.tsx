const FLightCard = () => {
  return (
    <div className="flex flex-col w-full px-4 py-4 bg-white rounded-lg shadow-md">
      <div className="flex items-center text-sm font-bold text-black gap-x-2">
        <img src="/images/blue-rajawali-air-logo.svg" alt="rajawali air logo" />
        <p className="">BPN</p>
        <img
          src="/images/long-arrow.svg"
          alt="long arrow"
          className="w-4 h-2 "
        />
        <p className="">YIA</p>
      </div>
      <p className="text-[#757575] text-xs mt-2">25 Jan 2024, 08:15 - 09:05</p>
      <p className="text-[#757575] text-xs mt-1">1h 50m</p>
      <p className="text-[#18AF5E] text-xs mt-2">
        Free baggage 20kg per passenger
      </p>
    </div>
  );
};

export default FLightCard;
