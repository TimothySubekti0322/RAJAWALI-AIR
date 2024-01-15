import React, {useState} from "react";
import planeDepartureIcon from "../../../../assets/images/PlaneDeparture.png";
import passengerIcon from "../../../../assets/images/passenger.png";
import addanotherIcon from "../../../../assets/images/gridicons_add.png";
import SelectPassenger, {AmountPassengerProps} from "../SelectPassenger/SelectPassenger";

const styleText: React.CSSProperties = {
    color: "var(--Neutral-700, #757575)",
    fontFamily: "Roboto",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "21px", /* 150% */
    letterSpacing: "0.21px",
}

const anotherFlightStyle: React.CSSProperties = {
    color: "rgba(30, 144, 255, 1)",
    fontFamily: "Roboto",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "22px",
    marginTop: "1%"
}
const options = [
    { id: 'option1', label: 'Round-Trip' },
    { id: 'option2', label: 'One-Way' },
    { id: 'option3', label: 'Multi-City' },
];

interface Airport {
    id: string,
    name: string
}

const listAirports:Airport[]  = [
    {
        id: "1",
        name: "Jakarta (CGK)"
    },
    {
        id: "2",
        name: "Denpasar Bali (DPS)"
    },
    {
        id: "3",
        name: "Surabaya Airport (SUB)"
    },
    {
        id: "4",
        name: "Ujung Pandang (UPG)"
    },
    {
        id: "5",
        name: "Pekanbaru Airport (PKU)"
    },
    {
        id: "6",
        name: "Semarang Airport (SRG)"
    }
]


