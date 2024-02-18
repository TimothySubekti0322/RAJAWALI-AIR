import React, { useEffect, useState } from "react";
import { Seat } from "../../../utils/chooseSeat/chooseSeat.interface";
import {
  createGridTemplateColumns,
  createSeatAlphabet,
} from "../../../utils/chooseSeat/chooseSeat.utils";
import {
  restroomRender,
  seatRender,
} from "../../../utils/chooseSeat/chooseSeatRender.utils";

interface FirstClassSeatProps {
  seats: Seat[];
  seatPerCol: number;
  selectedSeat: string[];
  handleSelectSeat: (seatNo: string) => void;
}

const FirstClassSeat: React.FC<FirstClassSeatProps> = ({
  seats,
  seatPerCol,
  selectedSeat,
  handleSelectSeat,
}) => {
  const rowLength: number = Math.ceil(seats.length / (seatPerCol * 2));
  const gridTemplateColumns = createGridTemplateColumns(seatPerCol);
  const gridTemplateRows = `repeat(${rowLength + 2}, 1fr)`;
  const seatAlphabet = createSeatAlphabet(seatPerCol);

  const [renderedSeats, setRenderedSeats] = useState<JSX.Element[]>([]);

  useEffect(() => {
    // Call seatRender function whenever selectedSeat changes
    const newRenderedSeats = seatRender(
      seats,
      seatPerCol,
      rowLength,
      selectedSeat,
      handleSelectSeat
    );
    setRenderedSeats(newRenderedSeats);
  }, [selectedSeat, seats, seatPerCol, rowLength, handleSelectSeat]);

  return (
    <div
      className="grid items-center px-8 py-4 gap-x-2 gap-y-4 justify-items-center"
      style={{
        gridTemplateColumns: gridTemplateColumns,
        gridTemplateRows: gridTemplateRows,
      }}
    >
      {seatAlphabet.map((alphabet, index) => (
        <p key={index}>{alphabet}</p>
      ))}
      {restroomRender(seatPerCol)}
      {renderedSeats}
    </div>
  );
};

export default FirstClassSeat;
