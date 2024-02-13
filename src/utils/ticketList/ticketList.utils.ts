function getDurationBetweenDates(startDate: string, endDate: string): string {
  const startDateTime = new Date(startDate).getTime();
  const endDateTime = new Date(endDate).getTime();

  if (isNaN(startDateTime) || isNaN(endDateTime)) {
    return "";
  }

  const duration = endDateTime - startDateTime;

  // const weeks = Math.floor(duration / (7 * 24 * 60 * 60 * 1000));
  const weeks = 0;

  const remainingDays = duration % (7 * 24 * 60 * 60 * 1000);

  const days = Math.floor(remainingDays / (24 * 60 * 60 * 1000));
  const remainingHours = remainingDays % (24 * 60 * 60 * 1000);

  const hours = Math.floor(remainingHours / (60 * 60 * 1000));
  const remainingMinutes = remainingHours % (60 * 60 * 1000);

  const minutes = Math.floor(remainingMinutes / (60 * 1000));

  const formattedDuration =
    (weeks > 0 ? weeks + "w " : "") +
    (days > 0 ? days + "d " : "") +
    (hours > 0 ? hours + "h " : "") +
    (minutes > 0 ? minutes + "m" : "");

  return formattedDuration.trim();
}

function getDaysOfMonth(date: string): number {
  const year = new Date(date).getFullYear();
  const month = new Date(date).getMonth();

  return new Date(year, month + 1, 0).getDate();
}

export interface DaysObject {
  day: string;
  date: number;
}

function getArrayOfDays(currentDate: string): DaysObject[] {
  const date = new Date(currentDate);
  const daysOfMonth = getDaysOfMonth(currentDate);
  const daysArray: DaysObject[] = [];

  const initialDay = date.getDate();

  for (let i = initialDay; i <= daysOfMonth; i++) {
    const day = new Date(date.getFullYear(), date.getMonth(), i).toLocaleString(
      "en-US",
      { weekday: "short" }
    );
    daysArray.push({ day: day, date: i });
  }

  for (let i = 1; i < initialDay; i++) {
    const day = new Date(date.getFullYear(), date.getMonth(), i).toLocaleString(
      "en-US",
      { weekday: "short" }
    );
    daysArray.push({ day: day, date: i });
  }

  return daysArray;
}

function getDayAndDate(date: string): string {
  const day = new Date(date).toLocaleString("en-US", { weekday: "short" });
  const dateNumber = new Date(date).getDate();

  return `${day}, ${dateNumber}`;
}

function getDate(date: string): number {
  return new Date(date).getDate();
}

function replaceDate(date: string, newDate: number): string {
  console.log(newDate);
  console.log(date);
  const originalDate = new Date(date);
  originalDate.setDate(newDate);

  const newDateString = originalDate.toISOString().slice(0, 10);

  console.log(newDateString);

  return newDateString;
}

function extractParamsValue(params: string): string {
  return params.split("=")[1].replace("%20", " ").replace("&", "");
}

function localStorageResourceAvailable(): boolean {
  // Search Resource on localStorage
  const localDate = localStorage.getItem("date");
  const localPassengers = localStorage.getItem("passengers");
  const localSourceAirport = localStorage.getItem("sourceAirport");
  const localDestinationAirport = localStorage.getItem("destinationAirport");
  const localClassType = localStorage.getItem("classType");

  if (
    !localDate ||
    !localPassengers ||
    !localSourceAirport ||
    !localDestinationAirport ||
    !localClassType
  ) {
    return false;
  }

  return true;
}

function searchParamaterResourceAvailable(): boolean {
  // Search Resource on Search Params
  const searchParams = new URLSearchParams(window.location.search);

  const sourceAirportId = searchParams.get("sourceAirportId");
  const destinationAirportId = searchParams.get("destAirportId");
  const adultsNumber = searchParams.get("adultsNumber");
  const departureDate = searchParams.get("departureDate");
  const classType = searchParams.get("classType");

  if (
    !sourceAirportId ||
    !destinationAirportId ||
    !adultsNumber ||
    !departureDate ||
    !classType
  ) {
    return false;
  }

  return true;
}

function resourceAvailable(): boolean {
  return localStorageResourceAvailable() || searchParamaterResourceAvailable();
}

export interface passengers {
  ageType: string;
  fullName: string;
  genderType: string;
  idCardNumber: string;
  seatId: string;
}

