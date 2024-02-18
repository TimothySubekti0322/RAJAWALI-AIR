import React from "react";

interface ITransferEvidenceProps {
    handleSubmit : (event: React.FormEvent<HTMLFormElement>) => void
}

const TransferEvidenceComponent = ({handleSubmit}: ITransferEvidenceProps) => {
    return(
        <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.5)", zIndex: 9999, display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div className={"rounded-md bg-white p-3 fixed flex flex-col justify-center items-center"} style={{ color: "black" }}>
                <div
                    className={`absolute sm:w-[310px] mx-auto mt-0 p-10 bg-[white] flex flex-col justify-between rounded-lg`}
                >
                    <div className={'text-sm'}>
                        Send your transfer evidence
                    </div>
                    <form onSubmit={handleSubmit}>
                        <input type="file" className="file-input file-input-bordered file-input-sm w-full max-w-xs"/>
                        <button className='btn btn-primary btn-sm btn-block mt-2'>
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default TransferEvidenceComponent