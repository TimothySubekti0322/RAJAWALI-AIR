import HeaderLayout from "../headerLayout.tsx";
import HeaderFill from "../headerFill.tsx";
import BodyLayout from "../bodyLayout.tsx";
import rajawaliAirIcon from "../../../assets/images/RajawaliAirPNG2.png";
import cancelIcon from "../../../assets/images/cancel.png";
import PriceDetails from "../purchaseProcessing/PriceDetails.tsx";

const HistoryCancelled = () => {
    return(
        <section className="w-full min-h-screen bg-[#f7f7f7] relative text-white">
            <HeaderLayout>
                <HeaderFill title="Order ID : 761817890" />
            </HeaderLayout>
            <BodyLayout paddingBottomSize="50px">
                <div className={'w-full py-10 px-5'}>
                    <div className={'rounded-lg rounded-t-lg bg-white flex flex-col pb-3'}>
                        {/*Header*/}
                        <div className={'w-full flex px-4 py-3 bg-[#EDEDED] justify-between'}>
                            <img src={rajawaliAirIcon} alt={'Rajawali'}/>
                            <span className={'text-black text-xs font-medium'}>Order ID : 761817890</span>
                        </div>

                        {/*Body*/}
                        <div className={'flex flex-col gap-4'}>
                            {/*1*/}
                            <div className={'flex flex-col items-center justify-center pt-3 pb-10 text-black gap-4'}>
                                <h3 className={'font-semibold text-sm text-center'}>Transaction Cancelled By System</h3>
                                <div className={''}>
                                    <img src={cancelIcon} alt={'undraw'}/>
                                </div>
                                <p className={'text-xs w-[80%] text-center text-[#505050]'}>Transaction has been automatically cancelled by the system. No payment was made. </p>
                            </div>

                            {/*2*/}
                            <PriceDetails />
                        </div>
                    </div>
                </div>
            </BodyLayout>
        </section>
    )
}
export default HistoryCancelled;