interface DetailComponentProps {
    icon: string,
    text: string
}
const DetailComponent = ({icon, text}: DetailComponentProps) => {
    return(
        <div className={'flex gap-2 items-center'}>
            <div className={'w-[36px] h-[28px] bg-[#EDEDED] p-2 items-center flex rounded-lg justify-center'}>
                <img src={icon} alt={'luggage'} width={'16px'} height={'16px'}/>
            </div>
            <div className={'text-[12px] text-[#757575] font-medium'}>
                <p>{text}</p>
            </div>
        </div>
    )
}
export default DetailComponent;
