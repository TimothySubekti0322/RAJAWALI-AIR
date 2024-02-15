const AuthAdmin = () => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  return token && role === "admin";
};

export default AuthAdmin;
