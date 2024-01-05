import { PropsWithChildren } from "react";
// import API_URL from "../assets/static/API";
import AuthMember from "../utils/AuthMember";

export default function PrivateProvider({ children }: PropsWithChildren) {
  //   const [show, setShow] = useState(false);
  //   const token = localStorage.getItem("token");
  const auth = AuthMember();

  if (!auth) {
    window.location.href = "/login";
    return <></>;
  }

  return children;
}
