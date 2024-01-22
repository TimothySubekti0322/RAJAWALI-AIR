import xIcon from "../../../assets/images/x.png";
import arrowRight from "../../../assets/images/arrowRight.png";
import clockIcon from "../../../assets/images/Clock.png";
import TrackingLine from "./TrackingLine";
import FlightDetailCard from "./FlightDetailCard";
import groupIcon from "../../../assets/images/Group.png"

interface FlightDetailProps {
    onClose: () => void;
    id: string;
}
const FlightDetail = ({onClose, id}: FlightDetailProps) => {
    return(
        <>
            <div
                className={` sm:w-[360px] mx-auto mt-0 min-h-screen bg-[white] flex flex-col justify-between rounded-lg`}
            >
                {/*<BodyComponent />*/}
                <div style={{color: "black", padding: "15px"}}>
                    <button onClick={onClose}>
                        <img src={xIcon} alt={"x"} />
                    </button>
                    <br/>
                    <h2 className={'my-3'}><b>Flight Detail</b></h2>
                    <div className={'flex w-full justify-between'}>
                        <div>
                            <div className={'flex text-sm'}>
                                <div><h4><b>Yogyakarta</b></h4></div>
                                <div><img src={arrowRight} alt="arrow"/></div>
                                <div><b>Balikpapan</b></div>
                            </div>
                            <p className={'text-xs text-zinc-400'}><b>Thursday, 25 jan 2024</b></p>
                        </div>

                        {/*Detail*/}
                        <div className={'border border-2 items-center h-[28px] gap-1 border-slate-200 rounded-md flex justify-self-end'} style={{padding: '6px'}}>
                            <div><img src={clockIcon} alt={'clock'} width={'16px'}/></div>
                            <div className={'text-xs text-zinc-400'}>1h 50m</div>
                        </div>
                    </div>

                    <div className={'flex mt-5 gap-3'}>
                        <TrackingLine />
                        <div className={'flex flex-col '}>
                            <p className={'text-sm font-medium text-black'}>Yogyakarta (YIA) | 08:15</p>
                            <p className={'text-xs text-slate-500 mt-1'}>Yogyakarta International Airport | Terminal Domestic</p>
                            <FlightDetailCard />
                            <p className={'text-sm font-medium text-black'}>Balikpapan (BPN) | 09:05</p>
                            <p className={'text-xs text-slate-500 mt-1'}>Sepinggan | Terminal Domestic</p>
                        </div>
                    </div>
                </div>

                {/*Price*/}
                <div >
                    <div className={'flex items-center justify-between px-3 py-2'}>
                        <div>
                            <p className={'text-black'}><strong>Total</strong></p>
                            <p className={'text-[#1E90FF]'}><strong>IDR 2.358.400</strong></p>
                        </div>
                        <button className={'btn btn-sm text-white border-0 bg-[#1E90FF] w-[30%] hover:bg-[#0C70DD]'}>Continue</button>
                    </div>
                    <div className={'h-[16px] bg-[#A4E0FF] items-center flex gap-1 px-3'}>
                        <img src={groupIcon} alt={'point'}/>
                        <span className={'text-xs text-[#1E90FF] font-medium'}><>Earn 10000 Loyalty Points</></span>
                    </div>
                </div>
            </div>
        </>
    )
}
export default FlightDetail;
