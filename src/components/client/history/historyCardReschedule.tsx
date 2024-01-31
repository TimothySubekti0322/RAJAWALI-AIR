import { FaChevronRight } from "react-icons/fa6";

const HistoryCardReschedule = () => {
    return(
        <div className="flex flex-col w-full px-3 py-1  bg-white rounded-lg shadow-md">
            
            <div className="flex items-center justify-between mt-3">
                <div>
                    <div className="flex items-center text-sm font-bold text-black gap-x-2">
                        <img src="/images/blue-rajawali-air-logo.svg" alt="rajawali air logo" />
                        <p className="">Balikpapan</p>
                        <img
                        src="/images/long-arrow.svg"
                        alt="long arrow"
                        className="w-4 h-2 "
                        />
                        <p className="">Yogyakarta</p>
                    </div>

                    <p className="text-[#757575] text-xs mt-2">25 Jan 2024, 08:15 - 09:05</p>
                    <p className="text-[#757575] text-xs mt-1">1h 50m | Sepinggan</p>   
                </div>
                <button className="bg-[#EDEDED] p-[0.25rem] rounded-[8px]">
                    <FaChevronRight className="text-sm text-black" />
                </button>
            </div>
                     
            <hr className="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700"></hr>

            {/* Purchase Schedule */}
            <div className="flex items-center justify-between mb-2">
                <div className="text-[#FFFF] bg-[#F1A025] rounded-lg text-[0.625rem] 2xl:text-xs py-1 px-2">
                    Purchase Schedule
                </div>
            </div>
        </div>

    )
}
export default HistoryCardReschedule;