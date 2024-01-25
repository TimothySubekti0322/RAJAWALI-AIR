import HeaderLayout from "../../components/client/headerLayout";
import {FaArrowLeft} from "react-icons/fa";
import BodyLayout from "../../components/client/bodyLayout";
import FlightCard from "../../components/client/fillDetailInformation/FlightCard";
import ContactDetailForm from "../../components/client/fillDetailInformation/ContactDetailForm";

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
            <BodyLayout paddingBottomSize="5rem">
                <div className={'px-4 py-6'}>
                    <FlightCard />
                    <ContactDetailForm />
                </div>
            </BodyLayout>
        </section>
    )
}
export default FillDetailInfo;
