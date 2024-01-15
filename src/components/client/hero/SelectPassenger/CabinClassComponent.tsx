import React, {useState} from "react";

interface CabinClassComponentProps {
    text: string,
    isSelected: boolean,
    onClick: () => void
}

const cabinClassStyle: React.CSSProperties = {
    // borderLeft: "1px solid blue",
    padding:"10px",
    color: "#757575"
}
const CabinClassComponent = ({text, isSelected, onClick}: CabinClassComponentProps) => {

    const [isHovered, setIsHovered] = useState<boolean>(false);
    const handleHover = () => {
        setIsHovered(true);
    };
    const handleLeaveHover = () => {
        setIsHovered(false);
    };


    const mergeStyle = {
        ...cabinClassStyle,
        background: isHovered || isSelected ? "#D2F1FF" : "none",
        color: isHovered || isSelected ? "#1E90FF" : "#757575",
        cursor: isHovered ? "pointer" : "none"

    };

    return(
        <div style={mergeStyle} onMouseEnter={handleHover} onMouseLeave={handleLeaveHover} onClick={onClick}>
            {text}
        </div>
    )
}
export default CabinClassComponent;
