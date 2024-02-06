import { AirportData, Airplane } from "../../../assets/static/TableDataTypes";

export interface FlightData {
  airplane: Airplane;
  arrivalDate: string;
  businessAvailableSeats: number;
  businessSeatPrice: number;
  createdAt: string;
  departureDate: string;
  destinationAirport: AirportData;
  destinationTerminal: string;
  discount: number;
  economyAvailableSeats: number;
  economySeatsPrice: number;
  firstAvailableSeats: number;
  firstSeatsPrice: number;
  id: string;
  points: number;
  sourceAirport: AirportData;
  sourceTerminal: string;
  updatedAt: string;
}

export const initialFlightData: FlightData = {
  airplane: {
    id: "",
    airplaneCode: "",
  },
  arrivalDate: "",
  businessAvailableSeats: 0,
  businessSeatPrice: 0,
  createdAt: "",
  departureDate: "",
  destinationAirport: {
    id: "",
    name: "",
    country: "",
    city: "",
    cityCode: "",
  },
  destinationTerminal: "",
  discount: 0,
  economyAvailableSeats: 0,
  economySeatsPrice: 0,
  firstAvailableSeats: 0,
  firstSeatsPrice: 0,
  id: "",
  points: 0,
  sourceAirport: {
    id: "",
    name: "",
    country: "",
    city: "",
    cityCode: "",
  },
  sourceTerminal: "",
  updatedAt: "",
};

export interface RawFlightData {
  id: string;
  sourceAirport: AirportData;
  destinationAirport: AirportData;
  airplane: Airplane;
  departureDate: string;
  arrivalDate: string;
  classType: string;
  seatPrice: number;
  totalPrice: number;
  discount: number;
  availableSeats: number;
  createdAt: string;
  updatedAt: string;
  points: number;
}

export const initialRawData: RawFlightData = {
  id: "",
  sourceAirport: {
    id: "",
    name: "",
    country: "",
    city: "",
    cityCode: "",
  },
  destinationAirport: {
    id: "",
    name: "",
    country: "",
    city: "",
    cityCode: "",
  },
  airplane: {
    id: "",
    airplaneCode: "",
  },
  departureDate: "",
  arrivalDate: "",
  classType: "",
  seatPrice: 0,
  totalPrice: 0,
  discount: 0,
  availableSeats: 0,
  createdAt: "",
  updatedAt: "",
  points: 0,
};

export const initialData: RawFlightData[] = [
  {
    id: "",
    sourceAirport: {
      id: "",
      name: "",
      country: "",
      city: "",
      cityCode: "",
    },
    destinationAirport: {
      id: "",
      name: "",
      country: "",
      city: "",
      cityCode: "",
    },
    airplane: {
      id: "",
      airplaneCode: "",
    },
    departureDate: "",
    arrivalDate: "",
    classType: "",
    seatPrice: 0,
    totalPrice: 0,
    discount: 0,
    availableSeats: 0,
    createdAt: "",
    updatedAt: "",
    points: 0,
  },
];
