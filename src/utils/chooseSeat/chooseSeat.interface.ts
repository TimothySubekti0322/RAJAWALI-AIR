export interface Seat {
  id: string;
  seatNo: string;
  isAvailable: true;
}

export interface FlightPassengerSeat {
    flightId: string;
    selectedSeat: string[];
}