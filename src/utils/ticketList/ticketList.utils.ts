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

  const formattedDuration = `${weeks > 0 ? `${weeks}w ` : ""}${
    days > 0 ? `${days}d ` : ""
  }${hours > 0 ? `${hours}h ` : ""}${minutes > 0 ? `${minutes}m` : ""}`;

  return formattedDuration.trim();
}

export { getDurationBetweenDates };
