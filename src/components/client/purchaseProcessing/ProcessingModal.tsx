import processingTrans from "../../../assets/images/processingTrans.png";
const ProcessingModal = () => {
    return(
        <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.5)", zIndex: 9999, display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div className={"rounded-md bg-white p-3 fixed flex flex-col justify-center items-center"} style={{ color: "black" }}>
                <div
                    className={`absolute sm:w-[310px] mx-auto mt-0 p-10 bg-[white] flex flex-col justify-between rounded-lg`}
                >
                    <div className={'text-center font-semibold text-lg'}>
                        Rajawali Air is processing <br/> your transaction ....
                    </div>
                    <img src={processingTrans} alt={'processing'}/>
                </div>
            </div>
        </div>
    )
}
export default ProcessingModal;