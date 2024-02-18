import { GoHomeFill } from "react-icons/go";
import { FaRegUser } from "react-icons/fa";
import { BiTime } from "react-icons/bi";
import { LuBook } from "react-icons/lu";
import HeaderLayout from "../../components/client/headerLayout";
import { FaArrowLeft } from "react-icons/fa6";
import BodyNotification from "../../components/client/notification/bodyNotif";

const Notification =()=>{
    return(
        <section className="w-full min-h-screen bg-[#f7f7f7] relative">
        <HeaderLayout>
        <div className="relative flex items-center w-full h-full">
          <button
            className="absolute left-0"
            onClick={() => {
              window.location.href = "/";
            }}
          >
            <FaArrowLeft className="text-xl text-white" />
          </button>
          
          <p className="text-white ms-8">Notification</p>
        </div>
        </HeaderLayout>

        <div className="w-full sm:w-[360px] mx-auto min-h-screen bg-white pt-[3.75rem]">
            <BodyNotification />
        </div>

        {/* Bottom Navbar */}
        <div className="fixed left-0 right-0 bottom-0 mx-auto w-full sm:w-[360px] h-[3.8rem] bg-[#1E90FF] rounded-t-xl flex justify-center items-center gap-x-12">
            {/* Filter */}
            <button className="flex flex-col items-center gap-y-1 text-white hover:text-[#CCCCCC]">
            <GoHomeFill className="w-4 h-4 " />
            <p className="text-sm ">Home</p>
            </button>
            {/* Sort */}
            <button className="flex flex-col items-center gap-y-1 text-white hover:text-[#CCCCCC]">
            <LuBook className="w-4 h-4 "/>
            <p className="text-sm">Sort</p>
            </button>
             {/* Sort */}
             <button className="flex flex-col items-center gap-y-1 text-white hover:text-[#CCCCCC]">
            <BiTime className="w-4 h-4" />
            <p className="text-sm">History</p>
            </button>
             {/* Sort */}
             <button className="flex flex-col items-center gap-y-1 text-white hover:text-[#CCCCCC]">
            <FaRegUser className="w-4 h-4" />
            <p className="text-sm">Account</p>
            </button>
        </div>
        </section>
    )
}

export default Notification