function getAdultsNumberFromLocalStorage(): number {
  const localPassengers = localStorage.getItem("passengers");

  if (!localPassengers) {
    return 0;
  }

  const Passengers = JSON.parse(localStorage.getItem("passengers") as string);

  const adultsNumber = Passengers.filter(
    (passenger: passengers) => passenger.ageType === "ADULT"
  ).length;

  return adultsNumber;
}

function getChildsNumberFromLocalStorage(): number {
  const localPassengers = localStorage.getItem("passengers");

  if (!localPassengers) {
    return 0;
  }

  const Passengers = JSON.parse(localStorage.getItem("passengers") as string);

  const childsNumber = Passengers.filter(
    (passenger: passengers) => passenger.ageType === "CHILD"
  ).length;

  return childsNumber;
}

function getInfantsNumberFromLocalStorage(): number {
  const localPassengers = localStorage.getItem("passengers");

  if (!localPassengers) {
    return 0;
  }

  const Passengers = JSON.parse(localStorage.getItem("passengers") as string);

  const infantsNumber = Passengers.filter(
    (passenger: passengers) => passenger.ageType === "INFANT"
  ).length;

  return infantsNumber;
}

function getTotalPassengersFromLocalStorage(): number {
  const localPassengers = localStorage.getItem("passengers");

  if (!localPassengers) {
    return 0;
  }

  const Passengers = JSON.parse(localStorage.getItem("passengers") as string);

  return Passengers.length;
}

function saveFlightIdToLocalStorage(flightId: string) {
  const currentFlightId = localStorage.getItem("flightId");
  console.log(currentFlightId);
  if (!currentFlightId) {
    console.log("Masuk");
    const flightIdStringfy = JSON.stringify([flightId]);
    localStorage.setItem("flightId", flightIdStringfy);
  } else {
    const currentFlightIdArray = JSON.parse(currentFlightId);
    if (!currentFlightIdArray.includes(flightId)) {
      currentFlightIdArray.push(flightId);
    }
    const flightIdStringfy = JSON.stringify(currentFlightIdArray);
    localStorage.setItem("flightId", flightIdStringfy);
  }
}

function removeFlightIdFromLocalStorage(index: number) {
  const currentFlightId = localStorage.getItem("flightId");
  if (!currentFlightId) {
    return;
  } else {
    const currentFlightIdArray = JSON.parse(currentFlightId);
    currentFlightIdArray.splice(index, 1);
    const flightIdStringfy = JSON.stringify(currentFlightIdArray);
    localStorage.setItem("flightId", flightIdStringfy);
  }
}

export interface PassengerDetailList {
  seatId: string;
  bagageAddOns: number | undefined;
  mealsAddOns: string[];
}

export interface FlightDetailList {
  flightId: string;
  useTravelAssurance: boolean;
  useBagageAssurance: boolean;
  useFlightDelayAssurance: boolean;
  passengerDetailList: PassengerDetailList[];
}

function initFlightDetailList() {
  const flightDetailList: FlightDetailList[] = [];
  const flightId = JSON.parse(localStorage.getItem("flightId") as string);
  const passengers = JSON.parse(localStorage.getItem("passengers") as string);
  if (!flightId) {
    return [];
  }

  for (let i = 0; i < flightId.length; i++) {
    const passengerDetailList: PassengerDetailList[] = [];
    for (let j = 0; j < passengers.length; j++) {
      const passengerDetail: PassengerDetailList = {
        seatId: "",
        bagageAddOns: 0,
        mealsAddOns: [],
      };
      passengerDetailList.push(passengerDetail);
    }
    const flightDetail: FlightDetailList = {
      flightId: flightId[i],
      useTravelAssurance: false,
      useBagageAssurance: false,
      useFlightDelayAssurance: false,
      passengerDetailList: passengerDetailList,
    };
    flightDetailList.push(flightDetail);
  }

  localStorage.setItem("flightDetailList", JSON.stringify(flightDetailList));
}

export {
  getDurationBetweenDates,
  getDaysOfMonth,
  getArrayOfDays,
  getDate,
  getDayAndDate,
  replaceDate,
  extractParamsValue,
  localStorageResourceAvailable,
  searchParamaterResourceAvailable,
  resourceAvailable,
  getAdultsNumberFromLocalStorage,
  getChildsNumberFromLocalStorage,
  getInfantsNumberFromLocalStorage,
  getTotalPassengersFromLocalStorage,
  saveFlightIdToLocalStorage,
  removeFlightIdFromLocalStorage,
  initFlightDetailList,
};
