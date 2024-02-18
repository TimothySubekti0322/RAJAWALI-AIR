import HeaderLayout from "../headerLayout.tsx";
import BodyLayout from "../bodyLayout.tsx";
import rajawaliAirIcon from "../../../assets/images/RajawaliAirPNG2.png";
import PurchaseDetail from "../purchaseProcessing/PurchaseDetail.tsx";
import PriceDetails from "../purchaseProcessing/PriceDetails.tsx";
import downloadIcon from "../../../assets/images/Unduh.png";
import shareIcon from "../../../assets/images/share.png";
import HeaderFill from "../headerFill.tsx";

const HistorySuccess = () => {
    return(
        <section className="w-full min-h-screen bg-[#f7f7f7] relative text-white">
            <HeaderLayout>
                <HeaderFill title="Order ID : 761817890" />
            </HeaderLayout>
            <BodyLayout paddingBottomSize={'0'}>
                <div className={'w-full py-5 px-5'}>

                    <div className={'rounded-lg bg-white flex flex-col mb-3'}>
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
                        <div className={'flex w-full justify-between p-2'}>
                            <button className={'w-[49%] bg-white flex justify-center'}><img src={downloadIcon} alt={'Download'}/></button>
                            <div style={{ borderLeft: "2px solid #ccc" }} />;
                            <button className={'w-[49%] bg-white flex justify-center'}><img src={shareIcon} alt={"share"}/></button>
                        </div>
                    </div>
                </div>

            </BodyLayout>


        </section>
    )
}
export default HistorySuccess;