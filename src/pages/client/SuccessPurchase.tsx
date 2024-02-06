import HeaderLayout from "../../components/client/headerLayout.tsx";
import BodyLayout from "../../components/client/bodyLayout.tsx";
import rajawaliAirIcon from "../../assets/images/RajawaliAirPNG2.png";
import frame001Png from "../../assets/images/Frame-001.png";
import SuccessStepComponent from "../../components/client/purchaseProcessing/SuccessStepComponent.tsx";
import PurchaseDetail from "../../components/client/purchaseProcessing/PurchaseDetail.tsx";
import PriceDetails from "../../components/client/purchaseProcessing/PriceDetails.tsx";
import medalIcon from "../../assets/images/ph_medal-light.png"
import HeaderFillPurchase from "../../components/client/purchaseProcessing/HeaderFillPurchase.tsx";

const SuccessPurchase = () => {
    return(
        <section className="w-full min-h-screen bg-[#f7f7f7] relative text-white">
            <HeaderLayout>
                <HeaderFillPurchase orderId={'123455'} paymentBy={"Mandiri Virtual Account"} />
            </HeaderLayout>
            <BodyLayout paddingBottomSize={'0'}>
                <div className={'w-full py-5 px-5'} style={{backgroundImage: `url(${frame001Png})`, backgroundRepeat: 'no-repeat'}}>
                    <div className={'mb-3 flex justify-between'}>
                        <div className={'flex flex-col justify-between'}>
                            <SuccessStepComponent />
                            <p className={'text-[10px] text-[#505050]'}>Your transaction has been successful, Cool!
                                Please check the transaction receipt!</p>
                        </div>
                        <img src={medalIcon} alt={'Medal'}/>
                    </div>

                    <div className={'rounded-lg bg-white flex flex-col pb-16 mb-3'}>
                        {/*Header*/}
                        <div className={'w-full rounded-t-lg flex px-4 py-3 bg-[#EDEDED] justify-between'}>
                            <img src={rajawaliAirIcon} alt={'Rajawali'}/>
                            <span className={'text-black text-xs font-medium'}>Order ID : 761817890</span>
                        </div>

                        {/*Body*/}
                        <div className={'flex flex-col gap-4'}>
                            {/*1*/}
                            <div className={'flex flex-col items-center justify-center pt-3 text-black gap-4'}>
                                <h3 className={'font-semibold text-sm text-center'}>Purchase Successfully</h3>
                                {/*<PurchaseDetail />*/}
                            </div>

                            {/*2*/}
                            <PurchaseDetail />
                            <div className={'flex flex-col items-center justify-center pt-3 text-black gap-4'}>
                                {/*<PurchaseDetail />*/}
                                <div className={'w-[90%] h-[1px] bg-[#505050]'}></div>
                            </div>

                            {/*<PriceDetails />*/}
                        </div>
                        <PriceDetails />
                    </div>
                    <button className={'btn btn-side w-full bg-[#1E90FF] text-white hover:bg-blue-700'}>
                        Ok
                    </button>
                </div>

            </BodyLayout>


        </section>
    )
}
export default SuccessPurchase;