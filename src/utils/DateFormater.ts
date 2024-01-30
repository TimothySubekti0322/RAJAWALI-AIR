function extractTimeFromDateString(dateString: string): string {
  const date = new Date(dateString);
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  if (isNaN(date.getTime())) {
    return "";
  }
  return `${hours}:${minutes}`;
}

export { extractTimeFromDateString };
