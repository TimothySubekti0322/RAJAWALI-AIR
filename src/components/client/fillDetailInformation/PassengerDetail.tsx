import angleRight from "../../../assets/images/angle-right.png";

interface PassengerDetailProps {
    index: number;
}
const PassengerDetail = ({index}: PassengerDetailProps) => {
    return(
        <div className={'my-4 w-full mt-0 drop-shadow-md'}>
            <div className={'flex w-full justify-between rounded-lg bg-white w-full px-3 py-1 mt-1 text-black drop-shadow-md'}>
                <div className={'w-full'}>
                    {index === 0 && (
                        <>
                            <div className={'flex gap-3 mt-2 items-center justify-between'}>
                                <span className={'text-xs text-[#757575]'}>Same as contact details</span>
                                <input type="checkbox" className="toggle toggle-info toggle-sm" />
                            </div>
                            <div className={'w-full h-[1px] bg-[#757575] my-3'}>
                            </div>
                        </>
                    )}

                    <div className={'my-2 items-center w-full flex justify-between'}>
                        <span className={'text-[#1E90FF] font-semibold text-sm'}>Passenger {index + 1} (Adult)</span>
                        <button className={'mr-3'}><img src={angleRight} alt={'klik'}/></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PassengerDetail;