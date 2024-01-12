import Button from "./Button"
import { Link } from "react-router-dom"
import Rajawali from "../assets/Logo Rajawali Air.png"
import Favorite from "../assets/Favorite.png"
import Flag from "../assets//Rectangle 328.png"
import Orders from "../assets/orders icon.png"
import Profile from "../assets/profile icon.png"
import Inbox from "../assets/save icon.png"
function Navbar() {
    return (
        <>
            <section>
                <div className="flex justify-between items-center mx-[100px] mt-[50px]">
                    <Link to="/" className="items-center flex">
                        <img className="h-[50px] w-[71px]" src={Rajawali} alt="" />
                        <div className="font-extrabold text-2xl">RAJAWALI AIR</div>
                    </Link>
                    <div className="flex items-center">
                        <Link to="/login" className="flex items-center mx-10">
                            <img className="h-[25px] w-[25px]" src={Favorite} alt="" />
                            <div className="ml-2">Favorite</div>
                        </Link>
                        <Link to="/login" className="flex items-center mx-10">
                            <img className="h-[21px] w-[21px]" src={Inbox} alt="" />
                            <div className="ml-2">Inbox</div>
                        </Link>
                        <Link to="/login" className="flex items-center mx-10">
                            <img className="h-[21px] w-[21px]" src={Orders} alt="" />
                            <div className="ml-2">Orders</div>
                        </Link>
                        <div className="flex items-center mx-10">
                            <img className="h-[21px] w-[21px]" src={Flag} alt="" />
                            <select className="ml-2 bg-transparent">
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
                        <div className="mx-5 ">Rajawali Member</div>
                        <div className="items-center flex">
                            <img className="h-[25px] w-[25px] rounded-full" src={Profile} alt="" />
                            <Button content={"Login"} className={"mx-1"} type={"button"} />
                            <Button content={"Daftar"} className={"mx-1"} type={"button"} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Navbar