import arrowRight from "../../../assets/images/arrowRight.png";
import {numberToCurrency} from "../../../utils/NumberFormater.ts";
import {FlightData} from "../../../assets/static/TableDataTypes.ts";
import axios from "axios";
import API_URL from "../../../assets/static/API.ts";
import {useEffect, useState} from "react";
import {
    getAdultsNumberFromLocalStorage,
    getChildsNumberFromLocalStorage, getInfantsNumberFromLocalStorage
} from "../../../utils/ticketList/ticketList.utils.ts";

interface ITotalPriceDetailProps {
    totalPrice: number,
    priceInsure: number
}

const TotalPriceDetailComponent = ({totalPrice, priceInsure}: ITotalPriceDetailProps) => {
    const [flights, setFlights] = useState<FlightData[]>([]);

    const baggagePrice =
        localStorage.getItem("baggagePrice")  ? Number(localStorage.getItem("baggagePrice") as string) : 0 ;
    const passengers = JSON.parse(localStorage.getItem("passengers") as string);
    const passengerLength = passengers.length;
    const flightIds: string[] = JSON.parse(localStorage.getItem("flightId") as string);
    const totalPriceFirst: number = JSON.parse(localStorage.getItem("totalPriceFirst") as string);
    const priceOne = totalPriceFirst / passengerLength;

    useEffect(() => {
        const fetchData = async () => {
            const flightDataArray = await Promise.all(
                flightIds.map(id => axios.get(API_URL + "/v1/flights/" + id))
            );
            const flightsData = flightDataArray.map(response => response.data.data);
            setFlights(flightsData);
        };

        if (flightIds.length > 0) {
            fetchData();
        }
    }, [flightIds]);

    return(
        <div
            className={`mx-auto mt-0 bg-[white]`}
        >
            {/*<BodyComponent />*/}
            <div style={{color: "black"}}>
                <div className={'h-[1px] bg-slate-400 w-full'}></div>
                <h2 className={'my-3 text-black'}><b>Price Details</b></h2>
                <div className={'flex flex-col gap-2 mb-3'}>
                    {flights.map((data, index) => (
                        <div key={index}>
                            <div className={'flex w-full justify-between'}>
                                <div className={'flex text-sm'}>
                                    <div><h4><b>{data.sourceAirport.city}</b></h4></div>
                                    <div><img src={arrowRight} alt="arrow"/></div>
                                    <div><b>{data.destinationAirport.city}</b></div>
                                </div>
                            </div>

                            <div className={'flex flex-col gap-1'}>
                                <p className={'font-semibold text-xs text-black'}>Price</p>
                                {/*<div className={'flex justify-between text-slate-600'}>*/}
                                {/*    <div className={'font-normal text-xs'}>Passengers (x{passengerLength})</div>*/}
                                {/*    <div className={'font-normal text-xs'}>{numberToCurrency("IDR", totalPriceFirst, true, false)} </div>*/}
                                {/*</div>*/}
                                {getAdultsNumberFromLocalStorage() > 0 && (
                                    <div className={'flex justify-between text-slate-600'}>
                                        <div className={'font-normal text-xs'}>Adult (x{getAdultsNumberFromLocalStorage()})</div>
                                        <div className={'font-normal text-xs'}>{numberToCurrency("IDR", priceOne * getAdultsNumberFromLocalStorage(), true, false)} </div>
                                    </div>
                                )}
                                {getChildsNumberFromLocalStorage() > 0 && (
                                    <div className={'flex justify-between text-slate-600'}>
                                        <div className={'font-normal text-xs'}>Child (x{getChildsNumberFromLocalStorage()})</div>
                                        <div className={'font-normal text-xs'}>{numberToCurrency("IDR", priceOne * getChildsNumberFromLocalStorage(), true, false)} </div>
                                    </div>
                                )}
                                {getInfantsNumberFromLocalStorage() > 0 && (
                                    <div className={'flex justify-between text-slate-600'}>
                                        <div className={'font-normal text-xs'}>Infant (x{getInfantsNumberFromLocalStorage()})</div>
                                        <div className={'font-normal text-xs'}>{numberToCurrency("IDR", priceOne * getInfantsNumberFromLocalStorage(), true, false)} </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                    <div className={'h-[1px] bg-slate-400 w-full'}></div>
                </div>
                <div className={'flex flex-col gap-1 mb-3'}>
                    <p className={'font-semibold text-xs text-black'}>Add-ons</p>
                    <div className={'flex justify-between text-slate-600'}>
                        <div className={'font-normal text-xs'}>Baggage</div>
                        <div className={'font-normal text-xs'}>{numberToCurrency("IDR", baggagePrice, true, false)}</div>
                    </div>
                    <div className={'flex justify-between text-slate-600'}>
                        <div className={'font-normal text-xs'}>Meals</div>
                        <div className={'font-normal text-xs'}>IDR 146.400  </div>
                    </div>
                    <div className={'flex justify-between text-slate-600'}>
                        <div className={'font-normal text-xs'}>Travel Insurance (x{passengerLength})</div>
                        <div className={'font-normal text-xs'}>{numberToCurrency("IDR", priceInsure, true, false)}</div>
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
                        <div className={'text-base text-black font-semibold'}>{numberToCurrency("IDR", totalPrice, true, false)} </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TotalPriceDetailComponent;
