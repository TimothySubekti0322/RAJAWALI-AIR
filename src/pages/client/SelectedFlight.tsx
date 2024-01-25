import HeaderLayout from "../../components/client/headerLayout";
import HeaderFill from "../../components/client/headerFill";
import BodyLayout from "../../components/client/bodyLayout";
import { FaArrowRightLong } from "react-icons/fa6";
import FlightDetailCard from "../../components/client/selectedFlight/flightDetailCard";
import TicketType from "../../components/client/selectedFlight/ticketType";

const SelectedFlight = () => {
  return (
    <section
      className="w-full min-h-screen bg-[#f7f7f7] relative text-white"
      style={{ fontFamily: "Roboto" }}
    >
      <HeaderLayout>
        <HeaderFill title="Your Selected Flight" />
      </HeaderLayout>
      <BodyLayout paddingBottomSize="1.5rem">
        <div className="relative w-full h-full">
          {/* Inner Section */}
          <div className="w-full px-4 pt-4">
            <div className="flex items-center text-sm font-bold text-black gap-x-2">
              <p>Yogyakarta</p>
              <FaArrowRightLong className="text-base" />
              <p>Balikpapan</p>
            </div>
            <p className="text-xs text-[#757575] mt-2">2 Adults</p>
            <FlightDetailCard />
            <p className="mt-6 font-bold text-black">Select Your Ticket Type</p>
            <div className="flex flex-col w-full mt-4 gap-y-4">
              <TicketType type="Normal" />
              <TicketType type="Safe" />
            </div>
          </div>
        </div>
      </BodyLayout>
    </section>
  );
};

export default SelectedFlight;
