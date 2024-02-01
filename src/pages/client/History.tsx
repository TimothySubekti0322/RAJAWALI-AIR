import BodyLayout from "../../components/client/bodyLayout";
import HeaderLayout from "../../components/client/headerLayout";
import { FaArrowLeft } from "react-icons/fa";
import { FiFilter } from "react-icons/fi";
import { MdOutlineSort } from "react-icons/md";
import BodyComponentHistory from "../../components/client/history/bodyComponentHistory";

const History = () => {
  return (
    <section className="w-full min-h-screen bg-[#f7f7f7] relative">
      <HeaderLayout>
        <div className="relative flex items-center justify-center w-full h-full">
          <button
            className="absolute left-0"
            onClick={() => {
              window.location.href = "/";
            }}
          >
            <FaArrowLeft className="text-xl text-white" />
          </button>
          <div>History</div>
        </div>
      </HeaderLayout>

      <BodyLayout paddingBottomSize="5rem">
        <BodyComponentHistory />
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
export default History;