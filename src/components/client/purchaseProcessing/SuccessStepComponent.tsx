import RoundedStep from "./RoundedStep.tsx";

const SuccessStepComponent = () => {
    return(
        <div className={'flex gap-2 text-black font-medium'}>
            {/*Circle*/}
            <RoundedStep step={1} />

            <div className={'flex gap-2'}>
                <p>-</p>
                <RoundedStep step={2} />
            </div>
            <div>Pay</div>

            <div className={'flex gap-2'}>
                <p>-</p>
                <RoundedStep step={2} />
            </div>
            <div>Complete</div>
        </div>
    )
}
export default SuccessStepComponent;