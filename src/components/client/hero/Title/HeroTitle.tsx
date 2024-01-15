import React from "react";

const h2TextStyle: React.CSSProperties = {fontFamily: "Roboto",
    fontSize: "60px",
    fontWeight: "700",
    lineHeight: "40px",
    letterSpacing: "0.5px",
    // textAlign: "left",
}

const h3TextStyle: React.CSSProperties = {
    fontSize: "40px",
    fontWeight: "700",
    lineHeight: "50px",
    letterSpacing: "0px",
    // textAlign: "left"
}
const HeroTitle = () => {
    return(
        <div className={"mb-36 ml-4"}>
            <div className={"p-8 ps-0"}>
                <h2 style={h2TextStyle} className='sm:text-center lg:text-left md:text-center'>RAJAWALI AIR</h2>
            </div>
            <div>
                <h3 className='sm:text-center lg:text-left md:text-center' style={h3TextStyle}>Where every flight</h3>
                <h3 className='sm:text-center lg:text-left md:text-center' style={h3TextStyle}>is a majestic adventure</h3>
            </div>
        </div>
    )
}
export default HeroTitle;
