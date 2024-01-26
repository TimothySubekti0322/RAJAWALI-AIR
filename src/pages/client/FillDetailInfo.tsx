import HeaderLayout from "../../components/client/headerLayout";
import BodyLayout from "../../components/client/bodyLayout";
import FlightCard from "../../components/client/fillDetailInformation/FlightCard";
import ContactDetailForm, {
  ContactDetailInput,
} from "../../components/client/fillDetailInformation/ContactDetailForm";
import { useParams } from "react-router-dom";
import { useState } from "react";
import SwipeableEdgeDrawer from "../../components/client/passengerDetails/passengerDetails.tsx";
import HeaderFill from "../../components/client/headerFill.tsx";

const FillDetailInfo = () => {
  const { id } = useParams();
  const [contactDetail, setContactDetail] = useState<ContactDetailInput>({
    title: "",
    email: "",
    fullName: "",
    phoneNumber: "",
  });

  // ===== DUMMY =====
  const dataPassenger = {
    classFlight: "First Class",
    adultTotal: 2,
    childTotal: 0,
    infantTotal: 1,
  };

  const onNext = () => {
    console.log(contactDetail);
    window.location.href = "/travelAddOns";
  };

  const passengerDetails = () => {
    const passengers = [];
    let index = 0;

    if (dataPassenger.adultTotal > 0) {
      for (let i = 0; i < dataPassenger.adultTotal; i++) {
        passengers.push(
          <SwipeableEdgeDrawer index={index} ageGroup={"Adult"} />
        );
        index++;
      }
    }
    if (dataPassenger.childTotal > 0) {
      for (let i = 0; i < dataPassenger.childTotal; i++) {
        passengers.push(
          <SwipeableEdgeDrawer index={index} ageGroup={"Child"} />
        );
        index++;
      }
    }
    if (dataPassenger.infantTotal > 0) {
      for (let i = 0; i < dataPassenger.infantTotal; i++) {
        passengers.push(
          <SwipeableEdgeDrawer index={index} ageGroup={"Infant"} />
        );
        index++;
      }
    }

    return passengers;
  };

  return (
    <section
      className={'className="w-full min-h-screen bg-[#f7f7f7] relative"'}
    >
      <HeaderLayout>
        <HeaderFill title="Fill Details Information" />
      </HeaderLayout>

      {/*Body*/}
      <BodyLayout paddingBottomSize="1rem">
        <div className={"px-4 pt-6 pb-0"}>
          <FlightCard id={id ?? "1"} />
          <ContactDetailForm
            contactDetail={contactDetail}
            setContactDetail={setContactDetail}
          />
          <div>
            <p className={"text-sm font-bold text-black mb-2"}>
              Passenger Details
            </p>
            {passengerDetails()}
          </div>
          <button
            onClick={onNext}
            className="btn btn-block bg-[#1E90FF] text-white hover:bg-blue-700"
          >
            Next
          </button>
        </div>
      </BodyLayout>
    </section>
  );
};
export default FillDetailInfo;
