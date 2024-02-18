import React from "react";
import { HistoryGroup } from "../../../utils/history/history.interface";
// import HistoryCardCancel from "./historyCardCancel";
import HistoryCardPurchase from "./historyCardPurchase";
// import HistoryCardReschedule from "./historyCardReschedule";
// import HistoryCard from "./HistoryCard";

interface bodyComponentHistoryProps {
  historyGroup: HistoryGroup[];
}

const bodyComponentHistory: React.FC<bodyComponentHistoryProps> = ({
  historyGroup,
}) => {
  return (
    <>
      {historyGroup.map((history, index) => {
        return (
          <div key={index} className="w-full px-3">
            {/* Month Header */}
            <p className="mt-4 font-bold text-black">{history.title}</p>
            {/* Card in Month */}
            <div className="flex flex-col mt-2 space-y-4">
              {history.date.map((date) => {
                return (
                  <div key={date}>
                    <HistoryCardPurchase />
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default bodyComponentHistory;