const SearchInputFlight = () => {
    const [selectedOption, setSelectedOption] = useState<string>("option2");
    const [addAnotherCount, setAddAnotherCount] = useState<number>(1);
    const [showSelectPassenger, setShowSelectPassenger] = useState<boolean>(false);
    const [inputPassenger, setInputPassenger] = useState<string>("");
    const [passenger, setPassenger] = useState<AmountPassengerProps>({
        adultName: "Adult",
        adultValue: 0,
        childName: "Child",
        childValue: 0,
        infantName: "Infant",
        infantValue: 0
    });
    const [selectCabin, setSelectCabin] = useState<string | null>(null);

    const handleOnChangeSelectedOption = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setSelectedOption(value);
    }

    const passengerWidthStyle = {
        width: selectedOption === "option3" ? "40%" : "20%",
    };

    const renderAnotherFlight = () => {
        const flights = [];
        for (let i = 1; i < addAnotherCount; i++) {
            flights.push(
                <div className="w-full flex flex-row justify-end gap-3 items-end">
                    {selectedOption === "option3" && (
                        <div className={"flex w-full gap-3"}>
                            <div className="flex" >
                                <div >
                                    <label className="form-control w-full max-w-xs" style={styleText}>
                                        <div className="label" style={styleText}>
                                            <span >From</span>
                                        </div>
                                        <div className="relative">
                                            <select className="select select-bordered pl-8 bg-transparent">
                                                <option disabled selected>Where From</option>
                                                {listAirports.map((item) => (
                                                    <option value={item.id}>{item.name}</option>
                                                ))}
                                            </select>
                                            <div className="absolute left-3 top-4">
                                                <img src={planeDepartureIcon} alt="Airplane Icon" className="w-4 h-4" />
                                            </div>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div>
                                <label className="form-control w-full max-w-xs" style={styleText}>
                                    <div className="label" style={styleText}>
                                        <span >To</span>
                                    </div>
                                    <div className="relative">
                                        <select className="select select-bordered pl-8 bg-transparent">
                                            <option disabled selected>Where To</option>
                                            {listAirports.map((item) => (
                                                <option value={item.id}>{item.name}</option>
                                            ))}
                                        </select>
                                        <div className="absolute left-3 top-4">
                                            <img src={planeDepartureIcon} alt="Airplane Icon" className="w-4 h-4" />
                                        </div>
                                    </div>
                                </label>
                            </div>
                            <div style={{width: "20%"}}>
                                <label className="form-control w-full max-w-xs" style={styleText}>
                                    <div className="label" style={styleText}>
                                        <span >Departure Date</span>
                                    </div>
                                    <input
                                        type={"date"}
                                        className="w-full py-2 px-3 input input-bordered rounded-lg bg-transparent"/>
                                </label>
                            </div>
                        </div>
                    )}
                </div>
            )
        }
        return flights;
    }

    const submitPassengerAmount = () => {
        const total = passenger.adultValue + passenger.childValue + passenger.infantValue;
        setInputPassenger(`${total} Passenger, ${selectCabin} `);
        setShowSelectPassenger(!showSelectPassenger);
    }

    return(
        <>
            {showSelectPassenger && (
                <SelectPassenger
                    setAmountPassenger={setPassenger}
                    amountPassenger={passenger}
                    selectCabin={selectCabin}
                    setSelectCabin={setSelectCabin}
                    onSubmit={submitPassengerAmount} />
            )}
            <div className="w-full flex flex-col rounded-2xl py-6 px-8 gap-3 " style={{backgroundColor: 'rgba(237, 237, 237, 0.8)'}}>
                <div className="container flex flex-col ">
                    <div className="sm:w-auto">
                        {options.map((option) => (
                            <label key={option.id} className="inline-flex items-center">
                                <input
                                    type="radio"
                                    id={option.id}
                                    name="radioOptions"
                                    value={option.id}
                                    defaultChecked={option.id === "option2"}
                                    // checked={option.id === "option2"}
                                    onChange={handleOnChangeSelectedOption}
                                    className="form-radio h-5 w-5 text-indigo-600 radio radio-primary"
                                />
                                <span className="ml-2 mr-12" style={styleText}>{option.label}</span>
                            </label>
                        ))}
                    </div>
                    <div className="flex gap-3 lg:flex-row md:flex-col sm:flex-col" >
                        <div className="flex gap-5" >
                            <div >
                                <label className="form-control w-full max-w-xs" style={styleText}>
                                    <div className="label" style={styleText}>
                                        <span >From</span>
                                    </div>
                                    <div className="relative">
                                        <select className="select select-bordered pl-8 bg-transparent">
                                            <option disabled selected>Where From</option>
                                            {listAirports.map((item) => (
                                                <option value={item.id}>{item.name}</option>
                                            ))}
                                        </select>
                                        <div className="absolute left-3 top-4">
                                            <img src={planeDepartureIcon} alt="Airplane Icon" className="w-4 h-4" />
                                        </div>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div>
                            <label className="form-control w-full max-w-xs" style={styleText}>
                                <div className="label" style={styleText}>
                                    <span >To</span>
                                </div>
                                <div className="relative">
                                    <select className="select select-bordered pl-8 bg-transparent">
                                        <option disabled selected>Where To</option>
                                        {listAirports.map((item) => (
                                            <option value={item.id}>{item.name}</option>
                                        ))}
                                    </select>
                                    <div className="absolute left-3 top-4">
                                        <img src={planeDepartureIcon} alt="Airplane Icon" className="w-4 h-4" />
                                    </div>
                                </div>
                            </label>
                        </div>
                        <div style={{width: "20%"}}>
                            <label className="form-control w-full max-w-xs" style={styleText}>
                                <div className="label" style={styleText}>
                                    <span >Departure Date</span>
                                </div>
                                <input
                                    type={"date"}
                                    className="w-full py-2 px-3 input input-bordered rounded-lg bg-transparent"/>
                            </label>
                        </div>
                        {selectedOption !== "option3" && (
                            <div style={{width: "20%"}}>
                                <label className="form-control w-full max-w-xs" style={styleText}>
                                    <div className="label" style={styleText}>
                                        <span >Return Date</span>
                                    </div>
                                    <input
                                        type={"date"}
                                        className="w-full py-2 px-3 input input-bordered rounded-lg"
                                        disabled={selectedOption === "option2"}
                                        style={selectedOption === "option2" ? { backgroundColor: 'rgba(194, 194, 194, 0.7)' } : { backgroundColor: 'transparent'}}
                                    />
                                </label>
                            </div>
                        )}
                        <div style={passengerWidthStyle}>
                            <label className="form-control" style={styleText}>
                                <div className="label" style={styleText}>
                                    <span >Passenger, Class</span>
                                </div>
                                <div className="relative">
                                    <input className="input input-bordered pl-8 bg-transparent w-full block"
                                           type={"text"}
                                           placeholder={"1 Passenger, Economy"}
                                           value={inputPassenger}
                                           onClick={() => setShowSelectPassenger(true)}
                                    />
                                    <div className="absolute left-3 top-4">
                                        <img src={passengerIcon} alt="Airplane Icon" className="w-4 h-4" />
                                    </div>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
                {renderAnotherFlight()}
                <div className="w-full flex flex-row justify-end gap-3 items-end">
                    {selectedOption === "option3" && (
                        <div className={"flex w-full gap-3"}>
                            <div className="flex" >
                                <div >
                                    <label className="form-control w-full max-w-xs" style={styleText}>
                                        <div className="label" style={styleText}>
                                            <span >From</span>
                                        </div>
                                        <div className="relative">
                                            <select className="select select-bordered pl-8 bg-transparent">
                                                <option disabled selected>Where From</option>
                                                {listAirports.map((item) => (
                                                    <option value={item.id}>{item.name}</option>
                                                ))}
                                            </select>
                                            <div className="absolute left-3 top-4">
                                                <img src={planeDepartureIcon} alt="Airplane Icon" className="w-4 h-4" />
                                            </div>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div>
                                <label className="form-control w-full max-w-xs" style={styleText}>
                                    <div className="label" style={styleText}>
                                        <span >To</span>
                                    </div>
                                    <div className="relative">
                                        <select className="select select-bordered pl-8 bg-transparent">
                                            <option disabled selected>Where To</option>
                                            {listAirports.map((item) => (
                                                <option value={item.id}>{item.name}</option>
                                            ))}
                                        </select>
                                        <div className="absolute left-3 top-4">
                                            <img src={planeDepartureIcon} alt="Airplane Icon" className="w-4 h-4" />
                                        </div>
                                    </div>
                                </label>
                            </div>
                            <div style={{width: "100%"}}>
                                <label className="form-control w-full max-w-xs" style={styleText}>
                                    <div className="label" style={styleText}>
                                        <span >Departure Date</span>
                                    </div>
                                    <input
                                        type={"date"}
                                        className="w-full py-2 px-3 input input-bordered rounded-lg bg-transparent"/>
                                </label>
                            </div>
                        </div>
                    )}
                    <button className="btn text-white border-0" style={{ backgroundColor: "#1E90FF", width: "39%" }}>Let's Search</button>
                </div>
                {selectedOption === "option3" && (
                    <div
                        className={"flex gap-5 items-center"}
                        style={anotherFlightStyle}>
                        <div className={"flex gap-1"} style={{cursor: "pointer"}} onClick={() => setAddAnotherCount(addAnotherCount + 1)}><img src={addanotherIcon} alt={"+"}/> ADD ANOTHER FLIGHT</div>
                        {addAnotherCount > 1 && (
                            <div className={"flex gap-1"} style={{cursor: "pointer", color: "red"}} onClick={() => setAddAnotherCount(addAnotherCount - 1)}>REMOVE ANOTHER FLIGHT</div>
                        )}
                    </div>
                )}
            </div>
        </>
    )
}
export default SearchInputFlight;
