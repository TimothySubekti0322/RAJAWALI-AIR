import type { History, HistoryGroup } from "./history.interface";
import moment from "moment";

export const arrayMonthYear = (histories: History[]): HistoryGroup[] => {
  const reversedHistories = histories.slice().reverse();

  const result: HistoryGroup[] = [];

  for (const element of reversedHistories) {
    const title = moment(element.createdAt).format("MMMM YYYY");
    if (result.length === 0) {
      const firstHistoryData = {
        reservationId: element.id,
        price: element.totalPrice,
        date: moment(element.createdAt).format("YYYY-MM-DD"),
        time: moment(element.createdAt).format("HH:mm:ss"),
        status: element.paymentStatus,
      };
      const firstData = {
        title: title,
        data: [firstHistoryData],
      };
      result.push(firstData);
    } else if (result[result.length - 1].title === title) {
      const historyData = {
        reservationId: element.id,
        price: element.totalPrice,
        date: moment(element.createdAt).format("YYYY-MM-DD"),
        time: moment(element.createdAt).format("HH:mm:ss"),
        status: element.paymentStatus,
      };
      result[result.length - 1].data.push(historyData);
    } else {
      const newHistoryData = {
        reservationId: element.id,
        price: element.totalPrice,
        date: moment(element.createdAt).format("YYYY-MM-DD"),
        time: moment(element.createdAt).format("HH:mm:ss"),
        status: element.paymentStatus,
      };
      const newData = {
        title: title,
        data: [newHistoryData],
      };
      result.push(newData);
    }
  }

  return result;
};
