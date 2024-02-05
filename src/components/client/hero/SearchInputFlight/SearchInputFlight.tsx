import React, { useEffect, useState } from "react";
import planeDepartureIcon from "../../../../assets/images/PlaneDeparture.png";
import passengerIcon from "../../../../assets/images/passenger.png";
import addanotherIcon from "../../../../assets/images/gridicons_add.png";
import SelectPassenger, {
  AmountPassengerProps,
} from "../SelectPassenger/SelectPassenger";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const styleText: React.CSSProperties = {
  color: "var(--Neutral-700, #757575)",
  fontFamily: "Roboto",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "21px" /* 150% */,
  letterSpacing: "0.21px",
};

const anotherFlightStyle: React.CSSProperties = {
  color: "rgba(30, 144, 255, 1)",
  fontFamily: "Roboto",
  fontSize: "12px",
  fontStyle: "normal",
  fontWeight: "600",
  lineHeight: "22px",
  marginTop: "1%",
};
const options = [
  { id: "option1", label: "Round-Trip" },
  { id: "option2", label: "One-Way" },
  { id: "option3", label: "Multi-City" },
];

interface Airport {
  id: string;
  name: string;
  city: string;
  country: string;
  cityCode: string;
  createdAt: string;
  updatedAt: string;
}

const SearchInputFlight = () => {
  const [selectedOption, setSelectedOption] = useState<string>("One-Way");
  const [addAnotherCount, setAddAnotherCount] = useState<number>(1);
  const [showSelectPassenger, setShowSelectPassenger] =
    useState<boolean>(false);
  const [inputPassenger, setInputPassenger] = useState<string>("");
  const [listAirport, setListAirport] = useState<Airport[]>();
  const [passenger, setPassenger] = useState<AmountPassengerProps>({
    adultName: "Adult",
    adultValue: 0,
    childName: "Child",
    childValue: 0,
    infantName: "Infant",
    infantValue: 0,
  });
  const [selectCabin, setSelectCabin] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleOnChangeSelectedOption = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    setSelectedOption(value);
  };

  const passengerWidthStyle = {
    width: selectedOption === "Multi-City" ? "40%" : "20%",
  };

  useEffect(() => {
    axios
      .get(`https://rajawali-production.up.railway.app/api/v1/airports`)
      .then(({ data }) => {
        const resultData: Airport[] = data.data.content;
        setListAirport(resultData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // ========================= Function to save variable in local storage ===============================
  const saveReservationTypeToLocalStorage = () => {
    localStorage.setItem("reservationType", JSON.stringify(selectedOption));
  }

  const saveDateToLocalStorage = (dateString: string[], varName: string) => {
    localStorage.setItem(varName, JSON.stringify(dateString));
  }

  // const saveAirportToLocalStorage = (airportId: string, varName: string) => {
  //   const sourceAirport = listAirport?.find((s) => s.id === airportId);
  //   if (sourceAirport) {
  //     localStorage.setItem(varName, JSON.stringify(sourceAirport));
  //   }
  // }

  const savePassengersToLocalStorage = () => {
    const passengers = [];

    for (let i = 0; i < passenger.adultValue; i ++) {
      passengers.push({
        seatId: "",
        genderType: "",
        ageType: "ADULT",
        fullName: "",
        idCardNumber: ""
      })
    }
    for (let i = 0; i < passenger.childValue; i ++) {
      passengers.push({
        seatId: "",
        genderType: "",
        ageType: "CHILD",
        fullName: "",
        idCardNumber: ""
      })
    }
    for (let i = 0; i < passenger.infantValue; i ++) {
      passengers.push({
        seatId: "",
        genderType: "",
        ageType: "INFANT",
        fullName: "",
        idCardNumber: ""
      })
    }

    localStorage.setItem("passengers", JSON.stringify(passengers));
    localStorage.setItem("classType", JSON.stringify(selectCabin));
  }
  // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


  const handleSearchFlight = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const sourceAirportId = formData.get("sourceAirportId") as string;
    const destAirportId = formData.get("destAirportId") as string;
    const departureDate = formData.get("departureDate") as string;
    const returnDate = formData.get("returnDate") as string;

    const dates: string[] = [
      departureDate
    ]
    const sourceAirports: string[] = [sourceAirportId];
    const destAirports: string[] = [destAirportId];
    if (returnDate) dates.push(returnDate);
    if (selectedOption == "Multi-City") {
      for (let i = 0; i < addAnotherCount; i ++) {
        const date = formData.get(`departureDate${i}`) as string;
        const sourceAirport = formData.get(`sourceAirport${i}`) as string;
        const destAirport = formData.get(`destAirport${i}`) as string;
        dates.push(date)
        sourceAirports.push(sourceAirport);
        destAirports.push(destAirport)
      }
    }

    savePassengersToLocalStorage();
    // saveAirportToLocalStorage(sourceAirportId, "sourceAirport");
    // saveAirportToLocalStorage(destAirportId, "destinationAirport");
    localStorage.setItem("sourceAirport", JSON.stringify(sourceAirports));
    localStorage.setItem("destinationAirport", JSON.stringify(destAirports))
    saveDateToLocalStorage(dates, "date");
    saveReservationTypeToLocalStorage();

    // const queryParam = `sourceAirportId=${sourceAirportId}&destAirportId=${destAirportId}&departureDate=${departureDate}&classType=${selectCabin?.toUpperCase()}&adultsNumber=${passenger.adultValue}&childsNumber=${passenger.childValue}&infantsNumber=${passenger.infantValue}`;
    navigate(`ticketList`);
  }

  const renderAnotherFlight = () => {
    const flights = [];
    for (let i = 1; i < addAnotherCount; i++) {
      flights.push(
        <div className="flex flex-row items-end justify-end w-full gap-3">
          {selectedOption === "Multi-City" && (
            <div className={"flex w-full gap-3"}>
              <div className="flex">
                <div>
                  <label
                    className="w-full max-w-xs form-control"
                    style={styleText}
                  >
                    <div className="label" style={styleText}>
                      <span>From</span>
                    </div>
                    <div className="relative">
                      <select className="pl-8 bg-transparent select select-bordered w-[95%]" name={`sourceAirportId${i}`}>
                        <option disabled selected>
                          Where From
                        </option>
                        {listAirport?.map((item) => (
                          <option key={item.id} value={item.id}>
                            {item.name} ({item.cityCode})
                          </option>
                        ))}
                      </select>
                      <div className="absolute left-3 top-4">
                        <img
                          src={planeDepartureIcon}
                          alt="Airplane Icon"
                          className="w-4 h-4"
                        />
                      </div>
                    </div>
                  </label>
                </div>
              </div>
              <div>
                <label
                  className="w-full max-w-xs form-control"
                  style={styleText}
                >
                  <div className="label" style={styleText}>
                    <span>To</span>
                  </div>
                  <div className="relative">
                    <select className="pl-8 bg-transparent select select-bordered w-[95%]" name={`destAirportId${i}`}>
                      <option disabled selected>
                        Where To
                      </option>
                      {listAirport?.map((item) => (
                        <option key={item.id} value={item.id}>
                          {item.name} ({item.cityCode})
                        </option>
                      ))}
                    </select>
                    <div className="absolute left-3 top-4">
                      <img
                        src={planeDepartureIcon}
                        alt="Airplane Icon"
                        className="w-4 h-4"
                      />
                    </div>
                  </div>
                </label>
              </div>
              <div style={{ width: "20%" }}>
                <label
                  className="w-full max-w-xs form-control"
                  style={styleText}
                >
                  <div className="label" style={styleText}>
                    <span>Departure Date</span>
                  </div>
                  <input
                    type={"date"}
                    name={`departureDate${i}`}
                    className="w-full px-3 py-2 bg-transparent rounded-lg input input-bordered"
                  />
                </label>
              </div>
            </div>
          )}
        </div>
      );
    }
    return flights;
  };

  const submitPassengerAmount = () => {
    const total =
      passenger.adultValue + passenger.childValue + passenger.infantValue;
    setInputPassenger(`${total} Passenger, ${selectCabin} `);
    setShowSelectPassenger(!showSelectPassenger);
  };

  return (
    <>
      {showSelectPassenger && (
        <SelectPassenger
          setAmountPassenger={setPassenger}
          amountPassenger={passenger}
          selectCabin={selectCabin}
          setSelectCabin={setSelectCabin}
          onSubmit={submitPassengerAmount}
        />
      )}
      <form
        className="flex flex-col w-full gap-3 px-8 py-6 rounded-2xl "
        style={{ backgroundColor: "rgba(237, 237, 237, 0.8)" }}
        onSubmit={handleSearchFlight}
      >
        <div className="container flex flex-col ">
          <div className="sm:w-auto">
            {options.map((option) => (
              <label key={option.id} className="inline-flex items-center">
                <input
                  type="radio"
                  id={option.label}
                  name="radioOptions"
                  value={option.label}
                  defaultChecked={option.label === "One-Way"}
                  // checked={option.id === "option2"}
                  onChange={handleOnChangeSelectedOption}
                  className="w-5 h-5 text-indigo-600 form-radio radio radio-primary"
                />
                <span className="ml-2 mr-12" style={styleText}>
                  {option.label}
                </span>
              </label>
            ))}
          </div>
          <div className="flex gap-3 lg:flex-row md:flex-col sm:flex-col">
            <div className="flex gap-5">
              <div>
                <label
                  className="w-full max-w-xs form-control"
                  style={styleText}
                >
                  <div className="label" style={styleText}>
                    <span>From</span>
                  </div>
                  <div className="relative">
                    <select className="pl-8 bg-transparent select select-bordered w-[97%]" name="sourceAirportId">
                      <option disabled selected>
                        Where From
                      </option>
                      {listAirport?.map((item) => (
                        <option key={item.id} value={item.id}>
                          {item.name} ({item.cityCode})
                        </option>
                      ))}
                    </select>
                    <div className="absolute left-3 top-4">
                      <img
                        src={planeDepartureIcon}
                        alt="Airplane Icon"
                        className="w-4 h-4"
                      />
                    </div>
                  </div>
                </label>
              </div>
            </div>
            <div>
              <label className="w-full max-w-xs form-control" style={styleText}>
                <div className="label" style={styleText}>
                  <span>To</span>
                </div>
                <div className="relative">
                  <select className="pl-8 bg-transparent select select-bordered w-[97%]" name="destAirportId">
                    <option disabled selected>
                      Where To
                    </option>
                    {listAirport?.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.name} ({item.cityCode})
                      </option>
                    ))}
                  </select>
                  <div className="absolute left-3 top-4">
                    <img
                      src={planeDepartureIcon}
                      alt="Airplane Icon"
                      className="w-4 h-4"
                    />
                  </div>
                </div>
              </label>
            </div>
            <div style={{ width: "20%" }}>
              <label className="w-full max-w-xs form-control" style={styleText}>
                <div className="label" style={styleText}>
                  <span>Departure Date</span>
                </div>
                <input
                  type={"date"}
                  name={"departureDate"}
                  className="w-full px-3 py-2 bg-transparent rounded-lg input input-bordered"
                />
              </label>
            </div>
            {selectedOption !== "Multi-City" && (
              <div style={{ width: "20%" }}>
                <label
                  className="w-full max-w-xs form-control"
                  style={styleText}
                >
                  <div className="label" style={styleText}>
                    <span>Return Date</span>
                  </div>
                  <input
                    type={"date"}
                    name={"returnDate"}
                    className="w-full px-3 py-2 rounded-lg input input-bordered"
                    disabled={selectedOption === "One-Way"}
                    style={
                      selectedOption === "One-Way"
                        ? { backgroundColor: "rgba(194, 194, 194, 0.7)" }
                        : { backgroundColor: "transparent" }
                    }
                  />
                </label>
              </div>
            )}
            <div style={passengerWidthStyle}>
              <label className="form-control" style={styleText}>
                <div className="label" style={styleText}>
                  <span>Passenger, Class</span>
                </div>
                <div className="relative">
                  <input
                    className="block w-full pl-8 bg-transparent input input-bordered"
                    type={"text"}
                    placeholder={"0 Passenger"}
                    value={inputPassenger}
                    onClick={() => setShowSelectPassenger(true)}
                  />
                  <div className="absolute left-3 top-4">
                    <img
                      src={passengerIcon}
                      alt="Airplane Icon"
                      className="w-4 h-4"
                    />
                  </div>
                </div>
              </label>
            </div>
          </div>
        </div>
        {renderAnotherFlight()}
        <div className="flex flex-row items-end justify-end w-full gap-3">
          {selectedOption === "Multi-City" && (
            <div className={"flex w-full gap-3"}>
              <div className="flex">
                <div>
                  <label
                    className="w-full max-w-xs form-control"
                    style={styleText}
                  >
                    <div className="label" style={styleText}>
                      <span>From</span>
                    </div>
                    <div className="relative">
                      <select className="pl-8 bg-transparent select select-bordered w-[95%]" name={'sourceAirport0'}>
                        <option disabled selected>
                          Where From
                        </option>
                        {listAirport?.map((item) => (
                          <option key={item.id} value={item.id}>
                            {item.name} ({item.cityCode})
                          </option>
                        ))}
                      </select>
                      <div className="absolute left-3 top-4">
                        <img
                          src={planeDepartureIcon}
                          alt="Airplane Icon"
                          className="w-4 h-4"
                        />
                      </div>
                    </div>
                  </label>
                </div>
              </div>
              <div>
                <label
                  className="w-full max-w-xs form-control"
                  style={styleText}
                >
                  <div className="label" style={styleText}>
                    <span>To</span>
                  </div>
                  <div className="relative">
                    <select className="pl-8 bg-transparent select select-bordered w-[95%]" name={'destAirport0'}>
                      <option disabled selected>
                        Where To
                      </option>
                      {listAirport?.map((item) => (
                        <option key={item.id} value={item.id}>
                          {item.name} ({item.cityCode})
                        </option>
                      ))}
                    </select>
                    <div className="absolute left-3 top-4">
                      <img
                        src={planeDepartureIcon}
                        alt="Airplane Icon"
                        className="w-4 h-4"
                      />
                    </div>
                  </div>
                </label>
              </div>
              <div>
                <label
                  className="w-full max-w-xs form-control"
                  style={styleText}
                >
                  <div className="label" style={styleText}>
                    <span>Departure Date</span>
                  </div>
                  <input
                    type={"date"}
                    className="w-full px-3 py-2 bg-transparent rounded-lg input input-bordered"
                    name={'departureDate0'}
                  />
                </label>
              </div>
            </div>
          )}
          <button
            className="btn text-white border-0 bg-[#1E90FF] w-[30%] hover:bg-[#0C70DD]"
            type={"submit"}
            // onClick={handleSearchFlight}
          >
            Let's Search
          </button>
        </div>
        {selectedOption === "Multi-City" && (
          <div className={"flex gap-5 items-center"} style={anotherFlightStyle}>
            <div
              className={"flex gap-1"}
              style={{ cursor: "pointer" }}
              onClick={() => setAddAnotherCount(addAnotherCount + 1)}
            >
              <img src={addanotherIcon} alt={"+"} /> ADD ANOTHER FLIGHT
            </div>
            {addAnotherCount > 1 && (
              <div
                className={"flex gap-1"}
                style={{ cursor: "pointer", color: "red" }}
                onClick={() => setAddAnotherCount(addAnotherCount - 1)}
              >
                REMOVE ANOTHER FLIGHT
              </div>
            )}
          </div>
        )}
      </form>
    </>
  );
};
export default SearchInputFlight;
