import { FiFilter } from "react-icons/fi";
import { MdOutlineSort } from "react-icons/md";
import BodyLayout from "../../components/client/bodyLayout";
import HeaderLayout from "../../components/client/headerLayout";

const TravelAddOns = () => {
  return (
    <section className="w-full min-h-screen bg-[#f7f7f7] relative">
      <HeaderLayout>
        <div className="flex ">
          <div className="flex-initial w-14 h-14">sfsdfsdfsf</div>
          <div className="flex-initial text-center text-stone-50 text-base font-bold font-['Roboto'] tracking-tight">
            <p className="text-white">Travel Add-ons</p>
          </div>
        </div>
      </HeaderLayout>

      <BodyLayout paddingBottomSize="5rem">
        <div className="inline-flex pt-[1rem] px-[1rem]">
          <p className="text-black text-base font-bold font-['Roboto'] leading-snug">
            Flight Facilities
          </p>
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
