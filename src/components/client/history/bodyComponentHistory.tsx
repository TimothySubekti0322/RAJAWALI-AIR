import React from "react";
import { HistoryGroup } from "../../../utils/history/history.interface";
import HistoryCard from "./HistoryCard";
import CircularProgress from "@mui/material/CircularProgress";

interface bodyComponentHistoryProps {
  historyGroup: HistoryGroup[];
  loading: boolean;
}

const bodyComponentHistory: React.FC<bodyComponentHistoryProps> = ({
  historyGroup,
  loading,
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
      {!loading && historyGroup.length === 0 && (
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
      {loading && (
        <div className="flex flex-col items-center justify-center w-full h-full pt-[50%]">
          <CircularProgress size="3rem" />
          <div className="flex items-end">
            <p className="mt-12 text-[1rem] font-bold text-black">Loading</p>
            <span className="ml-1 -mb-[0.1rem] text-black loading loading-dots loading-xs"></span>
          </div>
        </div>
      )}
    </>
  );
};

export default bodyComponentHistory;
