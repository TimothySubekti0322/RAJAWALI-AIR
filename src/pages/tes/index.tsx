import { FiFilter } from "react-icons/fi";
import { MdOutlineSort } from "react-icons/md";
import BodyLayout from "../../components/client/bodyLayout";
import Rajawali from "../../assets/rajawali.png";
import LogoKoper from "../../assets/logokoper.png";
import LogoMakan from "../../assets/logomakan.png";
import Refund from "../../assets/refund.png";
import Rescedule from "../../assets/rescedule.png";
import Garis from "../../assets/garis.png";
import { FaArrowLeft, FaLongArrowAltRight, FaMoneyBill, FaRegCalendarCheck, FaHandHoldingMedical } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import moment from "moment-timezone";
import axios from "axios";

const ChooseTiket = () => {
    const { adultsNumber } = useParams();
    const [data, setData] = useState<any>({});
    const [source, setSource] = useState<any>({});
    const [destination, setDestination] = useState<any>({});
    const [airplane, setAirplane] = useState<any>({});

    const departures = async () => {
        try {
            const response = await axios.get('https://rajawali-production.up.railway.app/api/v1/flights/departures/0a122f10-5a86-4c83-94e1-6ba711531db1?adultsNumber=1&classType=FIRST')
            setData(response.data.data);
            setSource(response.data.data.sourceAirport);
            setDestination(response.data.data.destinationAirport);
            setAirplane(response.data.data.airplane);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        departures();
    }, [departures])


    return (
        <section className="w-full min-h-screen bg-[#f7f7f7] relative">
            <div className="fixed w-full h-[3.75rem] bg-[#1E90FF] z-10 shadow-md">
                <div className="py-0 px-2 w-full h-full sm:w-[360px] mx-auto flex items-center">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <button
                                onClick={() => {
                                    window.location.href = "/";
                                }}
                            >
                                <FaArrowLeft className="text-xl text-white" />
                            </button>
                        </div>
                        <div className="font-bold ml-[80px]">Your Selected Flight</div>
                    </div>
                </div>
            </div>

            {/* Body */}
            {/* <div className="w-full sm:w-[360px] mx-auto min-h-screen bg-[#E3EEFF] pt-[3.75rem] pb-20"></div> */}
            <BodyLayout paddingBottomSize="5rem">
                <div className="inline-flex flex-col justify-center items-start gap-1 m-[20px]">
                    <div className="flex items-center gap-2">
                        <div className="yogyakarta text-black font-['Roboto'] text-sm font-bold leading-6">{source.city}</div>
                        <div className=""><FaLongArrowAltRight className="text-xl text-[#757575]" /></div>
                        <div className="balikpapan text-black font-['Roboto'] text-sm font-bold leading-6">{destination.city}</div>
                    </div>
                    <div className="text-[#757575] font-['Roboto'] text-xs font-medium leading-[14px]">{adultsNumber} Adults</div>
                </div>
                <div className="bg-white m-[20px] rounded-lg shadow-lg">
                    <div className="p-[10px]">
                        <div className="thursday__31_january_2024 text-[#757575] font-['Roboto'] text-sm font-medium leading-5">{moment(data.createdAt).format("dddd, D MMMM YYYY")}</div>
                        <div className="flex">
                            <div className="flex flex-col justify-between gap-5 pt-2">
                                <div>
                                    <div className="text-black text-sm font-bold text-[14px]" >
                                        {moment(data.departureDate).format("HH:mm")}
                                    </div>
                                    <div className="text-black text-[8px]">
                                        {moment(data.departureDate).format("D MMMM")}
                                    </div>
                                </div>
                                <div>
                                    <div className="text-black text-sm font-bold text-[14px]" >
                                        {moment(data.arrivalDate).format("HH:mm")}
                                    </div>
                                    <div className="text-black text-[8px]">
                                        {moment(data.arrivalDate).format("D MMMM")}
                                    </div>
                                </div>
                            </div>
                            <div className="mx-[10px] mt-[10px]">
                                <img src={Garis} className="h-[265px]" />
                            </div>
                            <div className="flex flex-col justify-between gap-5 pt-2">
                                <div>
                                    <div className="text-black text-[12px] font-bold">
                                        {source.city} ({source.cityCode})
                                    </div>
                                    <div className="text-black text-[10px]">
                                        {source.name} | Terminal Domestic
                                    </div>
                                </div>
                                <div className="flex justify-end">
                                    <div className="bg-white  p-[10px] w-[100%] border-slate-300 border-[1px] rounded-xl">
                                        <div className="flex items-start gap-3 ">
                                            <div className="text-black">
                                                <img src={Rajawali} className="h-[18px]" />
                                            </div>
                                            <div>
                                                <div className="text-black text-[10px]">Rajawali Air</div>
                                                <div className="text-black text-[10px] py-[2px]">{airplane.airplaneCode} | {data.classType} | 1h 50 m</div>
                                                <div className="text-black text-[10px]">Direct-Flight</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center text-[10px] gap-3 py-[10px]">
                                            <div className="text-black">
                                                <img src={LogoKoper} className="h-[20px]" />
                                            </div>
                                            <div>
                                                <div className="text-black text-[10px] mx-[8px]">Cabbin Baggage 7kg</div>
                                                <div className="text-black text-[10px] mx-[8px]">Baggage 20kg</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center textgap-3">
                                            <div className="text-black">
                                                <img src={LogoMakan} className="h-[20px]" />
                                            </div>
                                            <div className="text-black text-[10px] mx-[19px]">In Flight-Meals</div>
                                        </div>
                                        <div className="flex gap-3 text-black text-[10px] pt-[10px]">
                                            <span className="text-[#1E90FF]"> See More Facilities</span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="text-black text-[12px] font-bold">
                                        {destination.city} ({destination.cityCode})
                                    </div>
                                    <div className="text-black text-[10px]">
                                        {destination.name} | Terminal Domestic
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-black  font-bold m-[16px]"> Select Your Ticket Type</div>
                <div className="bg-white m-[20px] rounded-lg shadow-lg">
                    <div className="p-[10px]">
                        <div className="text-black text-sm font-bold leading-5 ">Normal</div>
                        <div className="flex gap-5 pt-2">
                            <div>
                                <div className="gap-3" >
                                    <div className="text-black text-[10px] flex items-center"><FaRegCalendarCheck className="mr-[8px] h-[16px]" /> Rescedule Avaible</div>
                                </div>
                                <div className="gap-3">
                                    <div className=" text-[10px] flex items-center text-[#03fc1c]"><FaMoneyBill className="mr-[8px] h-[20px] " /> Refund Up To 75 %</div>
                                </div>

                            </div>
                        </div>
                        <div className="flex items-center justify-between gap-5 pt-10">
                            <div>
                                <div className="text-black text-[10px]" >
                                    IDR 1.179.200/PAX
                                </div>
                                <div className="text-black text-[12px]">
                                    TOTAL <span className="text-[#1E90FF] font-bold">2.358.400</span>
                                </div>
                                <div className="text-black text-[10px]">
                                    GET 10000 Loyalty Points
                                </div>
                            </div>
                            <div>
                                <button className="bg-[#1E90FF] text-white py-1 px-4 rounded-md text-[10px]">Select</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white m-[20px] rounded-lg shadow-lg">
                    <div className="p-[10px] ">
                        <div className="text-black text-[14px] font-bold leading-5 ">Safe</div>
                        <div className="flex gap-5 pt-2">
                            <div>
                                <div className="flex items-center gap-3" >
                                    <img src={Rescedule} className="h-[18px]" />
                                    <div className="text-black text-[10px] ">Rescedule Avaible</div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img src={Refund} className="h-[12px]" />
                                    <div className="text-black text-[10px]">
                                        Refund Up To 75 %
                                    </div>
                                </div>
                                <div className="gap-3">
                                    <div className="text-[10px] flex items-center text-[#03fc1c]"><FaHandHoldingMedical className="text-[16px] mr-[8px]" />
                                        <span className="text-[#03fc1c] font-bold pl-[4px]">Trafel Insurance</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between gap-5 pt-10">
                            <div>
                                <div className="text-black text-[10px]" >
                                    IDR 1.179.200/PAX
                                </div>
                                <div className="text-black text-[12px]">
                                    TOTAL <span className="text-[#1E90FF] font-bold">2.358.400</span>
                                </div>
                                <div className="text-black text-[10px]">GET
                                    <span className="text-[#1E90FF] font-bold"> 10000 Loyalty Points</span>
                                </div>
                            </div>
                            <div>
                                <button className="bg-[#1E90FF] text-white py-1 px-4 rounded-md text-[10px]">Select</button>
                            </div>
                        </div>
                    </div>
                </div>

            </BodyLayout >

            {/* Bottom Navbar */}
            <div className="fixed left-0 right-0 bottom-0 mx-auto w-full sm:w-[360px] h-[3.8rem] bg-[#1E90FF] rounded-t-xl flex justify-center items-center gap-x-12" >
                {/* Filter */}
                < button className="flex flex-col items-center gap-y-1 text-white hover:text-[#CCCCCC]" >
                    <FiFilter className="w-4 h-4 " />
                    <p className="text-sm ">Filter</p>
                </ button>
                {/* Sort */}
                < button className="flex flex-col items-center gap-y-1 text-white hover:text-[#CCCCCC]" >
                    <MdOutlineSort className="w-4 h-4" />
                    <p className="text-sm">Sort</p>
                </ button>
            </div >
        </section >
    );
};

export default ChooseTiket;

