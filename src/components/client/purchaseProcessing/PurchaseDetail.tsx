const PurchaseDetail = () => {
    return(
        <div className={'flex flex-col gap-4 text-black px-4'}>
            <div className={'flex justify-between text-xs text-[#505050] font-medium'}>
                <p>Purchase On</p>
                <p>Thursday, 25 Jan 2024</p>
            </div>
            <div className={'flex justify-between text-xs text-[#505050] font-medium'}>
                <p>Payment Method</p>
                <p>Mandiri Virtual Account</p>
            </div>
            <div className={'flex justify-between text-xs text-[#505050] font-medium'}>
                <p>Price Detais</p>
                <p className={'text-black font-bold'}>RP 3.240.800</p>
            </div>
        </div>
    )
}
export default PurchaseDetail;