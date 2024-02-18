import HeaderLayout from "../../components/client/headerLayout.tsx";
import HeaderFill from "../../components/client/headerFill.tsx";
import BodyLayout from "../../components/client/bodyLayout.tsx";
import { useNavigate } from "react-router-dom";
import PendingComponent from "../../components/client/purchaseProcessing/PendingComponent.tsx";
import { MaximumWordLength } from "../../utils/MaximumWordLength.ts";

interface IPendingPurchase {
  reservationData: any;
  // setReservationData: React.Dispatch<React.ChangeEvent<any>>
}

const PendingPurchase = ({ reservationData }: IPendingPurchase) => {
  const navigate = useNavigate();
  return (
    <section className="w-full min-h-screen bg-[#f7f7f7] relative text-white">
      <HeaderLayout>
        <HeaderFill
          title={`Order ID : ${MaximumWordLength(reservationData?.id, 8)}`}
        />
      </HeaderLayout>
      <BodyLayout paddingBottomSize="50px">
        <div className={"w-full py-10 px-5"}>
          <PendingComponent reservationData={reservationData} />
          <button
            className={
              "btn btn-side w-full bg-[#1E90FF] text-white hover:bg-blue-700 mt-20"
            }
            onClick={() => {
              const userId = localStorage.getItem("userId") || null;
              const token = localStorage.getItem("token") || null;
              const fullName = localStorage.getItem("fullName") || null;
              localStorage.clear();
              localStorage.setItem("userId", userId as string);
              localStorage.setItem("token", token as string);
              localStorage.setItem("fullName", fullName as string);
              navigate("/");
            }}
          >
            BACK TO HOME
          </button>
        </div>
      </BodyLayout>
    </section>
  );
};
export default PendingPurchase;
