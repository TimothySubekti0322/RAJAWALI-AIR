import HistoryCardCancel from "./historyCardCancel";
import HistoryCardPurchase from "./historyCardPurchase";
import HistoryCardReschedule from "./historyCardReschedule";


const bodyComponentHistory = () => {
    return(
        <>
        {/* <div className="flex flex-col space-y-4 m-2">
            

                <HistoryCardPurchase />
                <HistoryCardReschedule />
            
            <HistoryCardCancel />
        </div> */}

        <div className="w-full px-3">
            {/* Month Header */}
            <p className="mt-4 font-bold text-black">January 2024</p>
            {/* Card in Month */}
            <div className="flex flex-col space-y-4 mt-2">
                <HistoryCardPurchase />
                <HistoryCardReschedule />
            </div>
        </div>

        <div className="w-full px-3">
            {/* Month Header */}
            <p className="mt-4 font-bold text-black">December 2023</p>
            {/* Card in Month */}
            <div className="flex flex-col space-y-4 mt-2">
                <HistoryCardCancel />
            </div>
        </div>
        </>
    )
}

export default bodyComponentHistory;

