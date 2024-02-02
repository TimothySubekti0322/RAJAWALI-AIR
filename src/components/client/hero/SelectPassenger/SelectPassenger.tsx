import React from "react";
import CabinClassComponent from "./CabinClassComponent";
import AmountPassengerComponent from "./AmountPassengerComponent";

const greyStyleText: React.CSSProperties = {
    color: "#757575",
    fontFamily: "Roboto",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "20px",
    letterSpacing: "0.1px",
}

const cabinClassStyle: React.CSSProperties = {
    borderLeft: "1px solid blue",
    color: "#757575"
}
interface SelectPassengerComponentProps {
    amountPassenger: AmountPassengerProps,
    setAmountPassenger: React.Dispatch<React.SetStateAction<AmountPassengerProps>>,
    selectCabin: string | null,
    setSelectCabin: React.Dispatch<React.SetStateAction<string | null>>,
    onSubmit: () => void
}

export interface AmountPassengerProps {
    adultName: string,
    adultValue: number,
    childName: string,
    childValue: number,
    infantName: string,
    infantValue: number
}

const SelectPassengerComponent = ({amountPassenger, setAmountPassenger, selectCabin, setSelectCabin, onSubmit}: SelectPassengerComponentProps) => {
    // const [selectedCabin, setSelectedCabin] = useState<string | null>(null);
    const handleCabinClick = (cabin: string) => {
        setSelectCabin(cabin);
    };

    return(
        <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.5)", zIndex: 9999, display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div className={"rounded-md bg-white p-3 flex flex-col justify-center items-center"} style={{ color: "black" }}>
                <table>
                    <thead style={{ borderBottom: "1px solid blue" }}>
                    <tr style={greyStyleText}>
                        <td className={"p-2"}><b>Select Amount of Passenger</b></td>
                        <td className={"p-2"}><b>Select Cabin Class</b></td>
                    </tr>
                    </thead>
                    <tbody className={"gap-2"}>
                    <tr>
                        <td className={"pl-2"}><AmountPassengerComponent
                            value={amountPassenger.adultValue}
                            handleMin={() => {
                                if (amountPassenger.adultValue > 0) {
                                    setAmountPassenger({...amountPassenger, adultValue: amountPassenger.adultValue - 1})
                                }
                            }}
                            handlePlus={() => setAmountPassenger({ ...amountPassenger, adultValue: amountPassenger.adultValue + 1 }) }
                            nameInput={amountPassenger.adultName}
                            status={"Adult"}
                            ageInformation={"Age 12 and over"} /></td>
                        <td style={cabinClassStyle}><CabinClassComponent
                            text={"Economy"}
                            isSelected={selectCabin === "Economy"}
                            onClick={() => handleCabinClick("Economy")}
                        /></td>
                    </tr>
                    <tr>
                        <td className={"pl-2"}><AmountPassengerComponent
                            value={amountPassenger.childValue}
                            handleMin={() => {
                                if (amountPassenger.childValue > 0) {
                                    setAmountPassenger({...amountPassenger, childValue: amountPassenger.childValue - 1})
                                }
                            }}
                            handlePlus={() => setAmountPassenger({ ...amountPassenger, childValue: amountPassenger.childValue + 1 }) }
                            nameInput={amountPassenger.childName}
                            status={"Child"} ageInformation={"Age 2-11"} /></td>
                        <td style={cabinClassStyle}><CabinClassComponent
                            text={"Business"}
                            isSelected={selectCabin === "Business"}
                            onClick={() => handleCabinClick("Business")}
                        /></td>
                    </tr>
                    <tr>
                        <td className={"pl-2"}><AmountPassengerComponent
                            value={amountPassenger.infantValue}
                            handleMin={() => {
                                if (amountPassenger.infantValue > 0) {
                                    setAmountPassenger({...amountPassenger, infantValue: amountPassenger.infantValue - 1})
                                }
                            }}
                            handlePlus={() => setAmountPassenger({ ...amountPassenger, infantValue: amountPassenger.infantValue + 1 }) }
                            nameInput={amountPassenger.infantName}
                            status={"Infant"} ageInformation={"Age 0-2"} /></td>
                        <td style={cabinClassStyle}><CabinClassComponent
                            text={"First"}
                            isSelected={selectCabin === "First Class"}
                            onClick={() => handleCabinClick("First")}
                        /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><button onClick={onSubmit} className={"btn btn-sm btn-side w-full mt-2"} style={{ backgroundColor: "#1E90FF", color: "white" }}>Done</button></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>

    )
}
export default SelectPassengerComponent;
