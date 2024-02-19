import arrowRight from "../../../assets/images/arrowRight.png";
import {useEffect, useState} from "react";
import {AirportData} from "../../../assets/static/TableDataTypes.ts";
import axios from "axios";
import API_URL from "../../../assets/static/API.ts";
import {numberToCurrency} from "../../../utils/NumberFormater.ts";

interface IPriceDetails {
    // flightId: string,
    // totalPrice: number
    reservationData: any
}
const PriceDetails = ({reservationData}: IPriceDetails) => {
    const [sourceAirport, setSourceAirport] = useState<AirportData>();
    const [destAirport, setDestAirport] = useState<AirportData>();

    useEffect(() => {
        axios.get(`${API_URL}/v1/flights/${reservationData.flightDetailList[0].flightId}`)
            .then(({data}) => {
                setSourceAirport(data.data.sourceAirport);
                setDestAirport(data.data.destinationAirport);
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    return(
        <div
            className={`mx-auto mt-0 bg-[white] w-[90%]`}
        >
            {/*<BodyComponent />*/}
            <div style={{color: "black"}}>
                <h2 className={'my-3 text-black'}><b>Price Details</b></h2>
                <div className={'flex w-full justify-between'}>
                    <div className={'flex text-sm'}>
                        <div><h4><b>{sourceAirport?.city}</b></h4></div>
                        <div><img src={arrowRight} alt="arrow"/></div>
                        <div><b>{destAirport?.city}</b></div>
                    </div>
                </div>

                <div className={'flex flex-col gap-1 mb-3'}>
                    <p className={'font-semibold text-xs text-black'}>Price</p>
                    <div className={'flex justify-between text-slate-600'}>
                        <div className={'font-normal text-xs'}>Passengers (x{reservationData.passengers.length})</div>
                        <div className={'font-normal text-xs'}>{numberToCurrency("IDR", reservationData.flightDetailList[0].seatPrice, true, false)}  </div>
                    </div>
                    <div className={'h-[1px] bg-slate-400 w-full'}></div>
                </div>

                <div className={'flex flex-col gap-1 mb-3'}>
                    <p className={'font-semibold text-xs text-black'}>Add-ons</p>
                    {/*<div className={'flex justify-between text-slate-600'}>*/}
                    {/*    <div className={'font-normal text-xs'}>Baggage</div>*/}
                    {/*    <div className={'font-normal text-xs'}>-  </div>*/}
                    {/*</div>*/}
                    {/*<div className={'flex justify-between text-slate-600'}>*/}
                    {/*    <div className={'font-normal text-xs'}>Meals</div>*/}
                    {/*    <div className={'font-normal text-xs'}>-  </div>*/}
                    {/*</div>*/}
                    {/*<div className={'flex justify-between text-slate-600'}>*/}
                    {/*    <div className={'font-normal text-xs'}>Travel Insurance (x2)</div>*/}
                    {/*    <div className={'font-normal text-xs'}>-  </div>*/}
                    {/*</div>*/}
                    <div className={'flex justify-between text-slate-600'}>
                        <div className={'font-normal text-xs'}>Total</div>
                        <div className={'font-normal text-xs'}>{numberToCurrency("IDR", reservationData.totalPrice - reservationData.flightDetailList[0].seatPrice, true, false)}</div>
                    </div>
                    <div className={'h-[0.5px] bg-slate-400 w-full'}></div>
                </div>

                <div className={'flex flex-col gap-1 mb-3'}>
                    <p className={'font-semibold text-xs text-black'}>Other Fees</p>
                    <div className={'flex justify-between text-slate-600'}>
                        <div className={'font-normal text-xs'}>Tax</div>
                        <div className={'font-normal text-xs text-green-500'}>Included</div>
                    </div>
                    <div className={'h-[1px] bg-slate-400 w-full'}></div>
                </div>

                <div className={'flex flex-col gap-1 mb-3'}>
                    <div className={'flex justify-between text-slate-600'}>
                        <div className={'text-black text-xs'}><b>Total</b></div>
                        <div className={'text-base text-black font-semibold'}>{numberToCurrency("IDR", reservationData.totalPrice, true, false)}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PriceDetails