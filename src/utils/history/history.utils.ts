import type { History } from "./history.interface";
import moment from "moment";

interface HistoryGroup {
  title: string;
  date: string[];
}

export const arrayMonthYear = (histories: History[]): HistoryGroup[] => {
  const recapMap: { [key: string]: string[] } = {};

  // Iterate through the array of dates
  histories.forEach((history) => {
    const monthYear = moment(history.createdAt).format("MMMM YYYY");

    // If the month-year is not in the map, create a new entry
    if (!recapMap[monthYear]) {
      recapMap[monthYear] = [];
    }

    // Add the date to the corresponding month-year entry
    recapMap[monthYear].push(history.createdAt);
  });

  // Convert the map into an array of objects
  const recapArray: HistoryGroup[] = Object.entries(recapMap).map(
    ([title, date]) => ({
      title,
      date,
    })
  );

  // Sort the array by title (month-year)
  recapArray.sort((a, b) => (a.title > b.title ? 1 : -1));

  return recapArray;
};


