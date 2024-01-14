import React, { useState } from "react";
import planeDepartureIcon from "../../../../assets/images/PlaneDeparture.png";
import passengerIcon from "../../../../assets/images/passenger.png";

const styleText: React.CSSProperties = {
    color: "var(--Neutral-700, #757575)",
    fontFamily: "Roboto",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "21px", /* 150% */
    letterSpacing: "0.21px",
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

const listAirports: Airport[] = [
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
    const [isDisabled] = useState(true);

    return (
        <div className="w-full flex flex-col rounded-2xl py-6 px-8 gap-3 " style={{ backgroundColor: 'rgba(237, 237, 237, 0.8)' }}>
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
                                // onChange={handleOptionChange}
                                className="form-radio h-5 w-5 text-indigo-600 radio radio-primary"
                            />
                            <span className="ml-2 mr-12" style={styleText}>{option.label}</span>
                        </label>
                    ))}
                </div>
                <div className="flex gap-5 lg:flex-row md:flex-col sm:flex-col" >
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
                    <div style={{ width: "220px" }}>
                        <label className="form-control w-full max-w-xs" style={styleText}>
                            <div className="label" style={styleText}>
                                <span >Departure Date</span>
                            </div>
                            <input
                                type={"date"}
                                className="w-full py-2 px-3 input input-bordered rounded-lg bg-transparent" />
                        </label>
                    </div>
                    <div style={{ width: "220px" }}>
                        <label className="form-control w-full max-w-xs" style={styleText}>
                            <div className="label" style={styleText}>
                                <span >Return Date</span>
                            </div>
                            <input
                                type={"date"}
                                className="w-full py-2 px-3 input input-bordered rounded-lg"
                                disabled={isDisabled}
                                style={isDisabled ? { backgroundColor: 'rgba(194, 194, 194, 0.7)' } : { backgroundColor: 'transparent' }}
                            />
                        </label>
                    </div>
                    <div>
                        <label className="form-control max-w-xs" style={styleText}>
                            <div className="label" style={styleText}>
                                <span >Passenger, Class</span>
                            </div>
                            <div className="relative">
                                <input className="input input-bordered pl-8 bg-transparent"
                                    type={"text"}
                                    placeholder={"1 Passenger, Economy"}
                                />
                                <div className="absolute left-3 top-4">
                                    <img src={passengerIcon} alt="Airplane Icon" className="w-4 h-4" />
                                </div>
                            </div>
                        </label>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-end">
                <button className="btn btn-side text-white border-0" style={{ backgroundColor: "#1E90FF" }}>Let's Search</button>
            </div>
        </div>
    )
}
export default SearchInputFlight;
