import flightBackground from "../../../assets/images/home-input-flight.jpg";
import HeroTitle from "../Title/HeroTitle";
import SearchInputFlight from "../SearchInputFlight/SearchInputFlight";
const divStyle = {
    backgroundImage: `url(${flightBackground})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: '100%',
    height: '100%'
};

const HeroWrapper = () => {
    return(
        <div className={"flex flex-col px-6 pb-24 pt-36"} style={divStyle}>
            <HeroTitle />
            <SearchInputFlight />
        </div>
    )
}
export default HeroWrapper;
