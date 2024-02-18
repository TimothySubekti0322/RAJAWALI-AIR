import HeaderLayout from "../../components/client/headerLayout";
import BodyLayout from "../../components/client/bodyLayout";
import FlightCard from "../../components/client/fillDetailInformation/FlightCard";
import ContactDetailForm, {
  ContactDetailInput,
} from "../../components/client/fillDetailInformation/ContactDetailForm";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import SwipeableEdgeDrawer from "../../components/client/passengerDetails/passengerDetails.tsx";
import HeaderFill from "../../components/client/headerFill.tsx";
import saveToLocalStorage from "../../helpers/SaveToLocalStorage.ts";

interface IPassenger {
  seatId: string;
  genderType: string;
  ageType: string;
  fullname: string;
  idCardNumber: string;
}

const FillDetailInfo = () => {
  const navigate = useNavigate();
  const id = JSON.parse(localStorage.getItem("flightId") as string);
  const [contactDetail, setContactDetail] = useState<ContactDetailInput>({
    genderType: "",
    email: "",
    fullname: "",
    phoneNumber: "",
  });
  const [passengers, setPassengers] = useState<IPassenger[]>([]);
  const [passengerList, setPassengerList] = useState([
    {
      id: 0,
      genderType: "",
      fullname: "",
    },
  ]);
  const [isSameContactDetail, setIsSameContactDetail] =
    useState<boolean>(false);

  useEffect(() => {
    // Mendapatkan data dari local storage
    const storedPassengers = localStorage.getItem("passengers");
    const genderTypeLs = localStorage.getItem("genderType");
    const fullNameLs = localStorage.getItem("fullName");
    const emailLs = localStorage.getItem("email");
    const phoneNumberLs = localStorage.getItem("phoneNumber");
    // console.log(storedPassengers);
    if (storedPassengers) {
      const passengerS: IPassenger[] = JSON.parse(storedPassengers);

      setPassengers(passengerS);
    }

    if (genderTypeLs && fullNameLs && phoneNumberLs && emailLs) {
      setContactDetail({
        ...contactDetail,
        genderType: JSON.parse(genderTypeLs),
        phoneNumber: JSON.parse(phoneNumberLs),
        fullname: JSON.parse(fullNameLs),
        email: emailLs as string,
      });
    }
  }, []);

  const onNext = () => {
    saveInformationToLocalStorage();
    navigate("/travelAddOns");
  };

  const handleSavePassenger = (
    index: number,
    honorofic: string,
    name: string
  ) => {
    const passengerIndex = passengerList.findIndex(
      (passenger) => passenger.id === index
    );

    if (passengerIndex !== -1) {
      // Jika id sudah ada, update nilai penumpang
      const updatedPassengerList = [...passengerList];
      updatedPassengerList[passengerIndex] = {
        ...updatedPassengerList[passengerIndex],
        genderType: honorofic,
        fullname: name,
      };
      setPassengerList(updatedPassengerList);
    } else {
      // Jika id tidak ditemukan, tambahkan penumpang baru
      setPassengerList([
        ...passengerList,
        {
          id: index,
          genderType: honorofic,
          fullname: name,
        },
      ]);
    }
  };

  const saveInformationToLocalStorage = () => {
    saveToLocalStorage("genderType", contactDetail.genderType);
    saveToLocalStorage("fullName", contactDetail.fullname);
    saveToLocalStorage("email", contactDetail.email);
    saveToLocalStorage("phoneNumber", contactDetail.phoneNumber);

    // Jika isSameContactDetail bernilai true, simpan informasi passenger sama dengan contact detail
    if (isSameContactDetail) {
      passengerList[0] = {
        id: 0,
        genderType: contactDetail.genderType,
        fullname: contactDetail.fullname,
      };
    }

    // Update passengers in Local Storage after filled the information
    const updatePassengers = [...passengers];
    passengerList.forEach((p, index) => {
      updatePassengers[index] = {
        ...updatePassengers[index],
        genderType: p.genderType,
        fullname: p.fullname,
      };
    });
    saveToLocalStorage("passengers", updatePassengers);
  };

  const passengerDetails = () => {
    const result: React.ReactNode[] = [];

    passengers.map((p, index) => {
      result.push(
        <SwipeableEdgeDrawer
          handleSaveButton={handleSavePassenger}
          index={index}
          ageGroup={p.ageType}
          isSameContactDetail={isSameContactDetail}
          setIsSameContactDetail={setIsSameContactDetail}
        />
      );
    });

    return result;
  };

  const disabledButtonValidation = (): boolean => {
    return (
      !contactDetail.fullname ||
      !contactDetail.genderType ||
      !contactDetail.phoneNumber ||
      !contactDetail.email
    );
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
            disabled={disabledButtonValidation()}
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
