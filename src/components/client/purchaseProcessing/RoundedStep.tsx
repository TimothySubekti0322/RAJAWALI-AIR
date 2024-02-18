interface RoundedProps {
    step: number
}
const RoundedStep = ({step}: RoundedProps) => {
    return(
        <div className={'w-[25px] h-[25px] bg-blue-500 text-center rounded-full text-white'}>
            {step}
        </div>
    )
}
export default RoundedStep;