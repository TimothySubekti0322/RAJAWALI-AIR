import { AirportData, Airplane } from "../../../assets/static/TableDataTypes";

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