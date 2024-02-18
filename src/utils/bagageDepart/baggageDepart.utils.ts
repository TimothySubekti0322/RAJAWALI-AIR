import { FlightDetailList } from "../ticketList/ticketList.utils";

export interface PassangerBaggage {
  passengerIndex: number;
  baggageAddOns: number | undefined;
}

export interface BaggageDepart {
  flightId: string;
  passangerBaggage: PassangerBaggage[];
}

export function createInitialBaggageData(): BaggageDepart[] {
  const flightId = JSON.parse(localStorage.getItem("flightId") as string);
  const passengers = JSON.parse(localStorage.getItem("passengers") as string);
  if (!flightId) {
    return [];
  }
  const initialBaggageData: BaggageDepart[] = [];
  let initialPassengerBaggageArray: PassangerBaggage[] = [];

  for (let i = 0; i < flightId.length; i++) {
    for (let j = 0; j < passengers.length; j++) {
      const initialPassengerBaggage: PassangerBaggage = {
        passengerIndex: j,
        baggageAddOns: undefined,
      };
      initialPassengerBaggageArray.push(initialPassengerBaggage);
    }

    initialBaggageData.push({
      flightId: flightId[i],
      passangerBaggage: initialPassengerBaggageArray,
    });

    // Reset the initialPassengerBaggageArray
    initialPassengerBaggageArray = [];
  }
  return initialBaggageData;
}

export function generateArrayWithValue(num: number, value: number) {
  return Array(num).fill(value);
}

export function addBaggageAddOnsToLocalStorage(baggageData: BaggageDepart[]) {
  const flightDetailList: FlightDetailList[] = JSON.parse(localStorage.getItem("flightDetailList") as string);
  for (let i = 0; i < flightDetailList.length; i++) {
    for(let j = 0; j < flightDetailList[i].passengerDetailList.length; j++) {
      flightDetailList[i].passengerDetailList[j].bagageAddOns = baggageData[i].passangerBaggage[j].baggageAddOns;
      if (!baggageData[i].passangerBaggage[j].baggageAddOns) {
        flightDetailList[i].passengerDetailList[j].bagageAddOns = 0;
      }
    }
  }
  localStorage.setItem("flightDetailList", JSON.stringify(flightDetailList));
}
