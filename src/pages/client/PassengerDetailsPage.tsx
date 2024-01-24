import HeaderLayout from "../../components/client/headerLayout";
import HeaderFill from "../../components/client/flightList/headerFill";
import BodyLayout from "../../components/client/bodyLayout";
import PassengerDetails from "../../components/client/passengerDetails/passengerDetails";

const PassengerDetailsPage = () => {
  return (
    <section className="w-full min-h-screen bg-[#f7f7f7] relative text-white">
      <HeaderLayout>
        <HeaderFill
          departure="Yogyakarta"
          departureCode="YIA"
          arrival="Balikpapan"
          arrivalCode="BPN"
          date="Thu, 25 Jan"
          passenger={2}
          seatClass="Economy"
        />
      </HeaderLayout>
      <BodyLayout paddingBottomSize="0">
        <div className="flex items-center justify-center w-full ">
          <PassengerDetails />
        </div>
      </BodyLayout>
    </section>
  );
};

export default PassengerDetailsPage;
