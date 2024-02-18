import { useState } from "react";
import SelectedFlight from "./SelectedFlight";
import TicketList from "./TicketList";
import BookingProvider from "../../providers/LocalStorageProvider";

const ChooseTicket = () => {
  const flights: number = Number(localStorage.getItem("flights") as string);
  const [indexTicket, setIndexTicket] = useState<number>(0);
  const [ticketSelected, setTicketSelected] = useState<boolean>(true);
  return (
    <BookingProvider requiredItem={["flights"]}>
      {ticketSelected ? (
        <TicketList
          indexTicket={indexTicket}
          ticketSelected={ticketSelected}
          setTicketSelected={setTicketSelected}
        />
      ) : (
        <SelectedFlight
          flights={flights}
          indexTicket={indexTicket}
          ticketSelected={ticketSelected}
          setIndexTicket={setIndexTicket}
          setTicketSelected={setTicketSelected}
          flightId={
            JSON.parse(localStorage.getItem("flightId") as string)[indexTicket]
          }
        />
      )}
    </BookingProvider>
  );
};

export default ChooseTicket;
