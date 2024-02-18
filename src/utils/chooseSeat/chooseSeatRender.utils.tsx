import { Seat } from "./chooseSeat.interface";

export const restroomRender = (seatPerCol: number): JSX.Element[] => {
  const jsxArray: JSX.Element[] = [];
  for (let i = 1; i <= seatPerCol * 2 + 1; i++) {
    if (i !== seatPerCol) {
      jsxArray.push(<p key={`empty-${i}`}></p>);
    } else {
      jsxArray.push(
        <img
          key={`seat-${i}`}
          src="/images/choose-seat/restroom.svg"
          alt="restroom"
        />
      );
    }
  }
  return jsxArray;
};

export const seatRender = (
  seats: Seat[],
  seatPerCol: number,
  rowLength: number,
  selectedSeat: string[],
  handleSelectSeat: (seatNo: string) => void
): JSX.Element[] => {
  if (seats.length === 0) {
    return [];
  }
  const jsxArray: JSX.Element[] = [];
  const seatsLength: number = seats.length;
  let seatIndex = 0;
  for (let i = 0; i < rowLength; i++) {
    for (let j = 0; j < seatPerCol * 2 + 1; j++) {
      // if j is equal to seatPerCol, then push a paragraph with seatNo (Middle number between two columns of seats)
      if (j === seatPerCol) {
        const seat: Seat = seats[seatIndex - 1];
        const jsxElement = <p>{seat.seatNo.charAt(0)}</p>;
        jsxArray.push(jsxElement);
        continue;
      }
      // if seatIndex is greater than seatsLength, then push an empty paragraph
      else if (seatIndex >= seatsLength) {
        const jsxElement = (
          <button className="w-[90%] pt-[90%] bg-[#1E90FF] hover:bg-[#0C70DD] text-sm rounded-md invisible"></button>
        );
        jsxArray.push(jsxElement);
        continue;
      }
      // render seat
      else {
        const seat: Seat = seats[seatIndex];
        let jsxElement = (
          <button
            className="w-[90%] h-[90%] bg-[#1E90FF] hover:bg-[#0C70DD] text-sm rounded-md flex justify-center items-center"
            onClick={() => handleSelectSeat(seat.id)}
          ></button>
        );
        if (!seat.isAvailable) {
          jsxElement = (
            <button
              className="w-[90%] h-[90%] bg-[#9E9E9E] text-sm rounded-md flex justify-center items-center"
              disabled={true}
            ></button>
          );
        } else if (selectedSeat.includes(seat.id)) {
          jsxElement = (
            <button className="w-[90%] h-[90%] p-1 bg-[#1E90FF] hover:bg-[#0C70DD] text-sm rounded-md flex justify-center items-center">
              <div className="w-full h-full bg-[#7CBAF6] hover:bg-[#5A98D4] flex items-center justify-center rounded-md font-bold ">
                {selectedSeat.indexOf(seat.id) + 1}
              </div>
            </button>
          );
        }
        jsxArray.push(jsxElement);
        seatIndex++;
      }
    }
  }
  return jsxArray;
};
