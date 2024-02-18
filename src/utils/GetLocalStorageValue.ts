export const GetFlightDetailList = () => {
    return JSON.parse(localStorage.getItem("flightDetailList") as string);
}
