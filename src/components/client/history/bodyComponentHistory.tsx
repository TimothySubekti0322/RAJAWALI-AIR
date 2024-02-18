import React from "react";
import { HistoryGroup } from "../../../utils/history/history.interface";
import HistoryCard from "./HistoryCard";

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
              {history.data.map((data, index) => {
                return (
                  <div key={index}>
                    <HistoryCard
                      reservationId={data.reservationId}
                      price={data.price}
                      date={data.date}
                      time={data.time}
                      status={data.status}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
      {historyGroup.length === 0 && (
        <div className="flex flex-col items-center p-4 space-y-2">
          <img src="/images/history-empty.svg" alt="" className="w-3/5" />
          <p className="font-bold text-center text-black">
            You haven’t book any orders yet
          </p>

          <p className="text-xs text-center text-black">
            All your past flight ticket bookings will be displayed here. Plan
            your journeys with us.
          </p>
        </div>
      )}
    </>
  );
};

export default bodyComponentHistory;
