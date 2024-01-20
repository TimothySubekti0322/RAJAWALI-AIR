import { FiFilter } from "react-icons/fi";
import { MdOutlineSort } from "react-icons/md";
import BodyLayout from "../../components/client/bodyLayout";
import HeaderLayout from "../../components/client/headerLayout";
import { FaArrowLeft } from "react-icons/fa";
import { FlightFacil } from "../../components/client/travelAddOns/flightFasil/FlightFacil";
// import ExtraProtections from "../../components/client/travelAddOns/extraProteksi/ExtraProtections";

const TravelAddOns = () => {
  return (
    <section className="w-full min-h-screen bg-[#f7f7f7] relative">
      <HeaderLayout>
        <div className="inline-flex items-center">
          <div className="flex-initial">
            <button
              onClick={() => {
                window.location.href = "/";
              }}
            >
              <FaArrowLeft className="text-xl text-white" />
            </button>
          </div>
          <div className="flex-initial text-center text-stone-50 text-base font-bold font-['Roboto'] tracking-tight pl-[5.31rem]">
            <p className="text-white">Travel Add-ons</p>
          </div>
        </div>
      </HeaderLayout>

      <BodyLayout paddingBottomSize="5rem">
        <div className="inline-flex pt-[1rem] px-[1rem] flex-col">
          <p className="text-black text-base font-bold font-['Roboto'] leading-snug mb-[0.5rem]">
            Flight Facilities
          </p>
          <FlightFacil
            img1="/public/images/travel-add-ons/bag.png"
            textBold="Baggage"
            paraf="You can bring up to 20kg baggage per passenger. Are you sure this is enough?"
            img2="/public/images/travel-add-ons/tambah.png"
          />
          <FlightFacil
            img1="/public/images/travel-add-ons/seat.png"
            textBold="Seat Number"
            paraf="Baggage addition successfully selected.
            Tap to view or make changes."
            img2="/public/images/travel-add-ons/check.png"
          />
          <FlightFacil
            img1="/public/images/travel-add-ons/meal.png"
            textBold="In-flight Meals"
            paraf="Don’t let yourself go hungry during the flight.
            Enjoy the meals we have prepared for you."
            img2="/public/images/travel-add-ons/tambah.png"
          />

          <p className="text-black text-base font-bold font-['Roboto'] leading-snug mb-[0.5rem] mt-[1.5rem]">
            Extra Protections
          </p>

         {/* <ExtraProtections /> */}
        </div>
      </BodyLayout>

      <div className="fixed left-0 right-0 bottom-0 mx-auto w-full sm:w-[360px] h-[3.8rem] bg-white rounded-t-sm flex justify-center items-center gap-x-12">
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

export default TravelAddOns;
