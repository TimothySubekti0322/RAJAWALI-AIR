// import { useEffect } from "react";
import axios from "axios";

const DepartureAPI: string =
  "https://rajawali-production.up.railway.app/api/v1/flights/departures?sourceAirportId=7cca5acf-75d9-478b-b921-f14d72e7116e&destAirportId=b4d9b11a-24b1-4af2-a374-b66f711a75a4&adultsNumber=1&infantsNumber=1&departureDate=2024-04-24&classType=ECONOMY";

const sourceAirportAPI: string =
  "https://rajawali-production.up.railway.app/api/v1/airports/7cca5acf-75d9-478b-b921-f14d72e7116e";

// const destAirportAPI: string =
//   "https://rajawali-production.up.railway.app/api/v1/airports/b4d9b11a-24b1-4af2-a374-b66f711a75a4";

const SearchTestPage = () => {
  const fetchData = async () => {
    try {
      const departure = await axios.get(DepartureAPI);
      const departureData = departure.data.data.content[0];
      const passenger = [
        {
          ageType: "CHILD",
          fullName: "",
          genderType: "",
          idCardNumber: "",
          seatId: "",
        },
        {
          ageType: "ADULT",
          fullName: "",
          genderType: "",
          idCardNumber: "",
          seatId: "",
        },
        {
          ageType: "ADULT",
          fullName: "",
          genderType: "",
          idCardNumber: "",
          seatId: "",
        },
      ];
      localStorage.setItem("passengers", JSON.stringify(passenger));
      console.log(departureData);

      const sourceAirport = await axios.get(sourceAirportAPI);
      localStorage.setItem(
        "sourceAirport",
        JSON.stringify(sourceAirport.data.data)
      );
      console.log(sourceAirport.data.data);

      //   const destAirport = await axios.get(destAirportAPI);
      //   console.log(destAirport.data.data);
      const destAirportData = {
        id: "b4d9b11a-24b1-4af2-a374-b66f711a75a4",
        name: "Papua International Airport",
        country: "Indonesia",
        city: "Papua",
        cityCode: "PAU",
        createdAt: "2024-01-15T18:06:27.896758",
        updatedAt: "2024-01-24T13:08:17.048652",
      };
      localStorage.setItem(
        "destinationAirport",
        JSON.stringify(destAirportData)
      );

      const passengerFromLocalStorage = localStorage.getItem(
        "passengers"
      ) as string;
      console.log(JSON.parse(passengerFromLocalStorage));

      localStorage.setItem("date", "2024-04-24");

      localStorage.setItem("classType", "ECONOMY");
    } catch (error) {
      console.log(error);
    }
  };
  const handleClick = async () => {
    await fetchData();
  };
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <button
        className="bg-[#1E90FF] px-8 py-2 text-white"
        onClick={handleClick}
      >
        Search
      </button>
    </div>
  );
};

export default SearchTestPage;
