const numberToCurrency = (
  prefix: string,
  value: number,
  spaceBetweenValuePrefix: boolean,
  withDecimal: boolean
): string => {
  // Check if the input is a valid number
  if (isNaN(value) || !isFinite(value)) {
    throw new Error("Invalid number");
  }

  // Convert the number to a string and split it into integer and decimal parts
  const [integerPart, decimalPart] = value.toFixed(2).split(".");

  // Add commas as thousands separators
  const formattedIntegerPart = integerPart.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    "."
  );

  const combinedFormattedIntegerPart = withDecimal
    ? `${formattedIntegerPart},${decimalPart}`
    : formattedIntegerPart;

  // Concatenate the formatted parts with periods as separators

  const formattedNumber = value == 0 ? "0" : `${combinedFormattedIntegerPart}`;

  if (spaceBetweenValuePrefix) {
    return `${prefix} ${formattedNumber}`;
  }

  return `${prefix}${formattedNumber}`;
};

export { numberToCurrency };
