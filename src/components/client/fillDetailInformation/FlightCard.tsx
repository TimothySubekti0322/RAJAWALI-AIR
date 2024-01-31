import planeDepartureBlue from "../../../assets/images/planeDepartureBlue.png";
import rajawaliAirPng from "../../../assets/images/RajawaliAirPNG2.png";
import arrowRight from "../../../assets/images/arrowRight.png";
import angleRight from "../../../assets/images/angle-right.png";
import {useEffect, useState} from "react";
import {FlightData} from "../../../assets/static/TableDataTypes.ts";
import axios from "axios";
import API_URL from "../../../assets/static/API.ts";
import moment from "moment";

interface FLightCardProps {
    id: string,
    flightClass? : string
}
const FlightCard = ({id, flightClass}: FLightCardProps) => {

    const [flightDetail, setFlightDetail] = useState<FlightData | null>()

    const linkUrl = API_URL + `/v1/flights/${id}`;
    useEffect(() => {
        axios.get((`${linkUrl}`))
            .then(({data}) => {
                setFlightDetail(data.data);
                // console.log(data.data);
        })
    }, [])

    return(
        <div className={'flex justify-between rounded-lg bg-white w-full p-3 text-black drop-shadow-md'}>
            <div className={''}>
                <div className={'flex gap-3 mt-2'}>
                    <img src={planeDepartureBlue} alt={'plane'} />
                    {/*<span className={'font-semibold text-xs'}>Thu, 25 Jan 2024</span>*/}
                    <span className={'font-semibold text-xs'}>{moment(flightDetail?.departureDate).format("ddd, DD MMM YYYY")}</span>
                </div>
                <div className={'flex gap-3 mt-3 mb-2 items-center'}>
                    <img src={rajawaliAirPng} alt={'rajawali'} width={'26px'} className={'h-[16px]'} />
                    <div className={'font-semibold text-xs flex gap-2 items-center'}>
                        <div>{flightDetail?.sourceAirport.cityCode ?? "TST"}</div>
                        <div><img src={arrowRight} alt={'arrow'}/></div>
                        <div>{flightDetail?.destinationAirport.cityCode ?? "TST"}</div>
                    </div>
                </div>
                <div className={'text-xs text-slate-400'}>
                    <p>
                        {moment(flightDetail?.departureDate).format("HH:mm")} -
                        {moment(flightDetail?.arrivalDate).format("HH:mm")} | Direct Flight
                    </p>
                    <p>{flightClass ?? "Economy"}</p>
                </div>
                <div className={'badge text-[#1E90FF] bg-[#D2F1FF] mt-2 text-xs'}>
                    Reschedule & Refund Options
                </div>
            </div>
            <button className={'mr-3'}><img src={angleRight} alt={'klik'}/></button>
        </div>
    )
}
export default FlightCard;
