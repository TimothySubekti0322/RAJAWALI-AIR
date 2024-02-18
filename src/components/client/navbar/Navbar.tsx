import Button from "../../Button";
import { Link, useNavigate } from "react-router-dom";

import Rajawali from "../../../assets/Logo Rajawali Air.png";
import Favorite from "../../../assets/Favorite.png";
import Flag from "../../../assets/Rectangle 328.png";
import Orders from "../../../assets/orders icon.png";
import Profile from "../../../assets/profile icon.png";
import Inbox from "../../../assets/save icon.png";
function Navbar() {
<<<<<<< HEAD
    const navigate = useNavigate();
    return (
        <>
            <section>
                <div className="flex justify-between items-center mx-[10px] pt-[30px]">
                    <Link to="/" className="items-center flex">
                        <img className="h-[50px] w-[71px]" src={Rajawali} alt="" />
                        <div className="font-extrabold text-2xl text-white">RAJAWALI AIR</div>
                    </Link>
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center mx-3 bg-transparant hover:bg-slate-500 p-3 rounded-lg">
                            <img className="h-[25px] w-[25px]" src={Favorite} alt="" />
                            <div className="ml-2 text-white">Favorite</div>
                        </Link>
                        <Link to="/notification" className="flex items-center mx-3 bg-transparant hover:bg-slate-500 p-3 rounded-lg">
                            <img className="h-[21px] w-[21px]" src={Inbox} alt="" />
                            <div className="ml-2 text-white">Inbox</div>
                        </Link>
                        <Link to="/" className="flex items-center mx-3 bg-transparant hover:bg-slate-500 p-3 rounded-lg">
                            <img className="h-[21px] w-[21px]" src={Orders} alt="" />
                            <div className="ml-2 text-white">Orders</div>
                        </Link>
                        <div className="flex items-center mx-3 bg-transparant hover:bg-slate-500 p-3 rounded-lg">
                            <img className="h-[21px] w-[21px]" src={Flag} alt="" />
                            <select className="ml-2 bg-transparent text-white">
                                <option>
                                    ID
                                </option>
                                <option>
                                    ENG
                                </option>
                            </select>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="mx-3 text-white"><b>Rajawali</b> Member</div>
                        <div className="items-center flex">
                            <img className="h-[25px] w-[25px] rounded-full" src={Profile} alt="" />
                            <Button onClick={() => navigate("/login")} content={"Login"} className={"mx-3 text-white bg-transparant hover:bg-slate-500 py-2 px-3 rounded-lg"} type={"button"} />
                            <Button onClick={() => navigate("/register")} content={"Daftar"} className={"text-white bg-transparant hover:bg-slate-500 py-2 px-3 rounded-lg"} type={"button"} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
=======
  const navigate = useNavigate();
  const token = (localStorage.getItem("token") as string) || null;

  const handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("fullName");
    localStorage.removeItem("role");
    localStorage.removeItem("userId");
    localStorage.removeItem("refreshToken");
    navigate("/login");
  };
  return (
    <section>
      <div className="flex justify-between items-center mx-[10px] pt-[30px]">
        <Link to="/" className="flex items-center">
          <img className="h-[50px] w-[71px]" src={Rajawali} alt="" />
          <div className="text-2xl font-extrabold text-white">RAJAWALI AIR</div>
        </Link>
        <div className="flex items-center">
          <Link
            to="/"
            className="flex items-center p-3 mx-3 rounded-lg bg-transparant hover:bg-slate-500"
          >
            <img className="h-[25px] w-[25px]" src={Favorite} alt="" />
            <div className="ml-2 text-white">Favorite</div>
          </Link>
          <Link
            to="/"
            className="flex items-center p-3 mx-3 rounded-lg bg-transparant hover:bg-slate-500"
          >
            <img className="h-[21px] w-[21px]" src={Inbox} alt="" />
            <div className="ml-2 text-white">Inbox</div>
          </Link>
          <Link
            to="/history"
            className="flex items-center p-3 mx-3 rounded-lg bg-transparant hover:bg-slate-500"
          >
            <img className="h-[21px] w-[21px]" src={Orders} alt="" />
            <div className="ml-2 text-white">Orders</div>
          </Link>
          <div className="flex items-center p-3 mx-3 rounded-lg bg-transparant hover:bg-slate-500">
            <img className="h-[21px] w-[21px]" src={Flag} alt="" />
            <select className="ml-2 text-white bg-transparent">
              <option>ID</option>
              <option>ENG</option>
            </select>
          </div>
        </div>
        <div className="flex items-center">
          <div className="mx-6 text-white">
            <b>Rajawali</b> Member
          </div>
          <div className="flex items-center">
            <img
              className="h-[25px] w-[25px] rounded-full"
              src={Profile}
              alt=""
            />
            {!token ? (
              <Button
                onClick={() => navigate("/login")}
                content={"Login"}
                className={
                  "mx-3 text-white bg-transparant hover:bg-slate-500 py-2 px-3 rounded-lg"
                }
                type={"button"}
              />
            ) : (
              <p className="mx-3">Timothy Subekti</p>
            )}
            {!token ? (
              <Button
                onClick={() => navigate("/register")}
                content={"Register"}
                className={
                  "text-white bg-transparant hover:bg-slate-500 py-2 px-3 rounded-lg"
                }
                type={"button"}
              />
            ) : (
              <Button
                onClick={() => handleLogOut()}
                content={"Logout"}
                className={
                  "text-white bg-transparant hover:bg-slate-500 py-2 px-3 rounded-lg"
                }
                type={"button"}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
>>>>>>> 05235748255ba243a3e84c598dd9b91836cdcae5
}

export default Navbar;
