import arrowRight from "../../../assets/images/arrowRight.png";
import {numberToCurrency} from "../../../utils/NumberFormater.ts";

const TotalPriceDetailComponent = () => {
    const baggagePrice =
        localStorage.getItem("baggagePrice")  ? Number(localStorage.getItem("baggagePrice") as string) : 0 ;

    return(
        <div
            className={`mx-auto mt-0 bg-[white]`}
        >
            {/*<BodyComponent />*/}
            <div style={{color: "black"}}>
                <div className={'h-[1px] bg-slate-400 w-full'}></div>
                <h2 className={'my-3 text-black'}><b>Price Details</b></h2>
                <div className={'flex w-full justify-between'}>
                    <div className={'flex text-sm'}>
                        <div><h4><b>Yogyakarta</b></h4></div>
                        <div><img src={arrowRight} alt="arrow"/></div>
                        <div><b>Balikpapan</b></div>
                    </div>
                </div>

                <div className={'flex flex-col gap-1 mb-3'}>
                    <p className={'font-semibold text-xs text-black'}>Price</p>
                    <div className={'flex justify-between text-slate-600'}>
                        <div className={'font-normal text-xs'}>Adult (x2)</div>
                        <div className={'font-normal text-xs'}>IDR 2.358.400  </div>
                    </div>
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
                        <div className={'font-normal text-xs'}>Travel Insurance (x2)</div>
                        <div className={'font-normal text-xs'}>IDR 200.000  </div>
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
                        <div className={'text-base text-black font-semibold'}>IDR 3.240.800 </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TotalPriceDetailComponent;
