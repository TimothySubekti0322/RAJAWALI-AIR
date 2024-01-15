import React from "react";

const greyStyleText: React.CSSProperties = {
    color: "#757575",
    fontFamily: "Roboto",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "20px",
    letterSpacing: "0.1px",
}

interface AmountPassengerComponentProps {
    status: string,
    ageInformation: string,
    value: number,
    handleMin: () => void,
    handlePlus: () => void,
    nameInput: string
}

const AmountPassengerComponent = ({status, ageInformation, value, handleMin, handlePlus, nameInput}: AmountPassengerComponentProps) => {


    return(
        <div className={"flex items-center gap-3 justify-between mb-2"}>
            <div>
                <p><b>{status}</b></p>
                <span style={greyStyleText}>{ageInformation}</span>
            </div>
            <div className={"flex gap-1 justify-center"}>
                <button className="btn btn-xs" onClick={handleMin}><b>-</b></button>
                {/*<span className={"input input-bordered input-xs"}>{value}</span>*/}
                <input type={"text"} className={"input input-bordered input-xs w-1/4"} value={value} readOnly name={nameInput}/>
                <button className="btn btn-xs btn-primary" onClick={handlePlus}><b>+</b></button>
            </div>
        </div>
    )
}
export default AmountPassengerComponent;
