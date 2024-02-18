import flightBackground from "../../../../assets/images/home-input-flight.jpg";
import HeroTitle from "../Title/HeroTitle";
import SearchInputFlight from "../SearchInputFlight/SearchInputFlight";
import Navbar from "../../navbar/Navbar";
const divStyle = {
    backgroundImage: `url(${flightBackground})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: '100%',
    height: '100%'
};

const HeroWrapper = () => {
    return (
        <div style={divStyle} className={"px-6"}>
            <Navbar />
            <div className={"flex flex-col pb-24 pt-36"}>
                <HeroTitle />
                <SearchInputFlight />
            </div>
        </div>
    )
}
export default HeroWrapper;
