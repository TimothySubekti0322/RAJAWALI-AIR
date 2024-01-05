import { PropsWithChildren, useEffect, useState } from "react";
import AuthAdmin from "../utils/AuthAdmin";
import AuthMember from "../utils/AuthMember";

export default function PublicProvider({ children }: PropsWithChildren) {
  const [show, setShow] = useState(false);
  const token = localStorage.getItem("token");
  const authMember = AuthMember();
  const authAdmin = AuthAdmin();

  useEffect(() => {
    if (authMember) {
      window.location.href = "/";
    } else if (authAdmin) {
      window.location.href = "/dashboard";
    } else {
      setShow(true);
    }
  }, [token]);

  if (show) {
    return children;
  }

  return <></>;
}
