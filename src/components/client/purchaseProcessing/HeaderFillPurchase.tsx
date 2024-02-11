import React from "react";
import {FaArrowLeft} from "react-icons/fa";
interface HeaderFillProps {
    paymentBy: string,
    orderId: string
}
const HeaderFillPurchase: React.FC<HeaderFillProps> = ({ paymentBy, orderId }: HeaderFillProps) => {
    return (
        <>
            <button
                onClick={() => {
                    window.location.href = "/";
                }}
            >
                <FaArrowLeft className="text-xl text-white" />
            </button>
            <div className="flex flex-col ml-4 gap-y-1">
                <div className="flex items-center text-xs gap-x-2">
                    <p className="font-bold">
                        {paymentBy}
                    </p>
                </div>
                <div className="flex items-center text-[10px] gap-x-1">
                    Order Id : {orderId}
                </div>
            </div>
        </>
    );
};

export default HeaderFillPurchase;