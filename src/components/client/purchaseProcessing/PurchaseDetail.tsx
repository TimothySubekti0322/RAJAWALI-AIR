import moment from "moment";
import {numberToCurrency} from "../../../utils/NumberFormater.ts";

interface IPurchaseDetail {
    datePayment: string,
    paymentMethod: string,
    totalPrice: number
}
const PurchaseDetail = ({datePayment, paymentMethod, totalPrice}: IPurchaseDetail) => {
    return(
        <div className={'flex flex-col gap-4 text-black px-4'}>
            <div className={'flex justify-between text-xs text-[#505050] font-medium'}>
                <p>Purchase On</p>
                {/*<p>Thursday, 25 Jan 2024</p>*/}
                <p>{moment(datePayment).format("dddd, DD MMM YYYY")}</p>
            </div>
            <div className={'flex justify-between text-xs text-[#505050] font-medium'}>
                <p>Payment Method</p>
                <p>{paymentMethod}</p>
            </div>
            <div className={'flex justify-between text-xs text-[#505050] font-medium'}>
                <p>Price Detais</p>
                <p className={'text-black font-bold'}>{numberToCurrency("IDR", totalPrice, true, false )}</p>
            </div>
        </div>
    )
}
export default PurchaseDetail;