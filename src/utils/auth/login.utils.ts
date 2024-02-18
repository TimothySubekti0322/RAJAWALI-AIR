export const validateEmail = (email: string): boolean => {
  // Regular expression to validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const adminLoginAtAdminPortal = (
  user: string,
  role: string
): boolean => {
  // Check if the user is an admin
  console.log(
    "adminLoginAtAdminPortal = ",
    user === "admin" && role === "ROLE_ADMIN"
  );
  return user === "admin" && role === "ROLE_ADMIN";
};

export const clientLoginAtClientPortal = (
  user: string,
  role: string
): boolean => {
  // Check if the user is an admin
  console.log(
    "clientLoginAtClientPortal",
    user === "client" && role === "ROLE_USER"
  );
  return user === "client" && role === "ROLE_USER";
};
