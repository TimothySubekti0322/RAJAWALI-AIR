import rajawaliIcon from "../../../assets/images/RajawaliAirPNG2.png";
import DetailComponent from "./DetailComponent";
import luggageIcon from "../../../assets/images/luggage.png";
import foodIcon from "../../../assets/images/fluent_food-24-regular.png";
import noWifiIcon from "../../../assets/images/wifi-slash.png";
import noBattery from "../../../assets/images/Battery Slash.png";
const FlightDetailCard = () => {
    return(
        <div className={'container my-4 border border-1 border-slate-400 rounded-md p-3 pb-0'}>
            <div className={'flex gap-3 rounded-md'}>
                <img src={rajawaliIcon} alt={'rajawali'} className={'w-[32px] h-[24px]'}/>
                <div>
                    <p className={'text-xs font-medium text-black'}><b>Rajawali Air</b></p>
                    <p className={'text-slate-500 text-xs font-medium'}>RW-225 | Economy </p>
                </div>
            </div>
            <div className={'my-4 flex flex-col gap-2'}>
                <DetailComponent icon={luggageIcon} text={'Cabin baggage 7kg'}  />
                <DetailComponent icon={foodIcon} text={'In-flight meals'}  />
                <DetailComponent icon={noWifiIcon} text={'WiFi not available'}  />
                <DetailComponent icon={noBattery} text={'Power/USB port not available'}  />
            </div>
        </div>
    )
}
export default FlightDetailCard;
