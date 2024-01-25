import HeaderLayout from "../../components/client/headerLayout";
import {FaArrowLeft} from "react-icons/fa";
import BodyLayout from "../../components/client/bodyLayout";
import FlightCard from "../../components/client/fillDetailInformation/FlightCard";
import ContactDetailForm from "../../components/client/fillDetailInformation/ContactDetailForm";
import PassengerDetail from "../../components/client/fillDetailInformation/PassengerDetail.tsx";

const FillDetailInfo = () => {
    return(
        <section className={'className="w-full min-h-screen bg-[#f7f7f7] relative"'}>
            <HeaderLayout>
                <div>
                    <button
                        onClick={() => {
                            window.location.href = "/";
                        }}
                    >
                        <FaArrowLeft className="text-xl text-white" />
                    </button>
                    <span className={'text-white font-bold text-base ml-16'}>Fill Details Information</span>
                </div>
            </HeaderLayout>

            {/*Body*/}
            <BodyLayout paddingBottomSize="1rem">
                <div className={'px-4 pt-6 pb-0'}>
                    <FlightCard />
                    <ContactDetailForm />
                    <div>
                        <p className={'text-sm font-bold text-black mb-2'}>Passenger Details</p>
                        <PassengerDetail index={0} />
                        <PassengerDetail index={1} />
                    </div>
                    <button className="btn btn-block bg-[#1E90FF] text-white hover:bg-blue-700">Next</button>
                </div>
            </BodyLayout>


        </section>
    )
}
export default FillDetailInfo;
