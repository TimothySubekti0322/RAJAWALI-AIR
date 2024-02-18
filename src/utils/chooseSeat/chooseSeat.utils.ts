import { FlightDetailList } from "../ticketList/ticketList.utils";
import { FlightPassengerSeat, Seat } from "./chooseSeat.interface";

export const createGridTemplateColumns = (seatPerCol: number) => {
  let gridTemplateColumns = "";
  for (let i = 0; i < seatPerCol; i++) {
    gridTemplateColumns += "2fr ";
  }
  gridTemplateColumns += "1fr ";
  for (let i = 0; i < seatPerCol; i++) {
    gridTemplateColumns += "2fr ";
  }
  return gridTemplateColumns;
};

export const createSeatAlphabet = (seatPerCol: number) => {
  const seatAlphabet: string[] = [];
  for (let i = 0; i < seatPerCol; i++) {
    seatAlphabet.push(String.fromCharCode(65 + i));
  }
  seatAlphabet.push("");
  for (let i = 0; i < seatPerCol; i++) {
    seatAlphabet.push(String.fromCharCode(65 + seatPerCol + i));
  }
  return seatAlphabet;
};

export const initFlightPassengerSeatData = () => {
  const flightPassengerSeatData: FlightPassengerSeat[] = [];
  const passengersLength: number =
    JSON.parse(localStorage.getItem("passengers") as string).length || 0;
  const localFlightId: string[] = JSON.parse(
    localStorage.getItem("flightId") as string
  );
  if (localFlightId.length === 0 || passengersLength === 0) {
    return [];
  }

  // Check if Seat Number have inputed befor
  const flightDetailList: FlightDetailList[] = JSON.parse(
    localStorage.getItem("flightDetailList") as string
  );

  localFlightId.forEach((flightId, index) => {
    const selectedSeat: string[] = [];
    for (let i = 0; i < passengersLength; i++) {
      selectedSeat.push(flightDetailList[index].passengerDetailList[i].seatId);
    }
    flightPassengerSeatData.push({ flightId, selectedSeat });
  });
  return flightPassengerSeatData;
};

export const saveFlightPassengerSeatData = (
  flightDatas: FlightPassengerSeat[]
) => {
  if (!Array.isArray(flightDatas)) {
    console.error("flightDatas is not an array");
    return;
  }
  const flightDetailList: FlightDetailList[] = JSON.parse(
    localStorage.getItem("flightDetailList") as string
  );
  flightDatas.forEach((flightData, flightDataIndex) => {
    flightData.selectedSeat.forEach((seat, index) => {
      flightDetailList[flightDataIndex].passengerDetailList[index].seatId =
        seat;
    });
  });
  localStorage.setItem("flightDetailList", JSON.stringify(flightDetailList));
};

export const getSeatNumber = (seats: Seat[], selectedSeat: string) => {
  let seatNumber = "";
  const seat = seats.find((seat) => seat.id === selectedSeat);
  if (seat) {
    seatNumber = seat.seatNo;
  }
  return seatNumber;
}