import {useState} from "react";
import PendingPurchase from "./PendingPurchase.tsx";
import SuccessPurchase from "./SuccessPurchase.tsx";

const PurchaseStatus = () => {
    const [paymentStatus] = useState<string>("Pending");

    const purchaseDetail = () => {
        switch (paymentStatus) {
            case "Pending" :
                return <PendingPurchase />
            case "Success" :
                return <SuccessPurchase />
        }
    }

    return(
        purchaseDetail()
    )
}
export default PurchaseStatus