export const validatePhoneNumber = (phoneNumber: string): boolean => {
  // Regular expression to validate phone number format
  const phoneNumberRegex = /^0\d{11,12}$/;
  return phoneNumberRegex.test(phoneNumber);
};

export const validatePassword = (password: string): boolean => {
  return password.length >= 6 && password.length <= 40;
};

export const validateRegistrationDataNotNull = (
  data: string,
  errorText: string,
  setErrorText: (text: string) => void
): boolean => {
  if (data === "") {
    setErrorText(errorText);
    return false;
  }
  return true;
};
