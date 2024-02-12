// Airport Data Type
type AirportData = {
  id: string;
  name: string;
  city: string;
  country: string;
  cityCode: string;
};

type AirplaneData = {
  id: string;
  airplaneCode: string;
  economySeats: number;
  businessSeats: number;
  firstSeats: number;
  economySeatsPerCol: number;
  businessSeatsPerCol: number;
  firstSeatsPerCol: number;
};

type Airplane = {
  id: string;
  airplaneCode: string;
};

type FlightData = {
  id: string;
  sourceAirport: AirportData;
  destinationAirport: AirportData;
  airplane: Airplane;
  departureDate: string;
  arrivalDate: string;
  economySeatsPrice: 350000.0;
  businessSeatsPrice: 500000.0;
  firstSeatsPrice: 750000.0;
  discount: 0.0;
};

type UserData = {
  id: string;
  isAdmin: boolean;
  fullname: string;
  phoneNumber: string;
  email: string;
  password: string;
};

type MealsData = {
  id: string;
  name: string;
  description: string;
  price: number;
  thumbnailUrl: string;
};

type user = {
  id : string;
  fullName : string;
  email : string;
}

type ResevationData = {
  no: number;
  id: string;
  promo: string;
  user: user;
  paymentStatus: string;
  classType: string;
  genderType: number;
  fullname: string;
  email: string;
  phoneNumber: string;
  totalPrice: number;
  expiredAt: string;
}

export type {
  AirportData,
  AirplaneData,
  Airplane,
  FlightData,
  UserData,
  MealsData,
  ResevationData,
};
