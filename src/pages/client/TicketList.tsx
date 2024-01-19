import { FiFilter } from "react-icons/fi";
import { MdOutlineSort } from "react-icons/md";
import HeaderLayout from "../../components/client/headerLayout";
import HeaderFill from "../../components/client/flightList/headerFill";
import BodyLayout from "../../components/client/bodyLayout";
import BodyComponent from "../../components/client/flightList/bodyComponent";

const TicketList = () => {
  return (
    <section className="w-full min-h-screen bg-[#f7f7f7] relative">
      <HeaderLayout>
        <HeaderFill
          departure="Yogyakarta"
          departureCode="YIA"
          arrival="Balikpapan"
          arrivalCode="BPN"
          date="Thu, 25 Jan"
          passenger={2}
          seatClass="Economy"
        />
      </HeaderLayout>

      {/* Body */}
      {/* <div className="w-full sm:w-[360px] mx-auto min-h-screen bg-[#E3EEFF] pt-[3.75rem] pb-20"></div> */}
      <BodyLayout paddingBottomSize="5rem">
        <BodyComponent />
      </BodyLayout>

      {/* Bottom Navbar */}
      <div className="fixed left-0 right-0 bottom-0 mx-auto w-full sm:w-[360px] h-[3.8rem] bg-[#1E90FF] rounded-t-xl flex justify-center items-center gap-x-12">
        {/* Filter */}
        <button className="flex flex-col items-center gap-y-1 text-white hover:text-[#CCCCCC]">
          <FiFilter className="w-4 h-4 " />
          <p className="text-sm ">Filter</p>
        </button>
        {/* Sort */}
        <button className="flex flex-col items-center gap-y-1 text-white hover:text-[#CCCCCC]">
          <MdOutlineSort className="w-4 h-4" />
          <p className="text-sm">Sort</p>
        </button>
      </div>
    </section>
  );
};

export default TicketList;
