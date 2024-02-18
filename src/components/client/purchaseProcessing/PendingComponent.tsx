import rajawaliAirIcon from "../../../assets/images/RajawaliAirPNG2.png";
import undrawPng from "../../../assets/images/undraw-copy.png";
import moment from "moment";
import {numberToCurrency} from "../../../utils/NumberFormater.ts";
import {MaximumWordLength} from "../../../utils/MaximumWordLength.ts";

interface IPendingComponent {
    reservationData: any,
}

const PendingComponent = ({reservationData}: IPendingComponent) => {
    return(
        <div className={'rounded-lg rounded-t-lg bg-white flex flex-col pb-16'}>
            {/*Header*/}
            <div className={'w-full flex px-4 py-3 bg-[#EDEDED] justify-between'}>
                <img src={rajawaliAirIcon} alt={'Rajawali'}/>
                <span className={'text-black text-xs font-medium'}>Order ID : {MaximumWordLength(reservationData?.id, 8)}</span>
            </div>

            {/*Body*/}
            <div className={'flex flex-col gap-4'}>
                {/*1*/}
                <div className={'flex flex-col items-center justify-center pt-3 pb-10 text-black gap-4'}>
                    <h3 className={'font-semibold text-sm text-center'}>Pending</h3>
                    <div className={'ml-4'}>
                        <img src={undrawPng} alt={'undraw'}/>
                    </div>
                    <p className={'text-xs w-[80%] text-center text-[#505050]'}>Your payment process is taking longer than usual. Please wait!</p>
                </div>

                {/*2*/}
                <div className={'flex flex-col gap-4 text-black px-4'}>
                    <div className={'flex justify-between text-xs text-[#505050] font-medium'}>
                        <p>Purchase On</p>
                        {/*<p>Thursday, 25 Jan 2024</p>*/}
                        <p>{moment(reservationData?.createdAt).format("dddd, DD MMM YYYY")}</p>
                    </div>
                    <div className={'flex justify-between text-xs text-[#505050] font-medium'}>
                        <p>Payment Method</p>
                        <p>Mandiri Virtual Account</p>
                    </div>
                    <div className={'flex justify-between text-xs text-[#505050] font-medium'}>
                        <p>Price Detais</p>
                        {/*<p className={'text-black font-bold'}>RP 3.240.800</p>*/}
                        <p>{numberToCurrency("IDR", reservationData?.totalPrice, true, false)}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PendingComponent