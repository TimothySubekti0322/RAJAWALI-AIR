import { PropsWithChildren } from "react";
// import API_URL from "../assets/static/API";
import AuthAdmin from "../utils/AuthAdmin";

export default function PrivateProvider({ children }: PropsWithChildren) {
  //   const [show, setShow] = useState(false);
  //   const token = localStorage.getItem("token");
  const auth = AuthAdmin();

  if (!auth) {
    window.location.href = "/login/admin";
    return <></>;
  }

  return children;
}
