const getLocalStorageItem = (key: string): any => {
  return JSON.parse(localStorage.getItem(key) as string);
};

export const GetReservationValue = () => {
  const userId = localStorage.getItem("userId") || null;
  const classType = getLocalStorageItem("classType");
  const genderType = getLocalStorageItem("genderType");
  const fullname = getLocalStorageItem("fullName");
  const email = getLocalStorageItem("email");
  const phoneNumber = getLocalStorageItem("phoneNumber");
  const passengerList = getLocalStorageItem("passengers");
  const flightDetailList = getLocalStorageItem("flightDetailList");

  return {
    userId: userId,
    classType: classType,
    promo: "",
    genderType: genderType,
    fullname: fullname,
    email: email,
    phoneNumber: phoneNumber,
    passengerList: passengerList,
    flightDetailList: flightDetailList,
  };
};
export const GetFlightDetailList = () => {
  return JSON.parse(localStorage.getItem("flightDetailList") as string);
};
