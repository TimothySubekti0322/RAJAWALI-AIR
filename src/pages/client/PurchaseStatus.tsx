import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import PendingPurchase from "./PendingPurchase.tsx";
import HistoryCancelled from "../../components/client/history/HistoryCancelled.tsx";
import SuccessPurchase from "./SuccessPurchase.tsx";
import axios from "axios";
import API_URL from "../../assets/static/API.ts";
import toast, {Toaster} from "react-hot-toast";
import SelectedMethod from "./SelectedMethod.tsx";

const PurchaseStatus = () => {
    // const paymentMethod = localStorage.getItem("paymentMethod") as string;
    const {id} = useParams();
    const [reservationData, setReservationData] = useState<any>();

    useEffect(() => {
        axios.get(`${API_URL}/v1/reservations/${id}`)
            .then(({data}) => {
                setReservationData(data.data)
            })
            .catch((error) => {
                console.log(error);
                toast.error(error.response.data.message)
            })
    },[])

    const renderValue = () => {
        if(reservationData?.paymentStatus === "Waiting For Payment") {
            return <SelectedMethod /> // OKK
        } else if (reservationData?.paymentStatus === "Purchase Pending") {
            return <PendingPurchase reservationData={reservationData} /> // OKK
        } else if (reservationData?.paymentStatus === "Purchase Canceled") {
            return <HistoryCancelled />
        } else if (reservationData?.paymentStatus === "Purchase Successful") {
            return <SuccessPurchase />
        } else {
            return <div>Error</div>
        }
    }

    return (
        <>
            <Toaster />
            {renderValue()}
            {/*<section className="w-full min-h-screen bg-[#f7f7f7] relative">*/}
            {/*    <HeaderLayout>*/}
            {/*        <HeaderFill*/}
            {/*            bank={paymentMethod}*/}
            {/*            orderID={id ?? "12345678"}*/}
            {/*        />*/}
            {/*    </HeaderLayout>*/}

            {/*    <BodyLayout paddingBottomSize="0">*/}
            {/*        /!*<BodyComponent />*!/*/}
            {/*        {renderValue()}*/}
            {/*    </BodyLayout>*/}
            {/*</section>*/}
        </>

    )
}

export default PurchaseStatus
