function getDurationBetweenDates(startDate: string, endDate: string): string {
  const startDateTime = new Date(startDate).getTime();
  const endDateTime = new Date(endDate).getTime();

  if (isNaN(startDateTime) || isNaN(endDateTime)) {
    return "";
  }

  const duration = endDateTime - startDateTime;

  // const weeks = Math.floor(duration / (7 * 24 * 60 * 60 * 1000));
  const weeks = 0;

  const remainingDays = duration % (7 * 24 * 60 * 60 * 1000);

  const days = Math.floor(remainingDays / (24 * 60 * 60 * 1000));
  const remainingHours = remainingDays % (24 * 60 * 60 * 1000);

  const hours = Math.floor(remainingHours / (60 * 60 * 1000));
  const remainingMinutes = remainingHours % (60 * 60 * 1000);

  const minutes = Math.floor(remainingMinutes / (60 * 1000));

  const formattedDuration =
    (weeks > 0 ? weeks + "w " : "") +
    (days > 0 ? days + "d " : "") +
    (hours > 0 ? hours + "h " : "") +
    (minutes > 0 ? minutes + "m" : "");

  return formattedDuration.trim();
}

function getDaysOfMonth(date: string): number {
  const year = new Date(date).getFullYear();
  const month = new Date(date).getMonth();

  return new Date(year, month + 1, 0).getDate();
}

export interface DaysObject {
  day: string;
  date: number;
}

function getArrayOfDays(currentDate: string): DaysObject[] {
  const date = new Date(currentDate);
  const daysOfMonth = getDaysOfMonth(currentDate);
  const daysArray: DaysObject[] = [];

  const initialDay = date.getDate();

  console.log(initialDay);

  for (let i = initialDay; i <= daysOfMonth; i++) {
    const day = new Date(date.getFullYear(), date.getMonth(), i).toLocaleString(
      "en-US",
      { weekday: "short" }
    );
    daysArray.push({ day: day, date: i });
  }

  for (let i = 1; i < initialDay; i++) {
    const day = new Date(date.getFullYear(), date.getMonth(), i).toLocaleString(
      "en-US",
      { weekday: "short" }
    );
    daysArray.push({ day: day, date: i });
  }

  return daysArray;
}

function getDayAndDate(date: string): string {
  const day = new Date(date).toLocaleString("en-US", { weekday: "short" });
  const dateNumber = new Date(date).getDate();

  return `${day}, ${dateNumber}`;
}

function getDate(date: string): number {
  return new Date(date).getDate();
}

function replaceDate(date: string, newDate: number): string {
  console.log(newDate);
  console.log(date);
  const originalDate = new Date(date);
  originalDate.setDate(newDate);

  const newDateString = originalDate.toISOString().slice(0, 10);

  console.log(newDateString);

  return newDateString;
}

function extractDepartureDate(date: string): string {
  const key = "departureDate=";
  const startIndex = date.indexOf(key) + key.length;
  const endIndex = date.indexOf("&", startIndex);

  const extractedDate = date.slice(
    startIndex,
    endIndex !== -1 ? endIndex : undefined
  );

  return extractedDate;
}

export {
  getDurationBetweenDates,
  getDaysOfMonth,
  getArrayOfDays,
  getDate,
  getDayAndDate,
  replaceDate,
  extractDepartureDate,
};
