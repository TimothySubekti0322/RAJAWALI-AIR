import HeaderLayout from "../../components/client/headerLayout.tsx";
import HeaderFill from "../../components/client/headerFill.tsx";
import BodyLayout from "../../components/client/bodyLayout.tsx";
import {useNavigate} from "react-router-dom";
import PendingComponent from "../../components/client/purchaseProcessing/PendingComponent.tsx";

const PendingPurchase = () => {
    const navigate = useNavigate();
    return(
        <section className="w-full min-h-screen bg-[#f7f7f7] relative text-white">
            <HeaderLayout>
                <HeaderFill title="Order ID : 761817890" />
            </HeaderLayout>
            <BodyLayout paddingBottomSize="50px">
                <div className={'w-full py-10 px-5'}>
                    <PendingComponent />
                    <button
                        className={'btn btn-side w-full bg-[#1E90FF] text-white hover:bg-blue-700 mt-20'}
                        onClick={() => navigate("/")}
                    >
                        BACK TO HOME
                    </button>
                </div>
            </BodyLayout>
        </section>
    )
}
export default PendingPurchase;