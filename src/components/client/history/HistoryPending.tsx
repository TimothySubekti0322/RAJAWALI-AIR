import HeaderLayout from "../headerLayout.tsx";
import HeaderFill from "../headerFill.tsx";
import BodyLayout from "../bodyLayout.tsx";
import PendingComponent from "../purchaseProcessing/PendingComponent.tsx";

const HistoryPending = () => {
    return(
        <section className="w-full min-h-screen bg-[#f7f7f7] relative text-white">
            <HeaderLayout>
                <HeaderFill title="Order ID : 761817890" />
            </HeaderLayout>
            <BodyLayout paddingBottomSize="50px">
                <div className={'w-full py-10 px-5'}>
                    <PendingComponent />
                </div>
            </BodyLayout>
        </section>

    )
}
export default HistoryPending